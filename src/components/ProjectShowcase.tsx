"use client";

import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { useRef, useState } from "react";

interface Spec {
  title: string;
  value: string;
}

interface Props {
  title: string;
  subtitle: string;
  description: string;
  videos: string[];
  specs: Spec[];
}

export default function ProjectShowcase({
  title,
  subtitle,
  description,
  videos,
  specs,
}: Props) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [playingIndex, setPlayingIndex] = useState<number | null>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const handleMouseEnter = (index: number) => {
    setHoveredIndex(index);
    const video = videoRefs.current[index];
    if (video) {
      video.play();
      setPlayingIndex(index);
    }
  };

  const handleMouseLeave = (index: number) => {
    setHoveredIndex(null);
    const video = videoRefs.current[index];
    if (video) {
      video.pause();
      video.currentTime = 0; // Reset to beginning
      setPlayingIndex(null);
    }
  };

  // Handle video end event
  const handleVideoEnd = (index: number) => {
    setPlayingIndex(null);
  };

  return (
    <section className="py-32">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: .7 }}
        viewport={{ once: true }}
        className="text-center mb-20"
      >
        <p className="uppercase tracking-[8px] text-[#C89B3C] text-sm">
          ****
        </p>
        <p className="uppercase tracking-[8px] text-[#C89B3C] text-sm">
          ***
        </p>
        <p className="uppercase tracking-[8px] text-[#C89B3C] text-sm">
          ****
        </p>
        <p className="uppercase tracking-[8px] text-[#C89B3C] text-sm">
          {subtitle}
        </p>

        <h2 className="text-5xl md:text-6xl font-black mt-5">
          {title} 
        </h2>

        <p className="max-w-1xl mx-auto mt-8 text-gray-400 leading-8">
          {description}
        </p>
      </motion.div>

      {/* Video Gallery */}
      <div className="mt-20 flex gap-8 overflow-x-auto pb-6 snap-x">
        {videos.map((video, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -10 }}
            className="relative flex-shrink-0 w-[320px]"
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave(index)}
          >
            <div className="overflow-hidden rounded-3xl border border-[#C89B3C]/20 relative">
              <video
                ref={(el) => { videoRefs.current[index] = el; }}
                src={video}
                muted
                loop={false}
                playsInline
                preload="metadata"
                className="w-full h-[600px] object-cover"
                onEnded={() => handleVideoEnd(index)}
              />

              {/* Play Overlay - Only show when NOT playing */}
              {playingIndex !== index && (
                <div className="absolute inset-0 bg-black/20 transition-opacity duration-300 flex items-center justify-center">
                  {hoveredIndex === index ? (
                    <div className="w-16 h-16 rounded-full bg-[#C89B3C] flex items-center justify-center animate-pulse">
                      <Play size={24} fill="black" className="text-black ml-1" />
                    </div>
                  ) : (
                    <div className="w-16 h-16 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center">
                      <Play size={24} fill="white" className="text-white ml-1" />
                    </div>
                  )}
                </div>
              )}

              {/* Optional: Show a subtle indicator when playing */}
              {playingIndex === index && (
                <div className="absolute top-4 right-4 ">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                </div>
              )}
            </div>

            <div className="mt-4">
              <h3 className="text-center text-white text-xl font-semibold">
                Reel {index + 1}
              </h3>
              <p className="text-center text-gray-500">
                .
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Specifications */}
      <div className="text-center grid grid-cols-2 lg:grid-cols-4 gap-8 mt-24">
        {specs.map((item) => (
          <div
            key={item.title}
            className="border border-[#C89B3C]/20 rounded-2xl p-8 bg-[#111]"
          >
            <p className="text-[#C89B3C] text-sm uppercase tracking-[4px]">
              {item.title}
            </p>
            <h4 className="text-white text-xl font-bold mt-3">
              {item.value}
            </h4>
          </div>
        ))}
      </div>
    </section>
  );
}