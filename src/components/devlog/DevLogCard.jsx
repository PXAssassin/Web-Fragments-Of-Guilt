import React from 'react';
import { motion } from 'framer-motion';

/**
 * DevLogCard Component
 * Displays a single entry of the devlog with an image, title, and short description.
 * Triggers the modal to open on click.
 */
const DevLogCard = ({ card, onClick }) => {
  return (
    <motion.div 
      whileHover={{ y: -10, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="bg-gameCard rounded-lg overflow-hidden border border-gameAccent/20 group cursor-pointer h-full flex flex-col relative shadow-lg"
      onClick={() => onClick(card)}
    >
      {/* Animated Glow Behind Card */}
      <div className="absolute inset-0 bg-gameAccent opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-lg blur-xl"></div>
      
      <div className="relative h-48 overflow-hidden z-10">
        <img 
          src={card.image} 
          alt={card.title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gameCard to-transparent"></div>
        {/* Subtle overlay on hover */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500"></div>
      </div>
      
      <div className="p-6 flex-grow flex flex-col z-10 relative">
        <h3 className="font-cinzel text-xl font-bold text-gameText mb-3 group-hover:text-gameAccent group-hover:text-glow-animated transition-colors duration-300">
          {card.title}
        </h3>
        <p className="font-poppins text-gray-400 group-hover:text-gameAccent transition-colors duration-300 text-sm flex-grow leading-relaxed">
          {card.description}
        </p>
        <div className="mt-4 pt-4 border-t border-gray-700/50 flex justify-between items-center">
          <span className="text-gameAccent text-sm font-semibold uppercase tracking-wider group-hover:text-gameGlow transition-colors duration-300">
            Read More
          </span>
          <motion.span 
            className="text-gameAccent"
            initial={{ x: 0 }}
            whileHover={{ x: 5 }}
            transition={{ repeat: Infinity, repeatType: "mirror", duration: 0.6 }}
          >
            →
          </motion.span>
        </div>
      </div>
    </motion.div>
  );
};

export default DevLogCard;
