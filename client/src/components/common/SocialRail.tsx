import {
  FaGithub,
  FaLinkedinIn,
  FaMedium,
} from "react-icons/fa";

import {
  useEffect,
  useRef,
  useState,
} from "react";

import {
  motion,
  useReducedMotion,
} from "motion/react";

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
  {
    label: "Medium",
    href: "https://medium.com/@sasankad101",
    icon: FaMedium,
  },
] as const;

export function SocialRail() {
  const reduceMotion = useReducedMotion();

  const followTextRef =
    useRef<HTMLSpanElement | null>(null);

  const [isOverFooter, setIsOverFooter] =
    useState(false);

  useEffect(() => {
    const footer =
      document.getElementById(
        "portfolio-footer",
      );

    const followText =
      followTextRef.current;

    if (!footer || !followText) return;

    let ticking = false;

    const checkFooterOverlap = () => {
      const footerRect =
        footer.getBoundingClientRect();

      const textRect =
        followText.getBoundingClientRect();

      /*
       * Change Follow Me text to white
       * only when the actual text touches
       * or enters the footer area.
       */
      const touchingFooter =
        textRect.bottom >= footerRect.top &&
        textRect.top <= footerRect.bottom;

      setIsOverFooter(touchingFooter);

      ticking = false;
    };

    const handlePositionChange = () => {
      if (ticking) return;

      ticking = true;

      window.requestAnimationFrame(
        checkFooterOverlap,
      );
    };

    checkFooterOverlap();

    window.addEventListener(
      "scroll",
      handlePositionChange,
      {
        passive: true,
      },
    );

    window.addEventListener(
      "resize",
      handlePositionChange,
    );

    return () => {
      window.removeEventListener(
        "scroll",
        handlePositionChange,
      );

      window.removeEventListener(
        "resize",
        handlePositionChange,
      );
    };
  }, []);

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
      className="
        fixed
        bottom-7
        left-7
        z-40

        hidden
        flex-col
        items-center
        gap-3

        xl:flex
      "
      aria-label="Social media links"
    >
      {/* Follow Me text */}
      <span
        ref={followTextRef}
        className={`
          [writing-mode:vertical-rl]
          rotate-180

          text-sm
          font-semibold
          tracking-wider

          transition-colors
          duration-200

          ${
            isOverFooter
              ? "text-white"
              : "text-slate-950 dark:text-slate-300"
          }
        `}
      >
        Follow Me
      </span>

      {/* Upper decorative line */}
      <span
        className="
          h-10
          w-px
          bg-cyan-400
        "
        aria-hidden="true"
      />

     {/* Social links */}
{socialLinks.map(
  ({
    label,
    href,
    icon: Icon,
  }) => (
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
      className="
        grid
        h-11
        w-11
        cursor-pointer
        place-items-center

        rounded-xl
        border

        border-slate-300
        bg-white
        text-slate-700

        shadow-[0_6px_18px_rgba(15,23,42,0.08)]

        backdrop-blur-xl

        transition-all
        duration-300

        hover:border-cyan-400
        hover:bg-cyan-50
        hover:text-cyan-600
        hover:shadow-[0_8px_24px_rgba(34,211,238,0.15)]

        dark:border-cyan-400/45
        dark:bg-slate-950/80
        dark:text-slate-300
        dark:shadow-[0_0_20px_rgba(34,211,238,0.08)]

        dark:hover:border-cyan-300
        dark:hover:bg-cyan-400/10
        dark:hover:text-cyan-300

        focus-visible:outline-none
        focus-visible:ring-2
        focus-visible:ring-cyan-400
      "
    >
      <Icon
        size={22}
        aria-hidden="true"
      />
    </motion.a>
  ),
)}
      {/* Lower decorative line */}
      <span
        className="
          h-10
          w-px
          bg-cyan-400
        "
        aria-hidden="true"
      />
    </motion.aside>
  );
}