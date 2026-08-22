import { ExternalLink } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

import type { Certification } from "./journey.types";

interface CertificationCardProps {
  certification: Certification;
  index: number;
}

export function CertificationCard({
  certification,
  index,
}: CertificationCardProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.article
      initial={
        reduceMotion
          ? false
          : {
              opacity: 0,
              y: 15,
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
        duration: 0.45,
        delay: index * 0.05,
        ease: [0.22, 1, 0.36, 1],
      }}
     className="
  group
  flex
  min-h-[160px]
  flex-col
  rounded-2xl
  border
  border-slate-300
  bg-white
  p-6
  shadow-[0_8px_25px_rgba(15,23,42,0.05)]
  transition-all
  duration-300

  hover:border-blue-400
  hover:bg-blue-50/60

  dark:border-slate-700
  dark:bg-black/35
  dark:shadow-none
  dark:hover:border-cyan-400/45
  dark:hover:bg-blue-950/20
"
    >
      <h3 className="text-lg font-bold leading-7 text-slate-950 dark:text-white">
        {certification.title}
      </h3>

      <p className="mt-2 text-sm font-semibold text-cyan-600 dark:text-cyan-400">
        {certification.issuer}
      </p>

      <a
        href={certification.verificationUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="
          mt-auto
          inline-flex
          w-fit
          items-center
          gap-2
          pt-5
          text-sm
          font-semibold
          text-blue-600
          transition-colors
          duration-300

          hover:text-cyan-600
          dark:text-blue-400
          dark:hover:text-cyan-300
        "
      >
        View Certificate

        <ExternalLink
          size={15}
          aria-hidden="true"
        />
      </a>
    </motion.article>
  );
}