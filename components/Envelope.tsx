
import React from 'react';

interface EnvelopeProps {
  isOpen: boolean;
  onOpen: () => void;
  onProceed: () => void;
}

const Envelope: React.FC<EnvelopeProps> = ({ isOpen, onOpen, onProceed }) => {
  return (
    <div className="relative flex flex-col items-center justify-between min-h-screen w-full h-full p-6 z-10 overflow-hidden">
      {/* Background Decoration */}
      <div className="fixed inset-0 pointer-events-none opacity-40 bg-gradient-to-br from-paper-pink via-white to-paper-pink dark:from-background-dark dark:via-[#2a151b] dark:to-background-dark z-0"></div>
      <div className="fixed inset-0 pointer-events-none bg-texture opacity-30 z-0"></div>

      {/* Top Section: Eyebrow */}
      <div className={`w-full flex flex-col items-center pt-8 transition-all duration-1000 ${isOpen ? 'opacity-0 -translate-y-10' : 'opacity-100 animate-fade-in-down'}`}>
        <span className="material-symbols-outlined text-primary/40 mb-2 text-2xl">stars</span>
        <p className="text-primary text-xs font-semibold uppercase tracking-[0.2em] text-center">Happy New Year 2026</p>
        <p className="font-cursive text-xl text-gray-400 mt-1">Sourish & Arunima Forever</p>
      </div>

      {/* Middle Section: Envelope Interaction */}
      <div className="flex-grow flex flex-col items-center justify-center w-full max-w-sm envelope-container group/envelope relative">
        <div 
          className={`envelope-wrapper relative w-full aspect-[4/3] cursor-pointer animate-float ${isOpen ? 'is-open' : ''}`}
          onClick={() => !isOpen && onOpen()}
        >
          {/* Envelope Back (Darker interior) */}
          <div className="absolute inset-x-4 bottom-0 h-[90%] bg-envelope-dark rounded-b-lg shadow-xl"></div>
          
          {/* The Letter (Hidden inside initially) */}
          <div className="letter-inner absolute inset-x-8 bottom-4 h-[85%] bg-white rounded-md shadow-sm border border-gray-100 flex flex-col items-center justify-center p-4">
            <div className="w-full h-full border border-primary/10 rounded flex flex-col items-center justify-center gap-3 overflow-hidden bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')]">
              <div className="w-14 h-14 rounded-full overflow-hidden bg-gray-100 flex-shrink-0 border-2 border-white shadow-sm">
                <div 
                  className="w-full h-full bg-center bg-cover" 
                  style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCAfczrL_Vd2JUYnc3PX3gGCE8WSmzMhAaq2dCpLYJw23All2mvgtYn8xIvmxxtuMi4mIvlzmo66dnp-Vjmym76Z0cIhH3kSamoPa1-fFckc19dRCPpGVGUf7ijGZzF-CXhSWmQ3hC3XsX5owUEmBIlw6XfDDAFSBjn9kFw_rMhCFX6or1gM57GLBxCacpzb8F4yTaEwZfJpPS507G-TjFdX6g0-fHBIOSoZt8AKmVDVT3isXRmA2oZOTQG47PQrn6Emda2t1gkfLmQ')" }}
                ></div>
              </div>
              <div className="space-y-2 text-center w-full px-4">
                <div className="h-1.5 w-2/3 bg-primary/10 rounded-full mx-auto"></div>
                <div className="h-1.5 w-3/4 bg-primary/10 rounded-full mx-auto"></div>
                <div className="h-1.5 w-1/2 bg-primary/10 rounded-full mx-auto"></div>
              </div>
              <span className="font-cursive text-2xl text-primary mt-1">My Love</span>
              
              {isOpen && (
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    onProceed();
                  }}
                  className="mt-2 px-6 py-2 bg-primary text-white font-display text-[10px] tracking-widest uppercase rounded-full hover:bg-primary/90 transition-all animate-fadeIn shadow-lg flex items-center gap-2"
                >
                  Read Letter ➔ 💌
                </button>
              )}
            </div>
          </div>

          {/* Envelope Front (Pocket) */}
          <div className="pocket absolute inset-x-4 bottom-0 h-[55%] bg-envelope-light rounded-b-lg shadow-inner z-30 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent"></div>
            <div className="absolute top-0 left-0 w-full h-full border-t-[50px] border-l-[150px] border-r-[150px] border-transparent border-b-envelope-light opacity-20 transform scale-110"></div>
          </div>

          {/* Envelope Flap */}
          <div className="flap absolute top-[10%] inset-x-4 h-[45%] z-40">
            <div 
              className="w-full h-full bg-envelope-light rounded-t-lg shadow-md" 
              style={{ clipPath: 'polygon(0 0, 100% 0, 50% 100%)', backgroundColor: '#f3d1d9' }}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-black/5"></div>
            </div>
            {/* Wax Seal */}
            <div className={`absolute bottom-[-15px] left-1/2 transform -translate-x-1/2 w-10 h-10 bg-primary rounded-full shadow-lg flex items-center justify-center border-2 border-primary/50 transition-opacity duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'}`}>
              <span className="material-symbols-outlined text-white text-[20px]">favorite</span>
            </div>
          </div>
        </div>

        {/* Headline Text */}
        <div className={`mt-12 text-center space-y-4 max-w-xs transition-opacity duration-700 ${isOpen ? 'opacity-0 pointer-events-none' : 'opacity-100 delay-300'}`}>
          <h2 className="font-cursive text-4xl text-[#1b0d11] leading-tight drop-shadow-sm">
            A letter for the one who made my life beautiful
          </h2>
          <div className="flex justify-center gap-1 opacity-60">
            <span className="material-symbols-outlined text-sm text-primary">favorite</span>
            <span className="material-symbols-outlined text-sm text-primary">favorite</span>
            <span className="material-symbols-outlined text-sm text-primary">favorite</span>
          </div>
        </div>
      </div>

      {/* Bottom Section: Action Hint */}
      <div className={`w-full pb-10 flex flex-col items-center transition-opacity duration-500 ${isOpen ? 'opacity-0' : 'opacity-100'}`}>
        <p className="text-[#1b0d11]/60 text-sm font-medium animate-pulse-slow flex items-center gap-2">
          <span className="material-symbols-outlined text-lg">touch_app</span>
          Tap to open 👆✨
        </p>
      </div>
    </div>
  );
};

export default Envelope;
