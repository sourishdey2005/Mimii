
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
  themeColor = '#ee2b5b',
  animationClass = 'animate-fadeIn'
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
    }, 500);
  };

  return (
    <section className={`min-h-screen flex flex-col items-center justify-center px-6 text-center z-10 ${animationClass}`}>
      <div className="max-w-3xl space-y-12">
        <div className="space-y-4">
          {subTitle && <p className="text-[10px] tracking-[0.4em] uppercase text-gray-400 font-sans">{subTitle}</p>}
          <h2 className="font-cursive text-5xl md:text-7xl text-[#ee2b5b] drop-shadow-sm">{title}</h2>
        </div>

        <div className={`transition-all duration-500 min-h-[200px] flex items-center justify-center ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <p className="font-serif text-xl md:text-3xl text-gray-600 leading-relaxed italic font-light">
            "{quotes[currentIndex].text}"
          </p>
        </div>

        <div className="pt-8 flex flex-col items-center gap-8">
          <div className="flex gap-2">
            {quotes.map((_, i) => (
              <div 
                key={i} 
                className={`h-1 transition-all duration-300 rounded-full ${i === currentIndex ? 'w-8 bg-[#ee2b5b]' : 'w-2 bg-gray-200'}`}
              />
            ))}
          </div>
          
          <button 
            onClick={handleNext}
            className="group flex items-center gap-3 px-10 py-4 bg-white border border-[#fecaca] text-[#ee2b5b] rounded-full font-sans tracking-[0.3em] uppercase text-[10px] hover:bg-[#fffafa] transition-all shadow-sm active:scale-95"
          >
            {currentIndex === quotes.length - 1 ? 'Continue Story' : 'Next Quote'}
            <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default QuoteSlider;
