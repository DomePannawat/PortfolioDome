import { motion } from "motion/react"

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

const Contact = () => {

  return (
    <ScrollReveal>
    <div
      id="contact"
      className="flex flex-col items-center justify-center gap-3 space-y-6 p-14"
    >
      <h1 className="text-center text-3xl md:text-5xl">
        <span className="bg-gradient-to-r from-indigo-500 to-blue-500 bg-clip-text text-transparent">
        For Further Inquiries
        </span>
      </h1>

      <p className="text-center text-lg font-semibold text-gray-500">
        Please contact Pannawat Choosung <br />at email
        address: domepannawat@gmail.com or by phone at +66 93 658 5644.
      </p>

      <a href="mailto:domepannawat@gmail.com" className="text-nowrap rounded-lg border border-indigo-600 bg-black px-5 py-3 text-lg font-bold text-white shadow-lg shadow-indigo-700 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-indigo-600">Contact Me</a>
    </div>
    </ScrollReveal>
  );
};

export default Contact;
