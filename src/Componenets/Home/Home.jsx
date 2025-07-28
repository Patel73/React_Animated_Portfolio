// import React, { useEffect } from 'react';
// import { motion, useAnimation } from 'framer-motion';
// import { FaLinkedin, FaGithub, FaDownload } from 'react-icons/fa';
// import { MdEmail } from 'react-icons/md';
// import { useLocation } from 'react-router-dom';
// import hom from '../../assets/hom5.png';
// import CV from  '../../assets/CV.pdf';

// const text = " I am NADIM";

// const container = {
//   initial: {},
//   animate: {
//     transition: {
//       staggerChildren: 0.15,
//     },
//   },
// };

// const letter = {
//   initial: { opacity: 0, y: 10, color: "#fff" },
//   animate: {
//     opacity: 1,
//     y: 0,
//     color: ["#22d3ee", "#14b8a6", "#1e3a8a", "#22d3ee"], 
//     transition: { duration: 1.5, repeat: 0 },
//   },
// };

// const Home = () => {
//   const controls = useAnimation();
//   const location = useLocation();

 
//   const startAnimationLoop = async () => {
//     while (true) {
//       await controls.start("animate");
//       await new Promise(resolve => setTimeout(resolve, 1000));
//       controls.set("initial"); 
//     }
//   };

//   useEffect(() => {
//     startAnimationLoop();
//   }, [location.pathname]);

//   return (
//     <motion.div
//       id="Home"
//       className="text-white mx-0 md:mx-20 p-10 pt-24 md:p-12 mt-10 flex flex-col md:flex-row justify-center items-center text-center gap-10 md:gap-20"
//       initial={{ opacity: 0, y: 20 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.6 }}
//     >
     
//       <motion.div
//         className="w-full md:w-2/4 flex flex-col items-center md:items-center"
//         initial={{ opacity: 0, x: -50 }}
//         whileInView={{ opacity: 1, x: 0 }}
//         viewport={{ once: false }}
//         transition={{ duration: 0.6 }}
//       >
//         <h1 className="text-3xl md:text-6xl font-extrabold tracking-tight whitespace-nowrap flex gap-2 text-#F3F4F6">
//           Hello,
//           <motion.span
//             className="flex"
//             variants={container}
//             initial="initial"
//             animate={controls}
//           >
//             {text.split("").map((char, index) => (
//               <motion.span
//                 key={index}
//                 variants={letter}
//                 className={`${char === " " ? "w-2" : ""
//                   } ${char === "N" ? "text-[#465697]" : ""}`}
//               >
//                 {char === " " ? "\u00A0" : char}
//               </motion.span>
//             ))}
//           </motion.span>
//         </h1>

//         <p className="mx-auto max-w-xl text-left text-white text-lg leading-relaxed mt-4">
//           I'm a Front-End Developer with 1 year of experience building responsive and modern websites using React, HTML, CSS, JavaScript & Bootstrap.
//         </p>

       
//         <div className="flex gap-4 mt-5 items-center justify-center">
//           <a
//             href="https://www.linkedin.com/in/nadimkhan-patel?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="bg-blue-500 p-3 rounded-full hover:bg-blue-600 transition duration-300 shadow-md"
//           >
//             <FaLinkedin className="text-white text-xl" />
//           </a>

//           <a
//             href="https://github.com/Patel73"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="bg-gray-700 p-3 rounded-full hover:bg-gray-800 transition duration-300 shadow-md"
//           >
//             <FaGithub className="text-white text-xl" />
//           </a>

//           <a
//             href="mailto:nadimkhanpatel@gmail.com"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="bg-[#465697] p-3 rounded-full hover:bg-[#3b4d82] transition duration-300 shadow-md"
//           >
//             <MdEmail className="text-white text-xl" />
//           </a>
//         </div>

        
//         <div className="flex gap-4 mt-6 flex-wrap justify-center">
//           <a href="#Contact">
//             <button className="bg-[#465697] hover:bg-[#3b4d82] text-white py-2 px-5 text-sm md:text-lg rounded-lg shadow-md hover:scale-105 transition duration-300 font-semibold flex items-center gap-2">
//               <MdEmail /> Contact Me
//             </button>
//           </a>

//           <a href={CV} target="_blank" rel="noopener noreferrer">
//             <button className="bg-[#465697] hover:bg-[#3b4d82] text-white py-2 px-5 text-sm md:text-lg rounded-lg shadow-md hover:scale-105 transition duration-300 font-semibold flex items-center gap-2">
//               <FaDownload /> View CV
//             </button>
//           </a>
//         </div>
//       </motion.div>

      
//       <motion.div
//         className="w-40 h-40 md:w-64 md:h-64 rounded-full overflow-hidden shadow-2xl"
//         initial={{ opacity: 0, y: 50, scale: 0.9 }}
//         whileInView={{ opacity: 1, y: 0, scale: 1 }}
//         whileHover={{ scale: 1.05 }}
//         viewport={{ once: false }}
//         transition={{ duration: 0.6 }}
//       >
//         <img
//           src={hom}
//           alt="Nadim"
//           className="w-full h-full object-cover object-top"
//         />
//       </motion.div>
//     </motion.div>
//   );
// };

// export default Home;







import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { FaLinkedin, FaGithub, FaDownload } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { useLocation } from 'react-router-dom';
import hom from '../../assets/hom5.png';
import CV from '../../assets/My CV.pdf';

const text = " I am NADIM";

const container = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const letter = {
  initial: { opacity: 0, y: 10, color: "#fff" },
  animate: {
    opacity: 1,
    y: 0,
    color: ["#22d3ee", "#14b8a6", "#1e3a8a", "#22d3ee"],
    transition: { duration: 1.5, repeat: 0 },
  },
};

const Home = () => {
  const controls = useAnimation();
  const location = useLocation();

  const startAnimationLoop = async () => {
    while (true) {
      await controls.start("animate");
      await new Promise(resolve => setTimeout(resolve, 1000));
      controls.set("initial");
    }
  };

  useEffect(() => {
    startAnimationLoop();
  }, [location.pathname]);

  return (
    <motion.div
      id="Home"
      className="text-white mx-0 p-10 pt-24 mt-10 flex flex-col sm:flex-col md:flex-col lg:flex-row justify-center items-center text-center gap-10 lg:gap-20"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Text & Buttons */}
      <motion.div
        className="w-full lg:w-2/4 flex flex-col items-center lg:items-start"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-3xl md:text-6xl font-extrabold tracking-tight whitespace-nowrap flex gap-2 text-#F3F4F6">
          Hello,
          <motion.span
            className="flex"
            variants={container}
            initial="initial"
            animate={controls}
          >
            {text.split("").map((char, index) => (
              <motion.span
                key={index}
                variants={letter}
                className={`${char === " " ? "w-2" : ""} ${char === "N" ? "text-[#465697]" : ""}`}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </motion.span>
        </h1>

        <p className="mx-auto max-w-xl text-center lg:text-left text-white text-lg leading-relaxed mt-4">
          I'm a Front-End Developer with 1 year of experience building responsive and modern websites using React, HTML, CSS, JavaScript & Bootstrap.
        </p>

        {/* Social Icons */}
        <div className="flex gap-4 mt-5 items-center justify-center">
          <a
            href="https://www.linkedin.com/in/nadimkhan-patel"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-500 p-3 rounded-full hover:bg-blue-600 transition duration-300 shadow-md"
          >
            <FaLinkedin className="text-white text-xl" />
          </a>

          <a
            href="https://github.com/Patel73"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-700 p-3 rounded-full hover:bg-gray-800 transition duration-300 shadow-md"
          >
            <FaGithub className="text-white text-xl" />
          </a>

          <a
            href="mailto:nadimkhanpatel@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#465697] p-3 rounded-full hover:bg-[#3b4d82] transition duration-300 shadow-md"
          >
            <MdEmail className="text-white text-xl" />
          </a>
        </div>

        {/* Buttons */}
        <div className="flex gap-4 mt-6 flex-wrap justify-center lg:justify-start">
          <a href="#Contact">
            <button className="bg-[#465697] hover:bg-[#3b4d82] text-white py-2 px-5 text-sm md:text-lg rounded-lg shadow-md hover:scale-105 transition duration-300 font-semibold flex items-center gap-2">
              <MdEmail /> Contact Me
            </button>
          </a>

          <a href={CV} target="_blank" rel="noopener noreferrer">
            <button className="bg-[#465697] hover:bg-[#3b4d82] text-white py-2 px-5 text-sm md:text-lg rounded-lg shadow-md hover:scale-105 transition duration-300 font-semibold flex items-center gap-2">
              <FaDownload /> View CV
            </button>
          </a>
        </div>
      </motion.div>

      {/* Image */}
      <motion.div
        className="w-40 h-40 md:w-64 md:h-64 rounded-full overflow-hidden shadow-2xl"
        initial={{ opacity: 0, y: 50, scale: 0.9 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        whileHover={{ scale: 1.05 }}
        viewport={{ once: false }}
        transition={{ duration: 0.6 }}
      >
        <img
          src={hom}
          alt="Nadim"
          className="w-full h-full object-cover object-top"
        />
      </motion.div>
    </motion.div>
  );
};

export default Home;
