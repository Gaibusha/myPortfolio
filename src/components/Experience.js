import { motion } from "framer-motion";

const experiences = [
  {
    company: "Vcube Software Solutions",
    role: "Trainee Engineer - Java Full Stack",
    duration: "June 2023 - Aug 2023",
    description: "Built website functionality using HTML, CSS, JavaScript, and worked on Java backend.",
  },
  {
    company: "Mojo Solutions",
    role: "Backend Developer Intern",
    duration: "July 2024 - Sep 2024",
    description: "Integrated PayPal payment system and worked on backend services in Java.",
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-900 text-center">
      <motion.h2 
        className="text-4xl font-bold text-gray-800 dark:text-gray-100 mb-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Work Experience
      </motion.h2>

      <div className="max-w-4xl mx-auto space-y-8">
        {experiences.map((exp, index) => (
          <motion.div 
            key={index}
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md text-left border-l-4 border-blue-500 dark:border-blue-700"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">{exp.role}</h3>
            <p className="text-gray-600 dark:text-gray-300">{exp.company} • {exp.duration}</p>
            <p className="mt-2 text-gray-700 dark:text-gray-300">{exp.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;