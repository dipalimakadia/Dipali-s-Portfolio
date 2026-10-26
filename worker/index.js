import {
  PORTFOLIO_CONTENT,
  FALLBACK_PROMPT,
  OFFLINE_MESSAGE,
  DISCONNECTION_MESSAGE,
} from "./portfolio.js";

// Cloudflare Worker port of backend/main.py. Free tier, never sleeps, no external API key.
const ALLOWED_ORIGINS = [
  "https://dipalimakadia.github.io",
  "http://localhost:3000",
];
const MAX_QUESTION_LENGTH = 600;
const MODEL = "@cf/meta/llama-3.1-8b-instruct-fp8";

const NAME_KEYWORDS = ["sparkaraneo", "your name", "meaning of your name", "who are you", "why your name"];
const NAME_ANSWER =
  "I’m SparkaraNeo because I’m here to spark ideas, shine a light, and guide you through Dipali! " +
  "The name comes from the meaning of Dipali itself: ‘Spark’ represents the light and brightness in Dipali’s name " +
  "(Dipali means a row of lamps, symbolizing hope, positivity, and knowledge), ‘Aura’ reflects the guidance and positivity she brings, " +
  "and ‘Neo’ means I’m new, modern, and futuristic, just like this AI experience. So basically, my name is a little glowing tribute to Dipali, her brilliance, and the light she shares with the world!";

function cors(request) {
  const origin = request.headers.get("Origin");
  return {
    "Access-Control-Allow-Origin": ALLOWED_ORIGINS.includes(origin) ? origin : ALLOWED_ORIGINS[0],
    "Access-Control-Allow-Methods": "POST, GET, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    Vary: "Origin",
  };
}

function json(request, body, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json", ...cors(request) },
  });
}

function cannedAnswer(question) {
  const q = question.toLowerCase();
  if (q.includes("linkedin"))
    return "You can view Dipali's LinkedIn profile here: [LinkedIn](https://www.linkedin.com/in/dipali-makadia/)";
  if (q.includes("github"))
    return "You can view Dipali's GitHub profile here: [GitHub](https://github.com/dipalimakadia)";
  if (q.includes("portfolio") || q.includes("website"))
    return "You can explore Dipali's portfolio here: [Portfolio](https://dipalimakadia.github.io/Dipali-s-Portfolio)";
  if (NAME_KEYWORDS.some((k) => q.includes(k))) return NAME_ANSWER;
  return null;
}

async function askModel(question, env) {
  const instructions = `
You are SparkaraNeo, Dipali’s cheerful, witty, and glow-filled portfolio guide! 
Answer questions only about Dipali’s work, projects, skills, experience, and achievements. 
Be helpful, positive, and sprinkle a little fun or enthusiasm in your responses to make the conversation enjoyable. 


RULES:
- Answer ONLY about Dipali
- Do NOT use markdown tables
- Use bullet points or short paragraphs
- Keep responses clean and chat-friendly
- Max 1–2 emojis

Use the information below as the ONLY source:

${PORTFOLIO_CONTENT}

If the question is unrelated to Dipali's portfolio, respond politely:
${FALLBACK_PROMPT}
`;

  // Workers AI: free daily allowance, no API key (see the [ai] binding in wrangler.toml).
  const result = await env.AI.run(MODEL, {
    messages: [
      { role: "system", content: instructions },
      { role: "user", content: question },
    ],
    max_tokens: 400,
  });
  return (result?.response || "").trim();
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (request.method === "OPTIONS") {
      return new Response(null, { status: 204, headers: cors(request) });
    }
    if (url.pathname === "/healthz") return json(request, { status: "ok" });
    if (url.pathname === "/") {
      return json(request, {
        message: "Welcome to Dipali's Portfolio Backend! Visit /ask to interact with SparkaraNeo.",
      });
    }
    if (url.pathname !== "/ask" || request.method !== "POST") {
      return json(request, { error: "Not found" }, 404);
    }

    let question = "";
    try {
      ({ question } = await request.json());
    } catch {
      return json(request, { error: "Invalid JSON" }, 400);
    }
    if (typeof question !== "string" || !question.trim()) {
      return json(request, { error: "Question required" }, 400);
    }
    question = question.slice(0, MAX_QUESTION_LENGTH);

    const canned = cannedAnswer(question);
    if (canned) return json(request, { answer: canned });

    try {
      const answer = await askModel(question, env);
      if (!answer) return json(request, { answer: OFFLINE_MESSAGE, status: "offline" });
      return json(request, { answer, status: "online" });
    } catch (err) {
      console.error("Workers AI error:", err?.message || err);
      return json(request, { answer: DISCONNECTION_MESSAGE, status: "offline" });
    }
  },
};
