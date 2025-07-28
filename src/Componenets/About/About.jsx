// import React from 'react';
// import { IoArrowForward } from "react-icons/io5";
// import hom from "../../assets/hom8.png";
// import { motion } from "framer-motion";

// const About = () => {
//   return (
//     <motion.div
//       id="About"
//       className="p-10 md:p-24  "
//       initial={{ opacity: 0, y: 50 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: false, amount: 0.2 }}
//       transition={{ duration: 0.6 }}
//     >
      
//       <h1 className="text-2xl md:text-4xl text-white font-bold mb-10 pl-10">
//         About
//       </h1>

      
//       <motion.div
//         className="text-white w-full md:w-[80%] mx-auto bg-black bg-opacity-30 shadow-xl rounded-lg p-8"
//         initial={{ opacity: 0, scale: 0.95 }}
//         whileInView={{ opacity: 1, scale: 1 }}
//         viewport={{ once: false }}
//         transition={{ duration: 0.5, delay: 0.2 }}
//       >
//         <div className="flex flex-col md:flex-row items-center gap-10">

          
//           <div className="w-full md:w-1/2 flex justify-center mb-10">
//             <img
//               src={hom}
//               alt="Nadim"
//               className="w-40 h-40 md:w-52 md:h-52 rounded-full object-cover object-[center_10%] shadow-lg mt-4 md:mt-8"
//             />
//           </div>

          
//           <div className="w-full md:w-1/2">
            
//             <div className="flex gap-4 py-4">
//               <IoArrowForward size={24} className="mt-1 text-[#465697]" />
//               <div>
//                 <h1 className="text-xl md:text-2xl font-semibold leading-normal">Frontend Developer</h1>
//                 <p className="text-sm md:text-md leading-tight text-gray-300 mt-4 space-y-2">
//                   👋 I’m a passionate <span className="text-white font-medium">Front-End Developer</span> with 1 year of experience building modern, responsive websites using <span className="text-white">React, HTML, CSS, JavaScript</span>, and <span className="text-white">Bootstrap</span>. I love crafting clean UI and seamless user experiences.<br /><br />

//                   🎯 Currently, I’m diving into <span className="text-white">Next.js</span> to create faster, scalable web applications. I believe in continuous learning, teamwork, and writing clean, efficient code.<br /><br />

//                   ⚙️ <span className="text-white font-medium">Tech I work with:</span> React, JavaScript, GitHub, Bootstrap, Tailwind<br /><br />

//                   🤝 <span className="text-white font-medium">Soft Skills:</span> Problem Solving, Time Management, Communication<br /><br />

//                   🎧 Apart from coding, I enjoy music, exploring new tech trends, and learning through real-world projects.<br /><br />

//                   <span className="italic text-[#6db0ff]">"Code is not just logic, it’s also creativity."</span>
//                 </p>
//               </div>
//             </div>
//           </div>

//         </div>
//       </motion.div>
//     </motion.div>
//   );
// };

// export default About;





import React from 'react';
import { IoArrowForward } from "react-icons/io5";
import hom from "../../assets/hom8.png";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div
      id="About"
      className="p-10 sm:p-10 md:p-10 lg:p-24"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.6 }}
    >

      <h1 className="text-2xl md:text-4xl text-white font-bold mb-10 pl-10">
         About
       </h1>

      <motion.div
        className="text-white w-full md:w-[80%] mx-auto bg-black bg-opacity-30 shadow-xl rounded-lg p-8"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="flex flex-col sm:flex-col md:flex-col lg:flex-row items-center gap-10">

          {/* Image Section */}
          <div className="w-full lg:w-1/2 flex justify-center mb-6 lg:mb-0">
            <img
              src={hom}
              alt="Nadim"
              className="w-40 h-40 md:w-52 md:h-52 rounded-full object-cover object-[center_10%] shadow-lg mt-4"
            />
          </div>

          {/* Text Section */}
          <div className="w-full lg:w-1/2">
            <div className="flex gap-4 py-4">
              <IoArrowForward size={24} className="mt-1 text-[#465697]" />
              <div>
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  Frontend Developer
                </h1>
                <p className="text-sm md:text-md leading-tight text-gray-300 mt-4 space-y-2">
                  👋 I’m a passionate <span className="text-white font-medium">Front-End Developer</span> with 1 year of experience building modern, responsive websites using <span className="text-white">React, HTML, CSS, JavaScript</span>, and <span className="text-white">Bootstrap</span>. I love crafting clean UI and seamless user experiences.<br /><br />

                  🎯 Currently, I’m diving into <span className="text-white">Next.js</span> to create faster, scalable web applications. I believe in continuous learning, teamwork, and writing clean, efficient code.<br /><br />

                  ⚙️ <span className="text-white font-medium">Tech I work with:</span> React, JavaScript, GitHub, Bootstrap, Tailwind<br /><br />

                  🤝 <span className="text-white font-medium">Soft Skills:</span> Problem Solving, Time Management, Communication<br /><br />

                  🎧 Apart from coding, I enjoy music, exploring new tech trends, and learning through real-world projects.<br /><br />

                  <span className="italic text-[#6db0ff]">"Code is not just logic, it’s also creativity."</span>
                </p>
              </div>
            </div>
          </div>

        </div>
      </motion.div>
    </motion.div>
  );
};

export default About;


