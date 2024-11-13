import { motion } from "motion/react";

const Hero = () => {
  return (
    <div
      id="home"
      className="px-16 flex min-h-screen w-full items-center justify-center py-28 md:px-32"
    >
      <div className="flex flex-col items-center justify-center gap-10 text-white">
        <motion.div
        initial={{y: -50, opacity: 0}}
        animate={{y: 0 , opacity:1}}
        transition={{duration: 0.8, delay:0.2}}
        >
          <img
            src="/dome.jpg"
            alt="Dome"
            className="w-[300px] cursor-pointer rounded-full shadow-xl shadow-indigo-900 transition-all duration-300 hover:translate-y-5 hover:scale-105 hover:shadow-2xl hover:shadow-indigo-600 md:w-[350px]"
          />
        </motion.div>

        <motion.div 
          initial={{y: 50, opacity: 0}}
          animate={{y: 0 , opacity:1}}
          transition={{duration: 0.8, delay:0.2}}

        className="flex max-w-[600px] flex-col items-center justify-center gap-3 text-center">
          <h1 className="bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent text-5xl font-light md:text-6xl ">
            DomePannawat
          </h1>
          <br />
          <p className="md:text-base text-pretty text-sm text-gray-300">
            Graduate from the Generation Bootcamp in Junior Software
            Development, with a Business Administration degree from King
            Mongkut's Institute of Technology Ladkrabang. Skilled in
            problem-solving, teamwork, and time management, with experience in
            JavaScript, TypeScript, Python, HTML, CSS, Tailwind, React, Node.js,
            Express, MongoDB, and MySQL. Passionate about innovation and
            continuous learning, I am eager to bring my skills to a dynamic team
            and contribute to impactful projects.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
