import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-100 text-center">
      {/* Profile Image with Circular Frame & Hover Effect */}
      <motion.div
        className="relative w-40 h-40 lg:w-52 lg:h-52 rounded-full overflow-hidden shadow-lg mx-auto grayscale transition-transform duration-300 hover:scale-105 hover:grayscale-0"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <img
          src="/images/profile.jpg" // Update this path if needed
          alt="Profile"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Heading with Animation */}
      <motion.h2
        className="text-4xl font-bold text-gray-800 mt-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        About Me
      </motion.h2>

      {/* Description with Animation */}
      <motion.p
        className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
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
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.7 }}
      ></motion.div>

      {/* Skills Section */}
      <motion.div
        className="mt-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.9 }}
      >
        <h3 className="text-2xl font-semibold text-gray-800">Skills</h3>
        <div className="flex justify-center space-x-4 mt-4">
          <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full">
            Java
          </span>
          <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full">
            JavaScript
          </span>
          <span className="bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full">
            React.js
          </span>
          <span className="bg-red-100 text-red-800 px-4 py-2 rounded-full">
            Git
          </span>
          <span className="bg-lime-200 text-lime-500 px-4 py-2 rounded-full">
            MySql
          </span>
        </div>
      </motion.div>

      {/* Call-to-Action Button */}
      <motion.div
        className="mt-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.1 }}
      ></motion.div>
    </section>
  );
};

export default About;
