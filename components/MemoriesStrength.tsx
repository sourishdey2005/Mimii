
import React, { useEffect } from 'react';

interface MemoriesStrengthProps {
  onNext: () => void;
  onBack: () => void;
}

const MemoriesStrength: React.FC<MemoriesStrengthProps> = ({ onNext, onBack }) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="bg-background-light dark:bg-background-dark font-serif-quote antialiased overflow-x-hidden min-h-screen animate-fadeIn selection:bg-primary selection:text-white">
      {/* Mobile-centric Container */}
      <div className="relative flex h-full min-h-screen w-full flex-col max-w-md mx-auto bg-background-light dark:bg-background-dark shadow-2xl overflow-hidden pb-32">
        
        {/* Top App Bar */}
        <div className="flex items-center bg-transparent p-4 pb-2 justify-between z-10 sticky top-0 backdrop-blur-md bg-opacity-80 dark:bg-opacity-80 dark:bg-background-dark">
          <div 
            onClick={onBack}
            className="text-white flex size-12 shrink-0 items-center justify-start cursor-pointer hover:opacity-80 transition-opacity"
          >
            <span className="material-symbols-outlined text-2xl">arrow_back</span>
          </div>
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
        <div className="flex flex-col gap-6 px-4">
          
          {/* Card 1: Resilience */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <div className="flex flex-col items-stretch justify-start rounded-xl shadow-lg bg-white dark:bg-surface-dark overflow-hidden border border-gray-100 dark:border-none">
              <div className="relative w-full aspect-[4/3] bg-gray-200 dark:bg-gray-800">
                <div 
                  className="absolute inset-0 bg-cover bg-center" 
                  style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAizsv-Oqr-Lj791xIxb9vbaMFt5niA1AQ4TzD9d-ICczl4kg8yA8OnHFNMsDlL8Y1NJuX6eyfb3EwFkG0Pfm8FjjA0DI1Qysfosh0TJ5YxtwkMpA5IB9krJBXnIK0ziO-6n4vWEhFS5cuqlTRSifAjq6i-kcfTmw3gHIpcYStCn-k53dp3DtJPdOsMMFcS1kb3nqO3ZN-j3zJIzaHo2jTuErFUiXTXP3owqgc32PlBG9OT2raXBnFf7ieFexiJgLKDkJXBbExFZz1')" }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="inline-block px-2 py-1 mb-2 text-xs font-medium tracking-wide text-white uppercase bg-primary/80 rounded-sm backdrop-blur-sm font-sans-alt">Resilience ⚓</span>
                </div>
              </div>
              <div className="flex w-full flex-col gap-3 p-5">
                <p className="text-slate-900 dark:text-white text-xl font-bold leading-tight italic tracking-wide">Even in the storm ⛈️</p>
                <p className="text-slate-600 dark:text-text-secondary text-base font-normal leading-relaxed font-sans-alt">
                  "You were my anchor through the hardest nights. When everything felt uncertain, your hand in mine was the only promise I needed."
                </p>
                <div className="flex items-center justify-between pt-2">
                  <span className="text-xs text-slate-400 dark:text-white/40 uppercase tracking-widest font-semibold font-sans-alt">March 14, 2025</span>
                  <button className="flex items-center justify-center size-8 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-white transition-all">
                    <span className="text-lg">❤️</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Growth */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="flex flex-col items-stretch justify-start rounded-xl shadow-lg bg-white dark:bg-surface-dark overflow-hidden border border-gray-100 dark:border-none">
              <div className="relative w-full aspect-[4/3] bg-gray-200 dark:bg-gray-800">
                <div 
                  className="absolute inset-0 bg-cover bg-center" 
                  style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAcrF-lRBKtTrzIgErKW6L3cZ1q-jmrKJ4bKCbIMZwKP-TCkX-lhVTq3EUFwRLmi_H52waqAfKGKS7zY6hNBbcRaZCkCx3XkIFI0VZ5EFjyP_SEjMTrLsYg7swsBbaPDNWIrjo-u4Y_OOydZsAzyWlWkCqS-mq4E8BAe6b6_5WD_OY3LO4jUUWnxRubuOhq3DmAzY8syEfW8Zdex5qazQF0i2ak_UVlCsO4bg77Bviu92_EFNp4OHjAoU198HOhJJoXafCf1K4FzIIa')" }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="inline-block px-2 py-1 mb-2 text-xs font-medium tracking-wide text-white uppercase bg-primary/80 rounded-sm backdrop-blur-sm font-sans-alt">Growth 🌱</span>
                </div>
              </div>
              <div className="flex w-full flex-col gap-3 p-5">
                <p className="text-slate-900 dark:text-white text-xl font-bold leading-tight italic tracking-wide">Learning to Listen 👂✨</p>
                <p className="text-slate-600 dark:text-text-secondary text-base font-normal leading-relaxed font-sans-alt">
                  "We learned that listening is the loudest form of love. Those long talks until 3 AM didn't just solve problems, they built bridges."
                </p>
                <div className="flex items-center justify-between pt-2">
                  <span className="text-xs text-slate-400 dark:text-white/40 uppercase tracking-widest font-semibold font-sans-alt">July 22, 2025</span>
                  <button className="flex items-center justify-center size-8 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-white transition-all">
                    <span className="text-lg">❤️</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Card 3: Triumph */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <div className="flex flex-col items-stretch justify-start rounded-xl shadow-lg bg-white dark:bg-surface-dark overflow-hidden border border-gray-100 dark:border-none">
              <div className="relative w-full aspect-[4/3] bg-gray-200 dark:bg-gray-800">
                <div 
                  className="absolute inset-0 bg-cover bg-center" 
                  style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBeS7dXkbz_rMAysckyxy2IWO4VzqgXOKVAMb6yMfuaApZRo-OuJ1rP_6soLA1Q1yenIsEtE1lcrUeBhnJnSj8kuQo1jE2HsNvUVKJZYJZ0REUkexhFYTd2tFt5KiFKs_qHb0xWABudZq_CniDEWBKNBoF4pazktl--otqtSf9n2WNjh5ymUSnWni2UiVjx8_2551F2zIwzCr-gd-7qAsRTvR6wPkV6ucFbQf1W__5DjAtJT6fgLyukoE2-SXQW__12B11NvVT0_7bo')" }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="inline-block px-2 py-1 mb-2 text-xs font-medium tracking-wide text-white uppercase bg-primary/80 rounded-sm backdrop-blur-sm font-sans-alt">Triumph 🏆</span>
                </div>
              </div>
              <div className="flex w-full flex-col gap-3 p-5">
                <p className="text-slate-900 dark:text-white text-xl font-bold leading-tight italic tracking-wide">Distance & Return ✈️🏠</p>
                <p className="text-slate-600 dark:text-text-secondary text-base font-normal leading-relaxed font-sans-alt">
                  "Distance meant so little when you meant so much. The moment we reunited was worth every second of waiting."
                </p>
                <div className="flex items-center justify-between pt-2">
                  <span className="text-xs text-slate-400 dark:text-white/40 uppercase tracking-widest font-semibold font-sans-alt">Dec 31, 2025</span>
                  <button className="flex items-center justify-center size-8 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-white transition-all">
                    <span className="text-lg">❤️</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sticky Bottom Action */}
        <div className="fixed bottom-0 left-0 right-0 max-w-md mx-auto p-4 bg-gradient-to-t from-background-light via-background-light to-transparent dark:from-background-dark dark:via-background-dark dark:to-transparent z-20">
          <div className="flex flex-col items-center gap-2 mb-2">
            <p className="text-sm font-medium italic text-slate-500 dark:text-white/60 font-serif-quote">Happy New Year, my love ❤️</p>
            <button 
              onClick={onNext}
              className="w-full flex items-center justify-center rounded-lg h-12 px-6 bg-primary text-white text-base font-semibold tracking-wide shadow-lg shadow-primary/30 active:scale-95 transition-transform font-sans-alt"
            >
              <span>Our Future Awaits ➔ 💖</span>
              <span className="ml-2 text-xl">➔</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemoriesStrength;
