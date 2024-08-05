"use client";

import { cn } from "@/lib/utils";
import { AnimatePresence, motion, Variants } from "framer-motion";
import { PropsWithChildren, ReactNode, useMemo } from "react";

interface BlurFadeTextProps {
  className?: string;
  variant?: {
    hidden: { y: number };
    visible: { y: number };
  };
  duration?: number;
  characterDelay?: number;
  delay?: number;
  yOffset?: number;
  animateByCharacter?: boolean;
  children: ReactNode
}

const BlurFadeText = ({
  children,
  className,
  variant,
  delay = 0,
  yOffset = 8,
}: BlurFadeTextProps) => {
  const defaultVariants: Variants = {
    hidden: { y: yOffset, opacity: 0, filter: "blur(8px)" },
    visible: { y: -yOffset, opacity: 1, filter: "blur(0px)" },
  };
  const combinedVariants = variant || defaultVariants;

  return (
    <div className="flex">
      <AnimatePresence>
        <motion.span
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={combinedVariants}
          transition={{
            yoyo: Infinity,
            delay,
            ease: "easeOut",
          }}
          className={cn("inline-block", className)}
        >
          {children}
        </motion.span>
      </AnimatePresence>
    </div>
  );
};

export default BlurFadeText;
