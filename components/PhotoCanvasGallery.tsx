
import React, { useEffect } from 'react';

interface PhotoCanvasGalleryProps {
  onNext: () => void;
  onBack: () => void;
}

const PhotoCanvasGallery: React.FC<PhotoCanvasGalleryProps> = ({ onNext, onBack }) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const memoryCanvas = [
    { url: "https://res.cloudinary.com/dodhvvewu/image/upload/v1767197520/IMG-20251126-WA0220_elqlgd.jpg", caption: "Our first morning ☕️" },
    { url: "https://res.cloudinary.com/dodhvvewu/image/upload/v1767197520/IMG-20251201-WA0030_luvpyt.jpg", caption: "Sweet laughter 😂❤️" },
    { url: "https://res.cloudinary.com/dodhvvewu/image/upload/v1767197521/IMG-20251126-WA0209_obgiyz.jpg", caption: "Hold my hand 🤝" },
    { url: "https://res.cloudinary.com/dodhvvewu/image/upload/v1767197522/IMG-20251123-WA0048_bo4fph.jpg", caption: "Pure Magic ✨" },
    { url: "https://res.cloudinary.com/dodhvvewu/image/upload/v1767197522/IMG-20251126-WA0201_nuzhqd.jpg", caption: "The quiet times 🤫" },
    { url: "https://res.cloudinary.com/dodhvvewu/image/upload/v1767197520/IMG-20251201-WA0031_ika4qh.jpg", caption: "Our first trip ✈️" },
    { url: "https://res.cloudinary.com/dodhvvewu/image/upload/v1767197519/IMG-20251129-WA0145_lqq21s.jpg", caption: "Beautiful Soul 🌹" },
    { url: "https://images.unsplash.com/photo-1475483768296-6163e08872a1?q=80&w=800", caption: "Golden hour 🌅" },
    { url: "https://images.unsplash.com/photo-1516589174184-c6608450943f?q=80&w=800", caption: "Stolen glances 😉" },
    { url: "https://images.unsplash.com/photo-1537633552985-df8429e8048b?q=80&w=800", caption: "Forever us 💍" }
  ];

  return (
    <div className="bg-background-light dark:bg-[#1a0b0e] min-h-screen font-display py-20 px-4 animate-fadeIn">
      {/* Background canvas texture */}
      <div className="fixed inset-0 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/canvas-orange.png')] opacity-10"></div>
      
      <header className="max-w-2xl mx-auto text-center mb-16 space-y-4">
        <button 
          onClick={onBack}
          className="inline-flex items-center gap-2 text-primary text-xs font-bold tracking-widest uppercase hover:opacity-70 transition-opacity"
        >
          <span>⇠</span>
          Go Back 🔙
        </button>
        <h2 className="text-5xl font-cursive text-primary animate-float">Our Canvas of Memories 🎨</h2>
        <p className="text-gray-500 dark:text-gray-400 font-serif italic text-lg">10 moments that painted my world with color ❤️</p>
      </header>

      <main className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {memoryCanvas.map((item, idx) => (
          <div 
            key={idx} 
            className="animate-fade-in-up group"
            style={{ animationDelay: `${idx * 0.15}s` }}
          >
            <div className={`
              relative bg-white dark:bg-[#2d161a] p-3 pb-10 shadow-xl border border-gray-100 dark:border-white/5 
              transition-transform duration-500 hover:scale-105 hover:z-20
              ${idx % 2 === 0 ? 'rotate-1' : '-rotate-1'}
            `}>
              <div className="aspect-square overflow-hidden bg-gray-50">
                <img 
                  src={item.url} 
                  alt={item.caption} 
                  className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700"
                />
              </div>
              <div className="absolute bottom-2 left-0 right-0 text-center">
                <p className="font-cursive text-xl text-gray-800 dark:text-pink-100">{item.caption}</p>
              </div>
              {/* Tape deco */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-6 bg-primary/10 backdrop-blur-md border border-white/20 -rotate-2"></div>
            </div>
          </div>
        ))}
      </main>

      <footer className="mt-24 text-center pb-20">
        <button 
          onClick={onNext}
          className="group relative inline-flex items-center gap-4 px-12 py-5 bg-primary text-white rounded-full font-sans tracking-[0.3em] uppercase text-[10px] hover:bg-primary/90 transition-all shadow-2xl hover:scale-105 active:scale-95"
        >
          See Our Anniversary ➔ 🗓️❤️
          <span>❤️</span>
        </button>
      </footer>
    </div>
  );
};

export default PhotoCanvasGallery;
