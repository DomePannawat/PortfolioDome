import { motion } from "motion/react"


const projectsData = [
  {
    title: "Daily Vogue Full Stack Developer Project",
    description: "Daily Vogue is an e-commerce platform focused on selling everyday wearable fashion. The project involves designing and developing both the front-end and back-end of the website, integrating user authentication, product listings, and a seamless shopping cart experience. Technologies used include HTML, CSS, JavaScript, React, Node.js, Express, and MongoDB.",
    technologies: ["HTML", "Tailwind", "JavaScript", "React", "Node.Js", "Express", "MongoDB"],
    link: "https://project-daily-vogue.vercel.app/"
  },
  {
    title: "TechSovaChat-bot Project",
    description: "TechSova is an innovative chatbot application designed for engaging user experiences through conversational AI. Built with HTML, CSS, TailwindCSS, JavaScript, Node.js, and the Vanilla framework, it leverages advanced generative AI technology to create natural dialogues and meaningful interactions.",
    technologies: ["HTML", "Tailwind", "JavaScript", "Node.Js", "Vanilla"],
    link: "https://github.com/DomePannawat/TechSovaChat-bot"
  },
  {
    title: "Face Detection Project",
    description: "The Face Detection Application is a Python-based program that utilizes OpenCV and Mediapipe libraries for real-time face detection. This application provides a user-friendly interface through Tkinter, enabling users to start and stop the camera feed and detect faces efficiently.",
    technologies: ["Python", "OpenCV", "Mediapipe", "Tkinter"],
    link: "https://github.com/DomePannawat/Face-Detection"
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

const ProjectsCard = ({ project }) => {
  return (
    <ScrollReveal>
      <div className="flex flex-col items-center gap-8 md:flex-row md:gap-24">
        <div className="flex flex-col gap-5 items-center text-center">
          <div className="flex flex-col gap-3 space-y-6">
            <div className="text-3xl font-semibold">{project.title}</div>
            <p className="text-lg text-gray-400">{project.description}</p>
          </div>
          <div className="flex flex-wrap gap-5 mt-4">
            {project.technologies.map((tech, index) => (
              <span key={index} className="rounded-lg bg-black p-3">
                {tech}
              </span>
            ))}
          </div>
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-nowrap rounded-lg border border-indigo-600 bg-black px-5 py-3 text-lg font-bold text-white shadow-lg shadow-indigo-700 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-indigo-600 mt-4"
          >
            View Project
          </a>
        </div>
      </div>
    </ScrollReveal>
  );
};

const Projects = () => {
  return (
    <div
      id="projects"
      className="flex min-h-screen w-full flex-col items-center justify-center gap-16 p-4 md:px-14 md:py-24"
    >
      <ScrollReveal>
        <h1 className="text-4xl font-light text-white md:text-6xl">My Projects</h1>
      </ScrollReveal>

      <div className="flex w-full max-w-[1000px] flex-col gap-16 text-white">
        {projectsData.map((project, index) => (
          <ProjectsCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;