import { useEffect, useRef } from "react";
import {
  Activity,
  Boxes,
  Cloud,
  Database,
  GitBranch,
  Server,
} from "lucide-react";
import {
  motion,
  useReducedMotion,
} from "motion/react";

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
};

type InfrastructureSymbol = {
  Icon: typeof Cloud;
  left: string;
  top: string;
  delay: number;
  duration: number;
  size: number;
};

/* =========================
   PARTICLE SETTINGS
========================= */

const PARTICLE_SPEED = 1.3;
const CONNECTION_DISTANCE = 175;
const POINTER_RANGE = 220;

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
];

export function NetworkBackground() {
  const canvasRef =
    useRef<HTMLCanvasElement | null>(null);

  const reduceMotion = useReducedMotion();

  /* =========================
     PARTICLE CANVAS
  ========================= */

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) return;

    const context =
      canvas.getContext("2d");

    if (!context) return;

    let animationFrameId = 0;

    let particles: Particle[] = [];

    const pointer = {
      x: -9999,
      y: -9999,
    };

    const getParticleCount = () => {
      if (window.innerWidth < 640) {
        return 45;
      }

      if (window.innerWidth < 1024) {
        return 75;
      }

      return 110;
    };

    const createParticle = (
      width: number,
      height: number,
    ): Particle => ({
      x: Math.random() * width,
      y: Math.random() * height,

      vx:
        (Math.random() - 0.5) *
        PARTICLE_SPEED,

      vy:
        (Math.random() - 0.5) *
        PARTICLE_SPEED,

      radius:
        Math.random() * 2 + 1.2,
    });

    const resizeCanvas = () => {
      const rect =
        canvas.getBoundingClientRect();

      const dpr = Math.min(
        window.devicePixelRatio || 1,
        2,
      );

      canvas.width =
        rect.width * dpr;

      canvas.height =
        rect.height * dpr;

      context.setTransform(
        dpr,
        0,
        0,
        dpr,
        0,
        0,
      );

      particles = Array.from(
        {
          length:
            getParticleCount(),
        },
        () =>
          createParticle(
            rect.width,
            rect.height,
          ),
      );
    };

    const isDarkMode = () =>
      document.documentElement.classList.contains(
        "dark",
      );

    const draw = () => {
      const rect =
        canvas.getBoundingClientRect();

      context.clearRect(
        0,
        0,
        rect.width,
        rect.height,
      );

      const darkMode =
        isDarkMode();

      /* -------------------------
         MOVE + DRAW PARTICLES
      ------------------------- */

      particles.forEach(
        (particle) => {
          if (!reduceMotion) {
            particle.x +=
              particle.vx;

            particle.y +=
              particle.vy;
          }

          /* Bounce horizontally */

          if (
            particle.x <= 0 ||
            particle.x >=
              rect.width
          ) {
            particle.vx *= -1;

            particle.x =
              Math.max(
                0,
                Math.min(
                  particle.x,
                  rect.width,
                ),
              );
          }

          /* Bounce vertically */

          if (
            particle.y <= 0 ||
            particle.y >=
              rect.height
          ) {
            particle.vy *= -1;

            particle.y =
              Math.max(
                0,
                Math.min(
                  particle.y,
                  rect.height,
                ),
              );
          }

          context.beginPath();

          context.arc(
            particle.x,
            particle.y,
            particle.radius,
            0,
            Math.PI * 2,
          );

          if (darkMode) {
            context.fillStyle =
              "rgba(34, 211, 238, 0.85)";

            context.shadowColor =
              "rgba(34, 211, 238, 0.75)";

            context.shadowBlur = 18;
          } else {
            context.fillStyle =
              "rgba(37, 99, 235, 0.42)";

            context.shadowColor =
              "rgba(37, 99, 235, 0.18)";

            context.shadowBlur = 8;
          }

          context.fill();

          context.shadowBlur = 0;
        },
      );

      /* -------------------------
         PARTICLE CONNECTIONS
      ------------------------- */

      for (
        let i = 0;
        i < particles.length;
        i += 1
      ) {
        for (
          let j = i + 1;
          j < particles.length;
          j += 1
        ) {
          const first =
            particles[i];

          const second =
            particles[j];

          const dx =
            first.x - second.x;

          const dy =
            first.y - second.y;

          const distance =
            Math.sqrt(
              dx * dx +
                dy * dy,
            );

          if (
            distance <
            CONNECTION_DISTANCE
          ) {
            const opacity =
              (1 -
                distance /
                  CONNECTION_DISTANCE) *
              (darkMode
                ? 0.42
                : 0.15);

            context.beginPath();

            context.moveTo(
              first.x,
              first.y,
            );

            context.lineTo(
              second.x,
              second.y,
            );

            context.strokeStyle =
              darkMode
                ? `rgba(59, 130, 246, ${opacity})`
                : `rgba(37, 99, 235, ${opacity})`;

            context.lineWidth = 1;

            context.stroke();
          }
        }

        /* -------------------------
           POINTER CONNECTION
        ------------------------- */

        const particle =
          particles[i];

        const pointerDx =
          particle.x -
          pointer.x;

        const pointerDy =
          particle.y -
          pointer.y;

        const pointerDistance =
          Math.sqrt(
            pointerDx *
              pointerDx +
              pointerDy *
                pointerDy,
          );

        if (
          pointerDistance <
          POINTER_RANGE
        ) {
          const opacity =
            (1 -
              pointerDistance /
                POINTER_RANGE) *
            (darkMode
              ? 0.48
              : 0.2);

          context.beginPath();

          context.moveTo(
            particle.x,
            particle.y,
          );

          context.lineTo(
            pointer.x,
            pointer.y,
          );

          context.strokeStyle =
            darkMode
              ? `rgba(168, 85, 247, ${opacity})`
              : `rgba(99, 102, 241, ${opacity})`;

          context.lineWidth = 1;

          context.stroke();
        }
      }

      animationFrameId =
        window.requestAnimationFrame(
          draw,
        );
    };

    /* =========================
       POINTER
    ========================= */

    const handlePointerMove = (
      event: PointerEvent,
    ) => {
      const rect =
        canvas.getBoundingClientRect();

      /*
       * Ignore pointer when it is
       * outside the Hero canvas.
       */

      if (
        event.clientX <
          rect.left ||
        event.clientX >
          rect.right ||
        event.clientY <
          rect.top ||
        event.clientY >
          rect.bottom
      ) {
        pointer.x = -9999;
        pointer.y = -9999;

        return;
      }

      pointer.x =
        event.clientX -
        rect.left;

      pointer.y =
        event.clientY -
        rect.top;
    };

    const handlePointerLeave =
      () => {
        pointer.x = -9999;
        pointer.y = -9999;
      };

    resizeCanvas();

    window.addEventListener(
      "resize",
      resizeCanvas,
    );

    /*
     * Listen from window instead of
     * the canvas. This means the canvas
     * does not block Hero buttons.
     */

    window.addEventListener(
      "pointermove",
      handlePointerMove,
      {
        passive: true,
      },
    );

    window.addEventListener(
      "pointerleave",
      handlePointerLeave,
    );

    draw();

    return () => {
      window.cancelAnimationFrame(
        animationFrameId,
      );

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
        handlePointerLeave,
      );
    };
  }, [reduceMotion]);

  return (
    <div
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
          TECHNICAL GRID
      ========================== */}


      {/* =========================
          BLUE AMBIENT GLOW
      ========================== */}

      <motion.div
        animate={
          reduceMotion
            ? undefined
            : {
                scale: [
                  1,
                  1.08,
                  1,
                ],

                opacity: [
                  0.12,
                  0.22,
                  0.12,
                ],
              }
        }
        transition={{
          duration: 9,
          repeat:
            Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
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
      ========================== */}

      <motion.div
        animate={
          reduceMotion
            ? undefined
            : {
                scale: [
                  1,
                  1.1,
                  1,
                ],

                opacity: [
                  0.1,
                  0.2,
                  0.1,
                ],
              }
        }
        transition={{
          duration: 11,
          delay: 1,
          repeat:
            Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
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
      ========================== */}

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
      ========================== */}

      <div className="absolute inset-0 z-[3]">
        {symbols.map(
          ({
            Icon,
            left,
            top,
            delay,
            duration,
            size,
          }) => (
            <motion.div
              key={`${left}-${top}`}
              style={{
                left,
                top,
              }}
              initial={{
                opacity: 0,
                scale: 0.8,
              }}
              animate={
                reduceMotion
                  ? {
                      opacity: 0.16,
                      scale: 1,
                    }
                  : {
                      opacity: [
                        0.08,
                        0.24,
                        0.12,
                        0.08,
                      ],

                      y: [
                        0,
                        -12,
                        5,
                        0,
                      ],

                      x: [
                        0,
                        5,
                        -3,
                        0,
                      ],

                      rotate: [
                        0,
                        2,
                        -2,
                        0,
                      ],

                      scale: [
                        1,
                        1.06,
                        1,
                      ],
                    }
              }
              transition={{
                duration,
                delay,
                repeat:
                  Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
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
      ========================== */}

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