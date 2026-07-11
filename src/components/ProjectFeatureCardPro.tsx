// components/ProjectFeatureCardPro.tsx
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Play, Pause } from "lucide-react";
import { useRef, useState } from "react";
import Button from "./ui/Button";

interface Feature {
  label: string;
  value: string;
}

interface Props {
  tag?: string;
  title: string;
  description: string;
  features: Feature[];
  image?: string;
  video?: string;
  reverse?: boolean;
}

export default function ProjectFeatureCardPro({ 
  tag = "Featured Project", 
  title, 
  description, 
  features, 
  image, 
  video, 
  reverse = false 
}: Props) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  // Explicitly handles play/pause action
  const togglePlay = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevents background wrapper triggers
    if (!videoRef.current) return;
    
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <div className="grid lg:grid-cols-2 gap-16 items-center my-24">

      {/* Text Details Panel */}
      <motion.div
        initial={{ opacity: 0, x: reverse ? 80 : -80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className={reverse ? "lg:order-2" : "lg:order-1"}
      >
        <p className="uppercase tracking-[8px] text-[#C89B3C] text-sm font-semibold">
          {tag}
        </p>

        <h2 className="text-4xl md:text-5xl font-black mt-6 uppercase tracking-tight text-white leading-tight">
          {title}
        </h2>

        <p className="mt-6 text-gray-400 leading-8 text-lg">
          {description}
        </p>

        {/* Dynamic Spec Grid */}
        <div className="grid grid-cols-2 gap-8 mt-10 border-t border-white/10 pt-8">
          {features.map((feature, idx) => (
            <div key={idx}>
              <h4 className="text-[#C89B3C] font-semibold text-sm uppercase tracking-wider">
                {feature.label}
              </h4>
              <p className="text-gray-300 mt-2 text-base">
                {feature.value}
              </p>
            </div>
          ))}
        </div>

        {/* Call to Action Button */}
        {/* <div className="mt-10">
          <Button variant="gold">
            <span className="flex items-center gap-3">
              Explore Specifications
              <ArrowRight size={18} />
            </span>
          </Button>
        </div> */}
      </motion.div>

      {/* Media Player Panel */}
      <motion.div
        initial={{ opacity: 0, x: reverse ? -80 : 80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className={`relative overflow-hidden rounded-[32px] bg-black border border-white/5 shadow-2xl group ${
          reverse ? "lg:order-1" : "lg:order-2"
        }`}
      >
        {video ? (
          <div className="relative w-full h-[650px] bg-neutral-950 flex items-center justify-center">
            <video
              ref={videoRef}
              src={video}
              loop
              muted
              playsInline
              // Allowing clicking directly on the video to pause only once it is already playing
              onClick={isPlaying ? togglePlay : undefined} 
              className={`w-full h-full transition-all duration-500 ${
                isPlaying ? "object-contain" : "object-cover"
              }`} /* ⬅️ Switches cleanly to actual uncropped form aspect ratio on play */
            />
            
            {/* Control UI Overlay Layer */}
            <div 
              className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
                isPlaying ? "opacity-0 hover:opacity-100 bg-black/20" : "opacity-100 bg-black/10"
              }`}
            >
              {/* Play / Pause Trigger Action is strictly isolated to this button element */}
              <motion.button
                type="button"
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                onClick={togglePlay}
                className="w-20 h-20 flex items-center justify-center rounded-full bg-black/70 border border-[#C89B3C] backdrop-blur-md text-[#C89B3C] shadow-2xl cursor-pointer z-20"
              >
                {isPlaying ? (
                  <Pause size={28} fill="#C89B3C" />
                ) : (
                  <Play size={28} fill="#C89B3C" className="ml-1" />
                )}
              </motion.button>
            </div>
          </div>
        ) : image ? (
          <Image
            src={image}
            alt={title}
            width={1200}
            height={1200}
            className="w-full h-[650px] object-cover transition duration-700 hover:scale-105"
          />
        ) : null}
      </motion.div>

    </div>
  );
}