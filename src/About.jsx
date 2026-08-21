import { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";
import { Linkedin, Github } from "lucide-react";
import AboutDetails from "./AboutDetails";
import PromptLine from "./PromptLine";
import HeroShowcase from "./HeroShowcase";
import { FlowField } from "@/components/kokonutui/flow-field";

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const lineVariants = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

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
        className="relative w-full min-h-dvh flex items-center justify-center overflow-hidden bg-zinc-900 will-change-transform backface-hidden"
      >
        <FlowField />
        <div className="relative z-10 max-w-6xl mx-auto px-4 py-20 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="text-center lg:text-left">
              <PromptLine
                command="whoami"
                className="justify-center lg:justify-start flex mb-4"
              />

              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
              >
                <motion.h1
                  variants={lineVariants}
                  className="text-5xl sm:text-6xl font-extrabold text-white mb-6 leading-tight"
                >
                  Olá, eu sou{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
                    Ricardo
                  </span>
                </motion.h1>

                <motion.p
                  variants={lineVariants}
                  className="text-lg sm:text-xl text-white/90 mb-6 max-w-2xl mx-auto lg:mx-0"
                >
                  Desenvolvedor Fullstack pelo ecossistema TypeScript. Crio
                  soluções escaláveis e robustas, com atenção a performance e
                  arquitetura. Trabalho com proatividade, colaboração e foco em
                  resolver problemas complexos de forma eficiente.
                </motion.p>

                <motion.div
                  variants={lineVariants}
                  className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center"
                >
                  <motion.a
                    href="https://www.linkedin.com/in/ricardofrancodelgado-dev/"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onMouseEnter={() => setLinkedInHovered(true)}
                    onMouseLeave={() => setLinkedInHovered(false)}
                    className={`px-8 py-3 rounded-lg font-semibold text-white transition flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-900 ${
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
                    className={`px-8 py-3 rounded-lg font-semibold text-white transition flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-900 ${
                      gitHubHovered
                        ? "bg-gradient-to-r from-yellow-400 to-orange-500 shadow-lg"
                        : "border border-white/30 bg-white/10"
                    }`}
                  >
                    <Github className="w-5 h-5 mr-2" />
                    GitHub
                  </motion.a>
                </motion.div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
            >
              <HeroShowcase />
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="mt-16 flex justify-center"
          >
            <motion.a
              href="#sobre"
              aria-label="Ir para Sobre"
              animate={{ y: [0, 10, 0] }}
              transition={{
                repeat: Infinity,
                duration: 1.5,
                ease: "easeInOut",
              }}
              className="text-white/60 text-sm sm:text-base inline-flex items-center gap-3 hover:text-white focus-visible:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-900 rounded-md transition-colors"
            >
              <span className="text-lg">↓</span>
              <span>Explore mais</span>
            </motion.a>
          </motion.div>
        </div>
      </motion.section>

      <AboutDetails />
    </>
  );
}
