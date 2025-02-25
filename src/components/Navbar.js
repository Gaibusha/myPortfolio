import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { Sun, Moon, Menu, X } from "lucide-react";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };
  

  return (
    <nav className="fixed top-0 w-full bg-white dark:bg-gray-900 bg-opacity-90 backdrop-blur-lg shadow-md py-4 px-6 flex justify-between items-center text-gray-900 dark:text-white z-50">
      {/* Logo */}
      <motion.div 
        className="text-2xl font-bold cursor-pointer"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{ fontFamily: "'Great Vibes', cursive" }}
      >
        Gaibusha Shaik
        
      </motion.div>

      {/* Desktop Menu */}
      <motion.ul 
        className="hidden md:flex space-x-6 text-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        {["home", "about", "projects", "contact"].map((section) => (
          <li key={section}>
            <Link 
              to={section} 
              smooth={true} 
              duration={500} 
              className="hover:text-indigo-500 transition cursor-pointer"
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </Link>
          </li>
        ))}
      </motion.ul>

      {/* Icons (Dark Mode + Mobile Menu) */}
      <div className="flex items-center space-x-4">
        {/* Dark Mode Toggle */}
        <button onClick={toggleDarkMode} className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800">
          {darkMode ? <Sun size={24} /> : <Moon size={24} />}
        </button>

        {/* Mobile Menu Toggle */}
        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden p-2">
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <motion.div 
          className="absolute top-16 left-0 w-full bg-white dark:bg-gray-900 shadow-md py-4 px-6 md:hidden"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <ul className="flex flex-col space-y-4 text-lg">
            {["home", "about", "projects", "contact"].map((section) => (
              <li key={section}>
                <Link 
                  to={section} 
                  smooth={true} 
                  duration={500} 
                  className="block text-center hover:text-indigo-500 transition cursor-pointer"
                  onClick={() => setMenuOpen(false)}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;