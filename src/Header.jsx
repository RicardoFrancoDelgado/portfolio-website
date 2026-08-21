import { useState, useEffect, useRef } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence, useScroll, useSpring } from "motion/react";
import MorphicNavbar from "@/components/kokonutui/morphic-navbar";

const NAV_LINKS = [
  { label: "Sobre", href: "#sobre" },
  { label: "Projetos", href: "#projetos" },
  { label: "Contato", href: "#contato" },
];

const NAV_ITEMS = Object.fromEntries(
  NAV_LINKS.map(({ label, href }) => [href, { name: label }])
);

const SECTION_IDS = ["inicio", "sobre", "projetos", "contato"];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("inicio");
  const menuRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    if (!open) return;

    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  useEffect(() => {
    const sections = SECTION_IDS.map((id) => document.getElementById(id)).filter(
      Boolean
    );

    const observer = new IntersectionObserver(
      (entries) => {
        const mostVisible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (mostVisible) setActiveSection(mostVisible.target.id);
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  function closeMenu() {
    setOpen(false);
  }

  return (
    <header className="w-full fixed top-0 left-0 z-50 bg-zinc-900/80 backdrop-blur-md border-b border-orange-500/20 shadow-lg">
      <motion.div
        aria-hidden="true"
        style={{ scaleX: progress }}
        className="absolute bottom-0 left-0 right-0 h-0.5 origin-left bg-linear-to-r from-yellow-400 to-orange-500"
      />
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-4">
        <motion.a
          href="#inicio"
          onClick={closeMenu}
          whileTap={{ scale: 0.96 }}
          className="group flex items-center gap-2 cursor-pointer select-none hover:opacity-80 focus-visible:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-900 rounded-sm transition-opacity duration-300"
        >
          <span
            aria-hidden="true"
            className="relative w-1.5 h-1.5 rounded-full bg-orange-400"
          >
            <span className="absolute inset-0 rounded-full bg-orange-400 motion-safe:animate-ping opacity-75" />
          </span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500 font-extrabold text-lg sm:text-2xl">
            {"<ricardo/>"}
          </span>
        </motion.a>

        <nav className="relative" ref={menuRef}>
          {/* Botão hambúrguer mobile */}
          <button
            onClick={() => setOpen((s) => !s)}
            aria-label="Toggle menu"
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="md:hidden p-2.5 rounded-lg hover:bg-orange-500/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-900 transition-colors duration-300"
          >
            <span className="flex w-5 h-4 flex-col justify-between">
              <motion.span
                animate={open ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="block h-0.5 w-full bg-white rounded-full"
              />
              <motion.span
                animate={open ? { opacity: 0 } : { opacity: 1 }}
                transition={{ duration: 0.15 }}
                className="block h-0.5 w-full bg-white rounded-full"
              />
              <motion.span
                animate={open ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="block h-0.5 w-full bg-white rounded-full"
              />
            </span>
          </button>

          {/* Links desktop */}
          <MorphicNavbar
            className="hidden md:block px-0 py-0"
            items={NAV_ITEMS}
            activePath={`#${activeSection}`}
            onNavigate={(path) => setActiveSection(path.replace("#", ""))}
          />

          {/* Menu dropdown mobile */}
          <AnimatePresence>
            {open && (
              <motion.div
                id="mobile-menu"
                initial={{ opacity: 0, y: -8, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -8, scale: 0.98 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="md:hidden absolute right-0 mt-2 w-48 bg-zinc-800/95 backdrop-blur-lg rounded-lg shadow-xl py-2 border border-orange-500/30 origin-top-right"
              >
                {NAV_LINKS.map(({ label, href }, i) => (
                  <motion.a
                    key={href}
                    href={href}
                    onClick={closeMenu}
                    initial={{ opacity: 0, x: -6 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 + i * 0.04, duration: 0.15 }}
                    className="block px-4 py-3 text-sm text-white hover:bg-orange-500/20 hover:text-orange-400 focus-visible:bg-orange-500/20 focus-visible:text-orange-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 focus-visible:ring-inset transition-colors duration-300 rounded-md mx-2"
                  >
                    {label}
                  </motion.a>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </div>
    </header>
  );
}
