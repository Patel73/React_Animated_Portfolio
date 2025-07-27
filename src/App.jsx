// import About from "./Componenets/About/About"
// import Contact from "./Componenets/Contact/Contact"
// import Experience from "./Componenets/Experience/Experience"
// import Footer from "./Componenets/Footer/footer"
// import Home from "./Componenets/Home/Home"
// import Navbar from "./Componenets/Navbar/Navbar"
// import Projects from "./Componenets/Project/project"
// import Skills from "./Componenets/Skill/skills"

// function App() {
//   return (
//     <div className="bg-gradient-to-br from-blue-900 to-purple-900 h-auto w-full overflow-hidden text-white">
//       <Navbar/>
//       <Home/>
//       <About/>
//       <Experience/>
//       <Skills/>
//       <Projects/>
//       <Contact/>
//       <Footer/>
//     </div>
//   )
// }

// export default App

import About from "./Componenets/About/About";
import BackToTop from "./Componenets/Backtotop/Backtotop";
import Contact from "./Componenets/Contact/Contact";
import Experience from "./Componenets/Experience/Experience";
import Footer from "./Componenets/Footer/footer";
import Home from "./Componenets/Home/Home";
import Navbar from "./Componenets/Navbar/Navbar";
import Projects from "./Componenets/Project/project";
import Skills from "./Componenets/Skill/skills";


function App() {
  return (
    <div className="pt-[10px] md:mt-[10px] bg-gradient-to-br from-blue-900 to-purple-900 h-auto w-full overflow-hidden text-white">
      <Navbar />
      <Home />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
      <BackToTop/> {/* <-- Yahan add karo */}
    </div>
  );
}

export default App;


