"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function MagneticButton({
  children,
}: Props) {
  return (
    <motion.div
      whileHover={{
        scale: 1.05,
        rotate: -.5,
      }}
      whileTap={{
        scale: .96,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
      }}
      className="inline-block"
    >
      {children}
    </motion.div>
  );
}