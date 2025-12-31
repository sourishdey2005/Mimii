
import React, { useState } from 'react';
import { Quote } from '../types';

interface QuoteSliderProps {
  quotes: Quote[];
  onComplete: () => void;
  title: string;
  subTitle?: string;
  themeColor?: string;
  animationClass?: string;
}

const QuoteSlider: React.FC<QuoteSliderProps> = ({ 
  quotes, 
  onComplete, 
  title, 
  subTitle, 
  themeColor = '#B76E79',
  animationClass = '' 
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const handleNext = () => {
    setIsVisible(false);
    setTimeout(() => {
      if (currentIndex < quotes.length - 1) {
        setCurrentIndex(currentIndex + 1);
        setIsVisible(true);
      } else {
        onComplete();
      }
    }, 600);
  };

  return (
    <div className={`flex flex-col items-center justify-center min-h-screen px-6 py-20 z-10 max-w-4xl mx-auto text-center relative overflow-hidden ${animationClass}`}>
      <h2 className="font-cursive text-4xl md:text-6xl mb-2 transition-all duration-1000" style={{ color: themeColor }}>{title}</h2>
      {subTitle && <p className="font-sans text-xs tracking-[0.4em] text-gray-400 mb-12 uppercase animate-fadeIn">{subTitle}</p>}
      
      <div className={`glass p-10 md:p-16 rounded-[2.5rem] transition-all duration-700 transform ${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-12 scale-95'} shadow-lg border border-white/50 relative overflow-hidden`}>
        {/* Decorative elements based on animationClass */}
        {animationClass.includes('animate-shimmer') && <div className="absolute inset-0 pointer-events-none animate-shimmer"></div>}
        
        <p className="font-serif text-xl md:text-3xl leading-relaxed text-gray-700 italic relative z-10">
          "{quotes[currentIndex].text}"
        </p>
      </div>

      <button 
        onClick={handleNext}
        className="mt-14 px-10 py-4 rounded-full bg-white border border-[#fecaca] text-[#B76E79] font-sans tracking-[0.2em] uppercase text-[10px] hover:bg-[#fffafa] hover:scale-105 active:scale-95 transition-all shadow-md flex items-center gap-3 group z-20"
      >
        {currentIndex === quotes.length - 1 ? 'Reveal More' : 'Continue'}
        <span className="group-hover:translate-x-1 transition-transform">➜</span>
      </button>
      
      <div className="mt-10 flex gap-3">
        {quotes.map((_, i) => (
          <div 
            key={i} 
            className={`h-1.5 rounded-full transition-all duration-700 ${i === currentIndex ? 'w-12 bg-[#B76E79]' : 'w-3 bg-pink-100'}`}
          />
        ))}
      </div>
    </div>
  );
};

export default QuoteSlider;
