"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Play, X } from "lucide-react";
import Button from "./ui/Button";
import { useState, useRef } from "react";

interface Props {
  image?: string;
  video?: string;
  video2?: string;
  title?: string;
  description?: string;
  category?: string;
  specs?: {
    material?: string;
    glass?: string;
    finish?: string;
    installation?: string;
  };
}

export default function ProjectFCard({ 
  image, 
  video, 
  video2,
  title = "Bronze Fluted Glass Partition",
  description = "A premium bronze aluminium partition designed to create elegant, luxurious living spaces while maintaining natural light and privacy.",
  category = "Featured Project",
  specs = {
    material: "Aluminium",
    glass: "Fluted",
    finish: "Bronze",
    installation: "Hardware Solution"
  }
}: Props) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const handleVideoPlay = (videoSrc: string) => {
    setActiveVideo(videoSrc);
    setIsPlaying(true);
  };

  const handleVideoClose = () => {
    setIsPlaying(false);
    setActiveVideo(null);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  // Video player component for better quality
  const VideoPlayer = ({ src, className = "" }: { src: string; className?: string }) => (
    <div className="relative overflow-hidden rounded-[32px] bg-black">
      <video
        ref={videoRef}
        src={src}
        autoPlay
        loop
        muted
        playsInline
        className={`w-full object-cover hover:scale-105 transition duration-700 ${className}`}
        style={{ aspectRatio: '16/9' }}
      />
      
      {/* Video Controls Overlay */}
      <div className="absolute bottom-4 right-4 flex gap-2">
        <button
          onClick={() => handleVideoPlay(src)}
          className="p-3 rounded-full bg-black/60 backdrop-blur-sm hover:bg-[#C89B3C] transition-colors border border-white/10"
        >
          <Play size={18} className="text-white ml-0.5" />
        </button>
      </div>
    </div>
  );

  return (
    <div className="grid lg:grid-cols-2 gap-16 items-start">
      {/* Left Column - Video 1 */}
       <motion.div
        initial={{ opacity: 0, x: 80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: .8 }}
        viewport={{ once: true }}
        className="space-y-8"
      >
        {/* Category */}
        <p className="uppercase tracking-[8px] text-[#C89B3C] text-sm">
          .
        </p>
        <p className="uppercase tracking-[8px] text-[#C89B3C] text-sm">
          {category}
        </p>

        {/* Title */}
        <h2 className="text-4xl font-black">
          Sliding Glass Door Sitting Area Partition
        </h2>

        {/* Description */}
        <p className="text-gray-400 leading-8">
           A premium transparent glass aluminium partition designed to create elegant, luxurious living spaces.
        </p>


        <div className="overflow-hidden rounded-[32px]">
          {video2 ? (
            <VideoPlayer src={video2} className="h-[400px] md:h-[500px]" />
          ) : image ? (
            <Image
              src={image}
              alt="Featured Project"
              width={900}
              height={600}
              className="w-full h-[400px] md:h-[500px] object-cover hover:scale-105 transition duration-700"
            />
          ) : null}
        </div>
      </motion.div>

      {/* Right Column - Video 2 and Details */}
      <motion.div
        initial={{ opacity: 0, x: 80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: .8 }}
        viewport={{ once: true }}
        className="space-y-8"
      >
        {/* Category */}

        <p className="uppercase tracking-[8px] text-[#C89B3C] text-sm">
          .
        </p>
        <p className="uppercase tracking-[8px] text-[#C89B3C] text-sm">
          {category}
        </p>
        {/* Title */}
        <h2 className="text-4xl font-black">
          Gold Fluted Glass Sliding Living Area Partition
        </h2>

        {/* Description */}
        <p className="text-gray-400 leading-8">
          A premium bronze textured glass partition designed to create elegant, luxurious living spaces while maintaining natural light and privacy.
        </p>

        {/* Video 2 */}
        <div className="overflow-hidden rounded-[32px]">
          {video ? (
            <VideoPlayer src={video} className="h-[300px] md:h-[350px]" />
          ) : image ? (
            <Image
              src={image}
              alt="Featured Project"
              width={900}
              height={600}
              className="w-full h-[300px] md:h-[350px] object-cover hover:scale-105 transition duration-700"
            />
          ) : null}
        </div>

        {/* Specifications */}
        <div className="grid grid-cols-2 gap-8">
          <div>
            <h4 className="text-[#C89B3C] font-semibold">Material</h4>
            <p className="text-gray-400 mt-2">{specs.material || "Aluminium"}</p>
          </div>
          <div>
            <h4 className="text-[#C89B3C] font-semibold">Glass</h4>
            <p className="text-gray-400 mt-2">{specs.glass || "Fluted"}</p>
          </div>
          <div>
            <h4 className="text-[#C89B3C] font-semibold">Finish</h4>
            <p className="text-gray-400 mt-2">{specs.finish || "Bronze"}</p>
          </div>
          <div>
            <h4 className="text-[#C89B3C] font-semibold">Installation</h4>
            <p className="text-gray-400 mt-2">{specs.installation || "Hardware Solution"}</p>
          </div>
        </div>

        {/* Action Button */}
        {/* <div className="mt-4">
          <Button>
            <span className="flex items-center gap-3">
              Explore Project
              <ArrowRight size={18} />
            </span>
          </Button> */}
        {/* </div>   */}
      </motion.div>

      {/* Full Screen Video Modal */}
      {isPlaying && activeVideo && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-lg flex items-center justify-center p-4"
          onClick={handleVideoClose}
        >
          <button
            onClick={handleVideoClose}
            className="absolute top-6 right-6 text-white hover:text-[#C89B3C] transition-colors z-10"
          >
            <X size={32} />
          </button>
          
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="relative max-w-6xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <video
              src={activeVideo}
              controls
              autoPlay
              playsInline
              className="w-full rounded-2xl"
              style={{ maxHeight: '85vh' }}
            />
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}