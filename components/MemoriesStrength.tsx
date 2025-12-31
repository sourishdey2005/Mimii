
import React, { useEffect } from 'react';

interface MemoriesStrengthProps {
  onNext: () => void;
  onBack: () => void;
}

const MemoriesStrength: React.FC<MemoriesStrengthProps> = ({ onNext, onBack }) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const memories = [
    {
      id: 'resilience',
      title: 'Even in the storm ⛈️',
      label: 'Resilience ⚓',
      date: 'March 2025',
      text: '"You were my anchor through the hardest nights. When everything felt uncertain, your hand in mine was the only promise I needed."',
      image: 'https://res.cloudinary.com/dodhvvewu/image/upload/v1767199715/IMG-20251231-WA0053_rzwciq.jpg'
    },
    {
      id: 'growth',
      title: 'Learning to Listen 👂✨',
      label: 'Growth 🌱',
      date: 'July 2025',
      text: '"We learned that listening is the loudest form of love. Those long talks until 3 AM didn\'t just solve problems, they built bridges."',
      image: 'https://res.cloudinary.com/dodhvvewu/image/upload/v1767199147/IMG-20251231-WA0050_vnnylh.jpg'
    },
    {
      id: 'triumph',
      title: 'Together Forever ✈️🏠',
      label: 'Triumph 🏆',
      date: 'December 2025',
      text: '"Distance meant so little when you meant so much. The moment we reunited was worth every second of waiting."',
      image: 'https://res.cloudinary.com/dodhvvewu/image/upload/v1767199147/IMG-20251231-WA0052_dv0yjz.jpg'
    }
  ];

  return (
    <div className="bg-background-light dark:bg-background-dark font-serif-quote antialiased overflow-x-hidden min-h-screen animate-fadeIn selection:bg-primary selection:text-white">
      <div className="relative flex h-full min-h-screen w-full flex-col max-w-md mx-auto bg-background-light dark:bg-background-dark shadow-2xl overflow-hidden pb-32">
        
        {/* Top App Bar */}
        <div className="flex items-center bg-transparent p-4 pb-2 justify-between z-10 sticky top-0 backdrop-blur-md bg-opacity-80 dark:bg-opacity-80 dark:bg-background-dark">
          <button 
            onClick={onBack}
            className="text-slate-900 dark:text-white flex size-12 shrink-0 items-center justify-start cursor-pointer hover:opacity-80 transition-opacity"
          >
            <span className="text-[28px] font-sans">⇠</span>
          </button>
          <h2 className="text-slate-900 dark:text-white text-lg font-bold italic leading-tight tracking-[-0.015em] flex-1 text-center opacity-90">Our Journey 🛤️</h2>
          <div className="flex w-12 items-center justify-end">
            <button 
              onClick={onNext}
              className="text-primary text-base font-bold leading-normal tracking-[0.015em] shrink-0 hover:text-primary/80 transition-colors font-sans-alt"
            >
              Skip ➔
            </button>
          </div>
        </div>

        {/* Hero Text */}
        <div className="flex flex-col items-center px-6 pt-4 pb-6 animate-fade-in-up">
          <h1 className="text-slate-900 dark:text-white text-[36px] font-medium italic leading-[1.1] text-center mb-4">
            The Moments That<br/><span className="text-primary">Forged Us ⚔️❤️</span>
          </h1>
          <p className="text-slate-600 dark:text-gray-300 text-lg font-normal leading-relaxed text-center max-w-xs font-sans-alt">
            2025 challenged us, but 2026 finds us unbreakable.
          </p>
          <div className="w-16 h-1 rounded-full bg-primary/30 mt-6"></div>
        </div>

        {/* Memory Cards Stack */}
        <div className="flex flex-col gap-8 px-4">
          {memories.map((memory, idx) => (
            <div key={memory.id} className="animate-fade-in-up" style={{ animationDelay: `${idx * 0.15}s` }}>
              <div className="flex flex-col items-stretch justify-start rounded-2xl shadow-xl bg-white dark:bg-surface-dark overflow-hidden border border-gray-100 dark:border-white/5">
                {/* Fixed Aspect Ratio for Mobile Photos (Portrait) */}
                <div className="relative w-full aspect-[3/4] bg-gray-200 dark:bg-gray-800 overflow-hidden">
                  <img 
                    src={memory.image} 
                    alt={memory.label}
                    className="w-full h-full object-cover object-center transition-transform duration-1000 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="inline-block px-3 py-1 mb-2 text-[10px] font-bold tracking-[0.2em] text-white uppercase bg-primary rounded-full backdrop-blur-sm font-sans">{memory.label}</span>
                  </div>
                </div>
                <div className="flex w-full flex-col gap-3 p-6">
                  <p className="text-slate-900 dark:text-white text-2xl font-bold leading-tight italic tracking-wide">{memory.title}</p>
                  <p className="text-slate-600 dark:text-text-secondary text-base font-normal leading-relaxed font-sans-alt opacity-90">
                    {memory.text}
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-gray-50 dark:border-white/5">
                    <span className="text-[10px] text-slate-400 dark:text-white/40 uppercase tracking-[0.2em] font-bold font-sans">{memory.date}</span>
                    <div className="flex items-center justify-center size-8 rounded-full bg-primary/10 text-primary">
                      <span className="text-lg">❤️</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Sticky Bottom Action */}
        <div className="fixed bottom-0 left-0 right-0 max-w-md mx-auto p-4 bg-gradient-to-t from-background-light via-background-light to-transparent dark:from-background-dark dark:via-background-dark dark:to-transparent z-20">
          <div className="flex flex-col items-center gap-2 mb-2">
            <p className="text-sm font-medium italic text-slate-500 dark:text-white/60 font-serif-quote">Happy New Year, my love ❤️</p>
            <button 
              onClick={onNext}
              className="w-full flex items-center justify-center rounded-xl h-14 px-6 bg-primary text-white text-base font-bold tracking-[0.2em] uppercase shadow-xl shadow-primary/30 active:scale-95 transition-transform font-sans"
            >
              <span>Our Future Awaits ➔ 💖</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemoriesStrength;
