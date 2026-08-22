import { motion, useReducedMotion } from "motion/react";

const particles = [
  { left: "8%", top: "20%", size: 4, delay: 0 },
  { left: "18%", top: "72%", size: 3, delay: 1.2 },
  { left: "31%", top: "34%", size: 5, delay: 0.8 },
  { left: "45%", top: "81%", size: 3, delay: 2 },
  { left: "57%", top: "18%", size: 4, delay: 1.6 },
  { left: "69%", top: "66%", size: 5, delay: 0.4 },
  { left: "82%", top: "28%", size: 3, delay: 2.4 },
  { left: "92%", top: "76%", size: 4, delay: 1 },
];

export function HeroBackground() {
  const reduceMotion = useReducedMotion();

  return (
    <div
      className="pointer-events-none absolute inset-0 -z-20 overflow-hidden bg-white transition-colors duration-500 dark:bg-[#020617]"
      aria-hidden="true"
    >
      {/* DARK MODE ONLY - Blue glow */}
      <motion.div
        className="absolute -left-40 top-20 hidden h-[34rem] w-[34rem] rounded-full bg-blue-600/20 blur-[140px] dark:block"
        animate={
          reduceMotion
            ? undefined
            : {
                x: [0, 90, 20, 0],
                y: [0, 45, -25, 0],
                scale: [1, 1.15, 0.95, 1],
              }
        }
        transition={{
          duration: 18,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      {/* DARK MODE ONLY - Purple glow */}
      <motion.div
        className="absolute -right-32 top-10 hidden h-[38rem] w-[38rem] rounded-full bg-purple-600/20 blur-[150px] dark:block"
        animate={
          reduceMotion
            ? undefined
            : {
                x: [0, -80, -20, 0],
                y: [0, 60, 10, 0],
                scale: [1, 0.9, 1.12, 1],
              }
        }
        transition={{
          duration: 22,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      {/* DARK MODE ONLY - Cyan glow */}
      <motion.div
        className="absolute bottom-[-10rem] left-1/2 hidden h-[30rem] w-[48rem] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[160px] dark:block"
        animate={
          reduceMotion
            ? undefined
            : {
                scale: [1, 1.08, 1],
                opacity: [0.55, 0.85, 0.55],
              }
        }
        transition={{
          duration: 14,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      {/* Grid only in dark mode */}
      <div className="hero-grid absolute inset-0 opacity-20 dark:opacity-40" />

      {/* Dark vignette */}
      <div className="absolute inset-0 hidden bg-[radial-gradient(circle_at_center,transparent_15%,rgba(2,6,23,0.92)_82%)] dark:block" />

      {/* Particles only in dark mode */}
      {!reduceMotion &&
        particles.map((particle, index) => (
          <motion.span
            key={`${particle.left}-${particle.top}`}
            className="absolute hidden rounded-full bg-cyan-300 shadow-[0_0_15px_rgba(34,211,238,0.85)] dark:block"
            style={{
              left: particle.left,
              top: particle.top,
              width: particle.size,
              height: particle.size,
            }}
            animate={{
              opacity: [0.15, 0.85, 0.15],
              y: [0, -18, 0],
            }}
            transition={{
              duration: 4 + index * 0.3,
              delay: particle.delay,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
        ))}
    </div>
  );
}