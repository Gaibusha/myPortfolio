import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useInView } from "react-intersection-observer";

const About = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="py-20 bg-gray-100 dark:bg-gray-800 text-center">
      {/* Profile Image with Circular Frame & Hover Effect */}
      <motion.div
        ref={ref}
        className="relative w-40 h-40 lg:w-52 lg:h-52 rounded-full overflow-hidden shadow-lg mx-auto transition-transform duration-300 hover:scale-105"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.3 }}
      >
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <img
              src={`${process.env.PUBLIC_URL}/images/profile.jpg`} // Update this path if needed
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flip-card-back">
            <img
              src={`${process.env.PUBLIC_URL}/images/profile.jpg`} // Update this path if needed
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </motion.div>

      {/* Heading with Animation */}
      <motion.h2
        className="text-4xl font-bold text-gray-800 dark:text-gray-100 mt-6"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.3 }}
      >
        About Me
      </motion.h2>

      {/* Description with Animation */}
      <motion.p
        className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        I’m Gaibusha Shaik, a Mechanical Engineer turned Full-Stack Developer
        with a passion for building web applications. My journey started with
        designing mechanical components but quickly shifted to coding,
        problem-solving, and creating user-friendly digital solutions. With
        expertise in Java, Spring Boot, JavaScript, and React.js, I craft both
        frontend and backend systems that are efficient and visually appealing.
        From developing scalable applications to freelancing for businesses, I
        love turning ideas into reality through code.
      </motion.p>

      {/* Social Media Links */}
      <motion.div
        className="flex justify-center space-x-4 mt-6"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <a href="https://github.com/Gaibusha" target="_blank" rel="noopener noreferrer">
          <FaGithub className="text-2xl text-gray-800 dark:text-gray-100 hover:text-gray-600 dark:hover:text-gray-400 transition" />
        </a>
        <a href="https://linkedin.com/in/Gaibusha" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="text-2xl text-blue-700 dark:text-blue-500 hover:text-blue-500 dark:hover:text-blue-300 transition" />
        </a>
      </motion.div>

      {/* Skills Section */}
      <motion.div
        className="mt-10"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">Skills</h3>
        <div className="flex justify-center flex-wrap space-x-4 mt-4">
          <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-4 py-2 rounded-full mb-2">
            Java
          </span>
          <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-4 py-2 rounded-full mb-2">
            JavaScript
          </span>
          <span className="bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 px-4 py-2 rounded-full mb-2">
            React.js
          </span>
          <span className="bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 px-4 py-2 rounded-full mb-2">
            Git
          </span>
          <span className="bg-lime-200 dark:bg-lime-900 text-lime-500 dark:text-lime-200 px-4 py-2 rounded-full mb-2">
            MySql
          </span>
        </div>
      </motion.div>

      {/* Call-to-Action Button */}
      <motion.div
        className="mt-10"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <a
          href="#contact"
          className="inline-block px-6 py-3 bg-blue-500 dark:bg-blue-700 text-white dark:text-gray-100 rounded-full hover:bg-blue-700 dark:hover:bg-blue-900 transition"
        >
          Contact Me
        </a>
      </motion.div>
    </section>
  );
};

export default About;