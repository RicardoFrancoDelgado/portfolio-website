import useInView from "./hooks/useInView";

export default function Projects() {
  const projects = [
    {
      id: 1,
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
      id: 2,
      title: "Devbook API",
      description:
        "API da aplicação devbook desenvolvida em conjunto no curso de fundamentos da linguagem Go, com o uso do MySQL, autenticação e boas práticas",
      image: "/projects/golang-banner.png",
      technologies: ["Go (Golang)", "MySQL", "JWT"],
      deployUrl: "https://github.com/RicardoFrancoDelgado/devbook-project",
      githubUrl: "https://github.com/RicardoFrancoDelgado/devbook-project",
    },
  ];

  const [projetosRef, projetosInView] = useInView({
    once: true,
    threshold: 0.15,
  });

  return (
    <section
      id="projetos"
      ref={projetosRef}
      className={`w-full min-h-screen flex items-center justify-center bg-zinc-900 ${
        projetosInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      } transition-all duration-700`}
    >
      <div className="w-full px-4 py-20">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-center mb-12">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
            Projetos
          </span>
        </h2>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-zinc-800/60 border border-orange-500/20 rounded-lg overflow-hidden hover:border-orange-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/20"
            >
              <div className="aspect-video bg-zinc-700 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                  {project.title}
                </h3>

                <p className="text-white/70 text-sm sm:text-base mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="inline-block bg-gradient-to-r from-yellow-400/20 to-orange-500/20 border border-orange-500/40 text-orange-300 text-xs sm:text-sm px-3 py-1 rounded-full hover:border-orange-500/80 transition-colors duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3 flex-col sm:flex-row">
                  <a
                    href={project.deployUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-4 py-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-orange-500/50 transition-all duration-300 text-center text-sm sm:text-base"
                  >
                    Ver Site
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-4 py-2 border border-orange-500/50 text-orange-300 font-semibold rounded-lg hover:bg-orange-500/10 hover:border-orange-500 transition-all duration-300 text-center text-sm sm:text-base"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
