import "../App.css";
import js from '../Images/js.png'

import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import next from '../Images/next.png'
import netlify from '../Images/netlify.png'
import mantine from '../Images/mantine.png'
import react from '../Images/react.png'
import framer from '../Images/framer.png'
import tailwind from '../Images/tailwind.png'
import git from '../Images/git.png'
import github from '../Images/github.png'
import chakra from '../Images/chakra.jpg'
import bootstrap from '../Images/bootstrap.png'
import material from '../Images/material.png'
import html from '../Images/html.png'
import vite from '../Images/vite.jpg'
import ts from '../Images/ts.png'





export default function About() {
  
  
    return (
    <div className="pb-40 ">

   
      <header className="pt-[200px] flex items-center">
      <h2 className="w-24 text-sm uppercase tracking-wider text-dark-200  " >About</h2>
      <div className="h-[1px] flex-1 bg-teal-500 " >
     </div>
       </header >


      
       <Zoom> <h1 className="text-teal-400  flex justify-center items-center my-12 text-gray-400 tracking-[3px] leading-[1.1] text-lg ">ABOUT ME</h1></Zoom>
<div className="md:w-[80%] w-full mx-auto mt-[70px]   flex flex-col justify-center items-center gap-y-12 text-lg">


<Fade  bottom>
<div className="text-gray-500 ">
  <p >Hi, I'm Michael Ebo Andorful, a self-taught front-end developer . I specialize in building user interfaces and web applications using mainly React, HTML, CSS,JavaScript and Typescript. 
  With a strong passion for creating intuitive and visually appealing websites, I strive to deliver high-quality code and engaging user experiences.</p>
<p className="pt-4 "> Additionally,  I continuously stay updated with the latest trends and advancements in front-end development through online courses and self-learning.
  I am passionate about expanding my knowledge and skills in front-end development and keeping up with industry best practices.</p> 
  <p className="pt-4 ">  I enjoy collaborating with teams, solving complex problems, and delivering high-quality solutions.
If you have any questions or would like to discuss potential collaborations, feel free to reach out. I look forward to connecting with you!</p>
</div>
</Fade>

<div className="mt-12   ">

  <h1 className="mb-12  flex justify-center items-center text-teal-400 tracking-[3px] leading-[1.1] text-lg ">TECH SKILLS</h1>
<div className="md:gap-x-12 gap-y-12 flex flex-col  md:space-y-0 lg:grid lg:grid-cols-3 md:grid md:grid-cols-2 ">

<Zoom>
 <div className="flex justify-around items-center bg-white text-black py-2 border rounded-lg opacity-70"> <img src={html} alt="img" />HTML</div>
 <div className="flex justify-around items-center bg-white text-black py-2 border rounded-lg opacity-70"> <img src={js} alt="img" />JAVASCRIPT</div>
 <div className="flex justify-around items-center bg-white text-black py-2 border rounded-lg opacity-70"> <img src={ts} alt="img" />TYPESCRIPT</div>
<div className="flex justify-around items-center bg-white text-black py-2 border rounded-lg opacity-70">  <img src={react} alt="img" />REACT JS</div>
<div className="flex justify-around items-center bg-white text-black py-2 border rounded-lg opacity-70"> <img src={next} alt="img" />NEXT JS</div>
 <div className="flex justify-around items-center bg-white text-black py-2 border rounded-lg opacity-70 "> <img src={material} alt="img" />MATERIAL UI</div> 
 <div className="flex justify-around items-center bg-white text-black py-2 border rounded-lg px-2 opacity-70"> <img src={framer} alt="img" className="mr-2" />FRAMER MOTION</div>
 <div className="flex justify-around items-center bg-white text-black py-2 border rounded-lg opacity-70"> <img src={netlify} alt="img" />NETLIFY</div>
 <div className="flex justify-around items-center bg-white text-black py-2 border rounded-lg opacity-70">  <img src={tailwind} alt="img" />TAILWIND CSS</div>
 <div className="flex justify-around items-center bg-white text-black py-2 border rounded-lg opacity-70"> <img src={git} alt="img" />GIT</div>
 <div className="flex justify-around items-center bg-white text-black py-2 border rounded-lg opacity-70">  <img src={github} alt="img" />GITHUB</div> 
 <div className="flex justify-around items-center bg-white text-black py-2 border rounded-lg opacity-70"> <img src={chakra} alt="img" />CHAKRA UI</div> 
 <div className="flex justify-around items-center bg-white text-black py-2 border rounded-lg opacity-70"> <img src={bootstrap} alt="img" />BOOTSTRAP</div>
  <div className="flex justify-around items-center bg-white text-black py-2 border rounded-lg opacity-70" > <img src={mantine} alt="img" />MANTINE CSS</div>
 <div className="flex justify-around items-center bg-white text-black py-2 border rounded-lg opacity-70" > <img src={vite} alt="img" />VITE</div>
 </Zoom>
</div>
</div>


</div>
</div>

      
    );
  }
  
  
    