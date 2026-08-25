import {
  ArrowRight,
  Mail,
} from "lucide-react";

import { useState } from "react";
import type { SyntheticEvent } from "react";

import { motion } from "motion/react";

export function NewsletterSubscribe() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (
    event: SyntheticEvent<
      HTMLFormElement,
      SubmitEvent
    >,
  ) => {
    event.preventDefault();

    const trimmedEmail = email.trim();

    if (!trimmedEmail) {
      setMessage(
        "Please enter your email address.",
      );
      return;
    }

    /*
     * Newsletter backend will be
     * connected later.
     */
    setMessage(
      "Newsletter subscription will be available soon.",
    );

    setEmail("");
  };

  return (
    <div className="w-full">
      {/* Heading */}
      <h3
        className="
          text-lg
          font-bold
          text-slate-950

          dark:text-white
        "
      >
        Subscribe to My Newsletter
      </h3>

      {/* Description */}
      <p
        className="
          mt-3
          max-w-sm
          text-sm
          leading-6
          text-slate-600

          dark:text-slate-400
        "
      >
        Get occasional updates on Cloud,
        DevOps, SRE, observability, and
        technical content directly in your
        inbox.
      </p>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="mt-5 space-y-3"
      >
        {/* Email input */}
        <div
          className="
            flex
            min-h-[50px]
            items-center

            rounded-xl
            border
            border-slate-300

            bg-white/80
            px-4

            transition-colors
            duration-300

            focus-within:border-blue-500

            dark:border-slate-700
            dark:bg-slate-950/70
            dark:focus-within:border-cyan-400
          "
        >
          <Mail
            size={18}
            strokeWidth={1.8}
            className="
              mr-3
              shrink-0
              text-slate-400

              dark:text-slate-500
            "
            aria-hidden="true"
          />

          <input
            type="email"
            value={email}
            onChange={(event) => {
              setEmail(
                event.target.value,
              );

              if (message) {
                setMessage("");
              }
            }}
            placeholder="Enter your email"
            required
            aria-label="Email address"
            className="
              min-w-0
              flex-1

              border-none
              bg-transparent

              text-sm
              text-slate-900

              outline-none

              placeholder:text-slate-400

              dark:text-white
              dark:placeholder:text-slate-500
            "
          />
        </div>

        {/* Subscribe button */}
        <motion.button
          type="submit"
          whileHover={{
            scale: 1.015,
          }}
          whileTap={{
            scale: 0.98,
          }}
          transition={{
            duration: 0.2,
          }}
          className="
            group

            inline-flex
            min-h-[48px]
            w-full
            cursor-pointer
            items-center
            justify-center
            gap-2

            rounded-xl

            bg-gradient-to-r
            from-blue-600
            via-blue-500
            to-cyan-500

            px-5

            text-sm
            font-semibold
            text-white

            shadow-[0_8px_25px_rgba(37,99,235,0.20)]

            transition-shadow
            duration-300

            hover:shadow-[0_10px_35px_rgba(6,182,212,0.28)]
          "
        >
          Subscribe

          <ArrowRight
            size={17}
            strokeWidth={2}
            className="
              transition-transform
              duration-300

              group-hover:translate-x-1
            "
            aria-hidden="true"
          />
        </motion.button>

        {/* Status message */}
        {message && (
          <p
            className="
              text-xs
              leading-5
              text-slate-500

              dark:text-slate-400
            "
          >
            {message}
          </p>
        )}
      </form>

      {/* Privacy note */}
      <p
        className="
          mt-3
          text-[11px]
          leading-5
          text-slate-400

          dark:text-slate-600
        "
      >
        No spam. Unsubscribe anytime.
      </p>
    </div>
  );
}