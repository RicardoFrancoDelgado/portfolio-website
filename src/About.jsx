import { useState } from "react";
import { Linkedin, Github } from "lucide-react";
import AboutDetails from "./AboutDetails";
import useInView from "./hooks/useInView";

export default function About() {
  const [linkedInHovered, setLinkedInHovered] = useState(false);
  const [gitHubHovered, setGitHubHovered] = useState(false);
  const [inicioRef, inicioInView] = useInView({ once: true, threshold: 0.15 });

  return (
    <>
      <section
        id="inicio"
        ref={inicioRef}
        className={`w-full min-h-screen flex items-center justify-center bg-zinc-900 will-change-transform ${
          inicioInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        } transition-all duration-700 backface-hidden`}
      >
        <div className="max-w-4xl mx-auto px-4 py-20 text-center">
          <h1 className="text-5xl sm:text-6xl font-extrabold text-white mb-6 leading-tight">
            Olá, eu sou{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
              Ricardo
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-white/85 mb-6 max-w-2xl mx-auto">
            Desenvolvedor Fullstack pelo ecossistema TypeScript. Crio soluções
            escaláveis e robustas, sempre pensando em boas práticas, performance
            e arquitetura. Trabalho com proatividade, colaboração e foco em
            resolver problemas complexos de forma eficiente.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="https://www.linkedin.com/in/ricardofrancodelgado-dev/"
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => setLinkedInHovered(true)}
              onMouseLeave={() => setLinkedInHovered(false)}
              className={`px-8 py-3 rounded-lg font-semibold text-white transition transform flex items-center justify-center ${
                linkedInHovered
                  ? "border border-white/30 hover:bg-white/10 hover:border-white/50"
                  : "bg-gradient-to-r from-yellow-400 to-orange-500 hover:shadow-lg hover:scale-105"
              }`}
            >
              <Linkedin className="w-5 h-5 mr-2" />
              LinkedIn
            </a>
            <a
              href="https://github.com/RicardoFrancoDelgado"
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => setGitHubHovered(true)}
              onMouseLeave={() => setGitHubHovered(false)}
              className={`px-8 py-3 rounded-lg font-semibold text-white transition transform flex items-center justify-center ${
                gitHubHovered
                  ? "bg-gradient-to-r from-yellow-400 to-orange-500 hover:shadow-lg hover:scale-105"
                  : "border border-white/30 hover:bg-white/10 hover:border-white/50"
              }`}
            >
              <Github className="w-5 h-5 mr-2" />
              GitHub
            </a>
          </div>

          <div className="mt-12 text-lg">
            <p className="text-white/60 animate-pulse text-2xl">
              ↓ Explore mais
            </p>
          </div>
        </div>
      </section>

      <AboutDetails />
    </>
  );
}
