import { ArrowUp } from "lucide-react";
import { motion } from "motion/react";

import {
  footerNavigationLinks,
  footerResourceLinks,
} from "./contact.data";



import { NewsletterSubscribe } from "./NewsletterSubscribe";

function scrollToSection(sectionId: string) {
  document
    .getElementById(sectionId)
    ?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
}

export function ContactFooter() {
  const scrollToHero = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative mt-10">
      {/* =========================
          BACK TO TOP
      ========================== */}

      <motion.button
  type="button"
  onClick={scrollToHero}
  whileHover={{
    scale: 1.08,
  }}
  whileTap={{
    scale: 0.94,
  }}
  transition={{
    duration: 0.3,
  }}
  aria-label="Back to top"
  title="Back to top"
  className="
    group
    absolute
    bottom-[45px]
    right-[15px]
    z-20

    flex
    h-[52px]
    w-[52px]
    cursor-pointer
    items-center
    justify-center

    rounded-full
    border
    border-cyan-400/35

    bg-slate-950
    text-white

    shadow-[0_8px_28px_rgba(2,6,23,0.45)]

    transition-all
    duration-300

    hover:border-cyan-400/70
    hover:bg-slate-900
    hover:shadow-[0_10px_35px_rgba(34,211,238,0.16)]
  "
>
  <ArrowUp
    size={24}
    strokeWidth={2.5}
    className="
      transition-transform
      duration-300
      group-hover:-translate-y-0.5
    "
    aria-hidden="true"
  />
</motion.button>

      {/* =========================
          TOP DIVIDER
      ========================== */}

      <div
        className="
          h-px
          w-full
          bg-gradient-to-r
          from-cyan-400/70
          via-blue-500/40
          to-purple-500/70
        "
        aria-hidden="true"
      />

      {/* =========================
          MAIN FOOTER CONTENT
      ========================== */}

      <div
        className="
          mx-auto
          grid
          w-full
          max-w-[1500px]
          gap-10
          px-6
          py-16

          md:grid-cols-2
          md:px-12

          xl:grid-cols-[1.25fr_0.65fr_0.75fr_1.1fr]
          xl:gap-12
          xl:px-16

          2xl:gap-16
          2xl:px-20
        "
      >
    
{/* =========================
    BRAND + PROFESSIONAL INFO
========================== */}

<div>
  {/* Logo */}
  <motion.button
    type="button"
    onClick={() =>
      scrollToSection("home")
    }
    whileHover={{
      scale: 1.05,
    }}
    whileTap={{
      scale: 0.97,
    }}
    transition={{
      duration: 0.22,
    }}
    className="
      cursor-pointer
      font-mono
      text-[34px]
      font-black
      tracking-[-0.05em]
      text-cyan-500

      dark:text-cyan-400
    "
    aria-label="Go to home"
  >
    &lt;Dev_X/&gt;
  </motion.button>

  {/* Name */}
  <h3
    className="
      mt-2
      text-xl
      font-bold
      tracking-tight
      text-slate-950

      dark:text-white
    "
  >
    Sasanka Ranawaka
  </h3>

  {/* Professional description */}
  <p
    className="
      mt-1
      max-w-[520px]
      text-sm
      leading-7
      text-slate-600

      dark:text-slate-400
    "
  >
    Intern DevOps Engineer
    <span className="mx-2 text-cyan-500/70">
      |
    </span>

    Cloud &amp; DevOps Enthusiast
    <span className="mx-2 text-cyan-500/70">
      |
    </span>

    LinkedIn Optimization &amp; ATS-Friendly CV Specialist
    <span className="mx-2 text-cyan-500/70">
      |
    </span>

    Technical Writer &amp; Blogger
    <span className="mx-2 text-cyan-500/70">
      |
    </span>

    BICT Hons (UG)
  </p>

  
</div>



        {/* =========================
            NAVIGATION
        ========================== */}

        <div>
          <h3
            className="
              text-lg
              font-bold
              text-slate-950

              dark:text-white
            "
          >
            Navigation
          </h3>

          <nav
            className="
              mt-5
              flex
              flex-col
              items-start
              gap-4
            "
            aria-label="Footer navigation"
          >
            {footerNavigationLinks.map(
              (link) => (
                <button
                  key={link.sectionId}
                  type="button"
                  onClick={() =>
                    scrollToSection(
                      link.sectionId,
                    )
                  }
                  className="
                    cursor-pointer
                    text-left
                    text-slate-600
                    transition-colors
                    duration-300

                    hover:text-blue-600

                    dark:text-slate-400
                    dark:hover:text-cyan-300
                  "
                >
                  {link.label}
                </button>
              ),
            )}
          </nav>
        </div>

        {/* =========================
            RESOURCES
        ========================== */}

        <div>
          <h3
            className="
              text-lg
              font-bold
              text-slate-950

              dark:text-white
            "
          >
            Resources
          </h3>

          <nav
            className="
              mt-5
              flex
              flex-col
              items-start
              gap-4
            "
            aria-label="Footer resources"
          >
            {footerResourceLinks.map(
              (link) => (
                <button
                  key={link.sectionId}
                  type="button"
                  onClick={() =>
                    scrollToSection(
                      link.sectionId,
                    )
                  }
                  className="
                    cursor-pointer
                    text-left
                    text-slate-600
                    transition-colors
                    duration-300

                    hover:text-blue-600

                    dark:text-slate-400
                    dark:hover:text-cyan-300
                  "
                >
                  {link.label}
                </button>
              ),
            )}
          </nav>
        </div>

        {/* =========================
            NEWSLETTER
        ========================== */}

        <div className="w-full min-w-0">
          <NewsletterSubscribe />
        </div>
      </div>

     {/* Bottom divider line */}
<div
  className="
    mx-auto
    h-px
    w-[calc(100%-3rem)]
    max-w-[1350px]

    bg-gradient-to-r
    from-cyan-400/70
    via-blue-500/35
    to-purple-500/70

    md:w-[calc(100%-5rem)]
    lg:w-[calc(100%-8rem)]
  "
  aria-hidden="true"
/>

{/* Copyright */}
<div
  className="
    mx-auto
    flex
    w-[calc(100%-3rem)]
    max-w-[1350px]
    flex-col
    gap-4
    py-6

    text-sm
    text-slate-600

    dark:text-slate-400

    md:w-[calc(100%-5rem)]
    md:flex-row
    md:items-center
    md:justify-between

    lg:w-[calc(100%-8rem)]
  "
>
  <p>
    © 2026 Sasanka Ranawaka. All rights reserved.
  </p>

  <p className="text-right">
    Designed &amp; Built by{" "}
    <span className="text-cyan-500 dark:text-cyan-400">
      Sasanka Ranawaka
    </span>
  </p>
</div>
    </footer>
  );
}