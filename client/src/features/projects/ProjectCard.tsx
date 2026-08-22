import {
  FaExternalLinkAlt,
  FaGithub,
} from "react-icons/fa";
import { motion, useReducedMotion } from "motion/react";

import type { Project } from "./projects.types";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({
  project,
  index,
}: ProjectCardProps) {
  const reduceMotion = useReducedMotion();

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
        duration: 0.5,
        delay: index * 0.06,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="
        group
        flex
        h-full
        flex-col
        overflow-hidden
        rounded-2xl
        border
        border-slate-300
        bg-white
        shadow-[0_10px_30px_rgba(15,23,42,0.06)]
        transition-all
        duration-500

        hover:border-blue-400

        dark:border-slate-800
        dark:bg-slate-950/60
        dark:shadow-[0_15px_40px_rgba(0,0,0,0.28)]
        dark:hover:border-cyan-400/45
      "
    >
      {/* Image area */}
      <div className="relative aspect-[16/9] overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          className="
            h-full
            w-full
            object-cover
            transition-all
            duration-700
            ease-out

            group-hover:scale-[1.04]
            group-hover:blur-[3px]
          "
        />

        {/* Category badge */}
        <span
          className="
            absolute
            left-5
            top-5
            z-30
            rounded-full
            border
            border-blue-300
            bg-white/90
            px-4
            py-2
            text-xs
            font-semibold
            text-blue-700
            backdrop-blur-md
            transition-opacity
            duration-300

            group-hover:opacity-50

            dark:border-cyan-400/30
            dark:bg-slate-950/80
            dark:text-cyan-300
          "
        >
          {project.category}
        </span>

        {/* Hover dark overlay */}
        <div
          className="
            pointer-events-none
            absolute
            inset-0
            z-10
            bg-slate-950/0
            transition-all
            duration-500

            group-hover:bg-slate-950/65
          "
        />

        {/* Blur overlay */}
        <div
          className="
            pointer-events-none
            absolute
            inset-0
            z-10
            opacity-0
            transition-all
            duration-500

            group-hover:opacity-100
            group-hover:backdrop-blur-[2px]
          "
        />

        {/* Hover buttons */}
        <div className="absolute inset-0 z-20 flex items-center justify-center">
          <div
            className="
              flex
              translate-y-4
              flex-wrap
              items-center
              justify-center
              gap-4
              opacity-0
              transition-all
              duration-500
              ease-out

              group-hover:translate-y-0
              group-hover:opacity-100
            "
          >
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-xl
                  bg-gradient-to-r
                  from-blue-600
                  to-cyan-500
                  px-5
                  py-3
                  text-sm
                  font-semibold
                  text-white
                  shadow-lg
                  transition-transform
                  duration-300

                  hover:scale-105
                "
              >
                <FaExternalLinkAlt size={17} />
                Live Demo
              </a>
            )}

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-xl
                  border
                  border-white/30
                  bg-slate-950/85
                  px-5
                  py-3
                  text-sm
                  font-semibold
                  text-white
                  backdrop-blur-xl
                  transition-all
                  duration-300

                  hover:border-cyan-400
                  hover:bg-slate-900
                "
              >
                <FaGithub size={17} />
                GitHub
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Card content */}
<div className="flex flex-1 flex-col p-5">
  <h3 className="line-clamp-2 text-xl font-bold leading-7 text-slate-950 dark:text-white">
    {project.title}
  </h3>

  <p
    className="
      mt-3
      line-clamp-2
      text-sm
      leading-6
      text-slate-700
      dark:text-slate-300
    "
  >
    {project.description}
  </p>

  {/* Technologies */}
  {project.technologies &&
    project.technologies.length > 0 && (
      <div className="mt-4 flex flex-wrap gap-2">
        {project.technologies
          .slice(0, 4)
          .map((technology) => (
            <span
              key={technology}
              className="
                rounded-full
                border
                border-blue-200
                bg-blue-50
                px-3
                py-1.5
                text-xs
                font-semibold
                text-blue-700

                dark:border-cyan-400/30
                dark:bg-cyan-400/10
                dark:text-cyan-300
              "
            >
              {technology}
            </span>
          ))}

        {project.technologies.length > 4 && (
          <span
            className="
              rounded-full
              border
              border-purple-200
              bg-purple-50
              px-3
              py-1.5
              text-xs
              font-semibold
              text-purple-700

              dark:border-purple-400/30
              dark:bg-purple-400/10
              dark:text-purple-300
            "
          >
            +{project.technologies.length - 4}
          </span>
        )}
      </div>
    )}
</div>
    </motion.article>
  );
}