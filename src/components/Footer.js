import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 text-center">
      <div className="container mx-auto">
        <p>&copy; {new Date().getFullYear()} Gaibusha Shaik. All rights reserved.</p>
        <div className="flex justify-center space-x-4 mt-4">
          <a href="https://github.com/Gaibusha" className="text-blue-400 hover:text-white transition">
            <FaGithub size={24} />
          </a>
          <a href="https://www.linkedin.com/in/gaibusha-shaik-b053881b7/" className="text-blue-400 hover:text-white transition">
            <FaLinkedin size={24} />
          </a>
          <a href="https://twitter.com/yourprofile" className="text-blue-400 hover:text-white transition">
            <FaTwitter size={24} />
          </a>
        </div>
        <p className="mt-4">Contact me at <a href="mailto:gaibushashaikk@gmail.com" className="text-blue-400 hover:text-white transition">gaibushashaikk@gmail.com</a></p>
      </div>
    </footer>
  );
};

export default Footer;