import React from 'react';
import { FaRegCalendarAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Experience = () => {
  return (
    <motion.div
      id="Experience"
      className="p-10 md:p-24 "
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="text-2xl md:text-4xl text-white font-bold mb-10 pl-10">Experience</h1>

      <div className="flex flex-wrap items-center justify-around">
        <motion.div
          className="text-white w-full md:w-[80%] bg-black bg-opacity-30 shadow-xl rounded-lg p-8"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-xl md:text-2xl font-semibold">
              Software Developer – Verheffen Info-Tech Pvt Ltd
            </h2>
            <div className="flex items-center gap-2 text-sm text-gray-300">
              <FaRegCalendarAlt />
              <span>Jun 2024 - Jun 2025</span>
            </div>
          </div>

          <h3 className="text-lg md:text-xl font-medium mt-6 mb-2">1. CRM (Customer Relationship Management) System</h3>
          <ul className="list-disc list-inside text-sm space-y-1 mb-4">
            <li>Built a responsive CRM dashboard using React.js, Redux, and Material-UI.</li>
            <li>Implemented dynamic user forms, customer data visualization, and lead management workflows.</li>
            <li>Integrated RESTful APIs for data fetching and state management.</li>
            <li>Enhanced performance with lazy loading, code splitting, and optimized re-renders.</li>
          </ul>

         
          <h3 className="text-lg md:text-xl font-medium mt-6 mb-2">2. Real Estate Platform</h3>
          <ul className="list-disc list-inside text-sm space-y-1">
            <li>Developed a real-estate listing and booking interface using React.js, React Router, and Tailwind CSS.</li>
            <li>Created reusable components for property listings, filters, and booking forms.</li>
            <li>Integrated Google Maps API for property location view.</li>
            <li>Focused on mobile responsiveness and user-friendly UI.</li>
          </ul>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Experience;
