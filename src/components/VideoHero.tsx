"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import Container from "./ui/Container";
import MagneticButton from "./MagneticButton";
import Button from "./ui/Button";


export default function VideoHero() {
  const router = useRouter();
  return (
    <section id="home"className="relative h-screen min-h-[760px] overflow-hidden">
    {/* <section className="relative h-screen w-full overflow-hidden"> */}

      {/* Background Video */}

      {/* <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/videos/showroom.mp4" type="video/mp4" />
      </video> */}

      <Image
              src="/images/showroom.jpg"
              alt="Hardware Solution"
              fill
              priority
              className="object-cover"
            />

      {/* Black Overlay */}

      <div className="absolute inset-0 bg-black/55" />

      {/* Luxury Gradient */}

      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black" />

      <Container className="relative z-20 flex h-full items-center">

        <div className="max-w-3xl">

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .8 }}
            className="uppercase tracking-[8px] text-[#C89B3C] text-sm font-medium"
          >
            Luxury Interior Hardware
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 70 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              delay: .2,
            }}
            className="mt-6 text-5xl md:text-7xl xl:text-8xl font-black leading-none"
          >
            HARDWARE

            <span className="block text-[#C89B3C] mt-2">
              SOLUTION
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: .5,
            }}
            className="mt-8 max-w-xl text-base md:text-lg leading-8 text-gray-300"
          >
            Transforming interiors with premium aluminium profiles,
            luxury glass systems,
            wardrobe fittings,
            modular hardware and elegant architectural solutions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: .8,
            }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <MagneticButton>
              <Button onClick={() => router.push('/#projects')}>
                Explore Projects
              </Button>
            </MagneticButton>

            {/* <Button variant="outline">
              Download Catalog
            </Button> */}

          </motion.div>

        </div>

      </Container>

      {/* Scroll Indicator */}

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">

        <div className="flex flex-col items-center">

          <span className="text-xs uppercase tracking-[4px] text-gray-300 mb-4">
            Scroll
          </span>

          <div className="w-7 h-12 rounded-full border border-white/40 flex justify-center">

            <motion.div
              animate={{
                y: [0, 12, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 1.6,
              }}
              className="w-1.5 h-3 rounded-full bg-[#C89B3C] mt-2"
            />

          </div>

        </div>

      </div>

    </section>
  );
}