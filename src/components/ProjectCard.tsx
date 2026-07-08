"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface Props {
  image: string;
  title: string;
  category: string;
}

export default function ProjectCard({
  image,
  title,
  category,
}: Props) {
  return (
    <motion.div
  initial={{ opacity: 0, y: 60 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.3 }}
  transition={{
    duration: 0.8,
    ease: "easeOut",
  }}
  whileHover={{
    scale: 1.04,
    transition: {
      duration: 0.35,
    },
  }}
  className="group relative overflow-hidden rounded-3xl cursor-pointer"
>
      <div className="relative h-[420px]">

        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition duration-700 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-black/25 group-hover:bg-black/60 transition-all"/>

        <div className="absolute bottom-0 left-0 w-full p-8 translate-y-10 group-hover:translate-y-0 transition-all duration-500">

          <p className="text-[#C89B3C] uppercase tracking-[4px] text-sm">
            {category}
          </p>

          <h3 className="text-3xl font-bold mt-2">
            {title}
          </h3>

        </div>

      </div>
    </motion.div>
  );
}