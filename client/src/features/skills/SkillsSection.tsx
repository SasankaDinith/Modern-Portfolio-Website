import { motion, useReducedMotion } from "motion/react";

import {
  skillCategories,
  skills,
} from "./skills.data";

import { SkillBadge } from "./SkillBadge";
import { SkillCategoryCard } from "./SkillCategoryCard";

export function SkillsSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="skills"
      className="
        relative
        
        bg-transparent
        py-16
        text-slate-950
        dark:text-white
        sm:py-20
        lg:py-16
      "
    >
      <div className="mx-auto w-full max-w-[1400px] px-6 sm:px-8 lg:px-12 xl:px-16">
        {/* Heading */}
        <motion.div
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
            amount: 0.25,
          }}
          transition={{
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mx-auto max-w-4xl text-center"
        >
          <span
            className="
              inline-flex
              rounded-full
              border
              border-slate-300
              bg-white/75
              px-5
              py-2
              text-sm
              font-semibold
              text-slate-800
              backdrop-blur-md

              dark:border-cyan-400/40
              dark:bg-slate-950/70
              dark:text-slate-300
              dark:shadow-[0_0_28px_rgba(34,211,238,0.1)]
            "
          >
            My Skills
          </span>

          <h2 className="mt-5 text-4xl font-bold tracking-tight text-slate-950 dark:text-white sm:text-5xl lg:text-6xl">
            Technical{" "}
            <span className="text-[#168BFF]">
              Expertise
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-4xl text-base leading-8 text-slate-700 dark:text-slate-300 sm:text-lg">
            Building reliable cloud infrastructure, automating delivery
            pipelines, and solving engineering challenges with modern DevOps,
            cloud-native, and AI-assisted tools.
          </p>
        </motion.div>

        {/* Individual skills */}
        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
          {skills.map((skill, index) => (
            <SkillBadge
              key={skill.id}
              skill={skill}
              index={index}
            />
          ))}
        </div>

        {/* Skill categories */}
        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {skillCategories.map((category, index) => (
            <SkillCategoryCard
              key={category.id}
              category={category}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}