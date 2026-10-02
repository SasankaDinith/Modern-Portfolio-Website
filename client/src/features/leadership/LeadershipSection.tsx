import {
  motion,
  useReducedMotion,
} from "motion/react";

import { LeadershipCard } from "./LeadershipCard";
import { leadershipExperiences } from "./leadership.data";

export function LeadershipSection() {
  const reduceMotion =
    useReducedMotion();

  return (
    <section
      id="leadership"
      className="
        relative
        bg-transparent

        py-16

        text-slate-950

        dark:text-white

        lg:py-14
      "
    >
      <div
        className="
          mx-auto
          w-full
          max-w-[1500px]

          px-6

          md:px-10

          lg:px-16

          2xl:px-24
        "
      >
        {/* =========================
            SECTION HEADING
        ========================== */}

        <motion.div
          initial={
            reduceMotion
              ? false
              : {
                  opacity: 0,
                  y: 24,
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
            amount: 0.5,
          }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            mx-auto
            mb-12
            max-w-4xl
            text-center
          "
        >
          {/* Badge */}
          <div
            className="
              mx-auto
              mb-5
              inline-flex
              items-center
              gap-2

              rounded-full

              border
              border-slate-300

              bg-white/75

              px-5
              py-2

              text-sm
              font-medium
              text-slate-800

              shadow-sm
              backdrop-blur-xl

              dark:border-cyan-400/35
              dark:bg-slate-950/60
              dark:text-slate-200
              dark:shadow-[0_0_28px_rgba(34,211,238,0.08)]
            "
          >
         

            Beyond Technology
          </div>

          {/* Heading */}
          <h2
            className="
              space-grotesk-bold
              text-4xl
              font-bold
              tracking-[-0.035em]

              text-slate-950

              dark:text-white

              sm:text-5xl

              lg:text-6xl
            "
          >
            Leadership &amp;{" "}

            <span className="text-[#168BFF]">
              Volunteering
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
            Building communities, sharing
            knowledge, and contributing beyond
            technical projects through
            leadership and service.
          </p>
        </motion.div>

        {/* =========================
            CARDS
        ========================== */}

        <div
          className="
            grid
            items-stretch
            gap-7

            md:grid-cols-2

            xl:grid-cols-3
          "
        >
          {leadershipExperiences.map(
            (experience) => (
              <LeadershipCard
                key={experience.id}
                experience={experience}
              />
            ),
          )}
        </div>
      </div>
    </section>
  );
}
