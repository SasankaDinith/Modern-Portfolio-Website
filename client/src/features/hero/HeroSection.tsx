import { ArrowRight, Send } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

import { Button } from "../../components/ui/Button";
import { AnimatedRole } from "./AnimatedRole";
import { HeroBackground } from "./HeroBackground";
import { HeroProfile } from "./HeroProfile";
import { NetworkBackground } from "./NetworkBackground";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 26,
    filter: "blur(7px)",
  },

  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",

    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export function HeroSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="home"
      className="
        relative
        isolate
        flex
        min-h-[88vh]
        scroll-mt-24
        items-center
        overflow-hidden
        pb-0
        pt-24
        text-slate-950
        dark:text-white

        lg:min-h-[100vh]
        lg:pt-28
      "
    >
      {/* Base hero background */}
      <HeroBackground />

      {/* Animated dots and connecting lines */}
      <NetworkBackground />

      {/* Existing blue and purple glows */}
      <div
        className="pointer-events-none absolute inset-0 z-[1]"
        aria-hidden="true"
      >
        <div
          className="
            absolute
            -left-72
            top-20
            h-[38rem]
            w-[38rem]
            rounded-full
            bg-blue-300/10
            blur-[170px]

            dark:bg-blue-600/15
          "
        />

        <div
          className="
            absolute
            -right-72
            top-10
            h-[40rem]
            w-[40rem]
            rounded-full
            bg-purple-300/10
            blur-[180px]

            dark:bg-purple-600/15
          "
        />
      </div>

      {/* Animated content glow */}
      <motion.div
        aria-hidden="true"
        animate={
          reduceMotion
            ? undefined
            : {
                opacity: [0.2, 0.45, 0.2],
                scale: [1, 1.08, 1],
              }
        }
        transition={{
          duration: 6,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none
          absolute
          left-[5%]
          top-[30%]
          z-[2]
          h-[280px]
          w-[430px]
          rounded-full
          bg-blue-300/10
          blur-[120px]

          dark:bg-blue-500/15
        "
      />

      {/* Hero content */}
      <div
        className="
          relative
          z-10
          mx-auto
          grid
          w-full
          max-w-[1500px]
          items-center
          gap-14
          px-6
          pb-10
          pt-6

          md:px-10

          lg:grid-cols-[minmax(0,1.05fr)_minmax(400px,0.95fr)]
          lg:px-16

          xl:gap-12

          2xl:px-24
        "
      >
        {/* Left side */}
        <motion.div
          variants={reduceMotion ? undefined : containerVariants}
          initial={reduceMotion ? false : "hidden"}
          animate={reduceMotion ? undefined : "visible"}
          className="max-w-3xl 2xl:pl-8"
        >
          {/* 0.15s */}
          <motion.p
            variants={reduceMotion ? undefined : itemVariants}
            className="
              mb-4
              text-lg
              font-medium
              text-slate-700

              dark:text-slate-300
            "
          >
            Hi I’m,
          </motion.p>

          {/* 0.27s - masked name reveal */}
          <motion.div
            variants={reduceMotion ? undefined : itemVariants}
            className="overflow-hidden pb-2"
          >
            <motion.h1
              initial={
                reduceMotion
                  ? false
                  : {
                      opacity: 0,
                      y: "105%",
                    }
              }
              animate={
                reduceMotion
                  ? undefined
                  : {
                      opacity: 1,
                      y: 0,
                    }
              }
              transition={{
                duration: 0.85,
                delay: 0.27,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                text-5xl
                font-bold
                tracking-tight
                text-[#2563EB]

                sm:text-6xl
                xl:text-7xl

                dark:text-[#3B82F6]
              "
            >
              Sasanka Ranawaka
            </motion.h1>
          </motion.div>

          {/* 0.39s */}
          <motion.div
            variants={reduceMotion ? undefined : itemVariants}
          >
            <AnimatedRole />
          </motion.div>

          {/* 0.51s */}
          <motion.p
            variants={reduceMotion ? undefined : itemVariants}
            className="
              mt-8
              max-w-xl
              text-lg
              leading-8
              text-slate-700

              dark:text-slate-300

              sm:text-xl
            "
          >
            Building scalable cloud infrastructure, automating deployments,
            and sharing knowledge through technical writing.
          </motion.p>

          {/* 0.63s */}
          <motion.div
            variants={reduceMotion ? undefined : itemVariants}
            className="mt-10 flex flex-col gap-4 sm:flex-row"
          >
            {/* View Projects */}
            <motion.div
              whileHover={
                reduceMotion
                  ? undefined
                  : {
                      y: -3,
                      scale: 1.025,
                    }
              }
              whileTap={{
                scale: 0.97,
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 20,
              }}
            >
              <Button href="#projects">
                View Projects

                <motion.span
                  className="inline-flex"
                  whileHover={
                    reduceMotion
                      ? undefined
                      : {
                          x: 4,
                        }
                  }
                >
                  <ArrowRight
                    size={20}
                    aria-hidden="true"
                  />
                </motion.span>
              </Button>
            </motion.div>

            {/* Contact */}
            <motion.div
              whileHover={
                reduceMotion
                  ? undefined
                  : {
                      y: -3,
                    }
              }
              whileTap={{
                scale: 0.97,
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 20,
              }}
            >
              <Button
                href="#contact"
                variant="secondary"
              >
                Contact Me

                <Send
                  size={19}
                  aria-hidden="true"
                />
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Right side */}
        <HeroProfile />
      </div>

      {/* Scroll-down button */}
      <motion.a
        href="#about"
        aria-label="Scroll to About Me"
        animate={
          reduceMotion
            ? undefined
            : {
                y: [0, 6, 0],
              }
        }
        whileHover={
          reduceMotion
            ? undefined
            : {
                scale: 1.1,
              }
        }
        whileTap={{
          scale: 0.95,
        }}
        transition={{
          duration: 1.8,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        className="
          absolute
          bottom-5
          left-1/2
          z-20
          grid
          h-12
          w-10
          -translate-x-1/2
          place-items-center
          rounded-full
          border
          border-blue-300
          bg-white/80
          text-blue-600
          shadow-sm
          backdrop-blur-xl
          transition-colors
          duration-300

          hover:border-blue-500
          hover:bg-blue-50

          dark:border-cyan-400/40
          dark:bg-slate-950/60
          dark:text-cyan-300
          dark:hover:border-cyan-300
          dark:hover:bg-cyan-400/10
        "
      >
        ↓
      </motion.a>
    </section>
  );
}