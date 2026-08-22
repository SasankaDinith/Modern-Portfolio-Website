import { motion, useReducedMotion } from "motion/react";

import devxLogo from "../../assets/images/logo.png";

interface LogoProps {
  className?: string;
}

export function Logo({ className = "" }: LogoProps) {
  const reduceMotion = useReducedMotion();

  const scrollToHome = () => {
    document.getElementById("home")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <motion.button
      type="button"
      onClick={scrollToHome}
      whileHover={
        reduceMotion
          ? undefined
          : {
              scale: 1.07,
              y: -3,
            }
      }
      whileTap={
        reduceMotion
          ? undefined
          : {
              scale: 0.97,
            }
      }
      transition={{
        type: "spring",
        stiffness: 190,
        damping: 18,
        mass: 0.7,
      }}
      className={`group flex h-20 w-full cursor-pointer items-center justify-center border-0 bg-transparent p-0 outline-none ${className}`}
      aria-label="Go to portfolio home"
    >
      <img
        src={devxLogo}
        alt="Dev X logo"
        className="block h-auto w-[190px] max-w-none object-contain transition-[filter] duration-500 group-hover:drop-shadow-[0_0_18px_rgba(34,211,238,0.65)]"
      />
    </motion.button>
  );
}