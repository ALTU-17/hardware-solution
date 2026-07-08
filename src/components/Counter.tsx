"use client";

import { useEffect, useState } from "react";

interface CounterProps {
  end: number;
  suffix?: string;
}

export default function Counter({ end, suffix = "" }: CounterProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let current = 0;

    const increment = Math.ceil(end / 80);

    const timer = setInterval(() => {
      current += increment;

      if (current >= end) {
        current = end;
        clearInterval(timer);
      }

      setCount(current);
    }, 20);

    return () => clearInterval(timer);
  }, [end]);

  return (
    <h2 className="text-5xl font-bold text-[#C89B3C]">
      {count}
      {suffix}
    </h2>
  );
}