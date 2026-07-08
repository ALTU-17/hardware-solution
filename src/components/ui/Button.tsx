"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import { ReactNode } from "react";

interface Props extends Omit<HTMLMotionProps<"button">, "children" | "ref"> {
  children: ReactNode;
  variant?: "gold" | "outline";
}

export default function Button({
  children,
  variant = "gold",
  className = "",
  ...props
}: Props) {
  const styles =
    variant === "gold"
      ? "bg-[#C89B3C] text-black hover:bg-[#E4C878]"
      : "border border-white text-white hover:border-[#C89B3C]";

  return (
    <motion.button
      whileHover={{
        scale: 1.04,
      }}
      whileTap={{
        scale: 0.97,
      }}
      className={`inline-flex items-center justify-center relative overflow-hidden rounded-full group px-8 py-4 text-base font-bold transition-all duration-300 md:text-lg ${styles} ${className}`.trim()}
      {...props}
    >
      {/* 1. Background hover overlay (Bottom layer) */}
      <span className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition duration-500"/>
      
      {/* 2. Text/Icon Content wrapper (Top layer - children nested inside) */}
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
      </span>
      
    </motion.button>
  );
}