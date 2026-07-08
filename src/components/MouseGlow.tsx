"use client";

import { useEffect, useState } from "react";

export default function MouseGlow() {

  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {

    const move = (e: MouseEvent) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", move);

    return () => window.removeEventListener("mousemove", move);

  }, []);

  return (
    <div
      className="fixed pointer-events-none z-0"
      style={{
        left: position.x - 150,
        top: position.y - 150,
        width: 300,
        height: 300,
        borderRadius: "50%",
        background:
          "radial-gradient(circle, rgba(200,155,60,.25), transparent 70%)",
        transition: "all .08s linear",
      }}
    />
  );
}