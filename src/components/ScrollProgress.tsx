"use client";

import { useEffect, useState } from "react";

export default function ScrollProgress() {

  const [width, setWidth] = useState(0);

  useEffect(() => {

    const scroll = () => {

      const total =
        document.documentElement.scrollHeight -
        window.innerHeight;

      const progress = (window.scrollY / total) * 100;

      setWidth(progress);

    };

    window.addEventListener("scroll", scroll);

    return () => window.removeEventListener("scroll", scroll);

  }, []);

  return (
    <div
      className="fixed top-0 left-0 h-1 bg-[#C89B3C] z-[999]"
      style={{ width: `${width}%` }}
    />
  );
}