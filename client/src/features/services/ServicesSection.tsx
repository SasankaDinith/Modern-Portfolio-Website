import { ArrowRight } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

import { services } from "./services.data";
import { ServiceCard } from "./ServiceCard";

export function ServicesSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="services"
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
            What I Offer
          </span>

          <h2 className="mt-5 text-4xl font-bold tracking-tight text-slate-950 dark:text-white sm:text-5xl lg:text-6xl">
            Professional{" "}
            <span className="text-[#168BFF]">
              Services
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-4xl text-base leading-8 text-slate-700 dark:text-slate-300 sm:text-lg">
            I provide practical Cloud, DevOps, infrastructure, automation,
            monitoring, and technical documentation solutions designed to
            improve delivery speed, system reliability, and engineering
            efficiency.
          </p>
        </motion.div>

        {/* Service cards */}
        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard
              key={service.id}
              service={service}
              index={index}
            />
          ))}
        </div>

        {/* Discuss a Project */}
        <motion.div
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
            amount: 0.5,
          }}
          transition={{
            duration: 0.5,
            delay: 0.15,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mt-10 flex justify-center"
        >
          <a
            href="#contact"
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
              px-8
              py-3.5
              text-sm
              font-semibold
              text-white
              shadow-[0_8px_25px_rgba(59,130,246,0.18)]
              transition-all
              duration-300

              hover:scale-[1.02]
              hover:shadow-[0_10px_30px_rgba(59,130,246,0.28)]

              dark:border-blue-400/20
              dark:text-white
            "
          >
            Discuss a Project
            <ArrowRight size={18} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}