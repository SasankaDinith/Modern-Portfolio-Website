import { X } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useState } from "react";

import type { HonorRecognition } from "./journey.types";

interface HonorRecognitionCardProps {
  honor: HonorRecognition;
  index: number;
}

export function HonorRecognitionCard({
  honor,
  index,
}: HonorRecognitionCardProps) {
  const reduceMotion = useReducedMotion();
  const [isImageOpen, setIsImageOpen] = useState(false);

  return (
    <>
      <motion.article
        initial={
          reduceMotion
            ? false
            : {
                opacity: 0,
                y: 18,
              }
        }
        whileInView={
          reduceMotion
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
          duration: 0.5,
          delay: index * 0.06,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
          group
          grid
          gap-6
          rounded-2xl
          border
          border-slate-300
          bg-white
          p-6
          shadow-[0_10px_30px_rgba(15,23,42,0.05)]
          transition-all
          duration-500

          hover:border-blue-400

          dark:border-slate-800
          dark:bg-black/35
          dark:shadow-none
          dark:hover:border-cyan-400/45

          md:grid-cols-[220px_minmax(0,1fr)]
        "
      >
        {/* Clickable ranking image */}
        {honor.image && (
          <button
            type="button"
            onClick={() => setIsImageOpen(true)}
            className="
              group/image
              relative
              overflow-hidden
              rounded-xl
              border
              border-slate-200
              bg-slate-50
              text-left
              outline-none
              transition-all
              duration-300
              cursor-pointer

              hover:border-blue-400
              focus-visible:ring-2
              focus-visible:ring-blue-500

              dark:border-slate-700
              dark:bg-slate-900/70
              dark:hover:border-cyan-400/50
            "
            aria-label={`Enlarge ${honor.title} image`}
          >
            <img
              src={honor.image}
              alt={honor.title}
              loading="lazy"
              className="
                h-[190px]
                w-full
                object-cover
                transition-all
                duration-500

                group-hover/image:scale-[1.04]
                group-hover/image:brightness-75
              "
            />

            {/* Hover overlay */}
            <div
              className="
                pointer-events-none
                absolute
                inset-0
                flex
                items-center
                justify-center
                bg-slate-950/0
                opacity-0
                transition-all
                duration-300

                group-hover/image:bg-slate-950/45
                group-hover/image:opacity-100
              "
            >
              <span
                className="
                  rounded-full
                  border
                  border-white/30
                  bg-slate-950/70
                  px-4
                  py-2
                  text-sm
                  font-semibold
                  text-white
                  backdrop-blur-md
                "
              >
                Click to enlarge
              </span>
            </div>
          </button>
        )}

        {/* Content */}
        <div className="flex flex-col justify-center">
          <h4 className="text-xl font-bold leading-7 text-slate-950 dark:text-white">
            {honor.title}
          </h4>

          <p className="mt-1 text-sm font-semibold text-blue-600 dark:text-cyan-400">
            Issued by {honor.issuer}
          </p>

          <p className="mt-5 text-sm leading-7 text-slate-700 dark:text-slate-300">
            {honor.description}
          </p>
        </div>
      </motion.article>

      {/* Full screen image modal */}
      <AnimatePresence>
        {isImageOpen && honor.image && (
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            transition={{
              duration: 0.25,
            }}
            onClick={() => setIsImageOpen(false)}
            className="
              fixed
              inset-0
              z-[999]
              flex
              items-center
              justify-center
              bg-slate-950/85
              p-5
              backdrop-blur-md
              

              sm:p-8
            "
            role="dialog"
            aria-modal="true"
            aria-label={`${honor.title} enlarged image`}
          >
            {/* Image container */}
            <motion.div
              initial={
                reduceMotion
                  ? false
                  : {
                      opacity: 0,
                      scale: 0.88,
                      y: 20,
                    }
              }
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              exit={
                reduceMotion
                  ? undefined
                  : {
                      opacity: 0,
                      scale: 0.92,
                      y: 15,
                    }
              }
              transition={{
                duration: 0.35,
                ease: [0.22, 1, 0.36, 1],
              }}
              onClick={(event) => event.stopPropagation()}
              className="
                relative
                max-h-[90vh]
                w-full
                max-w-5xl
                overflow-hidden
                rounded-2xl
                border
                border-white/15
                bg-white
                p-2
                shadow-[0_30px_100px_rgba(0,0,0,0.55)]
                

                dark:bg-slate-950
              "
            >
              <img
                src={honor.image}
                alt={honor.title}
                className="
                  max-h-[85vh]
                  w-full
                  rounded-xl
                  object-contain
                "
              />

              {/* Close button */}
              <button
                type="button"
                onClick={() => setIsImageOpen(false)}
                className="
                  absolute
                  right-4
                  top-4
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/20
                  bg-slate-950/75
                  text-white
                  backdrop-blur-xl
                  transition-all
                  duration-300
                  

                  hover:bg-slate-950
                  hover:scale-105
                "
                aria-label="Close enlarged image"
              >
                <X size={20} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}