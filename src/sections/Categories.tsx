"use client";

import { motion } from "framer-motion";
import Reveal from "../components/animations/Reveal";
import { ArrowRight, Sparkles, Zap, Shield, Gem, Layers, Settings, Settings2Icon, TheaterIcon, Construction, Hammer } from "lucide-react";
import { MdKitchen } from "react-icons/md";

const categories = [
    { 
    name: "Glass Profiles",
    icon: Gem,
    description: "Sophisticated glass hardware for contemporary interiors",
    gradient: "from-blue-500/20 to-cyan-500/20"
  },
  { 
    name: "Modular Wardrobe Systems",
    icon: Layers,
    description: "Customizable luxury wardrobe solutions with premium finishes",
    gradient: "from-purple-500/20 to-pink-500/20"
  },
  { 
    name: "Sliding Systems",
    icon: Zap,
    description: "Innovative sliding hardware for seamless space solutions",
    gradient: "from-indigo-500/20 to-purple-500/20"
  },
  { 
    name: "Modular Kitchen",
    icon: MdKitchen,
    description: "High-end kitchen fittings and hardware for modern living",
    gradient: "from-amber-500/20 to-orange-500/20"
  },
  { 
    name: "Cabinet Profiles",
    icon: Shield,
    description: "Premium cabinet profiles with elegant design details",
    gradient: "from-emerald-500/20 to-teal-500/20"
  },

  { 
    name: "Luxury Handles",
    icon: Sparkles,
    description: ".Exquisite handles and pulls for luxury furniture",
    gradient: "from-rose-500/20 to-red-500/20"
  },
  { 
    name: "Turf",
    icon: Settings2Icon,
    description: ".High-grade landscaping turf for elite contemporary spaces",
    gradient: "from-rose-500/20 to-red-500/20"
  },
  { 
    name: "Home Theater",
    icon: TheaterIcon,
    description: ".High-end integration hardware for ultimate theater experiences",
    gradient: "from-emerald-500/20 to-teal-500/20"
  },
  { 
    name: "Renovation",
    icon: Hammer,
    description: ".Complete architectural hardware upgrades for interior transformations",
    gradient: "from-blue-500/20 to-pink-500/20"
  },
  
];

export default function Categories() {
  return (
    <Reveal>

<section
  id="categories"
  className="py-28 bg-gradient-to-b from-[#0B0B0B] to-[#0a0a0a] relative overflow-hidden">  
  
  
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#C89B3C]/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#C89B3C]/5 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20 mt-12"
        >
          <div className="inline-flex items-center gap-3 bg-[#C89B3C]/10 px-4 py-2 rounded-full border border-[#C89B3C]/20 mb-4">
            <span className="w-2 h-2 bg-[#C89B3C] rounded-full animate-pulse" />
            <p className="text-[#C89B3C] tracking-[6px] uppercase text-xs font-medium">
              Our Products
            </p>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black">
            {/* Premium Hardware */}
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#C89B3C] to-[#F5D78E]">
              Categories
            </span>
          </h2>

          <p className="inline-flex items-center  text-gray-400 mt-4 max-w-2xl mx-auto">
            Discover our extensive range of premium hardware solutions
            designed for luxury interiors
          </p>
        </motion.div>

        {/* Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="group relative bg-gradient-to-br from-[#111] to-[#0a0a0a] p-8 rounded-2xl border border-[#C89B3C]/10 hover:border-[#C89B3C]/40 transition-all duration-500 cursor-pointer overflow-hidden"
            >
              {/* Background gradient on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

              {/* Glow effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 bg-[#C89B3C]/5 rounded-2xl blur-xl" />
              </div>

              {/* Icon with circle */}
              <div className="relative z-10">
                <div className="inline-flex p-3 bg-[#C89B3C]/10 rounded-xl group-hover:bg-[#C89B3C]/20 transition-all duration-300">
                  <category.icon className="w-8 h-8 text-[#C89B3C] group-hover:scale-110 transition-transform duration-300" />
                </div>
              </div>

              {/* Category Name */}
              <h3 className="relative z-10 text-2xl font-bold text-white mt-6 group-hover:text-[#C89B3C] transition-colors duration-300">
                {category.name}
              </h3>

              {/* Description */}
              <p className="relative z-10 mt-3 text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                {category.description}
              </p>

              {/* Arrow indicator */}
              {/* <div className="relative z-10 mt-6 flex items-center gap-2 text-[#C89B3C] opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-2">
                <span className="text-sm font-medium">Explore</span>
                <ArrowRight className="w-4 h-4" />
              </div> */}

              {/* Decorative number */}
              <div className="absolute top-4 right-4 text-6xl font-black text-white/5 group-hover:text-[#C89B3C]/10 transition-colors duration-500 font-serif">
                {String(index + 1).padStart(2, '0')}
              </div>

              {/* Bottom gradient line */}
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#C89B3C] to-transparent group-hover:w-full transition-all duration-700" />
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="group inline-flex items-center gap-3 bg-transparent border-2 border-[#C89B3C] text-[#C89B3C] px-8 py-4 rounded-full font-bold hover:bg-[#C89B3C] hover:text-black transition-all duration-300 hover:shadow-[0_0_30px_rgba(200,155,60,0.2)]"
          >
            View All Products
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </motion.div>
      </div>
    </section>
    </Reveal>
  );
}