import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

/**
 * DevLogCard Component
 * Displays a single entry of the devlog with an image (or carousel), title, and short description.
 * Triggers the modal to open on click.
 */
const DevLogCard = ({ card, onClick }) => {
  const isYouTube = !!card.youtubeId;
  const images = !isYouTube && card.images && card.images.length > 0 ? card.images : (!isYouTube && card.image ? [card.image] : []);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <motion.div 
      whileHover={{ y: -10, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={`${isYouTube ? 'bg-purple-900/40 border-purple-600/60' : 'bg-gameCard border-gameAccent/20'} rounded-lg overflow-hidden border group cursor-pointer h-full flex flex-col relative shadow-lg`}
      onClick={() => onClick(card)}
    >
      {/* Animated Glow Behind Card */}
      <div className="absolute inset-0 bg-gameAccent opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-lg blur-xl"></div>
      
      <div className="relative h-48 overflow-hidden z-10 bg-gray-900">
        {isYouTube ? (
          <div className="absolute inset-0 w-full h-full flex items-center justify-center bg-gradient-to-br from-purple-900 to-purple-950">
            <div className="flex flex-col items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="currentColor" className="text-purple-400 mb-2">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
              <span className="text-purple-300 text-sm font-semibold">GAMEPLAY</span>
            </div>
          </div>
        ) : (
          <>
            {images.map((mediaSrc, idx) => {
              const isVideo = typeof mediaSrc === 'string' && mediaSrc.match(/\.(mp4|webm|ogg)$/i);
              const className = `absolute inset-0 w-full h-full object-cover transition-all duration-1000 ease-in-out group-hover:scale-110 ${idx === currentIndex ? 'opacity-100 z-0' : 'opacity-0 -z-10'}`;
              
              if (isVideo) {
                return (
                  <video 
                    key={idx}
                    src={mediaSrc}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className={className}
                  />
                );
              }
              
              return (
                <img 
                  key={idx}
                  src={mediaSrc} 
                  alt={`${card.title} ${idx + 1}`} 
                  className={className}
                />
              );
            })}
          </>
        )}
        <div className={`absolute inset-0 ${isYouTube ? 'bg-gradient-to-t from-purple-950/80 to-transparent' : 'bg-gradient-to-t from-gameCard/40 to-transparent'} z-10 pointer-events-none`}></div>
        {/* Subtle overlay on hover */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500 z-10 pointer-events-none"></div>

        {/* Carousel Indicators */}
        {!isYouTube && images.length > 1 && (
          <div className="absolute bottom-3 left-0 right-0 flex justify-center space-x-1.5 z-20">
            {images.map((_, idx) => (
              <div 
                key={idx} 
                className={`h-1.5 rounded-full transition-all duration-500 ${idx === currentIndex ? 'w-4 bg-gameAccent' : 'w-1.5 bg-white/40'}`}
              />
            ))}
          </div>
        )}
      </div>
      
      <div className="p-6 flex-grow flex flex-col z-10 relative">
        <h3 className={`font-cinzel text-xl font-bold mb-3 group-hover:text-glow-animated transition-colors duration-300 ${isYouTube ? 'text-purple-300 group-hover:text-purple-100' : 'text-gameText group-hover:text-gameAccent'}`}>
          {card.title}
        </h3>
        <p className={`font-poppins text-sm flex-grow leading-relaxed transition-colors duration-300 ${isYouTube ? 'text-purple-200 group-hover:text-purple-100' : 'text-gray-400 group-hover:text-gameAccent'}`}>
          {card.description}
        </p>
        <div className={`mt-4 pt-4 border-t flex justify-between items-center ${isYouTube ? 'border-purple-700/50' : 'border-gray-700/50'}`}>
          <span className={`text-sm font-semibold uppercase tracking-wider transition-colors duration-300 ${isYouTube ? 'text-purple-400 group-hover:text-purple-300' : 'text-gameAccent group-hover:text-gameGlow'}`}>
            Watch Now
          </span>
          <motion.span 
            className={isYouTube ? 'text-purple-400' : 'text-gameAccent'}
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
