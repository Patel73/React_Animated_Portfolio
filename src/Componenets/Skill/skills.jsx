import React from 'react';
import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaReact, FaBootstrap, FaGithub, FaGitAlt } from 'react-icons/fa';
import { SiJavascript, SiTailwindcss } from 'react-icons/si';

const Skills = () => {
  return (
    <motion.div
      id="Skills"
      className="p-10 md:p-24 "
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="text-2xl md:text-4xl text-white font-bold mb-10 pl-10">Skills</h1>

      <div className="flex flex-wrap items-center justify-around">
        <motion.div
          className="text-white w-full md:w-[80%] bg-black bg-opacity-30 shadow-xl rounded-lg p-8"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {[
              { icon: <FaHtml5 className="text-4xl text-orange-500" />, name: 'HTML5' },
              { icon: <FaCss3Alt className="text-4xl text-blue-500" />, name: 'CSS3' },
              { icon: <SiJavascript className="text-4xl text-yellow-400" />, name: 'JavaScript' },
              { icon: <FaReact className="text-4xl text-cyan-400" />, name: 'React' },
              { icon: <SiTailwindcss className="text-4xl text-cyan-300" />, name: 'Tailwind' },
              { icon: <FaBootstrap className="text-4xl text-purple-500" />, name: 'Bootstrap' },
              { icon: <FaGitAlt className="text-4xl text-red-500" />, name: 'Git' },
              { icon: <FaGithub className="text-4xl text-white" />, name: 'GitHub' },
            ].map((skill, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center gap-2"
                whileHover={{ scale: 1.1 }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                {skill.icon}
                <p className="text-sm md:text-base font-medium">{skill.name}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Skills;
