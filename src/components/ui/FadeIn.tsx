"use client";

import { useEffect, useRef } from "react";
import {
  motion,
  useAnimation,
  useInView,
  useReducedMotion,
} from "framer-motion";

type Props = {
  children: React.ReactNode;
};

export default function FadeIn({ children }: Props) {
  const prefersReducedMotion = useReducedMotion();

  const ref = useRef<HTMLDivElement>(null);

  const isInView = useInView(ref, {
    once: true,
    margin: "-10% 0px",
  });

  const controls = useAnimation();

  useEffect(() => {
    if (prefersReducedMotion) return;

    if (isInView) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.6,
          ease: "easeOut",
        },
      });
    }
  }, [controls, isInView, prefersReducedMotion]);

  if (prefersReducedMotion) {
    return <>{children}</>;
  }

  return (
    <motion.div
      ref={ref}
      initial={{
        opacity: 0,
        y: 24,
      }}
      animate={controls}
      style={{
        willChange: "transform, opacity",
      }}
    >
      {children}
    </motion.div>
  );
}