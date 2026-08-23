import {
  Download,
  Menu,
  X,
} from "lucide-react";
import {
  useEffect,
  useState,
} from "react";

import { navigationItems } from "../../data/navigation";
import { Logo } from "../common/Logo";
import { ThemeToggle } from "./ThemeToggle";

const NAVBAR_HEIGHT = 80;
const ACTIVE_OFFSET = 24;

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] =
    useState("home");

  /*
   * Scroll spy
   *
   * Automatically changes:
   * Home -> About -> Journey -> Projects...
   * while the user scrolls manually.
   */
  useEffect(() => {
    let ticking = false;

    const updateActiveSection = () => {
      const scrollPosition =
        window.scrollY +
        NAVBAR_HEIGHT +
        ACTIVE_OFFSET;

      setIsScrolled(window.scrollY > 20);

      /*
       * Special case for bottom of page.
       * Ensures Contact becomes active when
       * the user reaches the footer/contact area.
       */
      const reachedBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 20;

      if (reachedBottom) {
        const lastItem =
          navigationItems[navigationItems.length - 1];

        if (lastItem) {
          setActiveSection(lastItem.sectionId);
        }

        ticking = false;
        return;
      }

      let currentSection =
        navigationItems[0]?.sectionId ?? "home";

      for (const item of navigationItems) {
        const section =
          document.getElementById(item.sectionId);

        if (!section) continue;

        const sectionTop =
          section.getBoundingClientRect().top +
          window.scrollY;

        if (scrollPosition >= sectionTop) {
          currentSection = item.sectionId;
        } else {
          break;
        }
      }

      setActiveSection(currentSection);

      ticking = false;
    };

    const handleScroll = () => {
      if (ticking) return;

      ticking = true;

      window.requestAnimationFrame(
        updateActiveSection,
      );
    };

    updateActiveSection();

    window.addEventListener(
      "scroll",
      handleScroll,
      {
        passive: true,
      },
    );

    window.addEventListener(
      "resize",
      handleScroll,
    );

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll,
      );

      window.removeEventListener(
        "resize",
        handleScroll,
      );
    };
  }, []);

  /*
   * Disable body scrolling while
   * mobile navigation is open.
   */
  useEffect(() => {
    if (!isMenuOpen) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  /*
   * Automatically close mobile menu
   * when switching to desktop.
   */
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1280) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener(
      "resize",
      handleResize,
    );

    return () => {
      window.removeEventListener(
        "resize",
        handleResize,
      );
    };
  }, []);

  /*
   * Navigate to selected section.
   *
   * We manually subtract the fixed navbar
   * height so the section starts directly
   * underneath the navbar.
   */
  const navigateToSection = (
    sectionId: string,
  ) => {
    const section =
      document.getElementById(sectionId);

    if (!section) return;

    const sectionTop =
      section.getBoundingClientRect().top +
      window.scrollY -
      NAVBAR_HEIGHT;

    window.scrollTo({
      top: sectionTop,
      behavior: "smooth",
    });

    setActiveSection(sectionId);
    setIsMenuOpen(false);
  };

  return (
    <>

    <header
  className={`
    fixed
    inset-x-0
    top-0
    z-[100]
    overflow-visible
    border-b
    transition-all
    duration-300

    ${
      activeSection === "home" &&
      !isScrolled &&
      !isMenuOpen
        ? `
          border-transparent
          bg-transparent
          shadow-none
          backdrop-blur-none

          dark:border-transparent
          dark:bg-transparent
          dark:shadow-none
        `
        : `
          border-slate-200
          bg-white/95
          shadow-[0_8px_30px_rgba(15,23,42,0.07)]
          backdrop-blur-xl

          dark:border-blue-400/15
          dark:bg-slate-950/95
          dark:shadow-[0_8px_30px_rgba(2,6,23,0.35)]
        `
    }
  `}
>
     

        <nav
          className="
            mx-auto
            flex
            h-20
            w-full
            max-w-[1800px]
            items-center
            justify-between
            gap-4
            px-5

            sm:px-7

            lg:px-10

            xl:grid
            xl:grid-cols-[220px_minmax(0,1fr)_auto]
            xl:gap-6
          "
          aria-label="Primary navigation"
        >
         {/* Logo */}
{/* Logo */}
<div
  className="
  inline-flex
  cursor-pointer
  items-center
  justify-center
  whitespace-nowrap
  bg-transparent
  p-0

  font-mono
  text-[36px]
  font-extrabold
  tracking-[-0.06em]

  sm:text-[30px]
  lg:text-[30px]
  xl:text-[30px]
"
>
  <Logo
    onClick={() =>
      navigateToSection("home")
    }
  />
</div>
          {/* Desktop navigation */}
          <div className="hidden min-w-0 justify-center xl:flex">
            <div className="flex items-center justify-center gap-5">
              {navigationItems.map((item) => {
                const isActive =
                  activeSection ===
                  item.sectionId;

                return (
                  <button
                    key={item.sectionId}
                    type="button"
                    onClick={() =>
                      navigateToSection(
                        item.sectionId,
                      )
                    }
                    className={`
                      inline-flex
                      cursor-pointer
                      items-center
                      whitespace-nowrap
                      rounded-md
                      px-2.5
                      py-1.5
                      text-sm
                      font-medium
                      transition-colors
                      duration-300

                      ${
                        isActive
                          ? "bg-blue-100 text-blue-700 dark:bg-blue-500/15 dark:text-cyan-300"
                          : "text-slate-600 hover:bg-blue-50 hover:text-blue-700 dark:text-slate-300 dark:hover:bg-blue-500/10 dark:hover:text-white"
                      }
                    `}
                  >
                    {item.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Desktop actions */}
{/* Desktop actions */}
<div
  className="
    hidden
    shrink-0
    items-center
    justify-end
    gap-3

    xl:flex
    xl:pr-8

    2xl:pr-12
  "
>
  {/* Theme toggle */}
  <ThemeToggle />

  {/* Download CV */}
  <a
    href="/documents/sasanka-ranawaka-cv.pdf"
    download
    className="
      inline-flex
      min-h-12
      items-center
      gap-2
      whitespace-nowrap
      rounded-xl
      bg-gradient-to-r
      from-blue-600
      to-indigo-600
      px-5
      text-sm
      font-semibold
      text-white
      shadow-[0_0_25px_rgba(37,99,235,0.25)]
      transition
      duration-300
      hover:-translate-y-0.5
    "
  >
    Download CV

    <Download
      size={18}
      aria-hidden="true"
    />
  </a>
</div>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() =>
              setIsMenuOpen(
                (current) => !current,
              )
            }
            className="
              relative
              z-[120]
              grid
              h-12
              w-12
              shrink-0
              cursor-pointer
              place-items-center
              rounded-xl
              border
              border-slate-300
              bg-white
              text-slate-800
              transition-colors
              duration-300

              hover:border-blue-400
              hover:text-blue-600

              dark:border-slate-700
              dark:bg-slate-950
              dark:text-white
              dark:hover:border-cyan-400
              dark:hover:text-cyan-300

              xl:hidden
            "
            aria-label={
              isMenuOpen
                ? "Close navigation menu"
                : "Open navigation menu"
            }
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
          >
            {isMenuOpen ? (
              <X size={25} />
            ) : (
              <Menu size={25} />
            )}
          </button>
        </nav>
      </header>

      {/* Mobile backdrop */}
      {isMenuOpen && (
        <button
          type="button"
          className="
            fixed
            inset-0
            z-[80]
            cursor-default
            bg-slate-950/65
            backdrop-blur-sm
            xl:hidden
          "
          onClick={() =>
            setIsMenuOpen(false)
          }
          aria-label="Close navigation menu"
        />
      )}

      {/* Mobile navigation */}
      <div
        id="mobile-navigation"
        className={`
          fixed
          inset-x-0
          top-20
          z-[90]
          max-h-[calc(100dvh-5rem)]
          overflow-y-auto
          border-b
          border-slate-200
          bg-white/98
          shadow-[0_20px_60px_rgba(15,23,42,0.18)]
          backdrop-blur-2xl
          transition-all
          duration-300

          dark:border-blue-400/15
          dark:bg-slate-950/98
          dark:shadow-[0_25px_70px_rgba(2,6,23,0.75)]

          xl:hidden

          ${
            isMenuOpen
              ? "visible translate-y-0 opacity-100"
              : "invisible -translate-y-4 opacity-0"
          }
        `}
        aria-hidden={!isMenuOpen}
      >
        <div className="mx-auto flex w-full max-w-2xl flex-col px-5 py-6 sm:px-8">
          <div className="grid gap-2">
            {navigationItems.map((item) => {
              const isActive =
                activeSection ===
                item.sectionId;

              return (
                <button
                  key={item.sectionId}
                  type="button"
                  onClick={() =>
                    navigateToSection(
                      item.sectionId,
                    )
                  }
                  className={`
                    inline-flex
                    w-fit
                    cursor-pointer
                    items-center
                    rounded-md
                    px-2.5
                    py-1.5
                    text-left
                    text-base
                    font-medium
                    transition-colors
                    duration-300

                    ${
                      isActive
                        ? "bg-blue-100 text-blue-700 dark:bg-blue-500/15 dark:text-cyan-300"
                        : "text-slate-700 hover:bg-blue-50 hover:text-blue-700 dark:text-slate-200 dark:hover:bg-blue-500/10 dark:hover:text-white"
                    }
                  `}
                >
                  {item.label}
                </button>
              );
            })}
          </div>

          {/* Mobile actions */}
          <div className="mt-5 flex items-center gap-3 border-t border-slate-200 pt-5 dark:border-slate-800">
            <a
              href="/documents/sasanka-ranawaka-cv.pdf"
              download
              className="
                inline-flex
                min-h-12
                flex-1
                items-center
                justify-center
                gap-2
                rounded-xl
                bg-gradient-to-r
                from-blue-600
                to-indigo-600
                px-4
                font-semibold
                text-white
              "
            >
              Download CV

              <Download
                size={18}
                aria-hidden="true"
              />
            </a>

            <ThemeToggle />
          </div>
        </div>
      </div>
    </>
  );
}