import { CalendarDays } from "lucide-react";

import {
  motion,
  useReducedMotion,
} from "motion/react";

import type { LeadershipExperience } from "./leadership.types";

type Props = {
  experience: LeadershipExperience;
};

export function LeadershipCard({
  experience,
}: Props) {
  const reduceMotion =
    useReducedMotion();

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

  whileHover={
    reduceMotion
      ? undefined
      : {
          y: -6,
          scale: 1.01,
        }
  }

  viewport={{
    once: true,
    amount: 0.25,
  }}

  transition={{
    duration: 0.75,
    ease: [0.22, 1, 0.36, 1],
  }}

  className="
    relative
    flex
    min-h-[285px]
    flex-col
    overflow-hidden

    rounded-[26px]
    border
    border-slate-300

    bg-white
    p-7



    transition-colors
    duration-300

    hover:border-blue-400/60
    hover:shadow-[0_16px_40px_rgba(37,99,235,0.10)]

    dark:border-slate-800
    dark:bg-[#02040b]
    dark:shadow-none



  "
>
      {/* Subtle background effect */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0

          bg-gradient-to-br
          from-transparent
          via-transparent
          to-blue-500/[0.015]

          dark:to-cyan-400/[0.015]
        "
        aria-hidden="true"
      />

      <div className="relative z-10">
        {/* Top */}
        <div
          className="
            flex
            items-start
            gap-5
          "
        >
          {/* Custom image */}
         <div
  className="
    flex
    h-[75px]
    w-[75px]
    shrink-0
    items-center
    justify-center
    overflow-hidden
    rounded-[18px]
    border
    border-cyan-400/35
    bg-[#07111f]
    p-0
  "
>
            <img
              src={experience.image}
              alt={`${experience.title} icon`}
              className="
      h-full
      w-full
      object-contain
      rounded-md
    "
            />
          </div>

          {/* Information */}
          <div className="min-w-0 pt-1">
            <h3
              className="
                space-grotesk-bold
                text-xl
                font-bold
                leading-tight
                tracking-[-0.025em]

                text-[#168BFF]

                dark:text-[#35D6FF]

                sm:text-[22px]
              "
            >
              {experience.title}
            </h3>

            <p
              className="
                mt-2

                text-base
                font-semibold
                text-slate-900

                dark:text-white

                sm:text-[17px]
              "
            >
              {experience.organization}
            </p>

            <div
              className="
                mt-3
                flex
                items-center
                gap-2.5
              "
            >
              <CalendarDays
                size={17}
                strokeWidth={1.8}
                className="
                  text-blue-600
                  dark:text-cyan-300
                "
                aria-hidden="true"
              />

              <span
                className="
                  text-sm
                  text-slate-500

                  dark:text-slate-400

                  sm:text-[15px]
                "
              >
                {experience.period}
              </span>
            </div>
          </div>
        </div>

        {/* Description */}
        <p
          className="
            mt-7

            text-[15px]
            leading-7
            text-slate-600

            dark:text-slate-300

            sm:text-base
          "
        >
          {experience.description}
        </p>
      </div>
    </motion.article>
  );
}
