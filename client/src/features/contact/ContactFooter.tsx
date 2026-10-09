import {
  ArrowUp,
} from "lucide-react";



import { motion } from "motion/react";

import { FooterStatement } from "./FooterStatement";
import { NewsletterSubscribe } from "./NewsletterSubscribe";

export function ContactFooter() {
  const scrollToHero = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer
       className="
    relative
    mt-10
  bg-[#0B0B0B]
    text-white
  "
    >
      {/* Top divider */}
      <div
        className="
          h-px
          w-full

          bg-gradient-to-r
          from-cyan-400/50
          via-blue-500/25
          to-purple-500/45
        "
        aria-hidden="true"
      />

      {/* ==================================
          MAIN FOOTER AREA
      =================================== */}

      <div
        className="
          mx-auto
          w-full
          max-w-[1600px]

          px-6
          py-16

          md:px-10

          lg:px-16
          lg:py-20

          2xl:px-24
        "
      >
        <div
          className="
            grid
            items-start
            gap-14

            lg:grid-cols-[1.25fr_0.75fr]

            xl:gap-20
          "
        >
          {/* LEFT */}
          <div>
            <FooterStatement />
          </div>

          {/* RIGHT - NEWSLETTER */}
          <div
            className="
              w-full
              max-w-[470px]

              lg:ml-auto
            "
          >
            <NewsletterSubscribe />
          </div>
        </div>

       

        {/* Divider */}
        <div
          className="
            mt-10
            h-px
            w-full

            bg-slate-700/70
          "
          aria-hidden="true"
        />

        {/* ==================================
            COPYRIGHT
        =================================== */}

        <div

  className="
    flex
    flex-col
    gap-2
    pt-2
    pb-0

    text-sm
    text-slate-500

    md:flex-row
    md:items-center
    md:justify-between
  "
>
        
          <p>
            © 2026 Sasanka Ranawaka.
            All rights reserved.
          </p>

          <p>
            Designed &amp; Built by{" "}
            <span className="text-cyan-400">
              Sasanka Ranawaka
            </span>
          </p>
        </div>
      </div>
{/* LARGE FOOTER NAME */}
<div
  className="
    relative
    mt-0
    h-[210px]
    w-full
    overflow-hidden

    sm:h-[200px]
    md:h-[205px]
    lg:h-[205px]
    xl:h-[250px]
  "
  aria-hidden="true"
>
  <div
    className="
      absolute
      left-1/2
      top-0
      w-max
      -translate-x-1/2

      select-none
      whitespace-nowrap

      font-['Space_Grotesk']
      text-[24.2vw]
      
      leading-[0.82]
      tracking-[-0.055em]
    "
  >
    {/* Sharp main text */}
    <span
      className="
        relative
        z-10
        text-[#F5F5F2]
      "
    >
      Sasanka 
    </span>

    {/* Lower vertical blurred/smeared part */}
    <span
      className="
        pointer-events-none
        absolute
        inset-0
        z-0

        origin-bottom
        translate-y-[12%]
        scale-y-[1.18]

        text-[#F5F5F2]
        opacity-75

        blur-[8px]

        [mask-image:linear-gradient(to_bottom,transparent_0%,transparent_58%,rgba(0,0,0,0.3)_68%,black_82%,black_100%)]
        [-webkit-mask-image:linear-gradient(to_bottom,transparent_0%,transparent_58%,rgba(0,0,0,0.3)_68%,black_82%,black_100%)]
      "
    >
      Sasanka 
    </span>

    {/* Extra soft downward streak */}
    <span
      className="
        pointer-events-none
        absolute
        inset-0

        origin-bottom
        translate-y-[18%]
        scale-y-[1.28]

        text-white
        opacity-30

        blur-[16px]

        [mask-image:linear-gradient(to_bottom,transparent_0%,transparent_66%,black_88%,black_100%)]
        [-webkit-mask-image:linear-gradient(to_bottom,transparent_0%,transparent_66%,black_88%,black_100%)]
      "
    >
      Sasanka 
    </span>
  </div>
</div>

      {/* ==================================
          BACK TO TOP
      =================================== */}

      <motion.button
        type="button"
        onClick={scrollToHero}
        whileHover={{
          scale: 1.08,
          y: -3,
        }}
        whileTap={{
          scale: 0.94,
        }}
        transition={{
          duration: 0.2,
        }}
        aria-label="Back to top"
        title="Back to top"
        className="
          absolute

          bottom-[70px]
          right-5
          z-20

          grid
          h-[56px]
          w-[56px]
          place-items-center

          rounded-full

          border
          border-cyan-400/30

          bg-[#050B16]

          text-white

          shadow-[0_10px_30px_rgba(2,6,23,0.50)]

          transition-colors
          duration-300

          hover:border-cyan-400/70
          hover:bg-[#0B1728]
        "
      >
        <ArrowUp
          size={24}
          strokeWidth={2.4}
        />
      </motion.button>
    </footer>
  );
}