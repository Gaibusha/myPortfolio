import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import { motion, AnimatePresence } from "framer-motion";
import Portfolio from "./Portfolio";

Modal.setAppElement("#root");

function App() {
  const [modalIsOpen, setModalIsOpen] = useState(true);

  const closeModal = () => {
    setModalIsOpen(false);
  };

  useEffect(() => {
    // Automatically close the modal after 2.5 seconds
    const timer = setTimeout(() => {
      setModalIsOpen(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <AnimatePresence>
        {modalIsOpen && (
          <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            contentLabel="Welcome Message"
            className="modal"
            overlayClassName="modal-overlay"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col justify-center items-center h-full text-center text-white"
            >
              <motion.h2
                className="text-4xl font-bold mb-4"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                As-Salaam-Alaikum! Namasthe! Hello!
              </motion.h2>
              <motion.p
                className="text-lg mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 }}
              >
                I’m Gaibusha Shaik – glad to have you here!
              </motion.p>
              <motion.button
                onClick={closeModal}
                className="mt-4 px-6 py-3 bg-blue-500 text-white rounded-full hover:bg-blue-700 transition"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                Close
              </motion.button>
            </motion.div>
          </Modal>
        )}
      </AnimatePresence>
      <Portfolio />
    </div>
  );
}

export default App;