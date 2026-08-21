/**
 * @name: FlowField
 * @description: Canvas particle flow field background — organic noise-driven streams of glowing light.
 * @version: 1.0.0
 * @author: @dorian_baffier
 * @license: MIT
 * @website: https://kokonutui.com
 * @github: https://github.com/kokonut-labs/kokonutui
 */

import { useEffect, useRef } from "react";

const PARTICLE_COUNTS = {
  sparse: 600,
  medium: 1200,
  dense: 2000,
};

const THEME = {
  hueStart: 20,
  hueRange: 28,
  saturation: 90,
  lightness: 58,
  bg: "24, 24, 27",
  trailAlpha: 0.07,
};

/**
 * Smooth organic 2D noise via a multi-octave trigonometric series.
 * Returns an angle in radians that evolves continuously with time `t`.
 */
function fieldAngle(x, y, t) {
  const s = 0.0025;
  return (
    Math.sin(x * s + t * 0.0007) * Math.PI +
    Math.cos(y * s + t * 0.0005) * Math.PI +
    Math.sin((x + y) * s * 0.6 + t * 0.0009) * Math.PI * 0.6 +
    Math.cos((x - y) * s * 0.4 + t * 0.0006) * Math.PI * 0.4
  );
}

export function FlowField({ density = "medium" }) {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const count = PARTICLE_COUNTS[density];
    const dpr = window.devicePixelRatio ?? 1;

    let width = 0;
    let height = 0;
    let animId = 0;
    let time = 0;
    let particles = [];

    const spawnParticle = () => {
      const maxLife = 200 + Math.floor(Math.random() * 300);
      return {
        x: Math.random() * width,
        y: Math.random() * height,
        speed: 1.1 + Math.random() * 1.8,
        hue: THEME.hueStart + Math.random() * THEME.hueRange,
        life: Math.floor(Math.random() * maxLife),
        maxLife,
      };
    };

    const resize = () => {
      const rect = container.getBoundingClientRect();
      if (rect.width < 1 || rect.height < 1) return;
      width = rect.width;
      height = rect.height;
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      // Fill dark base on resize
      ctx.fillStyle = `rgb(${THEME.bg})`;
      ctx.fillRect(0, 0, width, height);

      // Re-seed particles spread across the canvas
      particles = Array.from({ length: count }, spawnParticle);
    };

    const render = () => {
      time++;

      // Fade previous frame — each dot persists ~16 frames, creating soft trails
      ctx.fillStyle = `rgba(${THEME.bg}, ${THEME.trailAlpha})`;
      ctx.fillRect(0, 0, width, height);

      for (const p of particles) {
        const angle = fieldAngle(p.x, p.y, time);

        p.x += Math.cos(angle) * p.speed;
        p.y += Math.sin(angle) * p.speed;
        p.life++;

        // Respawn aged-out particles at a random position
        if (p.life > p.maxLife) {
          p.x = Math.random() * width;
          p.y = Math.random() * height;
          p.life = 0;
          p.hue = THEME.hueStart + Math.random() * THEME.hueRange;
          continue;
        }

        // Wrap edges
        if (p.x < 0) p.x += width;
        else if (p.x > width) p.x -= width;
        if (p.y < 0) p.y += height;
        else if (p.y > height) p.y -= height;

        // Fade in / out over particle lifetime
        const progress = p.life / p.maxLife;
        const fadeIn = Math.min(progress * 8, 1);
        const fadeOut = Math.min((1 - progress) * 6, 1);
        const alpha = fadeIn * fadeOut * 0.9;

        // Hue shifts subtly with field direction, bounded so it never leaves the amber/orange signal
        const hueMod = ((p.hue + Math.sin(angle) * 10) % 360 + 360) % 360;

        ctx.beginPath();
        ctx.arc(p.x, p.y, 1.3, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${hueMod}, ${THEME.saturation}%, ${THEME.lightness}%, ${alpha})`;
        ctx.fill();
      }

      animId = requestAnimationFrame(render);
    };

    resize();
    window.addEventListener("resize", resize);
    render();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, [density]);

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
    >
      <canvas ref={canvasRef} className="absolute inset-0" />

      {/* Radial vignette — focuses center, dims edges */}
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(ellipse 65% 60% at 50% 50%, transparent 20%, rgba(${THEME.bg}, 0.92) 100%)`,
        }}
      />

      {/* Soft top / bottom fades */}
      <div
        className="absolute inset-x-0 top-0 h-40"
        style={{
          background: `linear-gradient(to bottom, rgb(${THEME.bg}), transparent)`,
        }}
      />
      <div
        className="absolute inset-x-0 bottom-0 h-40"
        style={{
          background: `linear-gradient(to top, rgb(${THEME.bg}), transparent)`,
        }}
      />
    </div>
  );
}

export default FlowField;
