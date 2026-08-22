import {
  Copy,
  Mail,
  MapPin,
  Phone,
  Users,
} from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

const contactItems = [
  {
    label: "Email",
    value: "sasankaranawaka0@gmail.com",
    icon: Mail,
  },
  {
    label: "Phone",
    value: "+94 76 244 7606",
    icon: Phone,
  },
  {
    label: "Location",
    value: "Colombo, Sri Lanka",
    icon: MapPin,
  },
];

export function ContactInfo() {
  const reduceMotion = useReducedMotion();

  const handleCopy = async (value: string) => {
    try {
      await navigator.clipboard.writeText(value);
    } catch {
      // Clipboard may be unavailable in some browsers.
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
      {/* Heading */}
      <div className="flex items-start gap-5">
        <div
          className="
            flex
            h-16
            w-16
            shrink-0
            items-center
            justify-center
            rounded-full
            border
            border-blue-300
            bg-gradient-to-br
            from-blue-100
            to-purple-100
            text-blue-600

            dark:border-cyan-400/40
            dark:from-blue-600/30
            dark:to-purple-600/30
            dark:text-white
          "
        >
          <Users size={30} />
        </div>

        <h3 className="text-3xl font-bold leading-tight text-slate-950 dark:text-white">
          Let’s work
          <br />
          together
        </h3>
      </div>

      {/* Description */}
      <p className="mt-7 text-base leading-8 text-slate-700 dark:text-slate-300">
        I am always excited to collaborate on innovative and challenging
        projects. Whether it is cloud infrastructure, DevOps automation,
        technical writing, research, or software engineering, feel free to
        reach out.
      </p>

      {/* Contact information */}
      <div className="mt-7 space-y-4">
        {contactItems.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.label}
              className="
                flex
                items-center
                gap-4
                rounded-2xl
                border
                border-slate-200
                bg-slate-50
                p-4
                transition-colors
                duration-300

                hover:border-blue-300
                hover:bg-blue-50/70

                dark:border-slate-700
                dark:bg-slate-900/80
                dark:hover:border-cyan-400/35
                dark:hover:bg-slate-900
              "
            >
              {/* Icon */}
              <div
                className="
                  flex
                  h-12
                  w-12
                  shrink-0
                  items-center
                  justify-center
                  rounded-xl
                  bg-gradient-to-br
                  from-blue-500
                  to-purple-600
                  text-white
                  shadow-[0_6px_18px_rgba(59,130,246,0.2)]
                "
              >
                <Icon size={22} />
              </div>

              {/* Text */}
              <div className="min-w-0 flex-1">
                <p className="text-sm font-bold text-slate-950 dark:text-white">
                  {item.label}
                </p>

                <p className="mt-1 truncate text-sm text-slate-600 dark:text-slate-300">
                  {item.value}
                </p>
              </div>

              {/* Copy button */}
              <button
                type="button"
                onClick={() => handleCopy(item.value)}
                className="
                  flex
                  h-9
                  w-9
                  shrink-0
                  items-center
                  justify-center
                  rounded-lg
                  text-slate-500
                  transition-all
                  duration-300

                  hover:bg-blue-100
                  hover:text-blue-600

                  dark:text-slate-400
                  dark:hover:bg-slate-800
                  dark:hover:text-cyan-300
                "
                aria-label={`Copy ${item.label}`}
              >
                <Copy size={18} />
              </button>
            </div>
          );
        })}
      </div>
    </motion.article>
  );
}