import { motion, useReducedMotion } from "motion/react";

import type { Skill } from "./skills.types";

interface SkillBadgeProps {
  skill: Skill;
  index: number;
}

export function SkillBadge({
  skill,
  index,
}: SkillBadgeProps) {
  const reduceMotion = useReducedMotion();

  const Icon = skill.icon;

  return (
    <motion.article
      initial={
        reduceMotion
          ? false
          : {
              opacity: 0,
              y: 14,
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
        duration: 0.4,
        delay: index * 0.025,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="
        group
        flex
        min-h-[100px]
        flex-col
        items-center
        justify-center
        rounded-2xl
        border
        border-slate-300
        bg-white
        px-4
        py-5
        text-center
        shadow-[0_8px_24px_rgba(15,23,42,0.05)]
        transition-all
        duration-300

        hover:border-cyan-400
        hover:bg-blue-50/60

        dark:border-slate-800
        dark:bg-black/40
        dark:shadow-none
        dark:hover:border-cyan-400/50
        dark:hover:bg-blue-950/25
      "
    >
      <Icon
        className="
          h-10
          w-10
          text-slate-700
          transition-colors
          duration-300

          group-hover:text-cyan-600

          dark:text-slate-100
          dark:group-hover:text-cyan-300
        "
        aria-hidden="true"
      />

      <h3
        className="
          mt-4
          text-sm
          font-semibold
          text-slate-900

          dark:text-white
        "
      >
        {skill.name}
      </h3>
    </motion.article>
  );
}