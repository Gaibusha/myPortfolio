import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section id="home" className="relative h-screen flex flex-col justify-center items-center bg-gradient-to-r from-purple-500 to-indigo-600 dark:from-gray-800 dark:to-gray-900 text-white text-center">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 bg-cover bg-center opacity-30" style={{ backgroundImage: "url('path/to/your/background-image.jpg')" }}></div>

      {/* Content */}
      <motion.h1 
        className="text-6xl font-bold z-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Hi, I'm Gaibusha Shaik
      </motion.h1>
      <motion.p 
        className="text-xl mt-4 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        A Full Stack Developer & Freelancer
      </motion.p>
      <motion.a 
        href="#projects" 
        className="mt-6 px-6 py-3 bg-white text-indigo-600 dark:bg-gray-800 dark:text-white rounded-full shadow-lg text-lg font-semibold hover:bg-indigo-100 dark:hover:bg-gray-700 transition z-10"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, delay: 1 }}
      >
        View My Work
      </motion.a>
    </section>
  );
};

export default HeroSection;