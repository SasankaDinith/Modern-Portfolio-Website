import { useEffect, useRef } from "react";

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
};

const PARTICLE_SPEED = 1.3;

export function NetworkBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) return;

    const context = canvas.getContext("2d");

    if (!context) return;

    let animationFrameId = 0;
    let particles: Particle[] = [];

    const pointer = {
      x: -9999,
      y: -9999,
    };

    const getParticleCount = () => {
      if (window.innerWidth < 640) return 45;
      if (window.innerWidth < 1024) return 75;
      return 110;
    };

    const createParticle = (): Particle => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * PARTICLE_SPEED,
      vy: (Math.random() - 0.5) * PARTICLE_SPEED,
      radius: Math.random() * 2 + 1.2,
    });

    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);

      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;

      context.setTransform(dpr, 0, 0, dpr, 0, 0);

      particles = Array.from(
        { length: getParticleCount() },
        createParticle,
      );
    };

    const isDarkMode = () =>
      document.documentElement.classList.contains("dark");

    const draw = () => {
      const rect = canvas.getBoundingClientRect();

      context.clearRect(0, 0, rect.width, rect.height);

      const darkMode = isDarkMode();

      particles.forEach((particle) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x <= 0 || particle.x >= rect.width) {
          particle.vx *= -1;
        }

        if (particle.y <= 0 || particle.y >= rect.height) {
          particle.vy *= -1;
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
          context.fillStyle = "rgba(34, 211, 238, 0.85)";
          context.shadowColor = "rgba(34, 211, 238, 0.75)";
          context.shadowBlur = 18;
        } else {
          context.fillStyle = "rgba(37, 99, 235, 0.42)";
          context.shadowColor = "rgba(37, 99, 235, 0.18)";
          context.shadowBlur = 8;
        }

        context.fill();
        context.shadowBlur = 0;
      });

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const first = particles[i];
          const second = particles[j];

          const dx = first.x - second.x;
          const dy = first.y - second.y;

          const distance = Math.sqrt(dx * dx + dy * dy);

          const maxDistance = 175;

          if (distance < maxDistance) {
            const opacity =
              (1 - distance / maxDistance) *
              (darkMode ? 0.42 : 0.15);

            context.beginPath();
            context.moveTo(first.x, first.y);
            context.lineTo(second.x, second.y);

            context.strokeStyle = darkMode
              ? `rgba(59, 130, 246, ${opacity})`
              : `rgba(37, 99, 235, ${opacity})`;

            context.lineWidth = 1;
            context.stroke();
          }
        }

        const particle = particles[i];

        const pointerDx = particle.x - pointer.x;
        const pointerDy = particle.y - pointer.y;

        const pointerDistance = Math.sqrt(
          pointerDx * pointerDx + pointerDy * pointerDy,
        );

        const pointerRange = 220;

        if (pointerDistance < pointerRange) {
          const opacity =
            (1 - pointerDistance / pointerRange) *
            (darkMode ? 0.48 : 0.2);

          context.beginPath();
          context.moveTo(particle.x, particle.y);
          context.lineTo(pointer.x, pointer.y);

          context.strokeStyle = darkMode
            ? `rgba(168, 85, 247, ${opacity})`
            : `rgba(99, 102, 241, ${opacity})`;

          context.lineWidth = 1;
          context.stroke();
        }
      }

      animationFrameId = window.requestAnimationFrame(draw);
    };

    const handlePointerMove = (event: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();

      pointer.x = event.clientX - rect.left;
      pointer.y = event.clientY - rect.top;
    };

    const handlePointerLeave = () => {
      pointer.x = -9999;
      pointer.y = -9999;
    };

    resizeCanvas();

    window.addEventListener("resize", resizeCanvas);
    canvas.addEventListener("pointermove", handlePointerMove);
    canvas.addEventListener("pointerleave", handlePointerLeave);

    draw();

    return () => {
      window.cancelAnimationFrame(animationFrameId);

      window.removeEventListener("resize", resizeCanvas);
      canvas.removeEventListener(
        "pointermove",
        handlePointerMove,
      );
      canvas.removeEventListener(
        "pointerleave",
        handlePointerLeave,
      );
    };
  }, []);

  return (
    <div
      className="pointer-events-none absolute inset-0 z-[2] overflow-hidden"
      aria-hidden="true"
    >
      <canvas
        ref={canvasRef}
        className="pointer-events-auto absolute inset-0 h-full w-full opacity-60 dark:opacity-100"
      />

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_35%,rgba(255,255,255,0.05)_75%,rgba(255,255,255,0.18)_100%)] dark:bg-[radial-gradient(circle_at_center,transparent_35%,rgba(2,6,23,0.12)_78%,rgba(2,6,23,0.38)_100%)]" />
    </div>
  );
}