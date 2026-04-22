import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Pagination } from 'swiper/modules';
import { motion, AnimatePresence } from 'framer-motion';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';

/**
 * HeroCarousel Component
 * Displays a full-screen carousel with images using Swiper.
 * Enhancements: Ken Burns (slow zoom) effect, animated text overlay.
 */
const HeroCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const heroImages = [
    {
      id: 1,
      src: "/images/hero/hero1.jpg",
      title: "Despierta del Vacio",
      subtitle: "Una diosa olvidada busca sus recuerdos perdidos."
    },
    {
      id: 2,
      src: "/images/hero/hero2.jpg",
      title: "Explora antiguas ruinas olvidadas",
      subtitle: "Descubre los secretos de un mundo destrozado."
    },
    {
      id: 3,
      src: "/images/hero/hero3.jpg",
      title: "Reclama tu poder",
      subtitle: "Enfréntate a la oscuridad que robó tu pasado."
    }
  ];

  return (
    <section id="thejourney" className="relative h-screen w-full bg-black overflow-hidden">
      <Swiper
        modules={[Autoplay, EffectFade, Pagination]}
        effect="fade"
        speed={1500}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        loop={true}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        className="h-full w-full"
      >
        {heroImages.map((image, index) => (
          <SwiperSlide key={image.id}>
            <div className="relative h-full w-full overflow-hidden">
              {/* Background Image with Slow Zoom */}
              <img
                src={image.src}
                alt={image.title}
                className={`absolute inset-0 w-full h-full object-cover opacity-60 ${activeIndex === index ? 'animate-slow-zoom' : ''}`}
              />
              {/* Gradient Overlays */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-transparent"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-gameBg via-transparent to-gameBg/50"></div>

              {/* Text Overlay with AnimatePresence for smooth entering/exiting */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 z-10">
                <AnimatePresence mode="wait">
                  {activeIndex === index && (
                    <motion.div
                      key={image.id}
                      initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
                      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                      exit={{ opacity: 0, y: -30, filter: "blur(10px)" }}
                      transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                      className="flex flex-col items-center"
                    >
                      <h2 className="font-cinzel text-5xl md:text-7xl font-bold text-white mb-6 tracking-wider drop-shadow-[0_0_20px_rgba(163,0,0,0.9)] animate-float">
                        {image.title}
                      </h2>
                      <p className="font-poppins text-lg md:text-2xl text-gray-300 max-w-2xl drop-shadow-md">
                        {image.subtitle}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default HeroCarousel;
