
import {
  useEffect,
  useRef,
  useState,
} from "react";

import {
  Activity,
  Boxes,
  Cloud,
  Database,
  GitBranch,
  Server,
  BarChart2,
} from "lucide-react";

import type { LucideIcon } from "lucide-react";

import {
  motion,
  useReducedMotion,
} from "motion/react";

/* =========================
   TYPES
========================= */

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
};

type InfrastructureSymbol = {
  Icon: LucideIcon;
  left: string;
  top: string;
  delay: number;
  duration: number;
  size: number;
};

/* =========================
   PERFORMANCE SETTINGS
========================= */

const PARTICLE_SPEED = 0.65;

const CONNECTION_DISTANCE = 185;
const POINTER_RANGE = 250;

const CONNECTION_DISTANCE_SQUARED =
  CONNECTION_DISTANCE * CONNECTION_DISTANCE;

const POINTER_RANGE_SQUARED =
  POINTER_RANGE * POINTER_RANGE;

function getSettings(viewportWidth: number) {
  if (viewportWidth < 640) {
    return {
      particleCount: 24,
      fps: 24,
      maxDpr: 1.5,
      mobile: true,
    };
  }

  if (viewportWidth < 1024) {
    return {
      particleCount: 45,
      fps: 30,
      maxDpr: 1.75,
      mobile: false,
    };
  }

  return {
    particleCount: 70,
    fps: 40,
    maxDpr: 2,
    mobile: false,
  };
}

/* =========================
   INFRASTRUCTURE SYMBOLS
========================= */

const symbols: InfrastructureSymbol[] = [
  {
    Icon: Cloud,
    left: "8%",
    top: "20%",
    delay: 0,
    duration: 6,
    size: 34,
  },
  {
    Icon: Server,
    left: "23%",
    top: "72%",
    delay: 1,
    duration: 7,
    size: 31,
  },
  {
    Icon: Boxes,
    left: "43%",
    top: "16%",
    delay: 2,
    duration: 6.5,
    size: 34,
  },
  {
    Icon: GitBranch,
    left: "62%",
    top: "70%",
    delay: 0.7,
    duration: 7.5,
    size: 31,
  },
  {
    Icon: Activity,
    left: "81%",
    top: "18%",
    delay: 1.5,
    duration: 6.8,
    size: 33,
  },
  {
    Icon: Database,
    left: "91%",
    top: "63%",
    delay: 2.5,
    duration: 7.2,
    size: 31,
  },
  {
    Icon: BarChart2,
    left: "74%",
    top: "48%",
    delay: 2.5,
    duration: 7.2,
    size: 31,
  },
];

/* =========================
   MAIN COMPONENT
========================= */

export function NetworkBackground() {
  const containerRef =
    useRef<HTMLDivElement | null>(null);

  const canvasRef =
    useRef<HTMLCanvasElement | null>(null);

  const reduceMotion = useReducedMotion();

  const [isHeroVisible, setIsHeroVisible] =
    useState(true);

  /* =========================
     OPTIMIZED PARTICLE CANVAS
  ========================= */

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;

    if (!canvas || !container) return;

    const context = canvas.getContext("2d", {
      alpha: true,
    });

    if (!context) return;

    const drawingContext = context;

    let animationFrameId = 0;
    let running = false;

    let width = 0;
    let height = 0;
    let currentDpr = 0;

    const particles: Particle[] = [];

    let lastFrameTime = 0;

    let inViewport = true;

    let darkMode =
      document.documentElement.classList.contains(
        "dark",
      );

    let settings = getSettings(
      window.innerWidth,
    );

    const pointer = {
      x: -9999,
      y: -9999,
    };

    /* =========================
       PARTICLE CREATION
    ========================= */

    const createParticle = (): Particle => ({
      x: Math.random() * width,
      y: Math.random() * height,

      vx:
        (Math.random() * 2 - 1) *
        PARTICLE_SPEED,

      vy:
        (Math.random() * 2 - 1) *
        PARTICLE_SPEED,

      radius:
        Math.random() * 2 + 1.2,
    });

    /* =========================
       CANVAS RESIZE
    ========================= */

    const resizeCanvas = () => {
      const rect = container.getBoundingClientRect();

      const newWidth = rect.width;
      const newHeight = rect.height;

      if (newWidth <= 0 || newHeight <= 0) {
        return;
      }

      const nextSettings = getSettings(
        window.innerWidth,
      );

      const nextDpr = Math.min(
        window.devicePixelRatio || 1,
        nextSettings.maxDpr,
      );

      const dimensionsChanged =
        width !== newWidth ||
        height !== newHeight ||
        currentDpr !== nextDpr;

      const countChanged =
        particles.length !==
        nextSettings.particleCount;

      settings = nextSettings;

      if (!dimensionsChanged && !countChanged) {
        return;
      }

      const previousWidth = width;
      const previousHeight = height;

      width = newWidth;
      height = newHeight;
      currentDpr = nextDpr;

      if (dimensionsChanged) {
        canvas.width = Math.round(
          width * currentDpr,
        );

        canvas.height = Math.round(
          height * currentDpr,
        );

        drawingContext.setTransform(
          currentDpr,
          0,
          0,
          currentDpr,
          0,
          0,
        );
      }

      /* Keep existing particle positions
         instead of recreating everything. */

      if (previousWidth > 0 && previousHeight > 0) {
        const scaleX = width / previousWidth;
        const scaleY = height / previousHeight;

        for (const particle of particles) {
          particle.x *= scaleX;
          particle.y *= scaleY;
        }
      }

      /* Adjust particle count only
         when necessary. */

      if (
        particles.length >
        settings.particleCount
      ) {
        particles.length =
          settings.particleCount;
      }

      while (
        particles.length <
        settings.particleCount
      ) {
        particles.push(createParticle());
      }

      /* Refresh the static frame if
         animation is not running. */

      if (
        !running &&
        inViewport &&
        !document.hidden
      ) {
        render(0);
      }
    };

    /* =========================
       PARTICLE MOVEMENT
    ========================= */

    const updateParticles = (timeStep: number) => {
      for (const particle of particles) {
        particle.x +=
          particle.vx * timeStep;

        particle.y +=
          particle.vy * timeStep;

        if (
          particle.x <= 0 ||
          particle.x >= width
        ) {
          particle.vx *= -1;

          particle.x = Math.max(
            0,
            Math.min(width, particle.x),
          );
        }

        if (
          particle.y <= 0 ||
          particle.y >= height
        ) {
          particle.vy *= -1;

          particle.y = Math.max(
            0,
            Math.min(height, particle.y),
          );
        }
      }
    };

    /* =========================
       CANVAS DRAWING
    ========================= */

    function render(timeStep: number) {
      if (width <= 0 || height <= 0) {
        return;
      }

      drawingContext.clearRect(
        0,
        0,
        width,
        height,
      );

      if (timeStep > 0) {
        updateParticles(timeStep);
      }

      drawingContext.lineWidth = 1;
      drawingContext.shadowBlur = 0;

      /* -------------------------
         PARTICLE CONNECTIONS
      ------------------------- */

      for (
        let i = 0;
        i < particles.length;
        i++
      ) {
        const first = particles[i];

        for (
          let j = i + 1;
          j < particles.length;
          j++
        ) {
          const second = particles[j];

          const dx = first.x - second.x;
          const dy = first.y - second.y;

          /* Cheap early rejection:
             avoids unnecessary square roots. */

          if (
            Math.abs(dx) >= CONNECTION_DISTANCE ||
            Math.abs(dy) >= CONNECTION_DISTANCE
          ) {
            continue;
          }

          const distanceSquared =
            dx * dx + dy * dy;

          if (
            distanceSquared >=
            CONNECTION_DISTANCE_SQUARED
          ) {
            continue;
          }

          const distance = Math.sqrt(
            distanceSquared,
          );

          const opacity =
            (1 -
              distance / CONNECTION_DISTANCE) *
            (darkMode ? 0.42 : 0.15);

          drawingContext.beginPath();

          drawingContext.moveTo(
            first.x,
            first.y,
          );

          drawingContext.lineTo(
            second.x,
            second.y,
          );

          drawingContext.strokeStyle = darkMode
            ? `rgba(59, 130, 246, ${opacity})`
            : `rgba(37, 99, 235, ${opacity})`;

          drawingContext.stroke();
        }

        /* -------------------------
           POINTER CONNECTIONS
        ------------------------- */

        if (
          !settings.mobile &&
          !reduceMotion
        ) {
          const dx = first.x - pointer.x;
          const dy = first.y - pointer.y;

          if (
            Math.abs(dx) < POINTER_RANGE &&
            Math.abs(dy) < POINTER_RANGE
          ) {
            const distanceSquared =
              dx * dx + dy * dy;

            if (
              distanceSquared <
              POINTER_RANGE_SQUARED
            ) {
              const distance = Math.sqrt(
                distanceSquared,
              );

              const opacity =
                (1 -
                  distance / POINTER_RANGE) *
                (darkMode ? 0.48 : 0.2);

              drawingContext.beginPath();

              drawingContext.moveTo(
                first.x,
                first.y,
              );

              drawingContext.lineTo(
                pointer.x,
                pointer.y,
              );

              drawingContext.strokeStyle = darkMode
                ? `rgba(168, 85, 247, ${opacity})`
                : `rgba(99, 102, 241, ${opacity})`;

              drawingContext.stroke();
            }
          }
        }
      }

      /* -------------------------
         DRAW PARTICLES
      ------------------------- */

      drawingContext.fillStyle = darkMode
        ? "rgba(34, 211, 238, 0.85)"
        : "rgba(37, 99, 235, 0.42)";

      drawingContext.shadowColor = darkMode
        ? "rgba(34, 211, 238, 0.75)"
        : "rgba(37, 99, 235, 0.18)";

      /* Lower-cost glow on desktop.
         No particle shadow on mobile. */

      drawingContext.shadowBlur = settings.mobile
        ? 0
        : darkMode
          ? 10
          : 4;

      for (const particle of particles) {
        drawingContext.beginPath();

        drawingContext.arc(
          particle.x,
          particle.y,
          particle.radius,
          0,
          Math.PI * 2,
        );

        drawingContext.fill();
      }

      drawingContext.shadowBlur = 0;
    }

    /* =========================
       FRAME-RATE LIMITER
    ========================= */

    const animate = (timestamp: number) => {
      if (!running) return;

      const frameInterval =
        1000 / settings.fps;

      const elapsed =
        lastFrameTime === 0
          ? frameInterval
          : timestamp - lastFrameTime;

      if (elapsed >= frameInterval) {
        /* Normalize movement across
           different frame rates. */

        const timeStep =
          lastFrameTime === 0
            ? 1
            : Math.min(
                elapsed / (1000 / 60),
                3,
              );

        render(timeStep);

        lastFrameTime = timestamp;
      }

      animationFrameId =
        window.requestAnimationFrame(
          animate,
        );
    };

    /* =========================
       START / STOP ANIMATION
    ========================= */

    const stopAnimation = () => {
      running = false;

      window.cancelAnimationFrame(
        animationFrameId,
      );

      animationFrameId = 0;
      lastFrameTime = 0;
    };

    const syncAnimation = () => {
      const canDisplay =
        inViewport && !document.hidden;

      setIsHeroVisible(canDisplay);

      if (!canDisplay) {
        stopAnimation();
        return;
      }

      /* Respect reduced-motion
         accessibility preferences. */

      if (reduceMotion) {
        stopAnimation();
        render(0);
        return;
      }

      if (running) return;

      running = true;
      lastFrameTime = 0;

      animationFrameId =
        window.requestAnimationFrame(
          animate,
        );
    };

    /* =========================
       POINTER INTERACTION
    ========================= */

    const resetPointer = () => {
      pointer.x = -9999;
      pointer.y = -9999;
    };

    const handlePointerMove = (
      event: PointerEvent,
    ) => {
      if (
        settings.mobile ||
        reduceMotion ||
        !running ||
        event.pointerType === "touch"
      ) {
        return;
      }

      const rect =
        canvas.getBoundingClientRect();

      if (
        event.clientX < rect.left ||
        event.clientX > rect.right ||
        event.clientY < rect.top ||
        event.clientY > rect.bottom
      ) {
        resetPointer();
        return;
      }

      pointer.x =
        event.clientX - rect.left;

      pointer.y =
        event.clientY - rect.top;
    };

    /* =========================
       VISIBILITY OBSERVER
    ========================= */

    const visibilityObserver =
      new IntersectionObserver(
        (entries) => {
          inViewport =
            entries[0]?.isIntersecting ?? false;

          if (!inViewport) {
            resetPointer();
          }

          syncAnimation();
        },
        {
          threshold: 0.01,
        },
      );

    visibilityObserver.observe(
      container,
    );

    /* =========================
       TAB VISIBILITY
    ========================= */

    const handleVisibilityChange = () => {
      if (document.hidden) {
        resetPointer();
      }

      syncAnimation();
    };

    /* =========================
       THEME CHANGES
    ========================= */

    const themeObserver = new MutationObserver(
      () => {
        darkMode =
          document.documentElement.classList.contains(
            "dark",
          );

        if (
          !running &&
          inViewport &&
          !document.hidden
        ) {
          render(0);
        }
      },
    );

    themeObserver.observe(
      document.documentElement,
      {
        attributes: true,
        attributeFilter: ["class"],
      },
    );

    /* =========================
       RESIZE OBSERVER
    ========================= */

    const resizeObserver =
      new ResizeObserver(() => {
        resizeCanvas();
      });

    resizeObserver.observe(container);

    /* =========================
       EVENT LISTENERS
    ========================= */

    window.addEventListener(
      "resize",
      resizeCanvas,
      { passive: true },
    );

    window.addEventListener(
      "pointermove",
      handlePointerMove,
      { passive: true },
    );

    window.addEventListener(
      "pointerleave",
      resetPointer,
    );

    document.addEventListener(
      "visibilitychange",
      handleVisibilityChange,
    );

    /* =========================
       INITIALIZATION
    ========================= */

    resizeCanvas();
    syncAnimation();

    /* =========================
       CLEANUP
    ========================= */

    return () => {
      stopAnimation();

      visibilityObserver.disconnect();
      resizeObserver.disconnect();
      themeObserver.disconnect();

      window.removeEventListener(
        "resize",
        resizeCanvas,
      );

      window.removeEventListener(
        "pointermove",
        handlePointerMove,
      );

      window.removeEventListener(
        "pointerleave",
        resetPointer,
      );

      document.removeEventListener(
        "visibilitychange",
        handleVisibilityChange,
      );
    };
  }, [reduceMotion]);

  /* =========================
     MOTION VISIBILITY
  ========================= */

  const shouldAnimate =
    !reduceMotion && isHeroVisible;

  /* =========================
     JSX
  ========================= */

  return (
    <div
      ref={containerRef}
      className="
        pointer-events-none
        absolute
        inset-0
        z-[2]
        overflow-hidden
      "
      aria-hidden="true"
    >
      {/* =========================
          BLUE AMBIENT GLOW
      ========================= */}

      <motion.div
        animate={
          shouldAnimate
            ? {
                scale: [1, 1.08, 1],
                opacity: [0.12, 0.22, 0.12],
              }
            : {
                scale: 1,
                opacity: 0.12,
              }
        }
        transition={
          shouldAnimate
            ? {
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }
            : { duration: 0.2 }
        }
        className="
          absolute
          -left-[200px]
          top-[5%]
          h-[500px]
          w-[500px]
          rounded-full
          bg-blue-300/15
          blur-[150px]
          dark:bg-blue-600/15
        "
      />

      {/* =========================
          PURPLE AMBIENT GLOW
      ========================= */}

      <motion.div
        animate={
          shouldAnimate
            ? {
                scale: [1, 1.1, 1],
                opacity: [0.1, 0.2, 0.1],
              }
            : {
                scale: 1,
                opacity: 0.1,
              }
        }
        transition={
          shouldAnimate
            ? {
                duration: 11,
                delay: 1,
                repeat: Infinity,
                ease: "easeInOut",
              }
            : { duration: 0.2 }
        }
        className="
          absolute
          -right-[200px]
          top-[15%]
          h-[520px]
          w-[520px]
          rounded-full
          bg-purple-300/15
          blur-[160px]
          dark:bg-purple-600/15
        "
      />

      {/* =========================
          MOVING PARTICLE NETWORK
      ========================= */}

      <canvas
        ref={canvasRef}
        className="
          pointer-events-none
          absolute
          inset-0
          z-[2]
          h-full
          w-full
          opacity-70
          dark:opacity-100
        "
      />

      {/* =========================
          INFRASTRUCTURE SYMBOLS
      ========================= */}

      <div className="absolute inset-0 z-[3]">
        {symbols.map(
          (
            {
              Icon,
              left,
              top,
              delay,
              duration,
              size,
            },
            index,
          ) => (
            <motion.div
              key={index}
              style={{ left, top }}
              initial={
                reduceMotion
                  ? false
                  : {
                      opacity: 0,
                      scale: 0.8,
                    }
              }
              animate={
                shouldAnimate
                  ? {
                      opacity: [
                        0.08,
                        0.24,
                        0.12,
                        0.08,
                      ],
                      y: [0, -12, 5, 0],
                      x: [0, 5, -3, 0],
                      rotate: [0, 2, -2, 0],
                      scale: [1, 1.06, 1],
                    }
                  : {
                      opacity: 0.16,
                      x: 0,
                      y: 0,
                      rotate: 0,
                      scale: 1,
                    }
              }
              transition={
                shouldAnimate
                  ? {
                      duration,
                      delay,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }
                  : { duration: 0.2 }
              }
              className="
                absolute
                text-blue-600/40
                dark:text-cyan-300/40
              "
            >
              {/* Icon glow */}

              <div
                className="
                  absolute
                  left-1/2
                  top-1/2
                  h-14
                  w-14
                  -translate-x-1/2
                  -translate-y-1/2
                  rounded-full
                  bg-blue-400/10
                  blur-xl
                  dark:bg-cyan-400/15
                "
              />

              <Icon
                size={size}
                strokeWidth={1.4}
                className="relative"
              />
            </motion.div>
          ),
        )}
      </div>

      {/* =========================
          CONTENT VISIBILITY LAYER
      ========================= */}

      <div
        className="
          absolute
          inset-0
          z-[4]
          bg-[radial-gradient(circle_at_38%_48%,rgba(255,255,255,0.10)_0%,transparent_46%)]
          dark:bg-[radial-gradient(circle_at_38%_48%,rgba(2,6,23,0.08)_0%,transparent_50%)]
        "
      />
    </div>
  );
}
