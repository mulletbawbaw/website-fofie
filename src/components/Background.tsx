"use client";

import { useEffect, useRef } from "react";

const PARTICLE_COLORS = ["#c46ef0", "#e08bff", "#9b5de5", "#d8a0ff", "#f3ecfb"] as const;

interface Particle {
  x: number;
  y: number;
  r: number;
  vy: number;
  vx: number;
  a: number;
  tw: number;
  tws: number;
  c: string;
}

function makeParticle(w: number, h: number, init: boolean): Particle {
  return {
    x: Math.random() * w,
    y: init ? Math.random() * h : h + 10,
    r: Math.random() * 2.4 + 0.5,
    vy: -(Math.random() * 0.35 + 0.06),
    vx: (Math.random() - 0.5) * 0.16,
    a: Math.random() * 0.55 + 0.12,
    tw: Math.random() * 6.28,
    tws: Math.random() * 0.045 + 0.008,
    c: PARTICLE_COLORS[Math.floor(Math.random() * PARTICLE_COLORS.length)],
  };
}

export function Background() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let w = 0;
    let h = 0;
    let dpr = 1;
    let rafId: number;
    const particles: Particle[] = [];

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = canvas.clientWidth;
      h = canvas.clientHeight;
      canvas.width = Math.max(1, w * dpr);
      canvas.height = Math.max(1, h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    window.addEventListener("resize", resize);
    resize();

    const count = Math.max(28, Math.round(Math.min(100, (w * h) / 13000)));
    for (let i = 0; i < count; i++) particles.push(makeParticle(w, h, true));

    const draw = () => {
      ctx.clearRect(0, 0, w, h);

      for (const p of particles) {
        p.y += p.vy;
        p.x += p.vx;
        p.tw += p.tws;

        if (p.y < -12) Object.assign(p, makeParticle(w, h, false));
        if (p.x < -12) p.x = w + 12;
        if (p.x > w + 12) p.x = -12;

        const alpha = p.a * (0.55 + 0.45 * Math.sin(p.tw));
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = p.c;
        ctx.globalAlpha = alpha;
        ctx.shadowColor = p.c;
        ctx.shadowBlur = p.r * 5;
        ctx.fill();
      }

      ctx.globalAlpha = 1;
      ctx.shadowBlur = 0;
      rafId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <>
      <div className="bg-blobs" aria-hidden>
        <div className="bg-blob bg-blob-1" />
        <div className="bg-blob bg-blob-2" />
        <div className="bg-blob bg-blob-3" />
      </div>
      <canvas
        ref={canvasRef}
        style={{
          position: "fixed",
          inset: 0,
          width: "100%",
          height: "100%",
          zIndex: 0,
          pointerEvents: "none",
        }}
        aria-hidden
      />
    </>
  );
}
