import { ArrowRight, ChevronDown, LayoutGrid } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { useState } from "react";

import { projects } from "./projects.data";
import { ProjectCard } from "./ProjectCard";

export function ProjectsSection() {
  const reduceMotion = useReducedMotion();
  const [showAllProjects, setShowAllProjects] = useState(false);

  const visibleProjects = showAllProjects
    ? projects
    : projects.slice(0, 6);

  return (
    <section
      id="projects"
      className="
        relative
       
        bg-transparent
        py-16
        text-slate-950
        dark:text-white
        sm:py-10
        lg:py-16
       
      "
    >
      <div className="mx-auto w-full max-w-[1400px] px-6 sm:px-8 lg:px-12 xl:px-16">
        {/* Section heading */}
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
            My Work
          </span>

          <h2 className="mt-5 text-4xl font-bold tracking-tight text-slate-950 dark:text-white sm:text-5xl lg:text-6xl">
            Featured{" "}
            <span className="text-[#168BFF]">
              Projects
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-4xl text-base leading-8 text-slate-700 dark:text-slate-300 sm:text-lg">
            A collection of projects showcasing AI and machine-learning
            research, DevOps automation, cloud infrastructure, backend
            development, and full-stack applications.
          </p>
        </motion.div>

        {/* Project cards */}
        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {visibleProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
            />
          ))}
        </div>

        {/* Bottom buttons */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          {projects.length > 6 && (
            <button
              type="button"
              onClick={() =>
                setShowAllProjects((current) => !current)
              }
              className="
                inline-flex
                min-h-[52px]
                items-center
                justify-center
                gap-3
                rounded-xl
                border
                border-slate-300
                bg-white
                px-7
                py-3
                text-sm
                font-semibold
                text-slate-900
                shadow-sm
                transition-all
                duration-300

                hover:border-blue-400
                hover:bg-blue-50
                hover:text-blue-600

                dark:border-cyan-400/40
                dark:bg-slate-950/60
                dark:text-white
                dark:hover:border-cyan-300
                dark:hover:bg-cyan-400/10
              "
            >
              <LayoutGrid size={18} />

              {showAllProjects
                ? "Show Less"
                : "More Projects"}

              <ChevronDown
                size={18}
                className={`transition-transform duration-300 ${
                  showAllProjects ? "rotate-180" : ""
                }`}
              />
            </button>
          )}

          <a
            href="/projects"
            className="
              inline-flex
              min-h-[52px]
              items-center
              justify-center
              gap-3
              rounded-xl
              border
              border-blue-500/20
              bg-gradient-to-r
              from-blue-600
              via-indigo-500
              to-purple-600
              px-7
              py-3
              text-sm
              font-semibold
              text-white
              shadow-[0_8px_25px_rgba(59,130,246,0.18)]
              transition-all
              duration-300

              hover:shadow-[0_10px_30px_rgba(59,130,246,0.28)]

              dark:border-blue-400/20
              dark:from-blue-600
              dark:via-indigo-500
              dark:to-purple-600
              dark:text-white
            "
          >
            View All Projects
            <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}