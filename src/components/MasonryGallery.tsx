// components/MasonryGallery.tsx
"use client";

import { useState } from "react";
import { X, Maximize2, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  description?: string;
  size?: string;
  material?: string;
}

interface Props {
  projects: Project[];
}

export default function MasonryGallery({ projects }: Props) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleProjectClick = (project: Project, index: number) => {
    setSelectedProject(project);
    setCurrentIndex(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'auto';
  };

  const navigateProject = (direction: 'prev' | 'next') => {
    const newIndex = direction === 'next' 
      ? (currentIndex + 1) % projects.length
      : (currentIndex - 1 + projects.length) % projects.length;
    setCurrentIndex(newIndex);
    setSelectedProject(projects[newIndex]);
  };

  // Handle keyboard events
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') navigateProject('prev');
    if (e.key === 'ArrowRight') navigateProject('next');
  };

  return (
    <>
      {/* Masonry Grid */}
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="break-inside-avoid cursor-pointer group relative rounded-[28px] overflow-hidden"
            onClick={() => handleProjectClick(project, index)}
          >
            <div className="relative">
              <Image
                src={project.image}
                alt={project.title}
                width={600}
                loading="lazy"
                height={800}sizes="100vw" priority={false}
                className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-700"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="inline-block px-3 py-1 text-xs bg-[#C89B3C] text-black rounded-full mb-2">
                    {project.category}
                  </span>
                  <h3 className="text-white text-xl font-bold">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 text-sm mt-1">
                    Click to view details
                  </p>
                </div>
              </div>

              {/* Expand icon */}
              <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                <Maximize2 size={16} className="text-white" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-lg flex items-center justify-center p-4"
            onClick={closeLightbox}
            onKeyDown={handleKeyDown}
            tabIndex={0}
          >
            {/* Close button */}
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 text-white hover:text-[#C89B3C] transition-colors z-10"
            >
              <X size={32} />
            </button>

            {/* Navigation */}
            <button
              onClick={(e) => { e.stopPropagation(); navigateProject('prev'); }}
              className="absolute left-4 md:left-8 text-white hover:text-[#C89B3C] transition-colors bg-black/50 hover:bg-black/70 p-3 rounded-full backdrop-blur-sm"
            >
              <ChevronLeft size={32} />
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); navigateProject('next'); }}
              className="absolute right-4 md:right-8 text-white hover:text-[#C89B3C] transition-colors bg-black/50 hover:bg-black/70 p-3 rounded-full backdrop-blur-sm"
            >
              <ChevronRight size={32} />
            </button>

            {/* Content */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              className="relative max-w-6xl w-full max-h-[90vh] flex flex-col lg:flex-row gap-8 bg-[#0a0a0a] rounded-3xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Image */}
              <div className="lg:w-2/3 bg-black flex items-center justify-center p-4">
                <Image
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  width={800}
                  height={1000}
                  className="w-full h-auto max-h-[70vh] object-contain rounded-xl"
                />
              </div>

              {/* Details */}
              <div className="lg:w-1/3 p-6 lg:p-8 flex flex-col justify-center">
                <span className="inline-block px-4 py-1.5 bg-[#C89B3C]/10 text-[#C89B3C] text-sm rounded-full mb-4">
                  {selectedProject.category}
                </span>
                
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  {selectedProject.title}
                </h2>

                {selectedProject.description && (
                  <p className="text-gray-400 text-base leading-relaxed mb-6">
                    {selectedProject.description}
                  </p>
                )}

                <div className="space-y-3 border-t border-white/10 pt-6">
                  {selectedProject.size && (
                    <div className="flex justify-between">
                      <span className="text-gray-500 text-sm">Size</span>
                      <span className="text-white text-sm font-medium">
                        {selectedProject.size}
                      </span>
                    </div>
                  )}
                  {selectedProject.material && (
                    <div className="flex justify-between">
                      <span className="text-gray-500 text-sm">Material</span>
                      <span className="text-white text-sm font-medium">
                        {selectedProject.material}
                      </span>
                    </div>
                  )}
                  <div className="flex justify-between">
                    <span className="text-gray-500 text-sm">Project ID</span>
                    <span className="text-white text-sm font-medium">
                      #P{String(selectedProject.id).padStart(4, '0')}
                    </span>
                  </div>
                </div>

                {/* Counter */}
                <div className="mt-6 text-center text-gray-600 text-sm">
                  {currentIndex + 1} / {projects.length}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}