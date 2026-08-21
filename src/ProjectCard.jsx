import { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, useReducedMotion } from "motion/react";
import { Repeat2 } from "lucide-react";

const RING_GRADIENT =
  "conic-gradient(from 0deg, transparent 0deg, #fbbf24 35deg, transparent 95deg, transparent 265deg, #f97316 325deg, transparent 360deg)";

function ProjectThumbnail({ src, alt }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="h-48 sm:h-56 bg-zinc-700 overflow-hidden relative">
      {!loaded && (
        <span
          aria-hidden="true"
          className="absolute inset-0 flex items-center justify-center"
        >
          <span className="w-2 h-4 bg-orange-400/50 motion-safe:animate-pulse rounded-xs" />
        </span>
      )}
      <img
        src={src}
        alt={alt}
        width={800}
        height={450}
        loading="lazy"
        onLoad={() => setLoaded(true)}
        className={`w-full h-full object-cover transition-opacity duration-500 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
      />
    </div>
  );
}

export default function ProjectCard({ project, index }) {
  const reduceMotion = useReducedMotion();
  const hasLiveDemo = project.deployUrl !== project.githubUrl;
  const [pinned, setPinned] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [canHover] = useState(
    () => typeof window !== "undefined" && window.matchMedia("(hover: hover) and (pointer: fine)").matches
  );

  const isFlipped = pinned || (canHover && hovered);

  return (
    <motion.div
      whileHover={reduceMotion ? undefined : { y: -4 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="group relative"
    >
      {/* Living-signal ring: a thin traced outline, not a fill — only lights up while this module is being inspected */}
      <div
        aria-hidden="true"
        className={`absolute inset-0 rounded-lg overflow-hidden transition-opacity duration-500 ${
          isFlipped ? "opacity-100" : "opacity-0"
        }`}
        style={{
          padding: 1.5,
          WebkitMask:
            "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
          WebkitMaskComposite: "xor",
          mask: "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
          maskComposite: "exclude",
        }}
      >
        <motion.div
          className="absolute -inset-full"
          style={{ background: RING_GRADIENT }}
          animate={reduceMotion ? undefined : { rotate: 360 }}
          transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
        />
      </div>

      <div
        className="relative h-100 sm:h-105 rounded-lg"
        style={{ perspective: "1800px" }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Persistent flip control, placed first in DOM so keyboard tab order reaches it before the
            back-face links it reveals — the only thing that keeps the same orientation regardless of state */}
        <button
          type="button"
          onClick={() => setPinned((p) => !p)}
          aria-pressed={isFlipped}
          aria-label={isFlipped ? "Ver capa do projeto" : "Ver detalhes técnicos do projeto"}
          className="absolute top-3 right-3 z-20 flex items-center justify-center w-9 h-9 rounded-lg bg-zinc-900/70 border border-orange-500/20 text-orange-400 backdrop-blur-sm hover:bg-zinc-900/90 hover:border-orange-500/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-900 transition-colors duration-300"
        >
          <Repeat2
            aria-hidden="true"
            className="w-4 h-4 transition-transform duration-500"
            style={{ transform: isFlipped ? "rotate(180deg)" : "rotate(0deg)" }}
          />
        </button>

        <div
          className="relative h-full w-full [transform-style:preserve-3d]"
          style={{
            transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
            transition: reduceMotion
              ? "none"
              : "transform 0.6s cubic-bezier(0.65, 0, 0.35, 1)",
          }}
        >
          {/* Front */}
          <div
            className="absolute inset-0 [backface-visibility:hidden] rounded-lg overflow-hidden bg-zinc-800/60 border border-orange-500/20 group-hover:border-orange-500/50 transition-colors duration-300"
            style={{ pointerEvents: isFlipped ? "none" : "auto" }}
          >
            <span
              aria-hidden="true"
              className="absolute top-3 left-3 z-10 font-mono text-xs text-white/60 bg-zinc-900/70 px-1.5 py-0.5 rounded backdrop-blur-sm"
            >
              [{String(index + 1).padStart(2, "0")}]
            </span>

            <ProjectThumbnail src={project.image} alt={project.title} />

            <div className="p-5 sm:p-6">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 line-clamp-2">
                {project.title}
              </h3>
              <p className="flex flex-wrap gap-x-1.5 font-mono text-xs text-white/40">
                {project.technologies.slice(0, 3).map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
                {project.technologies.length > 3 && <span>…</span>}
              </p>
            </div>
          </div>

          {/* Back */}
          <div
            aria-hidden={!isFlipped}
            className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] rounded-lg overflow-hidden bg-zinc-800/80 border border-orange-500/40 flex flex-col"
            style={{ pointerEvents: isFlipped ? "auto" : "none" }}
          >
            <div className="flex-1 overflow-y-auto p-5 sm:p-6">
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
                {project.title}
              </h3>
              <p className="text-white/70 text-sm sm:text-base mb-4">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, i) => (
                  <span
                    key={tech}
                    className="inline-block bg-gradient-to-r from-yellow-400/20 to-orange-500/20 border border-orange-500/40 text-orange-300 text-xs px-2.5 py-1 rounded-full transition-[transform,opacity] duration-300"
                    style={{
                      transform: isFlipped ? "translateX(0)" : "translateX(-8px)",
                      opacity: isFlipped ? 1 : 0,
                      transitionDelay: reduceMotion ? "0ms" : `${i * 40 + 120}ms`,
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-5 sm:p-6 pt-4 border-t border-orange-500/10 flex gap-3 flex-col sm:flex-row shrink-0">
              {hasLiveDemo && (
                <a
                  href={project.deployUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  tabIndex={isFlipped ? 0 : -1}
                  className="flex-1 px-4 py-2.5 bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-orange-500/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-900 focus-visible:shadow-lg focus-visible:shadow-orange-500/50 transition-shadow duration-300 text-center text-sm"
                >
                  Ver Site
                </a>
              )}
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                tabIndex={isFlipped ? 0 : -1}
                className={
                  hasLiveDemo
                    ? "flex-1 px-4 py-2.5 border border-orange-500/50 text-orange-300 font-semibold rounded-lg hover:bg-orange-500/10 hover:border-orange-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-900 focus-visible:bg-orange-500/10 focus-visible:border-orange-500 transition-colors duration-300 text-center text-sm"
                    : "flex-1 px-4 py-2.5 bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-orange-500/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-900 focus-visible:shadow-lg focus-visible:shadow-orange-500/50 transition-shadow duration-300 text-center text-sm"
                }
              >
                {hasLiveDemo ? "GitHub" : "Ver Repositório"}
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
