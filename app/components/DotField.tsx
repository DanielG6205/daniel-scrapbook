"use client";

import { useEffect, useRef } from "react";

type Dot = {
  x: number;
  y: number;
  ox: number;
  oy: number;
  vx: number;
  vy: number;
  r: number;
  color: string;
};

const DOT_COUNT = 120;
const FORCE_RADIUS = 140;
const RETURN_STRENGTH = 0.02;
const FRICTION = 0.88;
const ROTATION_SPEED = 0.0004;

export default function DotField() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const dotsRef = useRef<Dot[]>([]);
  const pointerRef = useRef({ x: -9999, y: -9999 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      return;
    }
    const ctx = canvas.getContext("2d");
    if (!ctx) {
      return;
    }

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createDots = () => {
      const colors = [
        "rgba(61, 47, 37, 0.28)",
        "rgba(192, 106, 59, 0.25)",
        "rgba(31, 111, 120, 0.22)",
      ];
      dotsRef.current = Array.from({ length: DOT_COUNT }, () => {
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight;
        return {
          x,
          y,
          ox: x,
          oy: y,
          vx: 0,
          vy: 0,
          r: 1.2 + Math.random() * 1.4,
          color: colors[Math.floor(Math.random() * colors.length)],
        };
      });
    };

    resize();
    createDots();

    const onMove = (event: MouseEvent) => {
      pointerRef.current = { x: event.clientX, y: event.clientY };
    };

    const onLeave = () => {
      pointerRef.current = { x: -9999, y: -9999 };
    };

    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseout", onLeave);

    let animationFrame = 0;
    let rotation = 0;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const { x: px, y: py } = pointerRef.current;
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      rotation += ROTATION_SPEED;
      const cos = Math.cos(rotation);
      const sin = Math.sin(rotation);

      for (const dot of dotsRef.current) {
        const dx0 = dot.ox - centerX;
        const dy0 = dot.oy - centerY;
        const targetX = centerX + dx0 * cos - dy0 * sin;
        const targetY = centerY + dx0 * sin + dy0 * cos;
        const dx = dot.x - px;
        const dy = dot.y - py;
        const dist = Math.hypot(dx, dy);

        if (dist < FORCE_RADIUS) {
          const strength = (1 - dist / FORCE_RADIUS) * 2.4;
          const pushX = (dx / (dist || 1)) * strength;
          const pushY = (dy / (dist || 1)) * strength;
          dot.vx += pushX;
          dot.vy += pushY;
        }

        dot.vx += (targetX - dot.x) * RETURN_STRENGTH;
        dot.vy += (targetY - dot.y) * RETURN_STRENGTH;
        dot.vx *= FRICTION;
        dot.vy *= FRICTION;
        dot.x += dot.vx;
        dot.y += dot.vy;

        ctx.beginPath();
        ctx.fillStyle = dot.color;
        ctx.arc(dot.x, dot.y, dot.r, 0, Math.PI * 2);
        ctx.fill();
      }

      animationFrame = window.requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseout", onLeave);
      window.cancelAnimationFrame(animationFrame);
    };
  }, []);

  return <canvas className="dot-field" ref={canvasRef} aria-hidden="true" />;
}
