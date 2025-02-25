import { useState } from "react";
import { motion } from "framer-motion";
import Modal from "react-modal";

const projects = [
  {
    title: "Task Manager App",
    description: "A simple task management system built with Java and Spring Boot.",
    image: `${process.env.PUBLIC_URL}/images/taskManager.png`,
    github: "https://github.com/Gaibusha/Task-Manager-Application",
    details: "This project includes features such as task creation, editing, deletion, and categorization. It also supports user authentication and authorization."
  },
  {
    title: "E-Commerce Website",
    description: "A full-stack e-commerce site using React and Firebase.",
    image: `${process.env.PUBLIC_URL}/images/eCommerce.png`,
    github: "https://github.com/Gaibusha/brand-product-management",
    details: "This project includes features such as product listing, shopping cart, checkout, and order management. It also supports user authentication and payment integration."
  },
  {
    title: "Portfolio Website",
    description: "My personal portfolio showcasing my skills and projects.",
    image: `${process.env.PUBLIC_URL}/images/portfolio.png`,
    github: "https://github.com/Gaibusha/portfolio-website",
    details: "This project includes sections such as About, Projects, and Contact. It is built using React and styled with Tailwind CSS."
  },
];

const Projects = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="py-20 bg-white text-center">
      <motion.h2 
        className="text-4xl font-bold text-gray-800 mb-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        My Projects
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-6">
        {projects.map((project, index) => (
          <motion.div 
            key={index}
            className="project-card bg-blue-100 p-5 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
            onClick={() => openModal(project)}
          >
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-48 object-cover rounded-lg"
            />
            <h3 className="text-xl font-semibold mt-5">{project.title}</h3>
            <p className="text-gray-600 mt-4">{project.description}</p>
            {project.github && (
              <a 
                href={project.github} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-block mt-4 px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-700 transition"
                onClick={(e) => e.stopPropagation()}
              >
                View on GitHub
              </a>
            )}
          </motion.div>
        ))}
      </div>

      {selectedProject && (
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Project Details"
          className="modal"
          overlayClassName="modal-overlay"
        >
          <h2 className="text-2xl font-bold mb-4">{selectedProject.title}</h2>
          <img 
            src={selectedProject.image} 
            alt={selectedProject.title} 
            className="w-full h-48 object-cover rounded-lg mb-4"
          />
          <p className="text-lg text-gray-700 mb-4">{selectedProject.details}</p>
          {selectedProject.github && (
            <a 
              href={selectedProject.github} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-block mt-4 px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-700 transition"
            >
              View on GitHub
            </a>
          )}
          <button 
            onClick={closeModal} 
            className="mt-4 px-4 py-2 bg-red-500 text-white rounded-full hover:bg-red-700 transition"
          >
            Close
          </button>
        </Modal>
      )}
    </section>
  );
};

export default Projects;