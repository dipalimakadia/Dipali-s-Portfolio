import React, { useEffect, useRef } from "react";

// Fades/slides children in once they scroll into view.
const Reveal = ({ children, delay = 0, className = "", as: Tag = "div" }) => {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let timer;
    const show = () => {
      el.classList.add("in");
      // After the entrance finishes, switch to the snappy transition used by hover/tilt.
      timer = setTimeout(() => el.classList.add("done"), 900 + delay);
    };
    if (!("IntersectionObserver" in window)) {
      show();
      return () => clearTimeout(timer);
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          show();
          io.disconnect();
        }
      },
      { threshold: 0.12 }
    );
    io.observe(el);
    return () => {
      io.disconnect();
      clearTimeout(timer);
    };
  }, [delay]);

  return (
    <Tag ref={ref} className={`reveal ${className}`} style={{ "--d": `${delay}ms` }}>
      {children}
    </Tag>
  );
};

export default Reveal;
