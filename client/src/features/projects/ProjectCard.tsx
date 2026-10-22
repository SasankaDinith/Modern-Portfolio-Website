
import {
  FaExternalLinkAlt,
  FaGithub,
} from "react-icons/fa";

import {
  motion,
  useReducedMotion,
} from "motion/react";

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

  // Limit animation delays for large project lists.
  const animationDelay =
    Math.min(index, 4) * 0.04;

  return (
    <motion.article
      initial={
        reduceMotion
          ? false
          : {
              opacity: 0,
              y: 16,
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
        amount: 0.1,
      }}
      transition={{
        duration: 0.35,
        delay: animationDelay,
        ease: "easeOut",
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

        transition-colors
        duration-300

        hover:border-blue-400

        dark:border-slate-800
        dark:bg-slate-950/60
        dark:shadow-[0_15px_40px_rgba(0,0,0,0.28)]
        dark:hover:border-cyan-400/45
      "
    >
      {/* =========================
          PROJECT IMAGE
      ========================= */}

      <div className="
        relative
        aspect-[16/9]
        overflow-hidden
      ">
        <img
          src={project.image}
          alt={`${project.title} project preview`}
          width={800}
          height={450}
          loading="lazy"
          decoding="async"
          className="
            h-full
            w-full
            object-cover

            transition-transform
            duration-500
            ease-out

            group-hover:scale-[1.04]

            motion-reduce:transform-none
          "
        />

        {/* =========================
            CATEGORY BADGE
        ========================= */}

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

        {/* =========================
            OPTIMIZED DARK OVERLAY

            Uses background color
            instead of expensive blur.

            Touch devices keep a subtle
            overlay for visible buttons.
        ========================= */}

        <div
          className="
            pointer-events-none
            absolute
            inset-0
            z-10

            bg-slate-950/40

            transition-colors
            duration-300

            [@media(hover:hover)]:bg-slate-950/0

            [@media(hover:hover)]:group-hover:bg-slate-950/65

            [@media(hover:hover)]:group-focus-within:bg-slate-950/65
          "
        />

        {/* =========================
            PROJECT ACTION BUTTONS
        ========================= */}

        <div
          className="
            absolute
            inset-0
            z-20

            flex
            items-center
            justify-center
          "
        >
          <div
            className="
              flex
              translate-y-0
              flex-wrap
              items-center
              justify-center
              gap-3
              opacity-100

              transition-[opacity,transform]
              duration-300
              ease-out

              [@media(hover:hover)]:translate-y-4
              [@media(hover:hover)]:opacity-0

              [@media(hover:hover)]:group-hover:translate-y-0
              [@media(hover:hover)]:group-hover:opacity-100

              [@media(hover:hover)]:group-focus-within:translate-y-0
              [@media(hover:hover)]:group-focus-within:opacity-100
            "
          >
            {/* Live Demo */}

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View live demo of ${project.title}`}
                className="
                  inline-flex
                  items-center
                  gap-2

                  rounded-xl

                  bg-gradient-to-r
                  from-blue-600
                  to-cyan-500

                  px-4
                  py-2.5

                  text-sm
                  font-semibold
                  text-white

                  shadow-lg

                  transition-transform
                  duration-200

                  hover:scale-105

                  focus-visible:outline
                  focus-visible:outline-2
                  focus-visible:outline-offset-2
                  focus-visible:outline-cyan-400

                  motion-reduce:transform-none
                "
              >
                <FaExternalLinkAlt
                  size={16}
                  aria-hidden="true"
                />

                Live Demo
              </a>
            )}

            {/* GitHub */}

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View GitHub repository of ${project.title}`}
                className="
                  inline-flex
                  items-center
                  gap-2

                  rounded-xl

                  border
                  border-white/30

                  bg-slate-950/90

                  px-4
                  py-2.5

                  text-sm
                  font-semibold
                  text-white

                  transition-[background-color,border-color,transform]
                  duration-200

                  hover:border-cyan-400
                  hover:bg-slate-900
                  hover:scale-105

                  focus-visible:outline
                  focus-visible:outline-2
                  focus-visible:outline-offset-2
                  focus-visible:outline-cyan-400

                  motion-reduce:transform-none
                "
              >
                <FaGithub
                  size={16}
                  aria-hidden="true"
                />

                GitHub
              </a>
            )}
          </div>
        </div>
      </div>

      {/* =========================
          PROJECT CONTENT
      ========================= */}

      <div className="
        flex
        flex-1
        flex-col
        p-5
      ">
        {/* Project title */}

        <h3
          className="
            space-grotesk-bold
            line-clamp-2
            text-xl
            font-bold
            leading-7
            text-slate-950
            dark:text-white
          "
        >
          {project.title}
        </h3>

        {/* Project description */}

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

        {/* =========================
            TECHNOLOGIES
        ========================= */}

        {project.technologies &&
          project.technologies.length > 0 && (
            <div
              className="
                mt-4
                flex
                flex-wrap
                gap-2
              "
            >
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

              {project.technologies.length >
                4 && (
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
                  +
                  {project.technologies.length -
                    4}
                </span>
              )}
            </div>
          )}
      </div>
    </motion.article>
  );
}
