import React from 'react';

/**
 * WeekSelector Component
 * Allows the user to select which week of the DevLog to view using left and right arrows.
 * @param {Array} weeks - Array of week numbers available (e.g., [1, 2, 3]).
 * @param {number} activeWeek - The currently selected week.
 * @param {function} onSelectWeek - Callback function when a week is clicked.
 */
const WeekSelector = ({ weeks, activeWeek, onSelectWeek }) => {
  const currentIndex = weeks.indexOf(activeWeek);
  const isFirst = currentIndex === 0;
  const isLast = currentIndex === weeks.length - 1;

  const handlePrev = () => {
    if (!isFirst) {
      onSelectWeek(weeks[currentIndex - 1]);
    }
  };

  const handleNext = () => {
    if (!isLast) {
      onSelectWeek(weeks[currentIndex + 1]);
    }
  };

  return (
    <div className="flex justify-center items-center space-x-6 mb-10">
      <button
        onClick={handlePrev}
        disabled={isFirst}
        aria-label="Semana Anterior"
        className={`p-3 rounded-full border transition-all duration-300 flex items-center justify-center
          ${isFirst 
            ? 'opacity-30 cursor-not-allowed border-gray-600 text-gray-600 bg-transparent' 
            : 'border-gameAccent text-gameAccent hover:bg-gameAccent/20 hover:text-white shadow-[0_0_10px_rgba(163,0,0,0.3)] hover:shadow-[0_0_15px_rgba(163,0,0,0.6)] cursor-pointer bg-gameAccent/5'
          }
        `}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
      </button>

      <div className="font-cinzel font-bold text-2xl text-white min-w-[150px] text-center tracking-wider text-glow-animated">
        SEMANA {activeWeek}
      </div>

      <button
        onClick={handleNext}
        disabled={isLast}
        aria-label="Siguiente Semana"
        className={`p-3 rounded-full border transition-all duration-300 flex items-center justify-center
          ${isLast 
            ? 'opacity-30 cursor-not-allowed border-gray-600 text-gray-600 bg-transparent' 
            : 'border-gameAccent text-gameAccent hover:bg-gameAccent/20 hover:text-white shadow-[0_0_10px_rgba(163,0,0,0.3)] hover:shadow-[0_0_15px_rgba(163,0,0,0.6)] cursor-pointer bg-gameAccent/5'
          }
        `}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
      </button>
    </div>
  );
};

export default WeekSelector;
