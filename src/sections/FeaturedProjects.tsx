// app/featured-projects/page.tsx (or wherever you use it)
"use client";

import { useState } from "react";
import MasonryGallery from "../components/MasonryGallery";
import FilterTabs from "../components/FilterTabs";
import { projects } from "../data/projects";
import Reveal from "../components/animations/Reveal";
import { motion } from "framer-motion";

export default function FeaturedProjects() {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All"
      ? projects
      : projects.filter((p) => p.category === active);

  return (
    <Reveal>
      <section id="projects" className="py-16 md:py-32 bg-black">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-6 py-2 border border-[#C89B3C]/30 rounded-full text-[#C89B3C] text-xs tracking-[4px] uppercase mb-4">
              Luxury Portfolio
            </span>
            <h2 className="text-4xl md:text-6xl font-black">
              Featured Projects
            </h2>
            <p className="inline-flex items-center mt-4 text-gray-400 max-w-2xl mx-auto">
              Explore our premium collection of interior hardware projects
            </p>
          </motion.div>

          <FilterTabs active={active} onChange={setActive} />

          {filtered.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-gray-500">No projects found in this category</p>
            </div>
          ) : (
            <MasonryGallery projects={filtered} />
          )}
        </div>
      </section>
    </Reveal>
  );
}