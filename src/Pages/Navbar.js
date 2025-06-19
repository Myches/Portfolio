import { motion, AnimatePresence } from 'framer-motion';
import '../index.css';
import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import '../App.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const navAnimation = {
    hidden: {
      opacity: 0,
    },
    show: { 
      opacity: 1,
      transition: {
        staggerChildren: 0.4,
        delayChildren: 5,
        ease: "easeInOut"
      }
    }
  };

  const navItem = {
    hidden: { 
      opacity: 0,
      y: '-20px',
    },
    show: { 
      opacity: 1,
      y: 0,
      transition: {
        ease: "easeInOut"
      }
    }
  };

  const mobileMenuVariants = {
    hidden: { 
      opacity: 0,
      scale: 0.95,
      y: -10,
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.2,
        ease: [0.04, 0.62, 0.23, 0.98]
      }
    },
    exit: {
      opacity: 0,
      scale: 0.95,
      y: -10,
      transition: {
        duration: 0.15,
        ease: "easeInOut"
      }
    }
  };

  const mobileItemVariants = {
    hidden: { 
      opacity: 0,
      x: -20 
    },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.3,
        ease: "easeOut"
      }
    })
  };

  const menuItems = [
    { href: "#Intro", label: "Introduction" },
    { href: "#About", label: "About" },
    { href: "#Projects", label: "Projects" },
    { href: "#Contact", label: "Contact" }
  ];

  return (
    <div className='relative'>
      <motion.div 
        className="fixed top-0 left-0 right-0 flex justify-between items-center w-[95%] h-12 bg-black text-gray-500 px-12 text-lg z-50" 
        variants={navAnimation} 
        initial="hidden" 
        animate="show"
      >
        <motion.h1 className='text-5' variants={navItem}>M.Andorful</motion.h1>
      
        <ul className="flex justify-around items-center cursor-pointer hidden md:flex nav">
          <a href="#Intro"><motion.li className='mx-6 active' variants={navItem}>Introduction</motion.li></a>
          <a href="#About"><motion.li className='mx-6' variants={navItem}>About</motion.li></a>
          <a href="#Projects"><motion.li className='mx-6' variants={navItem}>Projects</motion.li></a>
          <a href="#Contact"><motion.li className='mx-6' variants={navItem}>Contact</motion.li></a>
        </ul>

        <button 
          className="md:hidden relative right-0 top-0 p-2 rounded-lg hover:bg-gray-800 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-600"
          onClick={toggleMenu}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            {isOpen ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
          </motion.div>
        </button>
      </motion.div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={closeMenu}
            />
            
            {/* Mobile Menu */}
            <motion.div
              className="fixed top-16 right-4 left-4 mx-auto max-w-sm bg-gray-900/95 backdrop-blur-lg rounded-2xl border border-gray-700/50 shadow-2xl z-50 md:hidden overflow-hidden"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={mobileMenuVariants}
            >
              <div className="p-6">
                <nav>
                  <ul className="space-y-1">
                    {menuItems.map((item, index) => (
                      <motion.li
                        key={item.href}
                        custom={index}
                        variants={mobileItemVariants}
                        initial="hidden"
                        animate="visible"
                      >
                        <a 
                          href={item.href} 
                          onClick={closeMenu}
                          className="flex items-center px-4 py-3 text-gray-300 hover:text-white hover:bg-gray-800/50 rounded-xl transition-all duration-200 group"
                        >
                          <span className="text-sm font-medium tracking-wide">
                            {item.label}
                          </span>
                          <motion.span 
                            className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                            initial={{ x: -10 }}
                            whileHover={{ x: 0 }}
                          >
                            →
                          </motion.span>
                        </a>
                      </motion.li>
                    ))}
                  </ul>
                </nav>
                
            
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}