import { useState, useRef, useEffect } from "react";
import axios from "axios";
import { FaComments, FaTimes, FaPaperPlane, FaRobot } from "react-icons/fa";

function renderMessage(content) {
  if (!content) return null;

  const format = (text) =>
    text
      .replace(
        /\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g,
        `<a href="$2" target="_blank" rel="noopener noreferrer" class="text-blue-600 underline">$1</a>`,
      )
      .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
      .replace(/\*(.*?)\*/g, "<em>$1</em>");

  return content
    .split("\n")
    .map((line, i) => (
      <p
        key={i}
        className="break-words mb-1"
        dangerouslySetInnerHTML={{ __html: format(line) }}
      />
    ));
}

const emojiMap = {
  education: "🎓",
  career: "💼",
  experience: "🛠️",
  work: "💻",
  projects: "📂",
  hobbies: "🎨",
  travel: "✈️",
  photography: "📸",
  skills: "🧰",
  email: "📧",
  linkedin: "🔗",
  github: "🐱",
  portfolio: "🌐",
  contact: "📱",
  default: "💡",
};

/* Add emoji based on keywords in the answer */
function addEmojiToAnswer(answer) {
  // Ensure answer is always a string
  const safeAnswer =
    typeof answer === "string" ? answer : JSON.stringify(answer ?? "");

  const lowerAnswer = safeAnswer.toLowerCase();

  for (const key in emojiMap) {
    if (lowerAnswer.includes(key)) {
      return `${emojiMap[key]} ${safeAnswer}`;
    }
  }

  return `${emojiMap.default} ${safeAnswer}`;
}


export default function Chatbot() {
  const welcomeMessages = [
    "Light's on! I'm SparkaraNeo 🌟, your portfolio guide. Curious about Dipali’s skills, projects, or experience? Let's explore together!",
    "Glow mode activated! I'm SparkaraNeo 🔥, your glow-stick of guidance. Ready to shine a light on Dipali’s skills, projects, and career journey?",
    "Hi! I’m SparkaraNeo, powered by light, energy, and AI magic ✨. I can help you navigate Dipali’s projects, skills, and achievements!",
    "Greetings, human! SparkaraNeo at your service 💫—here to illuminate Dipali’s portfolio adventure. Ask me anything about her work or experience!",
    "Beam me up! SparkaraNeo reporting for portfolio duty 🚀. Want a tour of Dipali’s work and achievements?",
  ];

  const addFirstMessage = "Server may take a moment to wake up ⏳"

  const [messages, setMessages] = useState([
    {
      role: "bot",
      content:
        welcomeMessages[Math.floor(Math.random() * welcomeMessages.length)] + "\n" + addFirstMessage,
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    }
  ]);

  const [input, setInput] = useState("");
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [connectionStatus, setConnectionStatus] = useState("online");
  const messagesEndRef = useRef(null);

  const quickActions = [
    "Tell me about Dipali",
    "What are her skills?",
    "Relocation",
    "Contact information",
  ];

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
      }, [messages]);

  const sendMessage = async (text = input) => {
    if (!text.trim()) return;

    setMessages((prev) => [
      ...prev,
      {
        role: "user",
        content: text,
        time: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      },
    ]);

    setInput("");
    setLoading(true);

    try {
      const backendURL =
        process.env.NODE_ENV === "production"
          ? "https://dipali-s-portfolio-production.up.railway.app/ask"
          : "http://localhost:5000/ask";

      const res = await axios.post(backendURL, { question: text });

      if (res.data?.status === "offline") {
        setConnectionStatus("offline");
      } else {
        setConnectionStatus("online");
      }
      setMessages((prev) => [
        ...prev,
        {
          role: "bot",
          content:
            res.data?.status === "offline"
              ? res.data.answer
              : addEmojiToAnswer(res.data.answer), 
          time: new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          }),
        },
      ]);
    } catch {
      setConnectionStatus("offline");

      setMessages((prev) => [
        ...prev,
        {
          role: "bot",
          content: "⚠️ Sorry, something went wrong.",
          time: new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          }),
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {!open && (
        <button
          className="w-14 h-14 rounded-full bg-slate-700 text-white flex items-center justify-center shadow-lg"
          onClick={() => setOpen(true)}
        >
          <FaComments size={26} />
        </button>
      )}

      {open && (
        <div className="w-96 max-h-[80vh] bg-white rounded-xl shadow-xl flex flex-col overflow-hidden">
          {/* Header */}
          <div className="bg-slate-700 text-white p-4 flex justify-between items-center flex-shrink-0">
            <div>
              <div className="font-semibold text-lg">SparkaraNeo</div>
              <div className="text-sm flex items-center gap-2">
                <span
                  className={`w-2 h-2 rounded-full ${
                    connectionStatus === "online"
                      ? "bg-green-400"
                      : "bg-red-500"
                  }`}
                />
                {connectionStatus === "online" ? "Online" : "Offline"}
              </div>
            </div>
            <button onClick={() => setOpen(false)}>
              <FaTimes size={18} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto overflow-x-hidden p-4 space-y-4 bg-gray-50">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex gap-3 ${
                  msg.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                {msg.role === "bot" && (
                  <div className="w-8 h-8 bg-slate-700 text-white rounded-full flex items-center justify-center flex-shrink-0">
                    <FaRobot size={14} />
                  </div>
                )}

                <div className="max-w-[80%]">
                  <div
                    className={`p-3 rounded-xl break-words ${
                      msg.role === "bot"
                        ? "bg-gray-100 text-gray-900"
                        : "bg-slate-700 text-white"
                    }`}
                  >
                    {msg.role === "bot"
                      ? renderMessage(msg.content)
                      : msg.content}
                  </div>
                  <div className="text-xs text-gray-400 mt-1">{msg.time}</div>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Actions — on landing */}
          {messages.length === 1 && (
            <div className="p-3 flex flex-wrap gap-2 border-t">
              {quickActions.map((q) => (
                <button
                  key={q}
                  onClick={() => sendMessage(q)}
                  className="px-3 py-1 border border-slate-700 text-slate-700 rounded-full text-sm hover:bg-slate-700 hover:text-white transition"
                >
                  {q}
                </button>
              ))}
            </div>
          )}

          {/* Input */}
          <div className="p-3 flex items-center gap-2 border-t flex-shrink-0">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              placeholder="Type a message..."
              className="flex-1 px-4 py-2 rounded-full border focus:outline-none"
              disabled={loading}
            />
            <button
              onClick={() => sendMessage()}
              disabled={!input.trim() || loading}
              className="w-10 h-10 rounded-full bg-slate-700 text-white flex items-center justify-center disabled:opacity-40"
            >
              <FaPaperPlane size={14} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
