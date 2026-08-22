

import {
  footerNavigationLinks,
  footerResourceLinks,
} from "./contact.data";

function scrollToSection(sectionId: string) {
  document.getElementById(sectionId)?.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
}

export function ContactFooter() {
  return (
    <footer className="relative mt-10">
      {/* Top divider line */}
      <div
        className="h-px w-full bg-gradient-to-r from-cyan-400/70 via-blue-500/40 to-purple-500/70"
        aria-hidden="true"
      />

      <div className="mx-auto grid w-full max-w-[1500px] gap-12 px-6 py-18 md:px-12 lg:grid-cols-[1.25fr_0.75fr_0.75fr] lg:px-16 2xl:px-20">
        {/* Logo and description */}
        <div>
          <button
            type="button"
            onClick={() => scrollToSection("home")}
            className="cursor-pointer font-mono text-3xl font-black text-cyan-400"
          >
            &lt;Dev_X/&gt;
          </button>

          <p className="mt-5 max-w-md leading-7 text-slate-400">
            Building secure and reliable cloud infrastructure,
            automating delivery workflows, and sharing practical
            engineering knowledge through technical writing and
            research.
          </p>

          {/* Footer social icons */}
          <div className="mt-6 flex items-center gap-3">
            {/* Your social links */}
          </div>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-lg font-bold text-white">
            Navigation
          </h3>

          <nav className="mt-5 flex flex-col items-start gap-4">
            {footerNavigationLinks.map((link) => (
              <button
                key={link.sectionId}
                type="button"
                onClick={() => scrollToSection(link.sectionId)}
                className="cursor-pointer text-slate-400 transition-colors hover:text-cyan-300"
              >
                {link.label}
              </button>
            ))}
          </nav>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-lg font-bold text-white">
            Resources
          </h3>

          <nav className="mt-5 flex flex-col items-start gap-4">
            {footerResourceLinks.map((link) => (
              <button
                key={link.sectionId}
                type="button"
                onClick={() => scrollToSection(link.sectionId)}
                className="cursor-pointer text-left text-slate-400 transition-colors hover:text-cyan-300"
              >
                {link.label}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Bottom divider line */}
      <div
        className="mx-auto h-px w-[calc(100%-3rem)] max-w-[1350px] bg-gradient-to-r from-cyan-400/70 via-blue-500/35 to-purple-500/70 md:w-[calc(100%-5rem)] lg:w-[calc(100%-8rem)]"
        aria-hidden="true"
      />

      <div className="mx-auto flex w-full max-w-[1460px] flex-col gap-4 px-6 py-6 text-sm text-slate-400 md:flex-row md:items-center md:justify-between md:px-10 lg:px-16 2xl:px-14">
        <p>
          © 2026 Sasanka Ranawaka. All rights reserved.
        </p>

        <p>
          Designed &amp; Built by{" "}
          <span className="text-cyan-400">
            Sasanka Ranawaka
          </span>
        </p>
      </div>
    </footer>
  );
}