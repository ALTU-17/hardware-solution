// components/FilterTabs.tsx
"use client";

import { motion } from "framer-motion";

interface Props {
  active: string;
  onChange: (value: string) => void;
}

const tabs = ["All", "Glass", "Door", "Shower"];

export default function FilterTabs({ active, onChange }: Props) {
  return (
    <div className="flex justify-center gap-3 md:gap-6 flex-wrap mb-16">
      {tabs.map((tab) => (
        <motion.button
          key={tab}
          onClick={() => onChange(tab)}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.95 }}
          className={`relative px-6 md:px-9 py-3 md:py-3.5 rounded-2xl transition-all duration-300 text-sm md:text-base font-medium backdrop-blur-sm
            ${
              active === tab
                ? "bg-gradient-to-r from-[#C89B3C] to-[#E8C97A] text-black shadow-2xl shadow-[#C89B3C]/30"
                : "bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white border border-white/10 hover:border-white/20"
            }
          `}
        >
          <span className="relative z-10 flex items-center gap-3">
            {active === tab && (
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="w-1.5 h-1.5 rounded-full bg-black"
              />
            )}
            {tab}
            {active === tab && (
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="w-1.5 h-1.5 rounded-full bg-black"
              />
            )}
          </span>
        </motion.button>
      ))}
    </div>
  );
}