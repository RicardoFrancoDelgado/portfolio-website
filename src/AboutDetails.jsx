// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";

export default function AboutDetails() {
  const techs = [
    "JavaScript",
    "TypeScript",
    "Node.js",
    "React",
    "Next.js",
    "Golang",
    "SQL",
  ];

  // const sectionVariant = {
  //   hidden: { opacity: 0, y: 18 },
  //   visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
  // };

  return (
    <motion.section
      id="sobre"
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="w-full min-h-screen flex items-center justify-center bg-zinc-900 will-change-transform backface-hidden"
    >
      <div className="max-w-6xl mx-auto px-4 py-20 w-full">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-center mb-10">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
            Sobre
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center md:items-start">
          <div className="text-white/90 space-y-4">
            <p className="text-white/70">
              Iniciei minha jornada como instrutor de cursos, onde aprendi
              bastante sobre trabalho em conjunto, a busca por metodologias que
              são de fato eficientes e entrega com foco no resultado sem perder
              a humanidade no tato
            </p>
            <p className="text-white/70">
              Tenho experiência em projetos fullstack, trabalhando com
              aplicações web escaláveis e integrando boas práticas de
              engenharia. Aprendi a estruturar código limpo, pensar em
              performance, modelagem de dados e arquitetura de APIs.
            </p>
            <p className="text-white/70">
              Meus estudos recentes focam em TypeScript, arquiteturas
              serverless, aplicações com React e Next.js, e linguagens como Go
              para serviços de backend. Estou sempre buscando aprender novas
              tecnologias e melhorar a qualidade do software.
            </p>
            <p className="text-white/70">
              Mais sobre meus estudos e experiências:
            </p>
            <ul className="list-disc list-inside text-white/70 space-y-1">
              <li>Boas práticas de código e arquitetura</li>
              <li>Testes automatizados e integração contínua</li>
              <li>APIs REST</li>
            </ul>
          </div>

          <div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {techs.map((t) => (
                <div
                  key={t}
                  className="bg-zinc-800/60 border border-orange-500/20 rounded-lg p-4 flex items-center justify-center font-medium text-white transform transition-transform duration-200 hover:scale-105"
                >
                  {t}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
