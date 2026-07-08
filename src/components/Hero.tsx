"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">

      <Image
        src="/images/showroom.jpg"
        alt="Hardware Solution"
        fill
        priority
        className="object-cover"
      />

      <div className="absolute inset-0 bg-black/70"/>

      <div className="absolute inset-0 flex items-center">

        <div className="max-w-7xl mx-auto px-8">

          <p className="text-[#C89B3C] tracking-[8px] uppercase">
            Premium Interior Hardware
          </p>

          <motion.h1
initial={{opacity:0,y:80}}
animate={{opacity:1,y:0}}
transition={{duration:1}}
className="text-6xl md:text-8xl font-black text-white leading-none mt-4"
>

HARDWARE

<br/>

<span className="text-[#C89B3C]">
SOLUTION
</span>

</motion.h1>

          <p className="text-gray-300 mt-8 max-w-xl text-lg leading-8">

            Premium wardrobe systems,
            kitchen fittings,
            cabinet profiles and luxury interior hardware solutions.

          </p>

          <div className="mt-10 flex gap-5">

            <button className="bg-[#C89B3C] text-black px-8 py-4 rounded-full font-bold hover:scale-105 transition">
              View Projects
            </button>

            <button className="border border-white px-8 py-4 rounded-full hover:bg-white hover:text-black transition">
              Contact
            </button>

          </div>

          <div className="mt-12 text-white">

            Own by :

            <span className="text-[#C89B3C] ml-2">
               : Syed Aslam
            </span>

          </div>

        </div>

      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">

<div className="w-6 h-10 rounded-full border border-white flex justify-center">

<div className="w-1 h-3 bg-[#C89B3C] mt-2 animate-bounce rounded-full"/>

</div>

</div>

    </section>
  );
}