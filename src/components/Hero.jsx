import { motion } from "motion/react";

const Hero = () => {
  return (
    <div
      id="home"
      className="px-16 flex min-h-screen w-full items-center justify-center py-28 md:px-32"
    >
      <div className="flex flex-col items-center justify-center gap-10 text-white">
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <img
            src="/Dome-Pannawat.png"
            alt="Dome"
            className="w-[300px] cursor-pointer rounded-full shadow-xl shadow-indigo-900 transition-all duration-300 hover:translate-y-5 hover:scale-105 hover:shadow-2xl hover:shadow-indigo-600 md:w-[350px]"
          />
        </motion.div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex max-w-[600px] flex-col items-center justify-center gap-3 text-center"
        >
          <h1 className="bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent text-5xl font-light md:text-6xl ">
            DomePannawat
          </h1>
          <a
            href="/Dome-CV.pdf"
            target="_blank"
            className="text-nowrap rounded-lg border border-indigo-600 bg-black px-5 py-3 text-lg font-bold text-white shadow-lg shadow-indigo-700 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-indigo-600 mt-4"
          >
            CV DomePannawat
          </a>
          <br />
          <p className="md:text-base text-pretty text-sm text-gray-300 mt-2">
            DomePannawat is focused on enhancing skills and creating user-driven
            solutions. Graduated from Junior Software Development at Generation
            Bootcamp, with a degree in Business Administration (Business
            Economics and Management) from King Mongkut's Institute of
            Technology Ladkrabang. Proficient in Golang, Python, TypeScript,
            JavaScript, HTML, CSS, Tailwind CSS, React, Node.js, Express,
            MongoDB, and MySQL, with a strong understanding of software
            development processes. Experienced in building Dynamic Chatbot AI,
            facial recognition with OpenCV, and leading food-related e-commerce
            projects. Skilled in problem-solving, analysis, communication,
            teamwork, and time management. Passionate about continuous learning
            and adaptable to various roles in the IT industry.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
