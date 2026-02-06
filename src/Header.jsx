import { useState, useEffect, useRef } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);
  const headerRef = useRef(null);

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

  function handleNavigate(e, id) {
    e.preventDefault();
    setOpen(false);

    const el = document.getElementById(id);

    if (el) {
      const headerHeight = headerRef.current?.offsetHeight || 64;
      const elementPosition = el.offsetTop;
      const offsetPosition = elementPosition - headerHeight - 16;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  }

  return (
    <header
      ref={headerRef}
      className="fixed top-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur-sm border-b border-gray-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <span className="text-2xl font-bold text-orange-400">
              Portfolio
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a
              href="#sobre"
              onClick={(e) => handleNavigate(e, "sobre")}
              className="text-white/90 hover:text-orange-400 transition-colors duration-300 relative group"
            >
              Sobre
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a
              href="#projetos"
              onClick={(e) => handleNavigate(e, "projetos")}
              className="text-white/90 hover:text-orange-400 transition-colors duration-300 relative group"
            >
              Projetos
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a
              href="#contato"
              onClick={(e) => handleNavigate(e, "contato")}
              className="text-white/90 hover:text-orange-400 transition-colors duration-300 relative group"
            >
              Contato
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen((s) => !s)}
            aria-label="Toggle menu"
            className="md:hidden p-2 rounded-lg hover:bg-orange-500/20 transition-all duration-300"
          >
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {open ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {open && (
          <nav ref={menuRef} className="md:hidden pb-4 space-y-1">
            <a
              href="#sobre"
              onClick={(e) => handleNavigate(e, "sobre")}
              className="block px-4 py-3 text-sm text-white hover:bg-orange-500/20 hover:text-orange-400 transition-all duration-300 rounded-md mx-2"
            >
              Sobre
            </a>
            <a
              href="#projetos"
              onClick={(e) => handleNavigate(e, "projetos")}
              className="block px-4 py-3 text-sm text-white hover:bg-orange-500/20 hover:text-orange-400 transition-all duration-300 rounded-md mx-2"
            >
              Projetos
            </a>
            <a
              href="#contato"
              onClick={(e) => handleNavigate(e, "contato")}
              className="block px-4 py-3 text-sm text-white hover:bg-orange-500/20 hover:text-orange-400 transition-all duration-300 rounded-md mx-2"
            >
              Contato
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
