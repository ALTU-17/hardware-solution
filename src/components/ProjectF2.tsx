"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Button from "./ui/Button";

interface Props {
  image?: string;  // Made optional
  video?: string;  // Added video prop
}

export default function ProjectFCard({ image, video }: Props) {
  return (
    <div className="grid lg:grid-cols-2 gap-16 items-center">


        {/* Details - Rest of your code remains the same */}

      <motion.div
        initial={{ opacity: 0, x: 80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: .8 }}
        viewport={{ once: true }}
      >

        <p className="uppercase tracking-[8px] text-[#C89B3C] text-sm">
          Featured Project
        </p>

        <h2 className="text-5xl font-black mt-6">
          Gold Fluted Glass Partition
        </h2>

        <p className="mt-8 text-gray-400 leading-8">
          A premium Gold aluminium partition
          designed to create elegant, luxurious
          living spaces while maintaining natural
          light and privacy.
        </p>

        <div className="grid grid-cols-2 gap-8 mt-10">

          <div>
            <h4 className="text-[#C89B3C] font-semibold">
              Material
            </h4>

            <p className="text-gray-400 mt-2">
              Aluminium
            </p>
          </div>

          <div>
            <h4 className="text-[#C89B3C] font-semibold">
              Glass
            </h4>

            <p className="text-gray-400 mt-2">
              Fluted
            </p>
          </div>

          <div>
            <h4 className="text-[#C89B3C] font-semibold">
              Finish
            </h4>

            <p className="text-gray-400 mt-2">
              Gold
            </p>
          </div>

          <div>
            <h4 className="text-[#C89B3C] font-semibold">
              Installation
            </h4>

            <p className="text-gray-400 mt-2">
              Hardware Solution
            </p>
          </div>

        </div>

        <div className="mt-12">

          {/* <Button>

            <span className="flex items-center gap-3">

              Explore Project

              <ArrowRight size={18}/>

            </span> */}

          {/* </Button> */}

        </div>

      </motion.div>

      {/* Media - Image or Video */}

      <motion.div
        initial={{ opacity: 0, x: -80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: .8 }}
        viewport={{ once: true }}
        className="relative"
      >

        <div className="overflow-hidden rounded-[32px]">

          {video ? (
            // Video player
            <video
              src={video}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-[650px] object-cover hover:scale-105 transition duration-700"
            />
          ) : image ? (
            // Image fallback
            <Image
              src={image}
              alt="Featured Project"
              width={900}
              height={1200}
              className="w-full h-[600px] object-cover hover:scale-105 transition duration-700"
            />
          ) : null}

        </div>

      </motion.div>

      

    </div>
  );
}

