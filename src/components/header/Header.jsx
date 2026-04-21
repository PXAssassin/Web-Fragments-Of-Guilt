import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

/**
 * Header Component
 * Displays the navigation bar and the main title of the game.
 * Enhancements: dynamic blur/opacity on scroll, hover text animations.
 */
const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed w-full top-0 z-50 transition-all duration-500 border-b ${
        scrolled 
          ? 'bg-gameBg/95 backdrop-blur-lg border-gameAccent/50 shadow-[0_4px_30px_rgba(163,0,0,0.3)]' 
          : 'bg-transparent border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 md:h-24 transition-all duration-300">
          <div className="flex-shrink-0 flex items-center">
            {/* TODO: Change the game name here later */}
            <h1 className="font-cinzel text-3xl md:text-4xl font-bold text-gameText tracking-widest text-glow-animated cursor-pointer">
              FRAGMENTS OF GUILTY
            </h1>
          </div>
          <nav className="hidden md:flex space-x-10">
            {['The Journey', 'DevLog'].map((item) => (
              <a 
                key={item}
                href={`#${item.toLowerCase().replace(' ', '')}`} 
                className="relative group text-gray-300 font-poppins text-sm uppercase tracking-wider"
              >
                <span className="group-hover:text-gameText transition-colors duration-300">{item}</span>
                <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-gameAccent transition-all duration-300 group-hover:w-full group-hover:shadow-[0_0_10px_#A30000]"></span>
              </a>
            ))}
            <a 
              href="#join" 
              className="text-gameAccent hover:text-white font-poppins text-sm uppercase tracking-wider font-bold transition-all duration-300 hover:shadow-[0_0_15px_#A30000] px-4 py-2 border border-gameAccent/30 hover:border-gameAccent rounded-md bg-gameAccent/5 hover:bg-gameAccent/20"
            >
              Join Discord
            </a>
          </nav>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
