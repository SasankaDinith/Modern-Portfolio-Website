
import {
  useEffect,
  useRef,
  useState,
} from "react";

import {
  motion,
  useReducedMotion,
} from "motion/react";

import { ContactFooter } from "./ContactFooter";
import { ContactForm } from "./ContactForm";
import { ContactInfo } from "./ContactInfo";
import { SocialLinks } from "./SocialLinks";

/* =========================
   GOOGLE MAPS CONFIGURATION
========================= */

const GOOGLE_MAP_URL =
  "https://www.google.com/maps?q=Dehiwala,Sri%20Lanka&z=12&output=embed";

export function ContactSection() {
  const reduceMotion = useReducedMotion();

  /* =========================
     MAP LAZY LOADING
  ========================= */

  const mapContainerRef =
    useRef<HTMLDivElement | null>(null);

  const [shouldLoadMap, setShouldLoadMap] =
    useState(false);

  useEffect(() => {
    if (shouldLoadMap) return;

    const mapContainer = mapContainerRef.current;

    if (!mapContainer) return;

    /*
     * Fallback for browsers without
     * IntersectionObserver support.
     */

    if (!("IntersectionObserver" in window)) {
      setShouldLoadMap(true);
      return;
    }

    /*
     * Only load Google Maps when its
     * container is approximately
     * 200px away from the viewport.
     */

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];

        if (entry?.isIntersecting) {
          setShouldLoadMap(true);

          /*
           * The map only needs to
           * load once.
           */
          observer.disconnect();
        }
      },
      {
        root: null,
        rootMargin: "200px 0px",
        threshold: 0,
      },
    );

    observer.observe(mapContainer);

    return () => {
      observer.disconnect();
    };
  }, [shouldLoadMap]);

  /* =========================
     CONTACT SECTION
  ========================= */

  return (
    <section
      id="contact"
      className="
        relative
        bg-transparent
        text-slate-950
        dark:text-white
        sm:pt-16
        lg:pt-8
      "
    >
      <div
        className="
          mx-auto
          w-full
          max-w-[1500px]
          px-6
          pb-12
          pt-6
          sm:pt-8
          md:px-10
          lg:px-16
          2xl:px-24
        "
      >
        {/* =========================
            SECTION HEADING
        ========================= */}

        <motion.div
          initial={
            reduceMotion
              ? false
              : {
                  opacity: 0,
                  y: 16,
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
            amount: 0.3,
          }}
          transition={{
            duration: 0.45,
            ease: "easeOut",
          }}
          className="
            mx-auto
            mb-12
            max-w-4xl
            text-center
          "
        >
          {/* =========================
              CONTACT BADGE
          ========================= */}

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
              backdrop-blur-sm

              dark:border-cyan-400/35
              dark:bg-slate-950/60
              dark:text-slate-200

              dark:shadow-[0_0_28px_rgba(34,211,238,0.1)]
            "
          >
            Let’s Connect
          </div>

          {/* =========================
              MAIN HEADING
          ========================= */}

          <h2
            className="
              space-grotesk-bold
              text-4xl
              font-bold
              tracking-tight
              text-slate-950

              dark:text-white

              sm:text-5xl
              lg:text-6xl
            "
          >
            Let’s Build Something{" "}
            <span className="text-[#168BFF]">
              Amazing Together
            </span>
          </h2>

          {/* =========================
              DESCRIPTION
          ========================= */}

          <p
            className="
              mx-auto
              mt-6
              max-w-3xl

              text-base
              leading-8
              text-slate-700

              dark:text-slate-300

              sm:text-lg
            "
          >
            Interested in Cloud, DevOps, SRE,
            infrastructure, systems, AI, or
            technical collaboration? Let’s
            connect and build reliable,
            scalable, and impactful solutions.
          </p>
        </motion.div>

        {/* =========================
            CONTACT INFORMATION
            AND CONTACT FORM
        ========================= */}

        <div
          className="
            grid
            items-stretch
            gap-6

            lg:grid-cols-[0.9fr_1.1fr]
          "
        >
          <ContactInfo />

          <ContactForm />
        </div>

        {/* =========================
            FOLLOW ME AND FIND ME
        ========================= */}

        <div
          className="
            mt-5
            grid
            gap-6

            lg:grid-cols-[0.9fr_1.1fr]
          "
        >
          {/* =========================
              FOLLOW ME CARD
          ========================= */}

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

              dark:border-blue-400/30
              dark:bg-slate-950/55

              dark:shadow-[0_20px_70px_rgba(2,6,23,0.4)]

              sm:p-8
            "
          >
            <h3
              className="
                space-grotesk-bold
                text-2xl
                font-bold
                text-slate-950

                dark:text-white
              "
            >
              Follow Me
            </h3>

            <p
              className="
                mt-3
                leading-8
                text-slate-700

                dark:text-slate-400
              "
            >
              Connect with me through my
              professional and social platforms.
            </p>

            <div
              className="
                mt-1
                flex
                flex-1
                items-center
              "
            >
              <SocialLinks />
            </div>
          </article>

          {/* =========================
              FIND ME CARD
          ========================= */}

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
            {/* Map heading */}

            <h3
              className="
                space-grotesk-bold
                text-2xl
                font-bold
                text-slate-800

                dark:text-white
              "
            >
              Find Me
            </h3>

            {/* =========================
                OPTIMIZED GOOGLE MAP
            ========================= */}

            <div className="mt-2">
              <div
                ref={mapContainerRef}
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
                {shouldLoadMap ? (
                  /*
                   * Google Maps iframe is
                   * created only after the
                   * map approaches the
                   * visible viewport.
                   */

                  <iframe
                    title="Location - Dehiwala, Sri Lanka"
                    src={GOOGLE_MAP_URL}
                    width="100%"
                    height="100%"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="
                      absolute
                      inset-0
                      h-full
                      w-full
                      border-0
                    "
                  />
                ) : (
                  /*
                   * Lightweight placeholder
                   * keeps the same dimensions
                   * until the map loads.
                   */

                  <div
                    className="
                      absolute
                      inset-0

                      flex
                      items-center
                      justify-center

                      bg-slate-50

                      dark:bg-slate-900/70
                    "
                  >
                    <span
                      className="
                        text-sm
                        text-slate-500

                        dark:text-slate-400
                      "
                    >
                      Loading map...
                    </span>
                  </div>
                )}
              </div>
            </div>
          </article>
        </div>
      </div>

      {/* =========================
          CONTACT FOOTER
      ========================= */}

      <ContactFooter />
    </section>
  );
}
