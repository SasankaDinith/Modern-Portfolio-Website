import { motion, useReducedMotion } from "motion/react";

import { expertiseItems } from "./about.data";
import { ExpertiseCard } from "./ExpertiseCard";

export function AboutSection() {
  const reduceMotion = useReducedMotion();

  return (
<section
  id="about"
  className="
    relative
   
    bg-transparent
    pb-12
    pt-6
    text-slate-950
    dark:text-white

    sm:pb-10
    sm:pt-6

    lg:pb-16
    lg:pt-16
  "
>
      <div className="mx-auto w-full max-w-[1400px] px-6 sm:px-8 lg:px-12 xl:px-16">
        {/* Heading area */}
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
            amount: 0.3,
          }}
          transition={{
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mx-auto max-w-3xl text-center"
        >
          {/* Section badge */}
          <span
            className="
              inline-flex
              items-center
              rounded-full
              border
              border-slate-300
              bg-slate-100
              px-5
              py-2
              text-sm
              font-semibold
              text-slate-800

              dark:border-cyan-400/30
              dark:bg-slate-900/80
              dark:text-slate-300
              dark:shadow-[0_0_28px_rgba(34,211,238,0.1)]
            "
          >
            About Me
          </span>

          {/* Main heading */}
          <h2
            className="
              mt-6
              text-4xl
              font-bold
              tracking-tight
              text-slate-950

              dark:text-white

              sm:text-5xl
              lg:text-6xl
            "
          >
            Technical{" "}
            <span className="text-[#168BFF]">
              Expertise
            </span>
          </h2>

          {/* Description */}
          <p
            className="
              mx-auto
              mt-6
              max-w-3xl
              text-base
              leading-8
              text-slate-700

              dark:text-slate-300

              sm:text-lg
            "
          >
            I build reliable cloud infrastructure, automate delivery pipelines,
            and optimize systems for performance and scale. I explore AI-driven
            engineering to solve complex problems and ship impactful solutions.
          </p>
        </motion.div>

        {/* Expertise cards */}
        <div className="mx-auto mt-12 grid w-full gap-6 md:grid-cols-2">
          {expertiseItems.map((item, index) => (
            <ExpertiseCard
              key={item.title}
              title={item.title}
              description={item.description}
             
              icon={item.icon}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}