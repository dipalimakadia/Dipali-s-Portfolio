import React, { useEffect, useRef } from "react";

// Scroll progress bar, plus a gentle 3D tilt on every .lift card (event delegation).
const Backdrop = () => {
  const bar = useRef(null);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const fine = window.matchMedia("(pointer: fine)").matches;

    const move = (e) => {
      if (reduce || !fine) return;
      const card = e.target.closest?.(".lift");
      if (!card) return;
      const r = card.getBoundingClientRect();
      const rx = (0.5 - (e.clientY - r.top) / r.height) * 4;
      const ry = ((e.clientX - r.left) / r.width - 0.5) * 4;
      card.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-3px)`;
    };
    const leave = (e) => {
      const card = e.target.closest?.(".lift");
      if (card && !card.contains(e.relatedTarget)) card.style.transform = "";
    };
    const scroll = () => {
      const h = document.documentElement;
      const p = h.scrollTop / Math.max(1, h.scrollHeight - h.clientHeight);
      if (bar.current) bar.current.style.transform = `scaleX(${p})`;
    };
    window.addEventListener("pointermove", move);
    document.addEventListener("pointerout", leave);
    window.addEventListener("scroll", scroll, { passive: true });
    scroll();
    return () => {
      window.removeEventListener("pointermove", move);
      document.removeEventListener("pointerout", leave);
      window.removeEventListener("scroll", scroll);
    };
  }, []);

  return (
    <div
      ref={bar}
      className="fixed top-0 left-0 h-[3px] w-full z-[60] origin-left"
      style={{ transform: "scaleX(0)", background: "var(--accent)" }}
    />
  );
};

export default Backdrop;
