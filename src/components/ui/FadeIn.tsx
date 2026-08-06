"use client";

import { motion, useReducedMotion } from "framer-motion";

type Props = {
  children: React.ReactNode;
};

export default function FadeIn({ children }: Props) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      initial={
        prefersReducedMotion
          ? undefined
          : {
              opacity: 0,
              y: 40,
            }
      }
      whileInView={
        prefersReducedMotion
          ? undefined
          : {
              opacity: 1,
              y: 0,
            }
      }
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration: 0.6,
        ease: "easeOut",
      }}
    >
      {children}
    </motion.div>
  );
}