import { motion, useReducedMotion } from "motion/react";

import heroProfile from "../../assets/images/hero-profile.jpg";

export function HeroProfile() {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
className="group relative mx-auto aspect-square w-full max-w-[400px] cursor-pointer md:max-w-[460px] xl:max-w-[520px]"
  initial={
    reduceMotion
      ? false
      : {
          opacity: 0,
          scale: 0.94,
          x: 40,
        }
  }
  animate={
    reduceMotion
      ? undefined
      : {
          opacity: 1,
          scale: 1,
          x: 0,
        }
  }
  whileHover={
    reduceMotion
      ? undefined
      : {
          scale: 1.025,
          y: -6,
        }
  }
  transition={{
    scale: {
      type: "spring",
      stiffness: 120,
      damping: 18,
      mass: 0.7,
    },
    y: {
      type: "spring",
      stiffness: 120,
      damping: 18,
      mass: 0.7,
    },
    opacity: {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1],
    },
    x: {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1],
    },
  }}
>
      {/* Outer dotted rotating ring */}
      <motion.div
        className="absolute inset-0 rounded-full border-2 border-dashed border-blue-400/45"
        animate={
          reduceMotion
            ? undefined
            : {
                rotate: 360,
              }
        }
        transition={{
          duration: 24,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
      />

      {/* Second dotted rotating ring */}
      <motion.div
        className="absolute inset-[5%] rounded-full border border-dashed border-cyan-300/40"
        animate={
          reduceMotion
            ? undefined
            : {
                rotate: -360,
              }
        }
        transition={{
          duration: 15,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
      />

      {/* Static ring */}
      <div className="absolute inset-[9%] rounded-full border border-blue-500/40" />

      {/* Animated glow */}
      <motion.div
        className="absolute inset-[12%] rounded-full bg-blue-500/20 blur-[90px]"
        animate={
          reduceMotion
            ? undefined
            : {
                opacity: [0.25, 0.55, 0.25],
                scale: [0.95, 1.08, 0.95],
              }
        }
        transition={{
          duration: 2,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      {/* Profile image */}
      <div className="absolute inset-[11%] overflow-hidden rounded-full border border-cyan-400/60 bg-slate-900 shadow-[0_0_70px_rgba(37,99,235,0.32)] transition-shadow duration-500 group-hover:shadow-[0_0_100px_rgba(34,211,238,0.42)]">
        <motion.img
  src={heroProfile}
  alt="Sasanka Ranawaka"
  width={700}
  height={700}
  fetchPriority="high"
  className="h-full w-full object-cover object-top"
  whileHover={
    reduceMotion
      ? undefined
      : {
          scale: 1.025,
        }
  }
  transition={{
    type: "spring",
    stiffness: 100,
    damping: 40,
    mass: 0.8,
  }}
/>

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-blue-950/40 via-transparent to-transparent" />
      </div>

      {/* Available badge */}
      <motion.div
        className="absolute bottom-[12%] right-[-1%] z-20 flex items-center gap-3 rounded-full border border-cyan-400/60 bg-slate-950/90 px-5 py-3 text-sm font-semibold text-white shadow-[0_0_30px_rgba(34,211,238,0.25)] backdrop-blur-xl"
        initial={
          reduceMotion
            ? false
            : {
                opacity: 0,
                x: 20,
              }
        }
        animate={
          reduceMotion
            ? undefined
            : {
                opacity: 1,
                x: 0,
              }
        }
        transition={{
          delay: 1,
          duration: 0.6,
        }}
      >
        <span className="relative flex h-3 w-3">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
          <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-400" />
        </span>

        Available
      </motion.div>
    </motion.div>
  );
}