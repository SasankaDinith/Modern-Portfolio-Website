import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "motion/react";

import {
  useEffect,
  useState,
} from "react";

const rotatingWords = [
  "build",
  "automate",
  "scale",
  "architect",
];

export function FooterStatement() {
  const reduceMotion = useReducedMotion();

  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (reduceMotion) return;

    const interval = window.setInterval(
      () => {
        setIndex(
          (current) =>
            (current + 1) %
            rotatingWords.length,
        );
      },
      2600,
    );

    return () => {
      window.clearInterval(interval);
    };
  }, [reduceMotion]);

  return (
    <div>
      <div
        className="
          flex
          flex-wrap
          items-baseline
          gap-x-3

          text-[42px]
          font-medium
          leading-[1.05]
          tracking-[-0.045em]

          text-white

          sm:text-[52px]
          lg:text-[64px]
          xl:text-[72px]
        "
      >
        <span>I</span>

        <span className="relative inline-flex min-w-[220px] sm:min-w-[300px]">
          <AnimatePresence mode="wait">
            <motion.span
              key={rotatingWords[index]}
              initial={
                reduceMotion
                  ? false
                  : {
                      opacity: 0,
                      y: 18,
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
                      y: -18,
                    }
              }
              transition={{
                duration: 0.35,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                text-[#4D7CFE]
              "
            >
              {rotatingWords[index]}
            </motion.span>
          </AnimatePresence>
        </span>
      </div>

      <h2
        className="
          mt-1

          text-[42px]
          font-medium
          leading-[1.05]
          tracking-[-0.045em]

          text-slate-400

          sm:text-[52px]
          lg:text-[64px]
          xl:text-[72px]
        "
      >
        scalable digital solutions.
      </h2>
    </div>
  );
}