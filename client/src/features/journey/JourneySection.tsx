import { Award, Trophy } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { useState } from "react";


import {
  certifications,
  education,
  honorsRecognitions,
  workExperience,
} from "./journey.data";

import { HonorRecognitionCard } from "./HonorRecognitionCard";

import { TimelineCard } from "./TimelineCard";
import { CertificationCard } from "./CertificationCard";

export function JourneySection() {
  const reduceMotion = useReducedMotion();
  const [showAllCertifications, setShowAllCertifications] =
    useState(false);

  const visibleCertifications = showAllCertifications
    ? certifications
    : certifications.slice(0, 6);

  return (
   <section
  id="journey"
  className="
    relative
    
    bg-transparent
    pb-16
    pt-10
    text-slate-950
    dark:text-white
    sm:pb-20
    sm:pt-16
    lg:pb-24
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
            amount: 0.3,
          }}
          transition={{
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mx-auto mb-10 max-w-3xl text-center"
        >
          <span
            className="
              inline-flex
              rounded-full
              border
              border-slate-400
              bg-slate-100
              px-5
              py-2
              text-sm
              font-semibold
              text-slate-800

              dark:border-cyan-400/40
              dark:bg-slate-950/70
              dark:text-slate-300
              dark:shadow-[0_0_28px_rgba(34,211,238,0.1)]
            "
          >
            My Journey
          </span>

          <h2 className="mt-5 text-4xl font-bold tracking-tight text-slate-950 dark:text-white sm:text-5xl lg:text-6xl">
            Professional{" "}
            <span className="text-[#168BFF]">
              Journey
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-base leading-8 text-slate-700 dark:text-slate-300 sm:text-lg">
            A snapshot of my professional experience, research work,
            and educational background.
          </p>
        </motion.div>

        {/* Timeline cards */}
        <div className="grid gap-6 lg:grid-cols-2">
          <TimelineCard
            section={workExperience}
            index={0}
          />

          <TimelineCard
            section={education}
            index={1}
          />
        </div>
{/* Honors & Recognition */}
<div
  className="
    mt-7
    rounded-3xl
    border
    border-slate-300
    bg-white
    p-6
    shadow-[0_10px_30px_rgba(15,23,42,0.05)]

    dark:border-blue-400/25
    dark:bg-slate-950/35
    dark:shadow-none

    sm:p-7
  "
>
  <div className="mb-7 flex items-center gap-4">
    <div
      className="
        flex
        h-14
        w-14
        items-center
        justify-center
        rounded-2xl
        border
        border-blue-500/50
        bg-blue-50
        text-blue-600

        dark:border-cyan-400/50
        dark:bg-blue-950/60
        dark:text-white
      "
    >
      <Trophy size={26} />
    </div>

    <div>
      <h3 className="text-2xl font-bold text-slate-950 dark:text-white">
        Honors & Recognition
      </h3>

      <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
        Recognition for professional impact, technical contribution,
        and community engagement.
      </p>
    </div>
  </div>

  <div className="grid gap-5">
    {honorsRecognitions.map((honor, index) => (
      <HonorRecognitionCard
        key={honor.id}
        honor={honor}
        index={index}
      />
    ))}
  </div>
</div>
        {/* Certifications */}
        <div
         className="
  mt-7
  rounded-3xl
  border
  border-slate-300
  bg-white
  p-6
  shadow-[0_10px_30px_rgba(15,23,42,0.05)]

  dark:border-blue-400/25
  dark:bg-slate-950/35
  dark:shadow-none

  sm:p-7
"
        >
          <div className="mb-7 flex items-center gap-4">
            <div
              className="
                flex
                h-14
                w-14
                items-center
                justify-center
                rounded-2xl
                border
                border-blue-500/60
                bg-blue-50
                text-blue-600

                dark:border-cyan-400/50
                dark:bg-blue-950/60
                dark:text-white
              "
            >
              <Award size={26} />
            </div>

            <h3 className="text-2xl font-bold text-slate-950 dark:text-white">
              Certifications
            </h3>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {visibleCertifications.map(
              (certification, index) => (
                <CertificationCard
                  key={certification.id}
                  certification={certification}
                  index={index}
                />
              ),
            )}
          </div>
        </div>

        {/* View all button */}
        {certifications.length > 6 && (
          <div className="mt-7 flex justify-center">
            <button
              type="button"
              onClick={() =>
                setShowAllCertifications(
                  (current) => !current,
                )
              }
              className="
                rounded-xl
                border
                border-slate-900
                bg-white
                px-7
                py-3
                text-sm
                font-semibold
                text-slate-950
                transition-all
                duration-300
                cursor-pointer

                hover:border-blue-500
                hover:bg-blue-50
                hover:text-blue-600

                dark:border-cyan-400/50
                dark:bg-slate-950/60
                dark:text-white
                dark:hover:border-cyan-300
                dark:hover:bg-cyan-400/10
              "
            >
              {showAllCertifications
                ? "Show Less"
                : "View All Certifications"}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}