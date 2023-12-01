import {motion} from 'framer-motion'
import '../index.css'
import { useState } from "react";
import {AiOutlineMenu,AiOutlineClose} from 'react-icons/ai'
import '../App.css'
import Fade from 'react-reveal/Fade';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navAnimation = {
    hidden:{
      opacity:0,
    },
    show: { 
      opacity:1,
      transition:{
        staggerChildren:0.4,
        delayChildren:5,
        ease:"easeInOut"
      }
    }
  }
  const navItem = {
    hidden: { 
      opacity: 0,
      y:'-20px',
    },
    show: { 
      opacity: 1,
      y:0,
      transition:{
        ease:"easeInOut"
      }
    }
  }



  return (
    <div className=' relative'>
    <motion.div className="fixed top-0 left-0 right-0  flex justify-between items-center w-[95%] h-12 bg-black text-gray-500 px-12  text-lg z-10" variants={navAnimation} initial="hidden" animate="show" >
    
       
        <motion.h1 className=''variants={navItem} >M.Andorful</motion.h1>
     
      <ul className="flex justify-around items-center  cursor-pointer hidden md:flex  nav "   >  

      <a href="#Intro">   <motion.li className='mx-6 active '  variants={navItem}>Introduction</motion.li></a>
      <a href="#About">    <motion.li className='mx-6 '  variants={navItem}> About </motion.li></a>
      <a href="#Projects">    <motion.li className='mx-6 ' variants={navItem} >Projects</motion.li></a>
      <a href="#Contact">    <motion.li className='mx-6 ' variants={navItem} >Contact</motion.li></a>
      </ul>

      <button className="md:hidden  absolute right-5 top-3 bg-White-950 " onClick={toggleMenu}>
    {!isOpen ? <AiOutlineMenu /> : <AiOutlineClose /> }
        </button>
       
    </motion.div> 


     
   

    {isOpen &&  (

  <Fade top>  <ul className="  bg-black w-full  mx-auto pt-4   flex flex-col  text-gray-500 fixed top-10 right-0 z-10   ">  

<a href="#Intro" onClick={toggleMenu}> <li className='m-6 border-b border-gray-600' >Introduction</li></a>
<a href="#About" onClick={toggleMenu}> <li className='m-6 border-b border-gray-600' > About </li></a>
<a href="#Projects" onClick={toggleMenu}> <li className='m-6 border-b border-gray-600' >Projects</li></a>
<a href="#Contact" onClick={toggleMenu}> <li className='m-6 border-b border-gray-600' >Contact</li></a>
</ul>

</Fade>

    )}
    </div> 
  );
}


  