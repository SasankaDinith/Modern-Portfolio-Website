import { useEffect } from "react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "motion/react";

type NetworkNode = {
  id: number;
  x: number;
  y: number;
  size: number;
  delay: number;
};

type NetworkEdge = {
  from: number;
  to: number;
  delay: number;
  duration: number;
};

const nodes: NetworkNode[] = [
  { id: 0, x: 70, y: 110, size: 5, delay: 0 },
  { id: 1, x: 230, y: 75, size: 4, delay: 0.4 },
  { id: 2, x: 350, y: 185, size: 5, delay: 0.8 },
  { id: 3, x: 155, y: 290, size: 4, delay: 1.1 },
  { id: 4, x: 430, y: 350, size: 5, delay: 0.5 },

  { id: 5, x: 585, y: 130, size: 4, delay: 1.3 },
  { id: 6, x: 690, y: 280, size: 5, delay: 0.7 },
  { id: 7, x: 790, y: 110, size: 4, delay: 1.5 },

  { id: 8, x: 940, y: 210, size: 5, delay: 0.3 },
  { id: 9, x: 1080, y: 95, size: 4, delay: 1 },
  { id: 10, x: 1120, y: 350, size: 5, delay: 1.6 },

  { id: 11, x: 820, y: 480, size: 4, delay: 0.9 },
  { id: 12, x: 610, y: 540, size: 5, delay: 1.2 },
  { id: 13, x: 350, y: 560, size: 4, delay: 0.6 },
  { id: 14, x: 120, y: 520, size: 5, delay: 1.4 },
];

const edges: NetworkEdge[] = [
  { from: 0, to: 1, delay: 0, duration: 4.5 },
  { from: 0, to: 3, delay: 1.2, duration: 5.5 },
  { from: 1, to: 2, delay: 0.8, duration: 4.7 },
  { from: 2, to: 3, delay: 2.1, duration: 5.2 },
  { from: 2, to: 4, delay: 0.5, duration: 5.8 },
  { from: 2, to: 5, delay: 1.8, duration: 6 },
  { from: 4, to: 6, delay: 1, duration: 5.4 },
  { from: 5, to: 6, delay: 2.4, duration: 4.8 },
  { from: 5, to: 7, delay: 0.4, duration: 5.6 },
  { from: 7, to: 8, delay: 1.5, duration: 5 },
  { from: 7, to: 9, delay: 2.3, duration: 6 },
  { from: 8, to: 10, delay: 0.9, duration: 5.3 },
  { from: 8, to: 11, delay: 1.7, duration: 5.7 },
  { from: 6, to: 11, delay: 0.2, duration: 5.2 },
  { from: 6, to: 12, delay: 2, duration: 5.9 },
  { from: 12, to: 13, delay: 1.1, duration: 6.2 },
  { from: 13, to: 14, delay: 0.6, duration: 5.4 },
  { from: 3, to: 14, delay: 2.5, duration: 6 },
];

export function NetworkBackground() {
  const reduceMotion = useReducedMotion();

  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);

  const smoothX = useSpring(pointerX, {
    stiffness: 45,
    damping: 22,
  });

  const smoothY = useSpring(pointerY, {
    stiffness: 45,
    damping: 22,
  });

  useEffect(() => {
    if (reduceMotion) return;

    const handlePointerMove = (event: PointerEvent) => {
      const normalizedX =
        event.clientX / window.innerWidth - 0.5;

      const normalizedY =
        event.clientY / window.innerHeight - 0.5;

      // Very small parallax movement
      pointerX.set(normalizedX * 12);
      pointerY.set(normalizedY * 8);
    };

    const handlePointerLeave = () => {
      pointerX.set(0);
      pointerY.set(0);
    };

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

    return () => {
      window.removeEventListener(
        "pointermove",
        handlePointerMove,
      );

      window.removeEventListener(
        "pointerleave",
        handlePointerLeave,
      );
    };
  }, [
    pointerX,
    pointerY,
    reduceMotion,
  ]);

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
      {/* Very subtle technical grid */}
      <div
        className="
          absolute
          inset-0
          opacity-[0.12]

          bg-[linear-gradient(rgba(37,99,235,0.14)_1px,transparent_1px),linear-gradient(90deg,rgba(37,99,235,0.14)_1px,transparent_1px)]
          bg-[size:80px_80px]

          dark:opacity-[0.18]
        "
      />

      {/* Whole topology reacts slightly to pointer */}
      <motion.div
        style={
          reduceMotion
            ? undefined
            : {
                x: smoothX,
                y: smoothY,
              }
        }
        className="
          absolute
          -inset-3
        "
      >
        <svg
          viewBox="0 0 1200 650"
          preserveAspectRatio="xMidYMid slice"
          className="h-full w-full"
        >
          <defs>
            {/* Node glow */}
            <filter
              id="network-node-glow"
              x="-100%"
              y="-100%"
              width="300%"
              height="300%"
            >
              <feGaussianBlur
                stdDeviation="5"
                result="blur"
              />

              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>

            {/* Packet glow */}
            <filter
              id="network-packet-glow"
              x="-150%"
              y="-150%"
              width="400%"
              height="400%"
            >
              <feGaussianBlur
                stdDeviation="4"
                result="blur"
              />

              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Base connection lines */}
          {edges.map((edge, index) => {
            const fromNode = nodes[edge.from];
            const toNode = nodes[edge.to];

            if (!fromNode || !toNode) {
              return null;
            }

            return (
              <motion.line
                key={`edge-${edge.from}-${edge.to}`}
                x1={fromNode.x}
                y1={fromNode.y}
                x2={toNode.x}
                y2={toNode.y}
                initial={
                  reduceMotion
                    ? false
                    : {
                        pathLength: 0,
                        opacity: 0,
                      }
                }
                animate={{
                  pathLength: 1,
                  opacity: 1,
                }}
                transition={{
                  duration: 1.4,
                  delay: index * 0.05,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="
                  stroke-blue-400/25
                  dark:stroke-blue-400/25
                "
                strokeWidth="1.25"
              />
            );
          })}

          {/* Animated signal lines */}
          {!reduceMotion &&
            edges.map((edge, index) => {
              const fromNode = nodes[edge.from];
              const toNode = nodes[edge.to];

              if (!fromNode || !toNode) {
                return null;
              }

              return (
                <motion.line
                  key={`flow-${edge.from}-${edge.to}`}
                  x1={fromNode.x}
                  y1={fromNode.y}
                  x2={toNode.x}
                  y2={toNode.y}
                  strokeWidth="1.2"
                  strokeDasharray="4 13"
                  animate={{
                    strokeDashoffset: [
                      0,
                      -34,
                    ],
                  }}
                  transition={{
                    duration: 2.5 +
                      (index % 4) * 0.4,
                    repeat:
                      Number.POSITIVE_INFINITY,
                    ease: "linear",
                  }}
                  className="
                    stroke-cyan-500/30
                    dark:stroke-cyan-300/35
                  "
                />
              );
            })}

          {/* Data packets */}
          {!reduceMotion &&
            edges.map((edge, index) => {
              const start = nodes[edge.from];
              const end = nodes[edge.to];

              if (!start || !end) {
                return null;
              }

              /*
               * Alternate direction so traffic
               * looks bidirectional.
               */
              const reverse = index % 3 === 0;

              const from = reverse
                ? end
                : start;

              const to = reverse
                ? start
                : end;

              return (
                <motion.circle
                  key={`packet-${edge.from}-${edge.to}`}
                  r="3"
                  filter="url(#network-packet-glow)"
                  initial={{
                    cx: from.x,
                    cy: from.y,
                    opacity: 0,
                  }}
                  animate={{
                    cx: [
                      from.x,
                      to.x,
                    ],
                    cy: [
                      from.y,
                      to.y,
                    ],
                    opacity: [
                      0,
                      1,
                      1,
                      0,
                    ],
                  }}
                  transition={{
                    duration: edge.duration,
                    delay: edge.delay,
                    repeat:
                      Number.POSITIVE_INFINITY,
                    repeatDelay:
                      0.8 + (index % 3) * 0.4,
                    ease: "linear",
                  }}
                  className="
                    fill-blue-500
                    dark:fill-cyan-300
                  "
                />
              );
            })}

          {/* Nodes */}
          {nodes.map((node) => (
            <g key={node.id}>
              {/* Outer node ring */}
              <motion.circle
                cx={node.x}
                cy={node.y}
                r={node.size + 8}
                fill="none"
                strokeWidth="1"
                initial={{
                  opacity: 0,
                }}
                animate={
                  reduceMotion
                    ? {
                        opacity: 0.18,
                      }
                    : {
                        opacity: [
                          0.08,
                          0.24,
                          0.08,
                        ],

                        r: [
                          node.size + 6,
                          node.size + 11,
                          node.size + 6,
                        ],
                      }
                }
                transition={{
                  duration: 3.5,
                  delay: node.delay,
                  repeat:
                    Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
                className="
                  stroke-blue-500/40
                  dark:stroke-cyan-300/35
                "
              />

              {/* Main node */}
              <motion.circle
                cx={node.x}
                cy={node.y}
                r={node.size}
                filter="url(#network-node-glow)"
                animate={
                  reduceMotion
                    ? undefined
                    : {
                        r: [
                          node.size,
                          node.size + 1.8,
                          node.size,
                        ],

                        opacity: [
                          0.7,
                          1,
                          0.7,
                        ],
                      }
                }
                transition={{
                  duration: 2.8,
                  delay: node.delay,
                  repeat:
                    Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
                className="
                  fill-blue-500
                  dark:fill-cyan-300
                "
              />
            </g>
          ))}
        </svg>
      </motion.div>

      {/* Fade network around center content slightly */}
      <div
        className="
          absolute
          inset-0
          bg-[radial-gradient(circle_at_42%_48%,rgba(255,255,255,0.28),transparent_36%)]

          dark:bg-[radial-gradient(circle_at_42%_48%,rgba(2,6,23,0.28),transparent_38%)]
        "
      />
    </div>
  );
}