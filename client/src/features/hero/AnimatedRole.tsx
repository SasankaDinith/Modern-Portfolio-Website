import { ChevronRight } from "lucide-react";
import {
  motion,
  useReducedMotion,
} from "motion/react";
import {
  useEffect,
  useState,
} from "react";

const roles = [
  "Cloud & DevOps Engineer",
  "Technical Writer",
  "Researcher",
  "SRE & Observability Enthusiast",
];

const TYPING_SPEED = 65;
const DELETING_SPEED = 35;
const PAUSE_AFTER_TYPING = 1600;
const PAUSE_AFTER_DELETING = 350;

export function AnimatedRole() {
  const reduceMotion = useReducedMotion();

  const [roleIndex, setRoleIndex] =
    useState(0);

  const [displayedText, setDisplayedText] =
    useState("");

  const [isDeleting, setIsDeleting] =
    useState(false);

  useEffect(() => {
    if (reduceMotion) {
      setDisplayedText(roles[0]);
      return;
    }

    const currentRole = roles[roleIndex];

    let timeout: ReturnType<typeof setTimeout>;

    // Typing
    if (
      !isDeleting &&
      displayedText.length < currentRole.length
    ) {
      timeout = setTimeout(() => {
        setDisplayedText(
          currentRole.slice(
            0,
            displayedText.length + 1,
          ),
        );
      }, TYPING_SPEED);
    }

    // Finished typing
    else if (
      !isDeleting &&
      displayedText.length === currentRole.length
    ) {
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, PAUSE_AFTER_TYPING);
    }

    // Deleting
    else if (
      isDeleting &&
      displayedText.length > 0
    ) {
      timeout = setTimeout(() => {
        setDisplayedText(
          currentRole.slice(
            0,
            displayedText.length - 1,
          ),
        );
      }, DELETING_SPEED);
    }

    // Finished deleting
    else if (
      isDeleting &&
      displayedText.length === 0
    ) {
      timeout = setTimeout(() => {
        setIsDeleting(false);

        setRoleIndex(
          (current) =>
            (current + 1) % roles.length,
        );
      }, PAUSE_AFTER_DELETING);
    }

    return () => {
      clearTimeout(timeout);
    };
  }, [
    displayedText,
    isDeleting,
    roleIndex,
    reduceMotion,
  ]);

  return (
    <div
      className="
        mt-7
        flex
        min-h-[78px]
        w-full
        max-w-3xl
        items-center
        rounded-2xl
        border
        border-slate-300
        bg-white/70
        px-6
        backdrop-blur-xl

        dark:border-blue-400/35
        dark:bg-slate-950/45
      "
    >
      {/* Arrow */}
      <ChevronRight
        size={24}
        strokeWidth={2.5}
        className="
          mr-4
          shrink-0
          text-blue-600

          dark:text-cyan-300
        "
        aria-hidden="true"
      />

      {/* Typed role */}
      <span
        className="
          min-w-0
          text-lg
          font-semibold
          text-blue-600

          dark:text-cyan-300

          sm:text-xl
        "
      >
        {displayedText}
      </span>

      {/* Blinking cursor */}
      {!reduceMotion && (
        <motion.span
          aria-hidden="true"
          animate={{
            opacity: [1, 0, 1],
          }}
          transition={{
            duration: 0.8,
            repeat:
              Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          className="
            ml-1
            inline-block
            h-6
            w-[2px]
            shrink-0
            bg-blue-600

            dark:bg-cyan-300
          "
        />
      )}
    </div>
  );
}