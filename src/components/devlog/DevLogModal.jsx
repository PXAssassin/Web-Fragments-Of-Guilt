import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const renderFormattedText = (text) => {
  if (!text) return null;
  
  // Limpiar el exceso de indentación de los template literals
  const lines = text.split('\n').map(line => line.trim());
  const cleanText = lines.join('\n').trim();

  // Manejar negritas básicas de markdown (**texto**)
  const parts = cleanText.split(/(\*\*.*?\*\*)/g);
  
  return (
    <div className="whitespace-pre-wrap">
      {parts.map((part, i) => {
        if (part.startsWith('**') && part.endsWith('**')) {
          return <strong key={i} className="text-gameAccent font-bold">{part.slice(2, -2)}</strong>;
        }
        return <span key={i}>{part}</span>;
      })}
    </div>
  );
};

/**
 * DevLogModal Component
 * A full-screen dark overlay modal that displays the full text of a devlog card.
 */
const DevLogModal = ({ isOpen, card, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const isYouTube = card?.youtubeId;
  const images = !isYouTube && card?.images && card.images.length > 0 ? card.images : (!isYouTube && card?.image ? [card.image] : []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setCurrentIndex(0); // Reset index when opening
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, card]);

  useEffect(() => {
    if (!isOpen || images.length <= 1) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); // 4 seconds per image in modal
    
    return () => clearInterval(interval);
  }, [isOpen, images.length]);

  const nextImage = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

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
            className="absolute inset-0 bg-black/90 cursor-pointer"
            onClick={onClose}
          />
          
          {/* Modal Content container */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className={`relative rounded-xl max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col md:flex-row z-10 ${isYouTube ? 'bg-purple-950 border border-purple-600/50 shadow-[0_0_40px_rgba(168,85,247,0.3)]' : 'bg-gameCard border border-gameAccent/50 shadow-[0_0_40px_rgba(163,0,0,0.5)]'}`}
          >
            
            {/* Close Button */}
            <button 
              onClick={onClose}
              className={`absolute top-4 right-4 z-20 p-2 rounded-full transition-all duration-300 hover:rotate-90 backdrop-blur-md ${isYouTube ? 'bg-purple-700/50 hover:bg-purple-500 text-white' : 'bg-black/50 hover:bg-gameAccent text-white'}`}
            >
              <X size={24} />
            </button>

            {/* Modal Image / YouTube */}
            <div className={`md:w-1/2 relative h-64 md:h-auto overflow-hidden group ${isYouTube ? 'bg-purple-950' : 'bg-black'}`}>
              {isYouTube ? (
                <iframe
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${card.youtubeId}?autoplay=1&controls=1`}
                  title={card.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0"
                />
              ) : (
                <>
                  {images.map((mediaSrc, idx) => {
                    const isVideo = typeof mediaSrc === 'string' && mediaSrc.match(/\.(mp4|webm|ogg)$/i);
                    const className = `absolute inset-0 w-full h-full object-contain transition-all duration-1000 ease-in-out cursor-pointer ${idx === currentIndex ? 'opacity-100 z-0 scale-100' : 'opacity-0 -z-10 scale-105'}`;
                    
                    if (isVideo) {
                      return (
                        <video 
                          key={idx}
                          src={mediaSrc}
                          autoPlay
                          loop
                          muted
                          playsInline
                          onClick={() => setIsFullscreen(true)}
                          className={className}
                        />
                      );
                    }
                    
                    return (
                      <img 
                        key={idx}
                        src={mediaSrc} 
                        alt={`${card.title} ${idx + 1}`} 
                        onClick={() => {
                          const isMediaVideo = typeof mediaSrc === 'string' && mediaSrc.match(/\.(mp4|webm|ogg)$/i);
                          if (isMediaVideo) setIsFullscreen(true);
                        }}
                        className={className}
                      />
                    );
                  })}
                </>
              )}
              {!isYouTube && (
                <>
                  <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-gameCard/20 to-transparent md:to-transparent z-10 pointer-events-none"></div>
                  
                  {/* Manual Navigation Controls */}
                  {images.length > 1 && (
                    <>
                      <button 
                        onClick={prevImage}
                        className="absolute left-3 top-1/2 -translate-y-1/2 z-20 bg-black/50 hover:bg-gameAccent text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-sm"
                      >
                        <ChevronLeft size={24} />
                      </button>
                      <button 
                        onClick={nextImage}
                        className="absolute right-3 top-1/2 -translate-y-1/2 z-20 bg-black/50 hover:bg-gameAccent text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-sm"
                      >
                        <ChevronRight size={24} />
                      </button>
                      
                      {/* Indicators */}
                      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2 z-20">
                        {images.map((_, idx) => (
                          <button 
                            key={idx}
                            onClick={(e) => { e.stopPropagation(); setCurrentIndex(idx); }}
                            className={`h-2 rounded-full transition-all duration-500 ${idx === currentIndex ? 'w-6 bg-gameAccent' : 'w-2 bg-white/50 hover:bg-white/80'}`}
                          />
                        ))}
                      </div>
                    </>
                  )}
                </>
              )}
            </div>

            {/* Modal Text Content */}
            <div className="md:w-1/2 p-8 md:p-10 flex flex-col overflow-y-auto">
              <motion.h2 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className={`font-cinzel text-3xl md:text-4xl font-bold mb-6 tracking-wide border-b pb-4 text-glow-animated ${isYouTube ? 'text-purple-300 border-purple-600/30' : 'text-gameText border-gameAccent/30'}`}
              >
                {card.title}
              </motion.h2>
              
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className={`font-poppins leading-relaxed space-y-4 ${isYouTube ? 'text-purple-100' : 'text-gray-300'}`}
              >
                <p className={`text-lg italic mb-6 border-l-4 pl-4 py-1 ${isYouTube ? 'text-purple-300 border-purple-400' : 'text-gameGlow border-gameAccent'}`}>
                  "{card.description}"
                </p>
                <div className="text-sm md:text-base opacity-90">
                  {renderFormattedText(card.fullText)}
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Fullscreen Video Modal */}
          <AnimatePresence>
            {isFullscreen && images[currentIndex]?.match(/\.(mp4|webm|ogg)$/i) && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="fixed inset-0 z-[110] bg-black/95 flex items-center justify-center cursor-pointer"
                onClick={() => setIsFullscreen(false)}
              >
                <button 
                  onClick={() => setIsFullscreen(false)}
                  className="absolute top-4 right-4 z-20 bg-gameAccent text-white p-3 rounded-full hover:bg-gameAccent/80 transition-all duration-300"
                >
                  <X size={28} />
                </button>
                <video 
                  src={images[currentIndex]}
                  autoPlay
                  loop
                  muted
                  playsInline
                  controls
                  className="max-w-full max-h-full object-contain"
                  onClick={(e) => e.stopPropagation()}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      )}
    </AnimatePresence>
  );
};

export default DevLogModal;
