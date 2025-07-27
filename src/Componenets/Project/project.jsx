import React from 'react';
import { motion } from 'framer-motion';
import { FaTools } from 'react-icons/fa';

const Projects = () => {
  return (
    <motion.div
      id="Projects"
      className="p-10 md:p-24 "
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="text-2xl md:text-4xl text-white font-bold mb-10 pl-10">
        Projects
      </h1>

      <div className="flex flex-wrap items-center justify-around">
        <motion.div
          className="text-white w-full md:w-[80%] bg-black bg-opacity-30 shadow-xl rounded-lg p-8"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          
          <div className="flex justify-center mb-6">
            <FaTools size={40} className="text-[#465697]" />
          </div>
          
          <h2 className="text-xl md:text-2xl font-semibold text-center">
            Projects Coming Soon...
          </h2>

          <p className="text-sm md:text-base text-gray-300 mt-4 text-center">
            I'm currently working on some awesome front-end projects. Check back soon to see what I've built!
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Projects;
