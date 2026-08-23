import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";

const roles = [
  "Cloud & DevOps Engineer",
  "SRE & Observability Enthusiast",
  "Infrastructure Automation Enthusiast",
  "Technical Writer",
  "Continuous Learner",
  "",
];

export function AnimatedRole() {
  const reduceMotion = useReducedMotion();
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  useEffect(() => {
    if (reduceMotion) {
      return;
    }

    const interval = window.setInterval(() => {
      setCurrentRoleIndex((currentIndex) =>
        (currentIndex + 1) % roles.length,
      );
    }, 2600);

    return () => {
      window.clearInterval(interval);
    };
  }, [reduceMotion]);

  return (
    <div className="mt-8">
      <div className="flex min-h-[64px] w-full max-w-2xl items-center rounded-2xl border border-slate-300 bg-white/75 px-5 shadow-[0_12px_35px_rgba(15,23,42,0.08)] backdrop-blur-xl transition-colors duration-300 dark:border-blue-400/30 dark:bg-slate-950/55 dark:shadow-[0_12px_35px_rgba(2,6,23,0.35)] sm:px-6">
        <span
          className="mr-4 shrink-0 font-mono text-lg font-bold text-blue-600 dark:text-cyan-300"
          aria-hidden="true"
        >
          &gt;
        </span>

        <div className="relative flex min-w-0 flex-1 items-center overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.span
              key={roles[currentRoleIndex]}
              initial={
                reduceMotion
                  ? false
                  : {
                      opacity: 0,
                      y: 12,
                    }
              }
              animate={
                reduceMotion
                  ? undefined
                  : {
                      opacity: 1,
                      y: 0,
                    }
              }
              exit={
                reduceMotion
                  ? undefined
                  : {
                      opacity: 0,
                      y: -12,
                    }
              }
              transition={{
                duration: 0.45,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="truncate text-base font-semibold text-blue-700 dark:text-cyan-300 sm:text-lg"
            >
              {roles[currentRoleIndex]}
            </motion.span>
          </AnimatePresence>
        </div>

        <motion.span
          aria-hidden="true"
          animate={
            reduceMotion
              ? undefined
              : {
                  opacity: [1, 0, 1],
                }
          }
          transition={{
            duration: 1,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          className="ml-3 h-7 w-px shrink-0 bg-slate-500 dark:bg-slate-400"
        />
      </div>
    </div>
  );
}