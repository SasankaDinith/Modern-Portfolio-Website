import {
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa";

import { motion, useReducedMotion } from "motion/react";

const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/sasankad101",
    icon: FaLinkedinIn,
  },
  {
    label: "GitHub",
    href: "https://github.com/SasankaDinith",
    icon: FaGithub,
  },
] as const;

export function SocialRail() {
  const reduceMotion = useReducedMotion();

  return (
    <motion.aside
      initial={
        reduceMotion
          ? false
          : {
              opacity: 0,
              x: -24,
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
        duration: 0.8,
        delay: 0.6,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="fixed bottom-7 left-7 z-40 hidden flex-col items-center gap-3 xl:flex"
      aria-label="Social media links"
    >
     

      {/* Vertical Follow Me text */}
      <span className="[writing-mode:vertical-rl] rotate-180 text-sm font-semibold tracking-wider text-slate-950 dark:text-slate-300">
  Follow Me
</span>

      {/* Lower decorative line */}
      <span
        className="h-10 w-px bg-gradient-to-b from-cyan-400 to-transparent"
        aria-hidden="true"
      />

      {/* LinkedIn and GitHub */}
      {socialLinks.map(({ label, href, icon: Icon }) => (
        <motion.a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Visit my ${label} profile`}
          title={label}
          whileHover={
            reduceMotion
              ? undefined
              : {
                  scale: 1.1,
                  y: -3,
                }
          }
          whileTap={{
            scale: 0.95,
          }}
          transition={{
            type: "spring",
            stiffness: 220,
            damping: 18,
          }}
          className="grid h-12 w-12 cursor-pointer place-items-center rounded-xl border border-cyan-400/45 bg-slate-950/80 text-slate-100 dark:text-slate-300 shadow-[0_0_20px_rgba(34,211,238,0.08)] backdrop-blur-xl transition-colors duration-300 hover:border-cyan-300 hover:bg-cyan-400/10 hover:text-cyan-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
        >
          <Icon size={22} aria-hidden="true" />
        </motion.a>
      ))}

      {/* Medium */}
      <motion.a
        href="https://medium.com/@sasankad101"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Visit my Medium profile"
        title="Medium"
        whileHover={
          reduceMotion
            ? undefined
            : {
                scale: 1.1,
                y: -3,
              }
        }
        whileTap={{
          scale: 0.95,
        }}
        transition={{
          type: "spring",
          stiffness: 220,
          damping: 18,
        }}
        className="grid h-12 w-12 cursor-pointer place-items-center rounded-xl border border-cyan-400/45 bg-slate-950/80 font-serif text-xl font-bold text-slate-100 dark:text-slate-300 shadow-[0_0_20px_rgba(34,211,238,0.08)] backdrop-blur-xl transition-colors duration-300 hover:border-cyan-300 hover:bg-cyan-400/10 hover:text-cyan-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
      >
        M

        
      </motion.a>
      
      {/* Lower decorative line */}
      <span
        className="h-10 w-px bg-gradient-to-b from-cyan-400 to-transparent"
        aria-hidden="true"
      />
    </motion.aside>
  );
}