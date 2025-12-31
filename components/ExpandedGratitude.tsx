
import React, { useState, useEffect } from 'react';

interface ExpandedGratitudeProps {
  onNext: () => void;
  onBack: () => void;
}

const ExpandedGratitude: React.FC<ExpandedGratitudeProps> = ({ onNext, onBack }) => {
  const [index, setIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const quotes = [
    {
      headline: "This year, you were my anchor...",
      subtext: "Thank you for the way you listen, not just with your ears, but with your heart. You make the loudest noise quiet."
    },
    {
      headline: "You are my safe haven...",
      subtext: "In a world that is often too loud and too fast, you are the calm I always search for. Thank you for being my peace."
    },
    {
      headline: "My strength when I had none...",
      subtext: "Thank you for believing in me when I couldn't believe in myself. Your faith in us is my greatest gift."
    },
    {
      headline: "The joy in my journey...",
      subtext: "Thank you for the laughter, the inside jokes, and the quiet moments. You make every day worth living."
    },
    {
      headline: "My forever and always...",
      subtext: "Thank you for being you. For your love, your kindness, and for choosing me. I love you more than words can say."
    }
  ];

  const handleNext = () => {
    if (index < quotes.length - 1) {
      setIsAnimating(true);
      setTimeout(() => {
        setIndex(index + 1);
        setIsAnimating(false);
      }, 600);
    } else {
      onNext();
    }
  };

  return (
    <div className="bg-background-dark font-serif-quote text-white antialiased overflow-hidden min-h-screen w-full select-none flex flex-col justify-between animate-fadeIn relative">
      {/* Background Layer */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img 
          alt="Romantic background" 
          className="h-full w-full object-cover opacity-30 blur-sm" 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBal_eqOJzWL83B47EkPf2nEjqwiczxugNxjWvWdrDTGBMc1c-ztBT2Ufns-aPkzgKdRRSoty2KN6Pcl24bHtVZjcuZ-6DrOiN8yper5TVPxWu_90wFMFRuxasE_DRx1_B0Mtl5CPYs50MxMRzjlrITqHXGag14kxmB7fI-BMKL7Jc3d6tcz0DsBZsPHvQ5DdaAMxIv22Lfw3qvL3bdd4QJnmSxrROcBTdB9cJDO76DhgEEC2XcxFx0FcuYyRVcbZs0JhAN-Jd-qMkz"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background-dark/90 via-background-dark/70 to-background-dark/95"></div>
        <div 
          className="absolute inset-0 opacity-[0.03] mix-blend-overlay" 
          style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDpzh87jilTNa4Dl5b2CAgVGPtr_U4shsJEg6pLiJrtHN1xpJWS9zdddSoDm0y0J3Y_yRKSoBeh14n5u-k9AfiOoYdYOdFAHyUlBxm44oaFbL8qMXv5Zo-rPX0BJO0CiU-si3OmDCU3pP5qdPzf95xrfhs6BFFpTQM3UffjveZ1xXgwShD3ayr08WoEdPPJ6mgjFgVaZuGS2VWmghKo95cD4wE8OSeSKLJR2af-6H70WMqWm233MPQ3cayF9sINrqjssAyDj9XynmTm')" }}
        ></div>
      </div>

      {/* Main Flex Container */}
      <div className="relative z-10 flex h-full min-h-screen w-full flex-col justify-between">
        {/* Header / Top Bar */}
        <header className="flex w-full items-center justify-between px-6 py-6">
          <button 
            onClick={onBack}
            className="group flex size-12 items-center justify-center rounded-full text-white/60 hover:bg-white/5 hover:text-white transition-all duration-300"
          >
            <span className="material-symbols-outlined text-[28px]" style={{ fontVariationSettings: "'wght' 300" }}>arrow_back</span>
          </button>
          <div className="text-primary animate-pulse-slow opacity-80">
            <span className="material-symbols-outlined text-[24px]">favorite</span>
          </div>
          <div className="flex w-12 items-center justify-end">
            <span className="text-primary text-xs font-bold font-sans-alt tracking-widest">2026</span>
          </div>
        </header>

        {/* Main Content */}
        <main className={`flex flex-1 flex-col items-center justify-center px-8 w-full max-w-2xl mx-auto transition-all duration-500 ${isAnimating ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}>
          <div className="flex flex-col items-center">
            {/* Page Indicators */}
            <div className="mb-10 flex w-full flex-row items-center justify-center gap-3">
              {quotes.map((_, i) => (
                <div 
                  key={i} 
                  className={`h-1.5 w-1.5 rounded-full transition-all duration-300 ${i === index ? 'bg-primary shadow-[0_0_8px_rgba(235,71,112,0.6)] w-3' : 'bg-white/10'}`}
                />
              ))}
            </div>
            {/* Decorative Quote Icon */}
            <span className="material-symbols-outlined text-5xl text-primary/20 mb-6">format_quote</span>
            {/* Headline */}
            <h1 className="text-center text-white text-[32px] md:text-[40px] font-medium leading-tight tracking-wide drop-shadow-lg mb-6 italic">
              {quotes[index].headline}
            </h1>
            {/* Divider */}
            <div className="h-px w-24 bg-gradient-to-r from-transparent via-white/30 to-transparent mb-6"></div>
            {/* Body */}
            <p className="text-center text-white/80 text-lg md:text-xl font-light leading-relaxed max-w-sm">
              {quotes[index].subtext}
            </p>
          </div>
        </main>

        {/* Footer */}
        <footer className="flex flex-col items-center justify-end px-6 pb-12 pt-4 w-full">
          <button 
            onClick={handleNext}
            className="group relative flex w-full max-w-[320px] cursor-pointer items-center justify-center gap-3 overflow-hidden rounded-xl bg-primary py-4 px-6 text-white shadow-[0_10px_30px_-10px_rgba(235,71,112,0.4)] transition-all duration-300 hover:shadow-[0_10px_40px_-10px_rgba(235,71,112,0.6)] hover:-translate-y-0.5 active:scale-95 active:shadow-none"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <span className="text-base font-bold leading-normal tracking-wide relative z-10 font-sans-alt">
              {index === quotes.length - 1 ? "Keep Journey Going" : "Next Sentiment"}
            </span>
            <span className="material-symbols-outlined text-[20px] relative z-10 transition-transform duration-300 group-hover:translate-x-1">arrow_forward</span>
          </button>
          <div className="mt-6 flex items-center gap-2 opacity-40">
            <span className="text-[10px] font-sans-alt uppercase tracking-[0.2em]">{index + 1} of {quotes.length}</span>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default ExpandedGratitude;
