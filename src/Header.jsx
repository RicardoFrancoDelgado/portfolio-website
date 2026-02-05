import { useState, useEffect, useRef } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpen(false);
      }
    }

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }
  }, [open]);

  return (
    <header className="w-full fixed top-0 left-0 z-50 bg-zinc-900/80 backdrop-blur-md border-b border-orange-500/20 shadow-lg">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-4">
        <div className="flex items-center">
          <a
            href="#inicio"
            className="cursor-pointer select-none text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500 font-extrabold text-lg sm:text-2xl hover:opacity-80 transition-opacity duration-300"
          >
            {"<ricardo/>"}
          </a>
        </div>

        <nav className="relative" ref={menuRef}>
          <button
            onClick={() => setOpen((s) => !s)}
            aria-label="Toggle menu"
            className="md:hidden p-2 rounded-lg hover:bg-orange-500/20 transition-all duration-300"
          >
            <svg
              className="w-6 h-6 text-white transition-transform duration-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={open ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>

          <ul className="hidden md:flex gap-8 text-sm font-medium items-center">
            <li>
              <a
                href="#sobre"
                className="text-white/90 hover:text-orange-400 transition-colors duration-300 relative group"
              >
                Sobre
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-yellow-400 to-orange-500 group-hover:w-full transition-all duration-300"></span>
              </a>
            </li>
            <li>
              <a
                href="#projetos"
                className="text-white/90 hover:text-orange-400 transition-colors duration-300 relative group"
              >
                Projetos
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-yellow-400 to-orange-500 group-hover:w-full transition-all duration-300"></span>
              </a>
            </li>
            <li>
              <a
                href="#contato"
                className="text-white/90 hover:text-orange-400 transition-colors duration-300 relative group"
              >
                Contato
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-yellow-400 to-orange-500 group-hover:w-full transition-all duration-300"></span>
              </a>
            </li>
          </ul>

          {open && (
            <div className="md:hidden absolute right-0 mt-2 w-48 bg-zinc-800/95 backdrop-blur-lg rounded-lg shadow-xl py-2 border border-orange-500/30 animate-in fade-in slide-in-from-top-2 duration-300">
              <a
                href="#sobre"
                onClick={() => setOpen(false)}
                className="block px-4 py-3 text-sm text-white hover:bg-orange-500/20 hover:text-orange-400 transition-all duration-300 rounded-md mx-2"
              >
                Sobre
              </a>
              <a
                href="#projetos"
                onClick={() => setOpen(false)}
                className="block px-4 py-3 text-sm text-white hover:bg-orange-500/20 hover:text-orange-400 transition-all duration-300 rounded-md mx-2"
              >
                Projetos
              </a>
              <a
                href="#contato"
                onClick={() => setOpen(false)}
                className="block px-4 py-3 text-sm text-white hover:bg-orange-500/20 hover:text-orange-400 transition-all duration-300 rounded-md mx-2"
              >
                Contato
              </a>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
}
