"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { useState } from "react";
import useNavbar from "../hooks/useNavbar";

// const navItems = [
//   { label: "Home", href: "/" },
//   { label: "About", href: "/#about" },
//   { label: "Projects", href: "/#projects" },
//   { label: "Catalog", href: "/#catalog" },  
//   { label: "Contact", href: "/#contact" },
// ];

const navItems = [
  { label: "Home", href: "/#home" },
  { label: "About", href: "/#about" },
  { label: "Categories", href: "/#categories" },
  { label: "Projects", href: "/#projects" },
  { label: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
const scrolled = useNavbar();
  return (
    <nav
  className={`fixed top-0 left-0 z-50 w-full transition-all duration-500
  ${
    scrolled
      ? "bg-[#090909]/80 backdrop-blur-2xl border-b border-[#C89B3C]/20 py-0 shadow-2xl"
      : "bg-transparent border-transparent py-2"
  }`}
>
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 lg:px-8 py-4">

        {/* Premium Logo */}
        <Link href="/" className="group flex items-center gap-4">
          {/* SVG Logo Mark */}
          <div className="relative w-12 h-12 flex-shrink-0">
            <svg 
              width="48" 
              height="48" 
              viewBox="0 0 48 48" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full"
            >
              {/* Outer ring */}
              <rect 
                x="2" 
                y="2" 
                width="44" 
                height="44" 
                rx="10" 
                stroke="#C89B3C" 
                strokeWidth="1.5"
                className="transition-all duration-300 group-hover:stroke-[#F5D78E]"
              />

              {/* Inner geometric core */}
              <rect 
                x="10" 
                y="10" 
                width="28" 
                height="28" 
                rx="6" 
                fill="#C89B3C" 
                className="transition-all duration-300 group-hover:fill-[#F5D78E]"
              />

              {/* HS Text */}
              <text 
                x="24" 
                y="28" 
                textAnchor="middle" 
                fontFamily="'Inter', system-ui, sans-serif"
                fontSize="16" 
                fontWeight="800" 
                fill="#0A0A0A"
                letterSpacing="1"
              >
                H
                <tspan fill="#FFFFFF">S</tspan>
              </text>

              {/* Corner accent lines */}
              <path 
                d="M8 8L12 8L8 12" 
                stroke="#C89B3C" 
                strokeWidth="1.5" 
                strokeLinecap="round"
                strokeLinejoin="round"
                className="transition-all duration-300 group-hover:stroke-[#F5D78E]"
              />
              <path 
                d="M40 8L36 8L40 12" 
                stroke="#C89B3C" 
                strokeWidth="1.5" 
                strokeLinecap="round"
                strokeLinejoin="round"
                className="transition-all duration-300 group-hover:stroke-[#F5D78E]"
              />
              <path 
                d="M8 40L8 36L12 40" 
                stroke="#C89B3C" 
                strokeWidth="1.5" 
                strokeLinecap="round"
                strokeLinejoin="round"
                className="transition-all duration-300 group-hover:stroke-[#F5D78E]"
              />
              <path 
                d="M40 40L40 36L36 40" 
                stroke="#C89B3C" 
                strokeWidth="1.5" 
                strokeLinecap="round"
                strokeLinejoin="round"
                className="transition-all duration-300 group-hover:stroke-[#F5D78E]"
              />

              {/* Circuit nodes */}
              <circle cx="24" cy="6" r="1.5" fill="#C89B3C" className="transition-all duration-300 group-hover:fill-[#F5D78E]" />
              <circle cx="24" cy="42" r="1.5" fill="#C89B3C" className="transition-all duration-300 group-hover:fill-[#F5D78E]" />
              <circle cx="6" cy="24" r="1.5" fill="#C89B3C" className="transition-all duration-300 group-hover:fill-[#F5D78E]" />
              <circle cx="42" cy="24" r="1.5" fill="#C89B3C" className="transition-all duration-300 group-hover:fill-[#F5D78E]" />
            </svg>

            {/* Glow effect */}
            <div className="absolute inset-0 rounded-full blur-xl bg-[#C89B3C]/10 group-hover:bg-[#C89B3C]/20 transition-all duration-500" />
          </div>

          {/* Text Section */}
          <div className="flex flex-col leading-none">
            <h1 className="font-bold text-white tracking-[4px] text-sm md:text-base transition-colors duration-300 group-hover:text-[#F5D78E]">
              HARDWARE
            </h1>
            <div className="flex items-center gap-2">
              <span className="text-[#C89B3C] text-[10px] md:text-xs tracking-[6px] font-light group-hover:text-[#F5D78E] transition-colors duration-300">
                SOLUTION
              </span>
              <div className="w-4 h-px bg-[#C89B3C]/50 group-hover:bg-[#F5D78E] transition-all duration-300" />
            </div>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 lg:gap-12">
          {navItems.map(({ label, href }) => (
            <Link 
              key={label}
              href={href}
              className="text-white/70 hover:text-[#C89B3C] text-sm font-medium tracking-wide transition-all duration-300 relative group"
            >
              {label}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#C89B3C] transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white hover:text-[#C89B3C] transition-colors duration-300"
        >
          <Menu size={24} />
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-xl border-b border-[#C89B3C]/20">
          <div className="flex flex-col items-center gap-6 py-8 px-6">
            {navItems.map(({ label, href }) => (
              <Link 
                key={label}
                href={href}
                className="text-white/70 hover:text-[#C89B3C] text-sm font-medium tracking-wide transition-colors duration-300"
                onClick={() => setIsOpen(false)}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}