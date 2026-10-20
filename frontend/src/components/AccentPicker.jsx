import React, { useEffect, useState } from "react";

// Swatches show the light-theme colour of each accent.
export const ACCENTS = [
  { id: "rose", label: "Rose", color: "#b0305f" },
  { id: "forest", label: "Forest", color: "#2f6f5e" },
  { id: "plum", label: "Plum", color: "#8c3a73" },
  { id: "graphite", label: "Graphite", color: "#1c1915" },
];

const apply = (id) => {
  document.documentElement.setAttribute("data-accent", id);
  localStorage.setItem("accent", id);
};

const AccentPicker = ({ className = "" }) => {
  const [current, setCurrent] = useState(() => localStorage.getItem("accent") || "rose");

  useEffect(() => {
    apply(current);
  }, [current]);

  useEffect(() => {
    const next = () =>
      setCurrent((c) => ACCENTS[(ACCENTS.findIndex((a) => a.id === c) + 1) % ACCENTS.length].id);
    window.addEventListener("next-accent", next);
    return () => window.removeEventListener("next-accent", next);
  }, []);

  return (
    <div className={`flex items-center gap-2 ${className}`} role="group" aria-label="Accent color">
      {ACCENTS.map(({ id, label, color }) => (
        <button
          key={id}
          onClick={() => setCurrent(id)}
          aria-label={`${label} accent`}
          aria-pressed={current === id}
          title={label}
          className="w-5 h-5 rounded-full transition-transform hover:scale-125"
          style={{
            background: color,
            boxShadow: current === id ? "0 0 0 2px var(--bg), 0 0 0 4px var(--fg)" : "inset 0 0 0 1px var(--muted)",
          }}
        />
      ))}
    </div>
  );
};

export default AccentPicker;
