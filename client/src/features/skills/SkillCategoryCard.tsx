import { motion, useReducedMotion } from "motion/react";

import type { SkillCategory } from "./skills.types";

interface SkillCategoryCardProps {
  category: SkillCategory;
  index: number;
}

export function SkillCategoryCard({
  category,
  index,
}: SkillCategoryCardProps) {
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
        delay: index * 0.06,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="
        group
        min-h-[190px]
        rounded-2xl
        border
        border-slate-300
        bg-white
        p-7
        shadow-[0_10px_30px_rgba(15,23,42,0.05)]
        transition-all
        duration-500

        hover:border-blue-400
        hover:bg-blue-50/40

        dark:border-slate-800
        dark:bg-black/40
        dark:shadow-none
        dark:hover:border-cyan-400/45
        dark:hover:bg-blue-950/20
      "
    >
      <h3
        className={`
          text-xl
          font-bold
          sm:text-2xl

          ${
            isBlue
              ? "text-blue-600 dark:text-blue-400"
              : "text-cyan-600 dark:text-cyan-400"
          }
        `}
      >
        {category.title}
      </h3>

      <div className="mt-6 flex flex-wrap gap-3">
        {category.technologies.map((technology) => (
          <span
            key={technology}
            className="
              rounded-full
              border
              border-blue-200
              bg-blue-50
              px-4
              py-2
              text-sm
              font-medium
              text-blue-700

              transition-colors
              duration-300

              hover:border-blue-400
              hover:bg-blue-100

              dark:border-cyan-400/30
              dark:bg-cyan-400/10
              dark:text-cyan-300

              dark:hover:border-cyan-300
              dark:hover:bg-cyan-400/15
            "
          >
            {technology}
          </span>
        ))}
      </div>
    </motion.article>
  );
}