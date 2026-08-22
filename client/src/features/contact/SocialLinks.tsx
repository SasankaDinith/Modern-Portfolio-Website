import { motion, useReducedMotion } from "motion/react";

import { socialLinks } from "./contact.data";


export function SocialLinks() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="flex flex-wrap items-center gap-4">
      {socialLinks.map(({ label, href, icon: Icon }) => {
        const isEmail = href.startsWith("mailto:");

        return (
          <motion.a
            key={label}
            href={href}
            target={isEmail ? undefined : "_blank"}
            rel={
              isEmail
                ? undefined
                : "noopener noreferrer"
            }
            aria-label={`Visit my ${label}`}
            title={label}
            whileHover={
              reduceMotion
                ? undefined
                : {
                    y: -4,
                    scale: 1.08,
                  }
            }
            whileTap={
              reduceMotion
                ? undefined
                : {
                    scale: 0.95,
                  }
            }
            transition={{
              type: "spring",
              stiffness: 220,
              damping: 18,
            }}
            className="grid h-14 w-14 cursor-pointer place-items-center rounded-2xl border border-blue-400/35 bg-slate-950/70 text-slate-200 shadow-[0_10px_30px_rgba(2,6,23,0.4)] transition-colors duration-300 hover:border-cyan-300 hover:bg-cyan-400/10 hover:text-cyan-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
          >
            <Icon size={25} aria-hidden="true" />
          </motion.a>
        );
      })}

      
    </div>
  );
}