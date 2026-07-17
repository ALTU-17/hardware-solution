"use client";

import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { useRef, useState } from "react";

const videos = [
  {
    src: "projectvid/persnol_space_glass_sliding_room_partition1.mp4",
    title: "Installation",
  },
  {
    src: "projectvid/persnol_space_glass_sliding_room_partition3.mp4",
    title: "Sliding Demo",
  },
  {
    src: "projectvid/persnol_space_glass_sliding_room_partition2.mp4",
    title: "Final Interior",
  },
  {
    src: "projectvid/gallery_window.mp4",
    title: "Sliding Gallery Partition",
  },
];

export default function FeaturedShowcase2() {
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
      video.currentTime = 0;
      setPlayingIndex(null);
    }
  };

  const handleVideoEnd = (index: number) => {
    setPlayingIndex(null);
  };

  return (
    <section
      id="projects"
      className="relative py-32 overflow-hidden bg-[#090909]"
    >
      {/* Background Glow */}
      <div className="absolute left-0 top-40 w-[500px] h-[500px] rounded-full bg-[#C89B3C]/10 blur-[180px]" />
      <div className="absolute right-0 bottom-0 w-[450px] h-[450px] rounded-full bg-[#C89B3C]/5 blur-[180px]" />

      <div className="text-center container mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="uppercase tracking-[8px] text-[#C89B3C] text-sm">
            Featured Project
          </p>

          <h2 className="text-5xl md:text-6xl font-black mt-5">
            Gold Fluted Glass Sliding Partition
          </h2>

               <p className="max-w-1xl mx-auto mt-8 text-gray-400 leading-8">

            Premium aluminium sliding partition

            designed for modern luxury interiors.

            Elegant profiles, fluted glass,

            smooth sliding mechanism and

            premium installation by Hardware Solution.

          </p>

        </motion.div> 

        {/* Row 1: Slider Video Gallery (First 3 Videos) */}
        <div className="flex gap-8 overflow-x-auto pb-6 snap-x snap-mandatory scrollbar-hide">
          {videos.slice(0, 3).map((video, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * .15,
              }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="relative min-w-[290px] md:min-w-[340px] rounded-[32px] overflow-hidden bg-[#111] border border-white/10 flex-shrink-0 group"
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave(index)}
            >
              <div className="overflow-hidden rounded-3xl border border-[#C89B3C]/20 relative">
                <video
                  ref={(el) => { videoRefs.current[index] = el; }}
                  src={video.src}
                  muted
                  loop={false}
                  playsInline
                  preload="metadata"
                  className="w-full h-[600px] object-cover"
                  onEnded={() => handleVideoEnd(index)}
                />

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

                {playingIndex === index && (
                  <div className="absolute top-4 right-4">
                    <div className="flex items-center gap-1.5 bg-black/60 backdrop-blur-sm px-3 py-1.5 rounded-full">
                      <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
                      <span className="text-white text-xs font-medium">Playing</span>
                    </div>
                  </div>
                )}

                <div className="text-center absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                  <span className="text-[#C89B3C] text-xs tracking-[5px] uppercase">
                    Luxury Project
                  </span>
                  <h3 className="text-2xl font-bold mt-3">{video.title}</h3>
                  <p className="text-gray-300 mt-3 text-sm leading-7">
                    Premium Gold Aluminium Sliding Glass Partition
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Row 2: Full-Size Standalone Showcase (4th Video) */}
        <div className="mt-12 w-full">
          {(() => {
            const index = 3;
            const video = videos[index];
            return (
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="relative w-full rounded-[32px] overflow-hidden bg-[#111] border border-white/10 group"
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={() => handleMouseLeave(index)}
              >
                <div className="overflow-hidden rounded-3xl border border-[#C89B3C]/20 relative">
                  <video
                    ref={(el) => { videoRefs.current[index] = el; }}
                    src={video.src}
                    muted
                    loop={false}
                    playsInline
                    preload="metadata"
                    className="w-full h-[400px] md:h-[550px] lg:h-[600px] object-cover"
                    onEnded={() => handleVideoEnd(index)}
                  />

                  {playingIndex !== index && (
                    <div className="absolute inset-0 bg-black/20 transition-opacity duration-300 flex items-center justify-center">
                      {hoveredIndex === index ? (
                        <div className="w-20 h-20 rounded-full bg-[#C89B3C] flex items-center justify-center animate-pulse">
                          <Play size={28} fill="black" className="text-black ml-1" />
                        </div>
                      ) : (
                        <div className="w-20 h-20 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center">
                          <Play size={28} fill="white" className="text-white ml-1" />
                        </div>
                      )}
                    </div>
                  )}

                  {playingIndex === index && (
                    <div className="absolute top-6 right-6">
                      <div className="flex items-center gap-1.5 bg-black/60 backdrop-blur-sm px-4 py-2 rounded-full">
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                        <span className="text-white text-xs font-medium tracking-wider">Playing Showcase</span>
                      </div>
                    </div>
                  )}

                  {/* Left-aligned content for a cinematic wide look */}
                  <div className="absolute bottom-0 left-0 w-full p-8 md:p-12 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex flex-col items-start text-left">
                    <span className="text-[#C89B3C] text-xs md:text-sm tracking-[6px] uppercase font-semibold">
                      Featured Gallery Piece
                    </span>
                    <h3 className="text-3xl md:text-4xl font-black mt-3 text-white">
                      {video.title}
                    </h3>
                    <p className="text-gray-300 mt-2 text-sm md:text-base max-w-xl leading-relaxed">
                      Premium Gold Aluminium Sliding Glass Partition tailored seamlessly for open-concept layouts.
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })()}
        </div>

        {/* Specifications */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10"
        >
          <div className="border border-white/10 rounded-2xl p-6 bg-[#111]">
            <h4 className="text-[#C89B3C] font-semibold text-sm uppercase tracking-[4px]">
              Material
            </h4>
            <p className="text-white text-lg font-medium mt-3">Premium Aluminium</p>
          </div>

          <div className="border border-white/10 rounded-2xl p-6 bg-[#111]">
            <h4 className="text-[#C89B3C] font-semibold text-sm uppercase tracking-[4px]">
              Glass
            </h4>
            <p className="text-white text-lg font-medium mt-3">Fluted Glass</p>
          </div>

          <div className="border border-white/10 rounded-2xl p-6 bg-[#111]">
            <h4 className="text-[#C89B3C] font-semibold text-sm uppercase tracking-[4px]">
              Finish
            </h4>
            <p className="text-white text-lg font-medium mt-3">Matte Gold</p>
          </div>

          <div className="border border-white/10 rounded-2xl p-6 bg-[#111]">
            <h4 className="text-[#C89B3C] font-semibold text-sm uppercase tracking-[4px]">
              Installed By
            </h4>
            <p className="text-white text-lg font-medium mt-3">Hardware Solution</p>
          </div>
        </motion.div>
      </div>

      {/* Custom Scrollbar Hide */}
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}