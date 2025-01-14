import { motion } from "framer-motion";

const certificatesData = [
  {
    title: "Full Stack Junior Software Developer Program (Cohort 8)",
    organization: "Generation Thailand",
    date: "December 2024",
    description: "completed intensive training in full-stack TypeScript and JavaScript development, gaining expertise in Golang , Python , Tailwind CSS , React, Node.js, Express, Linux , MySQL and MongoDB.",
    image: "/GenerationTH.png",
    credential: "/GenerationTH.png"
  },
  {
    title: "Full Stack Engineer Career Path",
    organization: "Codecademy",
    date: "December 2024",
    description: "Completed comprehensive training in Data Engineering, and Computer Science, gaining expertise in JavaScript, React.js, Node.js, Express.js, MySQL, PostgreSQL, HTML, CSS .",
    image: "/Full-Stack-Engineer.png",
    credential: "/Full-Stack-Engineer.png"
  },
  {
    title: "Learn Intermediate TypeScript Course",
    organization: "Codecademy",
    date: "December 2024",
    description: "Completed comprehensive training, gaining expertise in TypeScript.",
    image: "/TypeScript.png",
    credential: "/TypeScript.png"
  },
  {
    title: "Build a Website with HTML , CSS , and GitHub Skill Path",
    organization: "Codecademy",
    date: "December 2024",
    description: "Completed comprehensive training, gaining expertise in HTML, CSS, and GitHub.",
    image: "/HTML-CSS-and-GitHub.png",
    credential: "/HTML-CSS-and-GitHub.png"
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

const CertificateCard = ({ certificate }) => {
  return (
    <ScrollReveal>
      <div className="flex flex-col md:flex-row gap-8 bg-black/20 rounded-xl p-6 backdrop-blur-sm">
        <div className="md:w-1/2">
          <img 
            src={certificate.image} 
            alt={certificate.title}
            className="w-full h-[300px] object-cover rounded-lg shadow-lg shadow-indigo-500/20"
          />
        </div>
        <div className="md:w-1/2 flex flex-col justify-between gap-4">
          <div>
            <h3 className="text-2xl font-semibold mb-2 text-white">{certificate.title}</h3>
            <p className="text-indigo-400 mb-2">{certificate.organization}</p>
            <p className="text-gray-400 mb-4">{certificate.date}</p>
            <p className="text-gray-300">{certificate.description}</p>
          </div>
          <a
            href={certificate.credential}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block w-fit text-nowrap rounded-lg border border-indigo-600 bg-black px-5 py-3 text-lg font-bold text-white shadow-lg shadow-indigo-700 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-indigo-600"
          >
            View Credential
          </a>
        </div>
      </div>
    </ScrollReveal>
  );
};

const Certificate = () => {
  return (
    <div id="certificates" className="min-h-screen w-full flex flex-col items-center justify-center gap-16 p-4 md:px-14 md:py-24">
      <ScrollReveal>
        <h1 className="text-4xl md:text-6xl font-light text-white mb-16">
          Certificates
        </h1>
      </ScrollReveal>

      <div className="w-full max-w-[1200px] flex flex-col gap-8">
        {certificatesData.map((certificate, index) => (
          <CertificateCard key={index} certificate={certificate} />
        ))}
      </div>
    </div>
  );
};

export default Certificate;
