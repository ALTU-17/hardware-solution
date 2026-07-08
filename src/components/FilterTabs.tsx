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
    <div className="flex justify-center gap-3 flex-wrap mb-16">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => onChange(tab)}
          className={`relative px-6 md:px-8 py-2.5 md:py-3 rounded-full transition-all duration-300
            ${
              active === tab
                ? "text-black font-semibold"
                : "text-gray-400 hover:text-white bg-transparent"
            }
          `}
        >
          {active === tab && (
            <motion.span
              layoutId="activeTab"
              className="absolute inset-0 bg-[#C89B3C] rounded-full"
              transition={{ type: "spring", duration: 0.5 }}
            />
          )}
          <span className="relative z-10 text-sm md:text-base">
            {tab}
          </span>
        </button>
      ))}
    </div>
  );
}