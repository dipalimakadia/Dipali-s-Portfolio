import { experiences } from "./experiences";
import { projects } from "./projects";
import { techs } from "./techs";

// Skills a job description might ask for. A skill counts as "mine" only if it
// actually appears in the portfolio content below, so the matcher stays honest.
export const SKILLS = [
  { name: "React", re: /\breact(\.?js)?\b/i },
  { name: "Redux", re: /\bredux\b/i },
  { name: "TypeScript", re: /\btypescript\b/i },
  { name: "JavaScript", re: /\bjavascript\b|\bes6\b|\becmascript\b/i },
  { name: "HTML/CSS", re: /\bhtml5?\b|\bcss3?\b/i },
  { name: "Tailwind", re: /\btailwind/i },
  { name: "Sass/SCSS", re: /\bsass\b|\bscss\b/i },
  { name: "Bootstrap", re: /\bbootstrap\b/i },
  { name: "Material UI", re: /\bmaterial[\s-]?ui\b|\bmui\b/i },
  { name: "Angular", re: /\bangular(js)?\b/i },
  { name: "Vue", re: /\bvue(\.?js)?\b/i },
  { name: "jQuery", re: /\bjquery\b/i },
  { name: "Node.js", re: /\bnode(\.?js)?\b/i },
  { name: "Express", re: /\bexpress(\.?js)?\b/i },
  { name: "Python", re: /\bpython\b/i },
  { name: "FastAPI", re: /\bfast\s?api\b/i },
  { name: "Java", re: /\bjava\b(?!\s?script)/i },
  { name: "C#/.NET", re: /\bc#|\.net\b/i },
  { name: "C/C++", re: /\bc\/c\+\+|\bc\+\+/i },
  { name: "SQL", re: /\bsql\b|\bsql server\b/i },
  { name: "MongoDB", re: /\bmongo(db)?\b/i },
  { name: "Firebase", re: /\bfirebase\b/i },
  { name: "AWS", re: /\baws\b|\bamazon web services\b/i },
  { name: "Google Cloud", re: /\bgoogle cloud\b|\bgcp\b|\bvertex ai\b/i },
  { name: "Docker", re: /\bdocker\b/i },
  { name: "Git", re: /\bgit(hub)?\b/i },
  { name: "Jira", re: /\bjira\b/i },
  { name: "REST APIs", re: /\brest(ful)?\b|\bapis?\b/i },
  { name: "OAuth/JWT", re: /\boauth\b|\bjwt\b|\badfs\b/i },
  { name: "Testing (Jest/RTL)", re: /\bjest\b|\btesting library\b|\bunit test/i },
  { name: "Data Visualization", re: /\bd3\b|\bhighcharts\b|\bvisx\b|\bvisuali[sz]ation/i },
  { name: "LLM / Generative AI", re: /\bllm\b|\bgenerative ai\b|\bgemini\b|\bopenai\b|\bchatgpt\b|\bprompt engineering\b|\bgenai\b/i },
  { name: "LangChain", re: /\blangchain\b/i },
  { name: "Machine Learning", re: /\bmachine learning\b|\bml\b/i },
  { name: "Agile/Scrum", re: /\bagile\b|\bscrum\b/i },
  { name: "Accessibility", re: /\baccessibility\b|\ba11y\b|\bwcag\b/i },
  { name: "Leadership", re: /\blead(ing|ership)?\b|\bled\b|\bmentor/i },
  // Not (yet) in the portfolio - shown honestly as gaps when a job asks for them.
  { name: "GraphQL", re: /\bgraphql\b/i },
  { name: "Next.js", re: /\bnext(\.?js)?\b/i },
  { name: "Kubernetes", re: /\bkubernetes\b|\bk8s\b/i },
  { name: "Terraform", re: /\bterraform\b/i },
  { name: "PostgreSQL", re: /\bpostgres(ql)?\b/i },
  { name: "Go", re: /\bgolang\b/i },
  { name: "Rust", re: /\brust\b/i },
  { name: "Kotlin/Swift", re: /\bkotlin\b|\bswift\b/i },
];

// Extra skills from the profile summary used by the chatbot.
const EXTRA =
  "TypeScript SQL Server AWS Docker Jest React Testing Library RESTful API Jenkins Figma Linux " +
  "Agile Scrum Web Accessibility Material UI Langchain OpenAI Vertex AI Gemini Copilot Generative AI LLM";

const roleText = (e) => `${e.position} ${e.company} ${e.details} ${e.projectdetail1 || ""}`;

const corpus = [
  ...experiences.map(roleText),
  ...projects.map((p) => `${p.projectname} ${p.description}`),
  ...techs.map((t) => t.title),
  EXTRA,
].join("\n");

export const PROFILE_SKILLS = new Set(SKILLS.filter((s) => s.re.test(corpus)).map((s) => s.name));

// Where a skill was used: company names whose role text mentions it.
export const whereUsed = (skill) => {
  const s = SKILLS.find((x) => x.name === skill);
  if (!s) return [];
  return experiences.filter((e) => s.re.test(roleText(e))).map((e) => e.company);
};

export function analyze(jd) {
  const wanted = SKILLS.filter((s) => s.re.test(jd));
  const matched = wanted.filter((s) => PROFILE_SKILLS.has(s.name)).map((s) => s.name);
  const gaps = wanted.filter((s) => !PROFILE_SKILLS.has(s.name)).map((s) => s.name);
  const score = wanted.length ? Math.round((matched.length / wanted.length) * 100) : 0;
  return { wanted: wanted.length, matched, gaps, score };
}
