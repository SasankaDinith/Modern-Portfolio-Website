import type { LucideIcon } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

interface ExpertiseCardProps {
  title: string;
  description: string;
  technologies?: string[];
  icon: LucideIcon;
  index: number;
}

export function ExpertiseCard({
  title,
  description,
  technologies = [],
  icon: Icon,
  index,
}: ExpertiseCardProps) {
  const reduceMotion = useReducedMotion();

  const isBlue = index % 2 === 0;

  return (
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
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="
  group
  min-h-[190px]
  rounded-2xl
  border
  border-slate-300
  bg-white
  p-6
  shadow-[0_8px_24px_rgba(15,23,42,0.05)]
  transition-all
  duration-500

  hover:border-blue-400
  hover:bg-blue-50/40

  dark:border-slate-800
  dark:bg-black/40
  dark:shadow-[0_12px_35px_rgba(0,0,0,0.25)]

  dark:hover:border-cyan-400/45
  dark:hover:bg-blue-950/20
      "
    >
      {/* Icon and title */}
      <div className="flex items-center gap-4">
        <div
          className={`
            flex h-14 w-14 shrink-0 items-center justify-center
            rounded-2xl border
            bg-slate-50
            transition-colors duration-300

            dark:bg-slate-900

            ${
              isBlue
                ? "border-blue-500/60 text-blue-600 dark:border-blue-500/40 dark:text-blue-400"
                : "border-cyan-500/60 text-cyan-600 dark:border-cyan-400/40 dark:text-cyan-400"
            }
          `}
        >
          <Icon size={27} strokeWidth={1.8} />
        </div>

        <h3
          className={`
            text-xl font-bold sm:text-2xl

            ${
              isBlue
                ? "text-blue-600 dark:text-blue-400"
                : "text-cyan-600 dark:text-cyan-400"
            }
          `}
        >
          {title}
        </h3>
      </div>

      {/* Description */}
      <p
        className="
          mt-7
          text-base
          leading-8
          text-slate-800

          dark:text-slate-300
        "
      >
        {description}
      </p>

      {/* Technologies */}
      {technologies.length > 0 && (
        <div className="mt-6 flex flex-wrap gap-2.5">
          {technologies.map((technology) => (
            <span
              key={technology}
              className="
                rounded-full
                border
                border-slate-300
                bg-slate-100
                px-3
                py-1.5
                text-xs
                font-medium
                text-slate-800

                dark:border-slate-700
                dark:bg-slate-900/80
                dark:text-slate-300
              "
            >
              {technology}
            </span>
          ))}
        </div>
      )}
    </motion.article>
  );
}