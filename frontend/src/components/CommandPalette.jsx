import React, { useEffect, useMemo, useRef, useState } from "react";
import { scroller } from "react-scroll";
import { FiSearch, FiCornerDownLeft } from "react-icons/fi";
import DipaliResume from "../components/Dipali_Makadia_Resume_SDE.pdf";

const go = (name) => () =>
  scroller.scrollTo(name, { smooth: true, duration: 500, offset: -90 });
const open = (url) => () => window.open(url, "_blank", "noopener,noreferrer");

const COMMANDS = [
  { group: "Go to", label: "Home", run: go("home") },
  { group: "Go to", label: "About", run: go("about") },
  { group: "Go to", label: "Education", run: go("education") },
  { group: "Go to", label: "Experience", run: go("experience") },
  { group: "Go to", label: "Projects", run: go("project") },
  { group: "Go to", label: "Technologies", run: go("technologies") },
  { group: "Go to", label: "Contact", run: go("contact") },
  { group: "Do", label: "Chat with SparkaraNeo", run: () => window.dispatchEvent(new Event("open-chat")) },
  { group: "Do", label: "Change accent color", run: () => window.dispatchEvent(new Event("next-accent")) },
  { group: "Do", label: "Toggle dark / light theme", run: () => window.dispatchEvent(new Event("toggle-theme")) },
  { group: "Do", label: "Download resume", run: () => { const a = document.createElement("a"); a.href = DipaliResume; a.download = ""; a.click(); } },
  { group: "Links", label: "Open LinkedIn", run: open("https://www.linkedin.com/in/dipali-makadia/") },
  { group: "Links", label: "Open GitHub", run: open("https://github.com/dipalimakadia") },
];

// Ctrl/Cmd + K command palette.
const CommandPalette = () => {
  const [show, setShow] = useState(false);
  const [q, setQ] = useState("");
  const [idx, setIdx] = useState(0);
  const inputRef = useRef(null);

  const results = useMemo(
    () => COMMANDS.filter((c) => c.label.toLowerCase().includes(q.toLowerCase())),
    [q]
  );

  useEffect(() => {
    const onKey = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setShow((s) => !s);
      } else if (e.key === "Escape") setShow(false);
    };
    const onOpen = () => setShow(true);
    window.addEventListener("keydown", onKey);
    window.addEventListener("open-palette", onOpen);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("open-palette", onOpen);
    };
  }, []);

  useEffect(() => {
    if (show) {
      setQ("");
      setIdx(0);
      setTimeout(() => inputRef.current?.focus(), 30);
    }
  }, [show]);

  useEffect(() => setIdx(0), [q]);

  const exec = (c) => {
    setShow(false);
    setTimeout(c.run, 120);
  };

  const onKeyDown = (e) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setIdx((i) => Math.min(i + 1, results.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setIdx((i) => Math.max(i - 1, 0));
    } else if (e.key === "Enter" && results[idx]) exec(results[idx]);
  };

  if (!show) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-start justify-center pt-[15vh] px-4 backdrop-blur-sm"
      style={{ background: "rgba(20,18,15,.55)" }}
      onClick={() => setShow(false)}
      role="dialog"
      aria-modal="true"
      aria-label="Command palette"
    >
      <div
        className="w-full max-w-xl rounded-2xl overflow-hidden shadow-2xl"
        style={{ background: "var(--bg-soft)", border: "1px solid var(--border)" }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-3 px-4 py-3" style={{ borderBottom: "1px solid var(--border)" }}>
          <FiSearch className="muted" />
          <input
            ref={inputRef}
            value={q}
            onChange={(e) => setQ(e.target.value)}
            onKeyDown={onKeyDown}
            placeholder="Type a command or search…"
            className="flex-1 bg-transparent outline-none"
          />
          <kbd className="chip">esc</kbd>
        </div>
        <ul className="max-h-80 overflow-y-auto p-2">
          {results.length === 0 && <li className="muted px-3 py-6 text-center">No results</li>}
          {results.map((c, i) => (
            <li key={c.label}>
              <button
                onMouseEnter={() => setIdx(i)}
                onClick={() => exec(c)}
                className="w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-left"
                style={{ background: i === idx ? "var(--card-hover)" : "transparent" }}
              >
                <span>
                  <span className="muted text-xs mr-3">{c.group}</span>
                  {c.label}
                </span>
                {i === idx && <FiCornerDownLeft className="muted" />}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CommandPalette;
