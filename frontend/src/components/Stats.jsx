import React, { useEffect, useRef, useState } from "react";
import { experiences } from "../data/experiences";
import { techs } from "../data/techs";

// Counts up to `to` once the element scrolls into view.
const Counter = ({ to, suffix = "" }) => {
  const ref = useRef(null);
  const [n, setN] = useState(0);

  useEffect(() => {
    const el = ref.current;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || !("IntersectionObserver" in window)) {
      setN(to);
      return;
    }
    let raf;
    const io = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      io.disconnect();
      const start = performance.now();
      const run = (t) => {
        const p = Math.min(1, (t - start) / 1400);
        setN(Math.round(to * (1 - Math.pow(1 - p, 3))));
        if (p < 1) raf = requestAnimationFrame(run);
      };
      raf = requestAnimationFrame(run);
    });
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [to]);

  return (
    <span ref={ref}>
      {n}
      {suffix}
    </span>
  );
};

const stats = [
  { label: "Years of experience", to: 5, suffix: "+" },
  { label: "Roles & internships", to: experiences.length },
  { label: "Degrees", to: 3 },
  { label: "Technologies", to: techs.length, suffix: "+" },
];

const Stats = () => (
  <div className="grid grid-cols-2 md:grid-cols-4" style={{ borderTop: "1px solid var(--border)" }}>
    {stats.map(({ label, to, suffix }, i) => (
      <div
        key={label}
        className={`py-6 px-2 md:px-6 md:border-l md:first:border-l-0 ${i % 2 ? "border-l" : ""}`}
        style={{ borderColor: "var(--border)" }}
      >
        <p className="font-display text-4xl md:text-5xl font-medium">
          <Counter to={to} suffix={suffix} />
        </p>
        <p className="eyebrow mt-2 !text-[10px] md:!text-xs">{label}</p>
      </div>
    ))}
  </div>
);

export default Stats;
