import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form data
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('Please fill in all fields.');
      return;
    }

    // Send email using EmailJS
    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID')
      .then((result) => {
        setStatus('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      }, (error) => {
        setStatus('Failed to send message. Please try again later.');
      });
  };

  return (
    <section id="contact" className="py-20 bg-white text-center">
      <motion.h2 
        className="text-4xl font-bold text-gray-800 mb-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Contact Me
      </motion.h2>

      <motion.form 
        className="max-w-lg mx-auto bg-gray-100 p-6 rounded-lg shadow-md"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        onSubmit={handleSubmit}
      >
        <input 
          type="text" 
          name="name"
          placeholder="Your Name" 
          className="w-full p-3 mb-4 border rounded-lg"
          value={formData.name}
          onChange={handleChange}
        />
        <input 
          type="email" 
          name="email"
          placeholder="Your Email" 
          className="w-full p-3 mb-4 border rounded-lg"
          value={formData.email}
          onChange={handleChange}
        />
        <textarea 
          name="message"
          placeholder="Your Message" 
          className="w-full p-3 mb-4 border rounded-lg"
          rows="4"
          value={formData.message}
          onChange={handleChange}
        />
        <motion.button 
          type="submit" 
          className="bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 transition duration-300"
          whileHover={{ scale: 1.05 }}
        >
          Send Message
        </motion.button>
      </motion.form>

      {status && (
        <motion.p 
          className="mt-4 text-lg text-gray-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          {status}
        </motion.p>
      )}
    </section>
  );
};

export default Contact;