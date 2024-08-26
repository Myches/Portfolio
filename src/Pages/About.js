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
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default function About() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows:false,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  const techSkills = [
    { name: "HTML", img: html },
    { name: "JAVASCRIPT", img: js },
    { name: "TYPESCRIPT", img: ts },
    { name: "REACT JS", img: react },
    { name: "NEXT JS", img: next },
    { name: "MATERIAL UI", img: material },
    { name: "FRAMER MOTION", img: framer },
    { name: "NETLIFY", img: netlify },
    { name: "TAILWIND CSS", img: tailwind },
    { name: "GIT", img: git },
    { name: "GITHUB", img: github },
    { name: "CHAKRA UI", img: chakra },
    { name: "BOOTSTRAP", img: bootstrap },
    { name: "MANTINE CSS", img: mantine },
    { name: "VITE", img: vite }
  ];

  return (
    <div className="pb-40">
      <header className="pt-[200px] flex items-center">
        <h2 className="w-24 text-sm uppercase tracking-wider text-dark-200">About</h2>
        <div className="h-[1px] flex-1 bg-teal-500"></div>
      </header>
      
      <Zoom>
        <h1 className="text-teal-400 flex justify-center items-center my-12 text-gray-400 tracking-[3px] leading-[1.1] text-lg">ABOUT ME</h1>
      </Zoom>

      <div className="md:w-[80%] w-full mx-auto mt-[70px] flex flex-col justify-center items-center gap-y-14 text-lg">
        <Fade bottom>
          <div className="text-gray-500">
            <p>Hi, I'm Michael Ebo Andorful, a self-taught front-end developer. I specialize in building user interfaces and web applications using mainly React/Next js and TypeScript. 
            I'm passionate about making websites that are easy to use and aesthetically pleasing .I strive to deliver high-quality code and engaging user experiences</p>
            <p className="pt-4">Additionally, I continuously stay updated with the latest trends and advancements in front-end development through online courses and self-learning.
            I am passionate about expanding my knowledge and skills in front-end development and keeping up with industry best practices.</p> 
            <p className="pt-4">I enjoy collaborating with teams, solving complex problems, and delivering high-quality solutions.
            If you have any questions or would like to discuss potential collaborations, feel free to reach out. I look forward to connecting with you!</p>
          </div>
        </Fade>

        <div className="mt-[200px] w-full">
          <h1 className="mb-12 flex justify-center items-center text-teal-400 tracking-[3px] leading-[1.1] text-lg">TECH SKILLS</h1>
          <Slider {...settings}>
            {techSkills.map((skill, index) => (
              <div key={index}>
                <div className="flex justify-center items-center space-x-4  bg-white text-black py-2 border rounded-lg opacity-70 mx-4">
                  <img src={skill.img} alt={skill.name} className="" />
                <p>{skill.name}</p>  
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}