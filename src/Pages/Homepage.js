import Introduction from "./Introduction";
import Navbar from "./Navbar";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";




function Homepage() {
    return (
     <div className=" h-screen w-full px-2 md:px-4 mx-auto text-white overflow-auto  "style={{ scrollBehavior: 'smooth' }} >
      <Navbar />

      <div className=" " id="Intro"> <Introduction /></div>
      <div className="m-8 mt-12"  id="About"> <About /></div>
      <div className="m-8 mt-12"   id="Projects"> <Projects /></div>
      <div className="m-8  mt-12"   id="Contact"> <Contact /></div>
      <div className="m-8  mt-12"   id="Footer"> <Footer /></div>
      </div>
     
    );
  }
  
  export default Homepage;
  