/* eslint-disable react/prop-types */
import image1 from "/public/CompetitieScreen.png";
import image2 from "/public/CSSPokemoncard.png";
import image3 from "/public/GameLibraryScreen.png";
import image4 from "/public/GymBroScreen.png";

import { motion } from "framer-motion";

const projectsData = [
  {
    image: image1,
    title: "Voetbal Competie",
    description:
      "Dit is een hele full stack applicatie waarbij ik de backend met Java heb gemaakt en in de frontend Vue heb gebruikt. Op deze website kan je echte ploegen toevoegen in je competie, daar kan je heel de competitie aanpassen hoe het in werklijkheid is. Je vind ook alle informatie van de voetbal ploeg zelf. Deze voetbal ploegen werden opgehaald via 2 verschillende api's en werden opgeslaan in mijn eigen database.",
    technologies: [
      "VueJS",
      "TailwindCSS",
      "JAVA",
      "Springboot",
      "Docker",
      "MongoDB",
    ],
  },
  {
    image: image2,
    title: "Pokèmonkaart",
    description:
      "Dit is 1 van mijn eerste projectjes waarbij ik een pokèmonkaart heb gemaakt met alleen html en css.",
    technologies: ["HTML", "CSS"],
  },
  {
    image: image3,
    title: "Game Library",
    description:
      "Een frontend applicatie waarbij ik een api heb gebruikt om games in te laden. Op de website kan je inloggen en je eigen wishlist maken. Je kan ook een review plaatsen over de game. Je kan games zoeken via de search balk en ook met behulp van filters. Al deze data wordt opgeslaan in een database die werd gehost door mijn docent.",
    technologies: ["Angular", "TypeScript", "TailwindCss"],
  },
  {
    image: image4,
    title: "GymBro",
    description:
      "Dit is een Full stack applicatie die werd gemaakt met Laravel. Deze website heeft veel nuttige functionaliteiten zoals alle workouts die je kan doen in de Gym. En je eigen workout routine maken en je historie bijhouden van de workouts die je hebt gedaan. Ik heb ook een interval timer gemaakt omdat bij bepaalde oefeningen je specifiek je aan de seconde wil houden. Er is ook voorzien van darkmode. En je kan je workout zoeken via de search balk of via de filters.",
    technologies: ["Laravel", "PHP", "SQLite", "TailwindCss"],
  },
];

const ScrollReveal = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      {children}
    </motion.div>
  );
};

const ProjectCard = ({ project }) => {
  return (
    <ScrollReveal>
      <div className="flex flex-col items-center gap-8 md:flex-row md:gap-24 ">
        <img
          src={project.image}
          alt=""
          className="w-full cursor-pointer rounded-2xl transition-all duration-300 hover:scale-105 md:w-[300px]"
        />
        <div className="flex flex-col gap-5">
          <div>
            <div className="text-xl font-semibold">{project.title}</div>
            <p className="text-gray-400">{project.description}</p>
          </div>
          <div className="flex flex-wrap gap-5">
            {project.technologies.map((tech, index) => (
              <span key={index} className="p-3 bg-black rounded-lg">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
};

const Projects = () => {
  return (
    <div
      id="projects"
      className="flex flex-col items-center justify-center w-full min-h-screen gap-16 p-4 md:py-24"
    >
      <ScrollReveal>
        <h1 className="text-4xl font-light text-white md:text-6xl">
          Mijn Projecten
        </h1>
      </ScrollReveal>

      <div className="flex w-full max-w-[1000px] flex-col gap-16 text-white">
        {projectsData.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
