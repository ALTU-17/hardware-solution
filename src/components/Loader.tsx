"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function Loader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 bg-[#0A0A0A] z-[9999] flex items-center justify-center"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <div className="text-center relative">

            {/* Premium Hardware Solution SVG Logo */}
            <motion.div
              initial={{ scale: 0.7, opacity: 0, rotate: -10 }}
              animate={{ scale: 1, opacity: 1, rotate: 0 }}
              transition={{ 
                duration: 0.8, 
                ease: [0.34, 1.56, 0.64, 1],
                type: "spring",
                damping: 15
              }}
              className="relative inline-block"
            >
              <svg 
                width="120" 
                height="120" 
                viewBox="0 0 120 120" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                className="drop-shadow-[0_0_30px_rgba(200,155,60,0.3)]"
              >
                {/* Outer Circuit Border */}
                <rect 
                  x="8" 
                  y="8" 
                  width="104" 
                  height="104" 
                  rx="20"
                  stroke="#C89B3C" 
                  strokeWidth="1.5"
                  strokeDasharray="8 6"
                  opacity="0.6"
                />
                
                {/* Inner Glowing Ring */}
                <circle 
                  cx="60" 
                  cy="60" 
                  r="42" 
                  stroke="url(#ringGradient)" 
                  strokeWidth="1.5"
                  opacity="0.4"
                />
                
                {/* Central Geometric Core */}
                <rect 
                  x="28" 
                  y="28" 
                  width="64" 
                  height="64" 
                  rx="12"
                  fill="url(#coreGradient)" 
                  stroke="#C89B3C" 
                  strokeWidth="2"
                />
                
                {/* HS Text with Tech Aesthetic */}
                <text 
                  x="60" 
                  y="68" 
                  textAnchor="middle" 
                  fontFamily="'Inter', 'Segoe UI', system-ui, sans-serif"
                  fontSize="34" 
                  fontWeight="800" 
                  fill="#FFFFFF"
                  letterSpacing="4"
                  className="tracking-wider"
                >
                  H
                  <tspan fill="#C89B3C">S</tspan>
                </text>

                {/* Corner Accents - Top Left */}
                <path 
                  d="M16 16L24 16L16 24" 
                  stroke="#C89B3C" 
                  strokeWidth="2" 
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="opacity-70"
                />
                
                {/* Corner Accents - Top Right */}
                <path 
                  d="M104 16L96 16L104 24" 
                  stroke="#C89B3C" 
                  strokeWidth="2" 
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="opacity-70"
                />
                
                {/* Corner Accents - Bottom Left */}
                <path 
                  d="M16 104L16 96L24 104" 
                  stroke="#C89B3C" 
                  strokeWidth="2" 
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="opacity-70"
                />
                
                {/* Corner Accents - Bottom Right */}
                <path 
                  d="M104 104L104 96L96 104" 
                  stroke="#C89B3C" 
                  strokeWidth="2" 
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="opacity-70"
                />

                {/* Circuit Nodes - Top */}
                <circle cx="60" cy="16" r="3" fill="#C89B3C" opacity="0.6" />
                <circle cx="40" cy="16" r="2" fill="#C89B3C" opacity="0.4" />
                <circle cx="80" cy="16" r="2" fill="#C89B3C" opacity="0.4" />
                
                {/* Circuit Nodes - Bottom */}
                <circle cx="60" cy="104" r="3" fill="#C89B3C" opacity="0.6" />
                <circle cx="40" cy="104" r="2" fill="#C89B3C" opacity="0.4" />
                <circle cx="80" cy="104" r="2" fill="#C89B3C" opacity="0.4" />
                
                {/* Circuit Nodes - Left */}
                <circle cx="16" cy="60" r="3" fill="#C89B3C" opacity="0.6" />
                <circle cx="16" cy="40" r="2" fill="#C89B3C" opacity="0.4" />
                <circle cx="16" cy="80" r="2" fill="#C89B3C" opacity="0.4" />
                
                {/* Circuit Nodes - Right */}
                <circle cx="104" cy="60" r="3" fill="#C89B3C" opacity="0.6" />
                <circle cx="104" cy="40" r="2" fill="#C89B3C" opacity="0.4" />
                <circle cx="104" cy="80" r="2" fill="#C89B3C" opacity="0.4" />

                {/* Gradients Definitions */}
                <defs>
                  <linearGradient id="coreGradient" x1="28" y1="28" x2="92" y2="92">
                    <stop offset="0%" stopColor="#1A1A1A" />
                    <stop offset="100%" stopColor="#0D0D0D" />
                  </linearGradient>
                  <linearGradient id="ringGradient" x1="18" y1="18" x2="102" y2="102">
                    <stop offset="0%" stopColor="#C89B3C" stopOpacity="0.8" />
                    <stop offset="50%" stopColor="#F5D78E" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#C89B3C" stopOpacity="0.8" />
                  </linearGradient>
                </defs>
              </svg>

              {/* Animated Glow Ring */}
              <motion.div
                className="absolute inset-0 rounded-full"
                animate={{
                  boxShadow: [
                    "0 0 40px rgba(200,155,60,0.2)",
                    "0 0 80px rgba(200,155,60,0.4)",
                    "0 0 40px rgba(200,155,60,0.2)"
                  ]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.div>

            {/* Company Name */}
            <motion.h1
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-white font-light tracking-[12px] text-sm uppercase mt-8"
            >
              <span className="font-medium text-[#C89B3C]">Hardware</span> Solution
            </motion.h1>

            {/* Loading Bar */}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 240 }}
              transition={{ duration: 2, ease: "easeInOut" }}
              className="h-[2px] bg-gradient-to-r from-transparent via-[#C89B3C] to-transparent mt-6 mx-auto"
            />

            {/* Shimmer Effect on Loading Bar */}
            <motion.div
              className="h-[2px] bg-gradient-to-r from-transparent via-white/20 to-transparent mt-[-2px] mx-auto"
              style={{ width: 240 }}
              animate={{
                x: [-240, 240]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}