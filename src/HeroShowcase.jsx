import { useEffect, useRef, useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, useSpring, useReducedMotion } from "motion/react";

const SHOWCASE_ITEMS = [
  {
    id: "medication-reminder",
    title: "Medication Reminder",
    image: "/projects/hero/medication-reminder.webp",
  },
  {
    id: "saude-project",
    title: "Desafio VNW - React Router DOM",
    image: "/projects/hero/saude-project.webp",
  },
  {
    id: "golang-banner",
    title: "Devbook API",
    image: "/projects/hero/golang-banner.webp",
  },
  {
    id: "verde-acao",
    title: "Projeto Ação Verde",
    image: "/projects/hero/verde-acao.webp",
  },
  {
    id: "viva-bem-project",
    title: "Projeto Viva Bem",
    image: "/projects/hero/viva-bem-project.webp",
  },
  {
    id: "connect-project",
    title: "Projeto Connect",
    image: "/projects/hero/connect-project.webp",
  },
];

const AUTOPLAY_INTERVAL = 4200;
const WIPE_EASE = [0.65, 0, 0.35, 1];

export default function HeroShowcase() {
  const reduceMotion = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [interacting, setInteracting] = useState(false);
  const [tabHidden, setTabHidden] = useState(false);
  const [inView, setInView] = useState(true);
  const [canTilt] = useState(() => window.matchMedia("(pointer: fine)").matches);

  const rootRef = useRef(null);
  const cardRef = useRef(null);

  const rotateX = useSpring(0, { stiffness: 150, damping: 20, mass: 0.5 });
  const rotateY = useSpring(0, { stiffness: 150, damping: 20, mass: 0.5 });

  // Preload every frame once so autoplay crossfades never flash empty.
  useEffect(() => {
    SHOWCASE_ITEMS.forEach((item) => {
      const img = new Image();
      img.src = item.image;
    });
  }, []);

  useEffect(() => {
    function handleVisibility() {
      setTabHidden(document.hidden);
    }
    document.addEventListener("visibilitychange", handleVisibility);
    return () => document.removeEventListener("visibilitychange", handleVisibility);
  }, []);

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (reduceMotion || interacting || tabHidden || !inView) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % SHOWCASE_ITEMS.length);
    }, AUTOPLAY_INTERVAL);
    return () => clearInterval(id);
  }, [reduceMotion, interacting, tabHidden, inView]);

  function handlePointerMove(e) {
    if (!canTilt || reduceMotion) return;
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    rotateY.set(px * 8);
    rotateX.set(py * -8);
  }

  function resetTilt() {
    rotateX.set(0);
    rotateY.set(0);
  }

  function handleFocusCapture() {
    setInteracting(true);
  }

  function handleBlurCapture(e) {
    if (!e.currentTarget.contains(e.relatedTarget)) setInteracting(false);
  }

  const active = SHOWCASE_ITEMS[index];
  const [baseItem, setBaseItem] = useState(active);
  // Reduced motion skips the wipe entirely: the base layer renders the active frame directly.
  const displayedItem = reduceMotion ? active : baseItem;

  return (
    <div ref={rootRef} className="w-full max-w-md mx-auto lg:mx-0">
      <div
        style={{ perspective: 1200 }}
        onPointerEnter={() => setInteracting(true)}
        onPointerLeave={() => {
          setInteracting(false);
          resetTilt();
        }}
        onPointerMove={handlePointerMove}
        onFocusCapture={handleFocusCapture}
        onBlurCapture={handleBlurCapture}
      >
        <div className="relative">
          {/* Hover-earned glow, matches the contact-card icon halo pattern */}
          <div
            aria-hidden="true"
            className="absolute -inset-3 rounded-2xl bg-linear-to-br from-yellow-400 to-orange-500 blur-2xl opacity-0 transition-opacity duration-500"
            style={{ opacity: interacting ? 0.15 : 0 }}
          />

          <motion.div
            ref={cardRef}
            role="region"
            aria-label="Vitrine de projetos"
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            className="relative rounded-xl border border-orange-500/20 bg-zinc-800/60 backdrop-blur-sm overflow-hidden shadow-2xl shadow-black/40"
          >
            {/* Chrome bar */}
            <div className="flex items-center gap-3 px-4 py-3 border-b border-orange-500/10">
              <span className="flex gap-1.5" aria-hidden="true">
                <span className="w-2.5 h-2.5 rounded-full bg-white/15" />
                <span className="w-2.5 h-2.5 rounded-full bg-white/15" />
                <span className="w-2.5 h-2.5 rounded-full bg-white/15" />
              </span>
              <span className="font-mono text-xs text-white/50 truncate">
                <span className="text-orange-400/70">$</span> preview {active.id}
                .png
              </span>
            </div>

            {/* Image stage */}
            <div className="relative aspect-video bg-zinc-900 overflow-hidden">
              <img
                src={displayedItem.image}
                alt={displayedItem.title}
                width={1000}
                height={563}
                className="absolute inset-0 w-full h-full object-cover"
              />
              {!reduceMotion && active.id !== baseItem.id && (
                <motion.div
                  key={active.id}
                  initial={{ clipPath: "inset(0 100% 0 0)" }}
                  animate={{ clipPath: "inset(0 0% 0 0)" }}
                  transition={{ duration: 0.85, ease: WIPE_EASE }}
                  onAnimationComplete={() => setBaseItem(active)}
                  className="absolute inset-0"
                >
                  <img
                    src={active.image}
                    alt=""
                    width={1000}
                    height={563}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <motion.span
                    aria-hidden="true"
                    initial={{ left: "0%", opacity: 0 }}
                    animate={{ left: "100%", opacity: [0, 1, 1, 0] }}
                    transition={{
                      duration: 0.85,
                      ease: WIPE_EASE,
                      times: [0, 0.08, 0.85, 1],
                    }}
                    className="absolute top-0 bottom-0 w-px sm:w-0.5 bg-linear-to-b from-transparent via-orange-400 to-transparent"
                  />
                </motion.div>
              )}
            </div>

            {/* Manual indicators */}
            <div className="flex items-center justify-center gap-1.5 py-3 border-t border-orange-500/10">
              {SHOWCASE_ITEMS.map((item, i) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setIndex(i)}
                  aria-label={`Ver projeto ${item.title}`}
                  aria-current={i === index ? "true" : undefined}
                  className={`h-1.5 rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-900 ${
                    i === index
                      ? "w-5 bg-linear-to-r from-yellow-400 to-orange-500"
                      : "w-1.5 bg-white/20 hover:bg-white/40"
                  }`}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <p className="mt-3 text-center lg:text-left text-xs text-white/40 font-mono truncate">
        {active.title}
      </p>
    </div>
  );
}
