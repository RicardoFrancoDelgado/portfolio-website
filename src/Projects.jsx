// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";
import PromptLine from "./PromptLine";
import ProjectCard from "./ProjectCard";

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Medication Reminder",
      description:
        "Aplicação que avisa quando um remédio cadastrado precisa ser tomado, com a possibilidade de cadastrar novos remédios, tudo via Whatsapp",
      image: "/projects/medication-reminder.png",
      technologies: [
        "Java",
        "Spring Boot",
        "Twilio API",
        "PostgreSQL",
        "Flyway",
      ],
      deployUrl: "https://github.com/RicardoFrancoDelgado/medication-reminder",
      githubUrl: "https://github.com/RicardoFrancoDelgado/medication-reminder",
    },
    {
      id: 2,
      title: "Desafio VNW - React Router DOM",
      description:
        "Desafio proposto nas aulas do curso ministrado pelo pessoal da vai na web, onde era necessario utilizar as tecnologias react, jsx, scss e react router dom",
      image: "/projects/saude-project.png",
      technologies: ["SCSS", "Javascript", "React", "react-router-dom"],
      deployUrl: "https://react-router-desafio-vnw.vercel.app/",
      githubUrl:
        "https://github.com/RicardoFrancoDelgado/react-router-desafio-vnw",
    },
    {
      id: 3,
      title: "Devbook API",
      description:
        "API da aplicação devbook desenvolvida em conjunto no curso de fundamentos da linguagem Go, com o uso do MySQL, autenticação e boas práticas",
      image: "/projects/golang-banner.png",
      technologies: ["Go (Golang)", "MySQL", "JWT"],
      deployUrl: "https://github.com/RicardoFrancoDelgado/devbook-project",
      githubUrl: "https://github.com/RicardoFrancoDelgado/devbook-project",
    },
    {
      id: 4,
      title: "Projeto Ação Verde",
      description:
        "O site Verde Ação é uma página de apresentação de um projeto ambiental que convida pessoas a se tornarem voluntárias em ações de cuidado com o planeta. A ideia central é inspirar mudanças reais através de pequenas atitudes ecológicas.",
      image: "/projects/verde-acao.png",
      technologies: ["HTML", "CSS", "SCSS"],
      deployUrl: "https://ricardofrancodelgado.github.io/projeto-acao-verde/",
      githubUrl: "https://github.com/RicardoFrancoDelgado/projeto-acao-verde",
    },
    {
      id: 5,
      title: "Projeto Viva Bem",
      description:
        "O projeto viva bem visa orientar sobre os cuidados com a saúde ",
      image: "/projects/viva-bem-project.png",
      technologies: ["HTML", "CSS", "SCSS"],
      deployUrl:
        "https://viva-bem-desafio-qq1nmnxca-ricardofrancodelgados-projects.vercel.app/",
      githubUrl: "https://github.com/RicardoFrancoDelgado/viva-bem-desafio",
    },
    {
      id: 6,
      title: "Projeto Connect",
      description:
        "A plataforma Connect visa cadastrar empresas, com projetos sociais e treinamentos organizados para ações sociais",
      image: "/projects/connect-project.png",
      technologies: ["React", "SCSS", "react-router-dom", "HTML"],
      deployUrl: "https://connect-pi-umber.vercel.app/",
      githubUrl: "https://github.com/RicardoFrancoDelgado/desafio-connect-vnw",
    },
  ];

  return (
    <motion.section
      id="projetos"
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="w-full min-h-dvh flex items-center justify-center bg-zinc-900 will-change-transform backface-hidden"
    >
      <div className="w-full px-4 py-20">
        <PromptLine
          command="cat projetos.log"
          className="justify-center flex mb-4"
        />

        <h2 className="text-4xl sm:text-5xl font-extrabold text-center mb-8">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
            Projetos
          </span>
        </h2>

        <motion.div
          className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {projects.map((project, index) => (
            <motion.div key={project.id} variants={cardVariants}>
              <ProjectCard project={project} index={index} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
