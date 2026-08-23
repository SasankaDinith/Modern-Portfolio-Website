import { motion } from "motion/react";

type LogoProps = {
  onClick?: () => void;
};

export function Logo({
  onClick,
}: LogoProps) {
  return (
    <motion.button
      type="button"
      onClick={onClick}
      whileHover={{
        scale: 1.05,
      }}
      whileTap={{
        scale: 0.98,
      }}
      transition={{
        duration: 0.25,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="
        inline-flex
        cursor-pointer
        items-center
        justify-center
        whitespace-nowrap
        bg-transparent
        p-0

        font-mono
        text-[31px]
        font-extrabold
        tracking-[-0.06em]

        outline-none

        sm:text-[34px]
        lg:text-[36px]
        xl:text-[38px]
      "
      aria-label="Go to home"
    >
      <span className="text-cyan-500 dark:text-cyan-400">
        {"<"}
      </span>

      <span className="text-cyan-500 dark:text-cyan-400">
        Dev_X
      </span>

      <span className="text-cyan-500 dark:text-cyan-400">
        {"/>"}
      </span>
    </motion.button>
  );
}