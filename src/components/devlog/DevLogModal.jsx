import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * DevLogModal Component
 * A full-screen dark overlay modal that displays the full text of a devlog card.
 */
const DevLogModal = ({ isOpen, card, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && card && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          {/* Dark overlay background */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="absolute inset-0 bg-black/90 backdrop-blur-md cursor-pointer"
            onClick={onClose}
          />
          
          {/* Modal Content container */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative bg-gameCard border border-gameAccent/50 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-[0_0_40px_rgba(163,0,0,0.5)] flex flex-col md:flex-row z-10"
          >
            
            {/* Close Button */}
            <button 
              onClick={onClose}
              className="absolute top-4 right-4 z-20 bg-black/50 hover:bg-gameAccent text-white p-2 rounded-full transition-all duration-300 hover:rotate-90 backdrop-blur-md"
            >
              <X size={24} />
            </button>

            {/* Modal Image */}
            <div className="md:w-1/2 relative h-64 md:h-auto overflow-hidden">
              <motion.img 
                initial={{ scale: 1.2 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                src={card.image} 
                alt={card.title} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-gameCard to-transparent md:to-transparent"></div>
            </div>

            {/* Modal Text Content */}
            <div className="md:w-1/2 p-8 md:p-10 flex flex-col overflow-y-auto">
              <motion.h2 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="font-cinzel text-3xl md:text-4xl font-bold text-gameText mb-6 tracking-wide border-b border-gameAccent/30 pb-4 text-glow-animated"
              >
                {card.title}
              </motion.h2>
              
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="font-poppins text-gray-300 leading-relaxed space-y-4"
              >
                <p className="text-lg text-gameGlow italic mb-6 border-l-4 border-gameAccent pl-4 py-1">
                  "{card.description}"
                </p>
                <p className="text-sm md:text-base opacity-90">
                  {card.fullText}
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default DevLogModal;
