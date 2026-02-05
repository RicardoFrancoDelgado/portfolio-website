import { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";
import { Linkedin, Github } from "lucide-react";
import AboutDetails from "./AboutDetails";

export default function About() {
  const [linkedInHovered, setLinkedInHovered] = useState(false);
  const [gitHubHovered, setGitHubHovered] = useState(false);

  return (
    <>
      <motion.section
        id="inicio"
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="w-full min-h-screen flex items-center justify-center bg-zinc-900 will-change-transform backface-hidden"
      >
        <div className="max-w-4xl mx-auto px-4 py-20 text-center">
          <motion.h1
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-5xl sm:text-6xl font-extrabold text-white mb-6 leading-tight"
          >
            Olá, eu sou{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
              Ricardo
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-lg sm:text-xl text-white/85 mb-6 max-w-2xl mx-auto"
          >
            Desenvolvedor Fullstack pelo ecossistema TypeScript. Crio soluções
            escaláveis e robustas, sempre pensando em boas práticas, performance
            e arquitetura. Trabalho com proatividade, colaboração e foco em
            resolver problemas complexos de forma eficiente.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.a
              href="https://www.linkedin.com/in/ricardofrancodelgado-dev/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onMouseEnter={() => setLinkedInHovered(true)}
              onMouseLeave={() => setLinkedInHovered(false)}
              className={`px-8 py-3 rounded-lg font-semibold text-white transition flex items-center justify-center ${
                linkedInHovered
                  ? "border border-white/30 bg-white/10"
                  : "bg-gradient-to-r from-yellow-400 to-orange-500 shadow-lg"
              }`}
            >
              <Linkedin className="w-5 h-5 mr-2" />
              LinkedIn
            </motion.a>

            <motion.a
              href="https://github.com/RicardoFrancoDelgado"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onMouseEnter={() => setGitHubHovered(true)}
              onMouseLeave={() => setGitHubHovered(false)}
              className={`px-8 py-3 rounded-lg font-semibold text-white transition flex items-center justify-center ${
                gitHubHovered
                  ? "bg-gradient-to-r from-yellow-400 to-orange-500 shadow-lg"
                  : "border border-white/30 bg-white/10"
              }`}
            >
              <Github className="w-5 h-5 mr-2" />
              GitHub
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="mt-12 text-lg"
          >
            <motion.a
              href="#sobre"
              aria-label="Ir para Sobre"
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
              className="text-white/60 text-2xl inline-flex items-center gap-3 hover:text-white transition-colors"
            >
              <span className="text-2xl">↓</span>
              <span>Explore mais</span>
            </motion.a>
          </motion.div>
        </div>
      </motion.section>

      <AboutDetails />
    </>
  );
}