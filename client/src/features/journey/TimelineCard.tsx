import { motion, useReducedMotion } from "motion/react";

import type { TimelineSection } from "./journey.types";

interface TimelineCardProps {
  section: TimelineSection;
  index: number;
}

export function TimelineCard({
  section,
  index,
}: TimelineCardProps) {
  const reduceMotion = useReducedMotion();

  const Icon = section.icon;

  return (
    <motion.article
      initial={
        reduceMotion
          ? false
          : {
              opacity: 0,
              y: 20,
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
        amount: 0.15,
      }}
      transition={{
        duration: 0.55,
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="
        rounded-3xl
        border
        border-slate-300
        bg-white
        p-7
        shadow-[0_10px_30px_rgba(15,23,42,0.05)]

        dark:border-blue-400/35
        dark:bg-slate-950/35
        dark:shadow-none

        sm:p-8
      "
    >
      {/* Card heading */}
      <div className="mb-7 flex items-center gap-4">
        <div
          className="
            flex
            h-14
            w-14
            shrink-0
            items-center
            justify-center
            rounded-2xl
            border
            border-blue-500/50
            bg-blue-50
            text-blue-600

            dark:border-cyan-400/50
            dark:bg-gradient-to-br
            dark:from-blue-900/70
            dark:to-purple-900/70
            dark:text-white
          "
        >
          <Icon size={25} />
        </div>

        <h3 className="text-2xl font-bold text-slate-950 dark:text-white">
          {section.title}
        </h3>
      </div>

      {/* Timeline */}
      <div className="space-y-4">
        {section.entries.map((entry, entryIndex) => {
          const isLastItem =
            entryIndex === section.entries.length - 1;

          return (
            <div
              key={`${entry.period}-${entry.title}`}
              className="group relative grid grid-cols-[30px_minmax(0,1fr)] gap-5"
            >
              {/* Separate timeline for each entry */}
              <div className="relative flex justify-center">
                {/* Starting circle */}
                <span
                  className="
                    relative
                    z-10
                    mt-1
                    h-5
                    w-5
                    shrink-0
                    rounded-full
                    border-2
                    border-blue-500
                    bg-white

                    transition-all
                    duration-300

                    group-hover:border-blue-600
                    group-hover:bg-blue-600
                    group-hover:shadow-[0_0_12px_rgba(37,99,235,0.35)]

                    dark:border-cyan-400
                    dark:bg-slate-950
                    dark:group-hover:border-blue-400
                    dark:group-hover:bg-blue-500
                    dark:group-hover:shadow-[0_0_14px_rgba(59,130,246,0.5)]
                  "
                />

                {/* Separate vertical line */}
                <span
                  className={`
                    absolute
                    left-1/2
                    top-6
                    w-[2px]
                    -translate-x-1/2
                    bg-blue-400

                    dark:bg-gradient-to-b
                    dark:from-cyan-400
                    dark:to-blue-600

                    ${
                      isLastItem
                        ? "h-[calc(100%-1.5rem)]"
                        : "h-[calc(100%-1.5rem)]"
                    }
                  `}
                />
              </div>

              {/* Content */}
              <div className={!isLastItem ? "pb-4" : "pb-1"}>
                <p className="text-sm font-semibold text-blue-600 dark:text-cyan-400">
                  {entry.period}
                </p>

                <h4 className="mt-2 text-lg font-bold leading-7 text-slate-950 dark:text-white">
                  {entry.title}
                </h4>

                <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                  {entry.organization}
                </p>

                {entry.description && (
                  <ul className="mt-4 space-y-2.5">
                    {entry.description.map((item) => (
                      <li
                        key={item}
                        className="flex gap-3 text-sm leading-7 text-slate-800 dark:text-slate-300"
                      >
                        <span className="mt-[11px] h-1.5 w-1.5 shrink-0 rounded-full bg-blue-600 dark:bg-blue-400" />

                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {entry.tags && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {entry.tags.map((tag) => (
                      <span
                        key={tag}
                        className="
                          rounded-full
                          border
                          border-blue-300
                          bg-blue-50
                          px-3
                          py-1.5
                          text-xs
                          font-semibold
                          text-blue-700

                          dark:border-cyan-400/40
                          dark:bg-cyan-400/10
                          dark:text-cyan-300
                        "
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

              
              </div>
            </div>
          );
        })}
      </div>
    </motion.article>
  );
}