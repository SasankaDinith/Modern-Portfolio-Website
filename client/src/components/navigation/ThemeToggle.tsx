import { Moon, Sun } from "lucide-react";
import { motion } from "motion/react";

import { useTheme } from "../../hooks/useTheme";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      type="button"
      onClick={toggleTheme}
      whileTap={{
        scale: 0.96,
      }}
      className="
        flex
        h-12
        w-12
        items-center
        justify-center
        rounded-xl
        border
        border-slate-300
        bg-white
        text-slate-700
        transition-colors
        duration-300

        hover:border-blue-400
        hover:text-blue-600

        dark:border-slate-700
        dark:bg-slate-950/60
        dark:text-slate-200
        dark:hover:border-cyan-400
        dark:hover:text-cyan-300
      "
      aria-label={
        theme === "dark"
          ? "Switch to light mode"
          : "Switch to dark mode"
      }
    >
      {theme === "dark" ? (
        <Sun size={21} />
      ) : (
        <Moon size={21} />
      )}
    </motion.button>
  );
}