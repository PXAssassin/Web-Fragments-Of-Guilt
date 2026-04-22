import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Header from './components/header/Header';
import HeroCarousel from './components/hero/HeroCarousel';
import WeekSelector from './components/weekSelector/WeekSelector';
import DevLogCarousel from './components/devlog/DevLogCarousel';
import DevLogModal from './components/devlog/DevLogModal';
import { devlogData } from './data/devlogData';

function App() {
  const [activeWeek, setActiveWeek] = useState(8);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  const availableWeeks = devlogData.map(data => data.week);
  const activeWeekData = devlogData.find(data => data.week === activeWeek);

  const handleSelectWeek = (week) => {
    setActiveWeek(week);
  };

  const handleOpenModal = (card) => {
    setSelectedCard(card);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedCard(null), 400); // Matches exit animation duration
  };

  return (
    <div className="min-h-screen bg-gameBg flex flex-col relative overflow-x-hidden">
      <Header />

      <main className="flex-grow">
        <HeroCarousel />

        {/* DevLog Section */}
        <section id="devlog" className="py-24 relative min-h-screen flex flex-col justify-center">
          {/* Decorative glowing particles/backgrounds */}
          <div className="absolute top-1/4 left-0 w-64 h-64 bg-gameAccent/10 rounded-full blur-[100px] pointer-events-none animate-pulse"></div>
          <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-gameGlow/5 rounded-full blur-[120px] pointer-events-none animate-pulse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gameAccent/5 rounded-full blur-[120px] pointer-events-none"></div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="font-cinzel text-4xl md:text-5xl font-bold text-gameText mb-4 tracking-wider text-glow-animated">
                Bitacora de Desarrollo
              </h2>
              <p className="font-poppins text-gameGlow text-lg max-w-2xl mx-auto">
                Sigue nuestro viaje mientras construimos este oscuro mundo de fantasía. Descubre el progreso semana a semana.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <WeekSelector
                weeks={availableWeeks}
                activeWeek={activeWeek}
                onSelectWeek={handleSelectWeek}
              />
            </motion.div>

            {activeWeekData && (
              <motion.div
                key={activeWeek} // Re-animate when week changes
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="mt-8"
              >
                <div className="flex items-center justify-center gap-4 mb-8">
                  <div className="h-[1px] w-12 bg-gameAccent/50"></div>
                  <h3 className="font-cinzel text-2xl font-bold text-gameAccent/90 text-center uppercase tracking-widest drop-shadow-md">
                    {activeWeekData.title}
                  </h3>
                  <div className="h-[1px] w-12 bg-gameAccent/50"></div>
                </div>

                <DevLogCarousel
                  cards={activeWeekData.cards}
                  onCardClick={handleOpenModal}
                />
              </motion.div>
            )}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gameCard/80 backdrop-blur-md border-t border-gameAccent/20 py-10 mt-auto relative z-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="font-cinzel text-2xl font-bold text-gameText/50 mb-4 tracking-widest">FRAGMENTS OF GUILTY</h2>
          <p className="font-poppins text-gray-500 text-sm">
            © {new Date().getFullYear()} Fragments of Guilty. All rights reserved.
          </p>
        </div>
      </footer>

      {/* DevLog Modal Portal */}
      <DevLogModal
        isOpen={isModalOpen}
        card={selectedCard}
        onClose={handleCloseModal}
      />
    </div>
  );
}

export default App;
