// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";
import { Database } from "lucide-react";
import PromptLine from "./PromptLine";
import { LogoLoop } from "@/components/LogoLoop/LogoLoop";

const textContainerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
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

export default function AboutDetails() {
  const techLogos = [
    { src: "/logos/javascript.svg", alt: "JavaScript", title: "JavaScript" },
    { src: "/logos/java.svg", alt: "Java", title: "Java" },
    { src: "/logos/spring.svg", alt: "Spring Boot", title: "Spring Boot" },
    { src: "/logos/angular.svg", alt: "Angular", title: "Angular" },
    { src: "/logos/typescript.svg", alt: "TypeScript", title: "TypeScript" },
    { src: "/logos/nodejs.svg", alt: "Node.js", title: "Node.js" },
    { src: "/logos/react.svg", alt: "React", title: "React" },
    { src: "/logos/nextjs.svg", alt: "Next.js", title: "Next.js" },
    { src: "/logos/go.svg", alt: "Golang", title: "Golang" },
    {
      node: <Database className="w-full h-full text-orange-400" strokeWidth={1.5} />,
      title: "SQL",
      ariaLabel: "SQL",
    },
  ];

  return (
    <motion.section
      id="sobre"
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="w-full min-h-dvh flex items-center justify-center bg-zinc-900 will-change-transform backface-hidden"
    >
      <div className="max-w-6xl mx-auto px-4 py-20 w-full">
        <PromptLine command="cd sobre" className="justify-center flex mb-4" />

        <h2 className="text-4xl sm:text-5xl font-extrabold text-center mb-8">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
            Sobre
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div
            className="text-white/90 space-y-4"
            variants={textContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.p
              variants={lineVariants}
              className="text-white/70 text-base sm:text-lg"
            >
              Iniciei minha jornada como instrutor de cursos, onde aprendi
              bastante sobre trabalho em conjunto, a busca por metodologias que
              são de fato eficientes e entrega com foco no resultado sem
              perder a humanidade no tato
            </motion.p>
            <motion.p
              variants={lineVariants}
              className="text-white/70 text-base sm:text-lg"
            >
              Tenho experiência em projetos fullstack, trabalhando com
              aplicações web escaláveis e integrando boas práticas de
              engenharia. Aprendi a estruturar código limpo, pensar em
              performance, modelagem de dados e arquitetura de APIs.
            </motion.p>
            <motion.p
              variants={lineVariants}
              className="text-white/70 text-base sm:text-lg"
            >
              Meus estudos recentes focam em TypeScript, arquiteturas
              serverless, aplicações com React e Next.js, e linguagens como Go
              para serviços de backend. Estou sempre buscando aprender novas
              tecnologias e melhorar a qualidade do software.
            </motion.p>
            <motion.ul
              variants={lineVariants}
              className="list-disc list-inside text-white/70 text-base sm:text-lg space-y-1"
            >
              <li>Testes automatizados e integração contínua</li>
              <li>APIs REST</li>
            </motion.ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="w-full"
          >
            <LogoLoop
              logos={techLogos}
              speed={80}
              logoHeight={40}
              gap={56}
              fadeOut
              fadeOutColor="#18181b"
              scaleOnHover
              ariaLabel="Tecnologias e linguagens"
            />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
