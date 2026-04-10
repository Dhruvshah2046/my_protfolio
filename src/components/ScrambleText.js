"use client";

import { useState, useEffect, useCallback } from "react";

const CHARS = "!<>-_\\/[]{}—=+*^?#________";

export default function ScrambleText({ text, speed = 40 }) {
  const [displayText, setDisplayText] = useState(text);
  const [isScrambling, setIsScrambling] = useState(false);

  const scramble = useCallback((targetText) => {
    let iteration = 0;
    const interval = setInterval(() => {
      setDisplayText((prev) => 
        targetText
          .split("")
          .map((char, index) => {
            if (index < iteration) {
              return targetText[index];
            }
            return CHARS[Math.floor(Math.random() * CHARS.length)];
          })
          .join("")
      );

      if (iteration >= targetText.length) {
        clearInterval(interval);
        setIsScrambling(false);
      }

      iteration += 1 / 3;
    }, speed);

    return () => clearInterval(interval);
  }, [speed]);

  useEffect(() => {
    setIsScrambling(true);
    const cleanup = scramble(text);
    return cleanup;
  }, [text, scramble]);

  return (
    <span className="inline-block min-w-[1ch] transition-all duration-300">
      {displayText}
    </span>
  );
}
