import { Check } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

import type { Service } from "./services.types";

interface ServiceCardProps {
  service: Service;
  index: number;
}

export function ServiceCard({
  service,
  index,
}: ServiceCardProps) {
  const reduceMotion = useReducedMotion();
  const Icon = service.icon;

  return (
    <motion.article
      initial={
        reduceMotion
          ? false
          : {
              opacity: 0,
              y: 18,
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
        rounded-2xl
        border
        border-slate-300
        bg-white
        p-7
        shadow-[0_10px_30px_rgba(15,23,42,0.05)]
        transition-all
        duration-500

        hover:border-blue-400
        hover:bg-blue-50/40

        dark:border-slate-800
        dark:bg-[#08050f]/90
        dark:shadow-none
        dark:hover:border-blue-500/65
        dark:hover:bg-[linear-gradient(135deg,rgba(9,20,48,0.96),rgba(9,31,51,0.92))]
      "
    >
      <div className="flex items-center gap-5">
        <div
          className="
            flex
            h-16
            w-16
            shrink-0
            items-center
            justify-center
            rounded-2xl
            border
            border-cyan-400
            bg-blue-50
            text-cyan-600
            transition-colors
            duration-300

            dark:border-cyan-400
            dark:bg-slate-950/70
            dark:text-cyan-300
          "
        >
          <Icon size={28} strokeWidth={1.8} />
        </div>

        <h3
          className="
            text-2xl
            font-bold
            leading-8
            text-slate-950
            transition-colors
            duration-300

            group-hover:text-blue-600

            dark:text-white
            dark:group-hover:text-blue-400
          "
        >
          {service.title}
        </h3>
      </div>

      <p
        className="
          mt-7
          text-base
          leading-8
          text-slate-700

          dark:text-slate-300
        "
      >
        {service.description}
      </p>

      {service.features && service.features.length > 0 && (
        <ul className="mt-7 space-y-4">
          {service.features.map((feature) => (
            <li
              key={feature}
              className="
                flex
                items-start
                gap-3
                text-sm
                leading-6
                text-slate-800

                dark:text-slate-300
              "
            >
              <span
                className="
                  mt-0.5
                  flex
                  h-6
                  w-6
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  bg-blue-100
                  text-blue-600

                  dark:bg-blue-950/80
                  dark:text-cyan-300
                "
              >
                <Check size={15} strokeWidth={2.4} />
              </span>

              <span>
                {feature}
              </span>
            </li>
          ))}
        </ul>
      )}
    </motion.article>
  );
}