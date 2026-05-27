import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import DevLogCard from './DevLogCard';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const useSlidesConfig = () => {
  const [config, setConfig] = useState({ slidesPerView: 1, slidesPerGroup: 1, spaceBetween: 30 });

  useEffect(() => {
    const handleResize = () => {
      const w = window.innerWidth;
      if (w >= 1024) setConfig({ slidesPerView: 3, slidesPerGroup: 3, spaceBetween: 30 });
      else if (w >= 640) setConfig({ slidesPerView: 2, slidesPerGroup: 2, spaceBetween: 20 });
      else setConfig({ slidesPerView: 1, slidesPerGroup: 1, spaceBetween: 30 });
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return config;
};

const DevLogCarousel = ({ cards, onCardClick }) => {
  const { slidesPerView, slidesPerGroup, spaceBetween } = useSlidesConfig();

  return (
    <div className="w-full relative px-12 md:px-16">
      <button className="swiper-button-prev-custom absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-gameAccent/10 border border-gameAccent/50 text-gameAccent hover:bg-gameAccent hover:text-white hover:shadow-[0_0_15px_rgba(163,0,0,0.6)] transition-all cursor-pointer [&.swiper-button-disabled]:opacity-30 [&.swiper-button-disabled]:cursor-not-allowed">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
      </button>

      <Swiper
        modules={[Pagination, Navigation]}
        spaceBetween={spaceBetween}
        slidesPerView={slidesPerView}
        slidesPerGroup={slidesPerGroup}
        loop={false}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        navigation={{
          prevEl: '.swiper-button-prev-custom',
          nextEl: '.swiper-button-next-custom',
        }}
        className="pb-16 pt-4"
      >
        {cards.map((card) => (
          <SwiperSlide key={card.id} className="h-auto">
            <div className="h-full">
              <DevLogCard card={card} onClick={onCardClick} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <button className="swiper-button-next-custom absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-gameAccent/10 border border-gameAccent/50 text-gameAccent hover:bg-gameAccent hover:text-white hover:shadow-[0_0_15px_rgba(163,0,0,0.6)] transition-all cursor-pointer [&.swiper-button-disabled]:opacity-30 [&.swiper-button-disabled]:cursor-not-allowed">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
      </button>
    </div>
  );
};

export default DevLogCarousel;
