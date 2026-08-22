import { motion, useReducedMotion } from "motion/react";

import { ContactFooter } from "./ContactFooter";
import { ContactForm } from "./ContactForm";
import { ContactInfo } from "./ContactInfo";
import { SocialLinks } from "./SocialLinks";

export function ContactSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="contact"
      className="
        relative
        
        bg-transparent
        text-slate-950
        dark:text-white
        lg:pt-8
        sm:pt-16
      "
    >
      <div className="mx-auto w-full max-w-[1500px] px-6 pb-12 pt-6 sm:pt-8 md:px-10 lg:px-16 2xl:px-24">
        {/* Section heading */}
        <motion.div
          initial={
            reduceMotion
              ? false
              : {
                  opacity: 0,
                  y: 24,
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
            amount: 0.5,
          }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mx-auto mb-12 max-w-4xl text-center"
        >
          {/* Badge */}
          <div
            className="
              mx-auto
              mb-5
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-slate-300
              bg-white/75
              px-5
              py-2
              text-sm
              font-medium
              text-slate-800
              shadow-sm
              backdrop-blur-xl

              dark:border-cyan-400/35
              dark:bg-slate-950/60
              dark:text-slate-200
              dark:shadow-[0_0_28px_rgba(34,211,238,0.1)]
            "
          >
            Let’s Connect
          </div>

          {/* Heading */}
          <h2 className="text-4xl font-bold tracking-tight text-slate-950 dark:text-white sm:text-5xl lg:text-6xl">
            Let’s Build Something{" "}
            <span className="text-[#168BFF]">
              Amazing Together
            </span>
          </h2>

          {/* Description */}
          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-slate-700 dark:text-slate-300 sm:text-lg">
            Interested in Cloud, DevOps, software engineering,
            artificial intelligence, technical writing, or research
            collaboration? Let’s connect and build impactful solutions.
          </p>
        </motion.div>

        {/* Contact information and form */}
        <div className="grid items-stretch gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <ContactInfo />
          <ContactForm />
        </div>

        {/* Follow Me and Find Me */}
        <div className="mt-5 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Follow Me */}
          <article
            className="
              flex
              min-h-[230px]
              flex-col
              rounded-3xl
              border
              border-slate-300
              bg-white
              p-7
              shadow-[0_10px_30px_rgba(15,23,42,0.05)]
              backdrop-blur-xl

              dark:border-blue-400/30
              dark:bg-slate-950/55
              dark:shadow-[0_20px_70px_rgba(2,6,23,0.4)]

              sm:p-8
            "
          >
            <h3 className="text-2xl font-bold text-slate-950 dark:text-white">
              Follow Me
            </h3>

            <p className="mt-3 text-stone-50 leading-8 text-slate-600 dark:text-slate-400">
              Connect with me through my professional and social platforms.
            </p>

            <div className="mt-1 flex flex-1 items-center">
              <SocialLinks />
            </div>
          </article>

   <article
  className="
    flex
    min-h-[190px]
    flex-col
    overflow-hidden
    rounded-3xl
    border
    border-slate-300
    bg-white
    p-6
    shadow-[0_10px_30px_rgba(15,23,42,0.05)]

    dark:border-blue-400/30
    dark:bg-slate-950/55
    dark:shadow-[0_20px_70px_rgba(2,6,23,0.4)]
  "
>
  <h3 className="text-2xl font-bold text-slate-800 dark:text-white">
    Find Me
  </h3>

  <div className="mt-2">
    <div
      className="
        relative
        h-[170px]
        w-full
        overflow-hidden
        rounded-2xl
        border
        border-slate-300
        bg-white

        dark:border-blue-400/25
        dark:bg-slate-900/70
      "
    >
      <iframe
        title="Location - Dehiwala, Sri Lanka"
        src="https://www.google.com/maps?q=Dehiwala,Sri%20Lanka&z=12&output=embed"
        width="100%"
        height="100%"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="absolute inset-0 h-full w-full border-0"
      />
    </div>
  </div>
</article>
        </div>
      </div>

      <ContactFooter />
    </section>
  );
}