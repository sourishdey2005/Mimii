
import React, { useEffect } from 'react';

interface MemoriesGalleryProps {
  onNext: () => void;
  onBack: () => void;
}

const MemoriesGallery: React.FC<MemoriesGalleryProps> = ({ onNext, onBack }) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const photos = [
    {
      url: "https://res.cloudinary.com/dodhvvewu/image/upload/v1767196544/IMG-20251206-WA0055_sqfttl.jpg",
      caption: "Our first sunset together 🌅",
      date: "Spring 2024"
    },
    {
      url: "https://images.unsplash.com/photo-1522673607200-1648832cee98?q=80&w=1000&auto=format&fit=crop",
      caption: "That rainy day in the city ☕️",
      date: "October 2024"
    },
    {
      url: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?q=80&w=1000&auto=format&fit=crop",
      caption: "Laughter caught in a frame ✨",
      date: "December 2024"
    },
    {
      url: "https://images.unsplash.com/photo-1534533983688-c7b8e13fd3b6?q=80&w=1000&auto=format&fit=crop",
      caption: "Walking through history hand in hand 🏛️",
      date: "January 2025"
    }
  ];

  return (
    <div className="bg-background-light dark:bg-background-dark min-h-screen font-display animate-fadeIn pb-32">
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 glass-panel max-w-md mx-auto rounded-b-xl border-b border-white/10">
        <button onClick={onBack} className="p-2 rounded-full text-gray-800 dark:text-white">
          <span className="material-symbols-outlined">arrow_back</span>
        </button>
        <h1 className="text-lg font-bold italic tracking-tight text-gray-900 dark:text-white font-serif-quote">Captured Moments 📸</h1>
        <div className="p-2 text-primary">❤️</div>
      </header>

      <main className="pt-24 px-4 max-w-md mx-auto space-y-8">
        <div className="text-center space-y-2 animate-fade-in-up">
          <h2 className="text-4xl font-serif-quote italic dark:text-white">A Visual Love Letter 🎞️</h2>
          <p className="text-gray-500 text-sm font-sans-alt tracking-widest uppercase">The frames I'll never forget</p>
        </div>

        <div className="grid grid-cols-1 gap-8">
          {photos.map((photo, i) => (
            <div 
              key={i} 
              className="animate-fade-in-up bg-white dark:bg-surface-dark p-3 pb-8 rounded-sm shadow-2xl transform transition-all hover:scale-[1.03] hover:-rotate-1"
              style={{ animationDelay: `${i * 0.2}s` }}
            >
              <div className="aspect-[4/5] w-full overflow-hidden bg-gray-100 mb-4">
                <img src={photo.url} alt={photo.caption} className="w-full h-full object-cover grayscale-[30%] hover:grayscale-0 transition-all duration-700" />
              </div>
              <div className="px-2 space-y-1">
                <p className="font-cursive text-2xl text-gray-800 dark:text-pink-100">{photo.caption}</p>
                <p className="text-[10px] text-gray-400 font-sans-alt tracking-widest uppercase">{photo.date}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="fixed bottom-0 left-0 right-0 max-w-md mx-auto p-6 bg-gradient-to-t from-background-light dark:from-background-dark via-background-light/90 dark:via-background-dark/90 to-transparent z-50">
           <button 
            onClick={onNext}
            className="w-full flex items-center justify-center rounded-full h-14 px-6 bg-primary text-white text-base font-bold tracking-[0.2em] uppercase shadow-xl hover:scale-105 active:scale-95 transition-all font-sans-alt"
          >
            <span>Our Cinematic Story ➔ 🎬</span>
          </button>
        </div>
      </main>
    </div>
  );
};

export default MemoriesGallery;
