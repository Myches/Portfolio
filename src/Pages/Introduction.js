import "../App.css";
import {motion} from 'framer-motion'
import {BsArrowDownShort} from 'react-icons/bs'

export default function Introduction() {
    
  const typingContainer = {
    hidden: { opacity: 0},
    show: { 
      opacity: 1,
      transition:{
        staggerChildren: 0.14,
      }}
  }
  const typingText = {
    hidden: { opacity: 0, y:"-20px"},
    show: { 
      opacity: 1, 
      y:"0",
      transition:{
        ease:'easeInOut',
      }
    }
  }

  const explainProduct = {
    hidden: { opacity: 0, y:"-20px"},
    show: { 
      opacity: 1, 
      y:"0", 
      transition:{
        delay:4,
        ease:"easeInOut"
      }
    }
  }

    return (
        <div className="w-full flex flex-col md:flex flex-row pt-[150px]  md:mb-[200px] sm:mb-0">
      <div className="w-2/3  mx-auto  mt-12 ">
        
     <motion.h1 className='md:text-6xl text-5xl lg:text-7xl font-medium text' variants={typingContainer} initial="hidden" animate="show" > {
              Array.from("Hi, I'm Michael ! Welcome to my portfolio.").map((word,i) => (
              <motion.span key={i} variants={typingText}>{word}</motion.span>
              ))
            }</motion.h1>
     <motion.p className="text-gray-500 flex flex-col mt-8 text-lg font-light leading-related" variants={explainProduct} initial="hidden" animate="show"> I'm a frontend developer who love building amazing design and fantastic user experiences  . </motion.p>


     <a href="#About" className="text-[40px] text-teal-400 flex justify-center items-center mt-[90px]  ">
    <div> <BsArrowDownShort  /></div>
    </a>
   </div>  
      </div>
    );
  }
  
  
    