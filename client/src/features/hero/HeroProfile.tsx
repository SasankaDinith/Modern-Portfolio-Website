
import { useRef } from "react";

import {
  motion,
  useInView,
  useReducedMotion,
} from "motion/react";

import heroProfile from "../../assets/images/me2.webp";

export function HeroProfile() {
  const profileRef = useRef<HTMLDivElement>(null);

  const reduceMotion = useReducedMotion();

  /* ---------------------------------------
     Detect when Hero profile is visible.

     initial: true ensures the animation
     can begin immediately on page load.
  --------------------------------------- */

  const isInView = useInView(profileRef, {
    amount: 0.05,
    initial: true,
  });

  const shouldAnimate = !reduceMotion && isInView;

  return (
    <motion.div
      ref={profileRef}
      className="
        group
        relative
        mx-auto
        aspect-square
        w-full
        max-w-[390px]
        cursor-pointer

        md:max-w-[420px]
        lg:max-w-[460px]
        xl:max-w-[500px]
      "
      /*
       * Keep the entrance movement,
       * but don't hide the profile
       * image with opacity: 0.
       */
      initial={
        reduceMotion
          ? false
          : {
              x: 24,
              scale: 0.98,
            }
      }
      animate={{
        x: 0,
        scale: 1,
      }}
      whileHover={
        reduceMotion
          ? undefined
          : {
              scale: 1.025,
              y: -6,
            }
      }
      transition={{
        x: {
          duration: 0.45,
          ease: [0.22, 1, 0.36, 1],
        },

        scale: {
          type: "spring",
          stiffness: 120,
          damping: 18,
          mass: 0.7,
        },

        y: {
          type: "spring",
          stiffness: 120,
          damping: 18,
        },
      }}
    >
      {/* =========================
          OUTER ROTATING RING
      ========================= */}

      <motion.div
        className="
          pointer-events-none
          absolute
          inset-0
          rounded-full
          border-2
          border-dashed
          border-blue-400/80
        "
        animate={
          shouldAnimate
            ? { rotate: 360 }
            : { rotate: 0 }
        }
        transition={
          shouldAnimate
            ? {
                duration: 24,
                repeat: Infinity,
                ease: "linear",
              }
            : {
                duration: 0,
              }
        }
      />

      {/* =========================
          SECOND ROTATING RING
      ========================= */}

      <motion.div
        className="
          pointer-events-none
          absolute
          inset-[5%]
          rounded-full
          border
          border-dashed
          border-cyan-300/80
        "
        animate={
          shouldAnimate
            ? { rotate: -360 }
            : { rotate: 0 }
        }
        transition={
          shouldAnimate
            ? {
                duration: 15,
                repeat: Infinity,
                ease: "linear",
              }
            : {
                duration: 0,
              }
        }
      />

      {/* =========================
          STATIC RING
      ========================= */}

      <div
        className="
          pointer-events-none
          absolute
          inset-[9%]
          rounded-full
          border
          border-blue-500/40
        "
      />

      {/* =========================
          OPTIMIZED BLUE GLOW

          Static blur reduces continuous
          filter animation workload.
      ========================= */}

      <div
        className="
          pointer-events-none
          absolute
          inset-[12%]
          rounded-full
          bg-blue-500/20
          opacity-40
          blur-[80px]
        "
      />

      {/* =========================
          PROFILE IMAGE
      ========================= */}

      <div
        className="
          absolute
          inset-[11%]
          overflow-hidden
          rounded-full

          border
          border-cyan-400/60

          bg-slate-900

          shadow-[0_0_60px_rgba(37,99,235,0.30)]

          transition-shadow
          duration-500

          group-hover:shadow-[0_0_80px_rgba(34,211,238,0.38)]
        "
      >
        <img
          src={heroProfile}
          alt="Sasanka Ranawaka"
          width={500}
          height={500}
          loading="eager"
          fetchPriority="high"
          decoding="async"
          className="
            h-full
            w-full
            object-cover
            object-top

            transition-transform
            duration-500
            ease-out

            group-hover:scale-[1.025]
            motion-reduce:transform-none
          "
        />

        {/* Image gradient overlay */}

        <div
          className="
            pointer-events-none
            absolute
            inset-0

            bg-gradient-to-t
            from-blue-950/40
            via-transparent
            to-transparent
          "
        />
      </div>

      {/* =========================
          AVAILABLE BADGE
      ========================= */}

      <motion.div
        className="
          absolute
          bottom-[12%]
          right-[-1%]
          z-20

          flex
          items-center
          gap-2.5

          rounded-full

          border
          border-cyan-400/60

          bg-slate-950/90

          px-4
          py-2.5

          text-sm
          font-semibold
          text-white

          shadow-[0_0_25px_rgba(34,211,238,0.22)]

          backdrop-blur-sm
        "
        initial={
          reduceMotion
            ? false
            : {
                opacity: 0,
                x: 20,
              }
        }
        animate={
          reduceMotion
            ? undefined
            : {
                opacity: 1,
                x: 0,
              }
        }
        transition={{
          delay: 0.35,
          duration: 0.45,
          ease: "easeOut",
        }}
      >
        {/* Available indicator */}

        <span className="relative flex h-2.5 w-2.5">
          <span
            className={`
              absolute
              inline-flex
              h-full
              w-full
              rounded-full
              bg-emerald-400
              opacity-60

              ${
                shouldAnimate
                  ? "animate-ping"
                  : ""
              }
            `}
          />

          <span
            className="
              relative
              inline-flex
              h-2.5
              w-2.5
              rounded-full
              bg-emerald-400
            "
          />
        </span>

        Available
      </motion.div>
    </motion.div>
  );
}
