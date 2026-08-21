// eslint-disable-next-line no-unused-vars
import { motion, useReducedMotion } from "motion/react";

export default function PromptLine({ command, className = "" }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.p
      initial={reduceMotion ? false : { clipPath: "inset(0 100% 0 0)" }}
      whileInView={{ clipPath: "inset(0 0% 0 0)" }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`font-mono text-xs sm:text-sm text-white/60 ${className}`}
    >
      <span className="text-orange-400/70">$</span> {command}
      <span
        aria-hidden="true"
        className="inline-block w-[0.5em] h-[1em] -mb-[0.15em] ml-1 bg-orange-400/60 motion-safe:animate-pulse"
      />
    </motion.p>
  );
}
