import {
  Mail,
  MessageSquare,
  Phone,
  Send,
  User,
} from "lucide-react";
import {
  motion,
  useReducedMotion,
} from "motion/react";
import {
  useState,
  type FormEvent,
} from "react";

import {
  sendContactMessage,
} from "../../services/contact.service";

export function ContactForm() {
  const reduceMotion = useReducedMotion();

  const [isSubmitting, setIsSubmitting] =
    useState(false);

  const [status, setStatus] =
    useState<
      "idle" | "success" | "error"
    >("idle");

  const [statusMessage, setStatusMessage] =
    useState("");

  const inputClasses = `
    w-full
    rounded-xl
    border
    border-slate-200
    bg-slate-50
    py-4
    pl-12
    pr-4
    text-sm
    text-slate-950
    outline-none
    transition-all
    duration-300

    placeholder:text-slate-500

    hover:border-slate-300

    focus:border-blue-500
    focus:bg-white
    focus:ring-2
    focus:ring-blue-500/10

    dark:border-slate-700
    dark:bg-slate-900/80
    dark:text-white
    dark:placeholder:text-slate-500
    dark:hover:border-slate-600
    dark:focus:border-cyan-400
    dark:focus:bg-slate-900
    dark:focus:ring-cyan-400/10
  `;

  const handleSubmit = async (
    event: FormEvent<HTMLFormElement>,
  ) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    const data = {
      name:
        formData
          .get("name")
          ?.toString()
          .trim() ?? "",

      email:
        formData
          .get("email")
          ?.toString()
          .trim() ?? "",

      subject:
        formData
          .get("subject")
          ?.toString()
          .trim() ?? "",

      phone:
        formData
          .get("phone")
          ?.toString()
          .trim() ?? "",

      message:
        formData
          .get("message")
          ?.toString()
          .trim() ?? "",
    };

    try {
      setIsSubmitting(true);
      setStatus("idle");
      setStatusMessage("");

      const result =
        await sendContactMessage(data);

      setStatus("success");

      setStatusMessage(
        result.message ||
          "Your message was sent successfully.",
      );

      form.reset();
    } catch (error) {
      console.error(
        "Contact form error:",
        error,
      );

      setStatus("error");

      setStatusMessage(
        error instanceof Error
          ? error.message
          : "Unable to send your message. Please try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.article
      initial={
        reduceMotion
          ? false
          : {
              opacity: 0,
              y: 20,
            }
      }
      whileInView={
        reduceMotion
          ? undefined
          : {
              opacity: 1,
              y: 0,
            }
      }
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration: 0.55,
        delay: 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="
        flex
        h-full
        flex-col
        rounded-3xl
        border
        border-slate-300
        bg-white
        p-7
        shadow-[0_10px_30px_rgba(15,23,42,0.05)]

        dark:border-blue-400/30
        dark:bg-slate-950/55
        dark:shadow-[0_20px_70px_rgba(2,6,23,0.4)]

        sm:p-8
      "
    >
      <h3 className="text-3xl font-bold text-slate-950 dark:text-white">
        Contact Me!
      </h3>

      <form
        onSubmit={handleSubmit}
        className="mt-8 flex flex-1 flex-col"
      >
        <div className="grid gap-4 sm:grid-cols-2">
          {/* Name */}
          <div className="relative">
            <User
              size={20}
              className="
                pointer-events-none
                absolute
                left-4
                top-1/2
                -translate-y-1/2
                text-blue-500
              "
            />

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              autoComplete="name"
              required
              disabled={isSubmitting}
              className={inputClasses}
            />
          </div>

          {/* Email */}
          <div className="relative">
            <Mail
              size={20}
              className="
                pointer-events-none
                absolute
                left-4
                top-1/2
                -translate-y-1/2
                text-purple-500
              "
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              autoComplete="email"
              required
              disabled={isSubmitting}
              className={inputClasses}
            />
          </div>

          {/* Subject */}
          <div className="relative">
            <MessageSquare
              size={20}
              className="
                pointer-events-none
                absolute
                left-4
                top-1/2
                -translate-y-1/2
                text-blue-500
              "
            />

            <input
              type="text"
              name="subject"
              placeholder="Subject"
              required
              disabled={isSubmitting}
              className={inputClasses}
            />
          </div>

          {/* Phone */}
          <div className="relative">
            <Phone
              size={20}
              className="
                pointer-events-none
                absolute
                left-4
                top-1/2
                -translate-y-1/2
                text-purple-500
              "
            />

            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              autoComplete="tel"
              disabled={isSubmitting}
              className={inputClasses}
            />
          </div>
        </div>

        {/* Message */}
        <div className="relative mt-4 flex-1">
          <MessageSquare
            size={20}
            className="
              pointer-events-none
              absolute
              left-4
              top-5
              text-blue-500
            "
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows={7}
            required
            disabled={isSubmitting}
            className="
              min-h-[190px]
              w-full
              resize-none
              rounded-xl
              border
              border-slate-200
              bg-slate-50
              py-4
              pl-12
              pr-4
              text-sm
              text-slate-950
              outline-none
              transition-all
              duration-300

              placeholder:text-slate-500

              hover:border-slate-300

              focus:border-blue-500
              focus:bg-white
              focus:ring-2
              focus:ring-blue-500/10

              disabled:cursor-not-allowed
              disabled:opacity-60

              dark:border-slate-700
              dark:bg-slate-900/80
              dark:text-white
              dark:placeholder:text-slate-500
              dark:hover:border-slate-600
              dark:focus:border-cyan-400
              dark:focus:bg-slate-900
              dark:focus:ring-cyan-400/10
            "
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="
            mt-5
            inline-flex
            min-h-[52px]
            w-full
            items-center
            justify-center
            gap-3
            rounded-xl
            bg-gradient-to-r
            from-blue-600
            via-indigo-500
            to-purple-600
            px-6
            py-3.5
            font-semibold
            text-white
            shadow-[0_8px_25px_rgba(59,130,246,0.18)]
            transition-all
            duration-300

            hover:shadow-[0_10px_30px_rgba(59,130,246,0.28)]

            disabled:cursor-not-allowed
            disabled:opacity-60
          "
        >
          {isSubmitting
            ? "Sending..."
            : "Send Message"}

          {!isSubmitting && (
            <Send
              size={20}
              aria-hidden="true"
            />
          )}
        </button>

        {/* Success */}
        {status === "success" && (
          <motion.p
            initial={
              reduceMotion
                ? false
                : {
                    opacity: 0,
                    y: 5,
                  }
            }
            animate={{
              opacity: 1,
              y: 0,
            }}
            className="
              mt-4
              rounded-xl
              border
              border-emerald-200
              bg-emerald-50
              px-4
              py-3
              text-sm
              font-medium
              text-emerald-700

              dark:border-emerald-500/20
              dark:bg-emerald-500/10
              dark:text-emerald-400
            "
          >
            {statusMessage}
          </motion.p>
        )}

        {/* Error */}
        {status === "error" && (
          <motion.p
            initial={
              reduceMotion
                ? false
                : {
                    opacity: 0,
                    y: 5,
                  }
            }
            animate={{
              opacity: 1,
              y: 0,
            }}
            className="
              mt-4
              rounded-xl
              border
              border-red-200
              bg-red-50
              px-4
              py-3
              text-sm
              font-medium
              text-red-700

              dark:border-red-500/20
              dark:bg-red-500/10
              dark:text-red-400
            "
          >
            {statusMessage}
          </motion.p>
        )}
      </form>
    </motion.article>
  );
}