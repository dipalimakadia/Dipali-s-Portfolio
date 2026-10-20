import React, { useEffect, useState } from "react";

// Types and deletes through a list of phrases. Static first phrase when motion is reduced.
const TypeWriter = ({ words, className = "" }) => {
  const [text, setText] = useState("");
  const reduce =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  useEffect(() => {
    if (reduce) return;
    let w = 0;
    let i = 0;
    let deleting = false;
    let timer;
    const tick = () => {
      const word = words[w];
      i += deleting ? -1 : 1;
      setText(word.slice(0, i));
      let delay = deleting ? 35 : 75;
      if (!deleting && i === word.length) {
        deleting = true;
        delay = 1400;
      } else if (deleting && i === 0) {
        deleting = false;
        w = (w + 1) % words.length;
        delay = 350;
      }
      timer = setTimeout(tick, delay);
    };
    timer = setTimeout(tick, 600);
    return () => clearTimeout(timer);
  }, [words, reduce]);

  return (
    <span className={`${reduce ? "" : "caret"} ${className}`} aria-label={words.join(", ")}>
      {reduce ? words[0] : text}
    </span>
  );
};

export default TypeWriter;
