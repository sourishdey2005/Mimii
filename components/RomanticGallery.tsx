
import React, { useEffect, useRef, useState } from 'react';

interface RomanticGalleryProps {
  onNext: () => void;
  onBack: () => void;
}

const RomanticGallery: React.FC<RomanticGalleryProps> = ({ onNext, onBack }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const index = Math.round(scrollLeft / clientWidth);
      setActiveIndex(index);
    }
  };

  const cards = [
    {
      id: 1,
      text: "In your eyes, I found my <span class=\"text-primary\">home</span>.",
      label: "Reason #1",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCADh3BaXs6VNGbbf8Hq0vm1i6BU_Q6VsBev8Z9C8ahBxRaJsG1acpjIT69H86VIzGtOcv8tTSqrNDorFFM-4jpH_ATkyPGdGp2DXDp1P7srwyxWFFEOMjUJON1Mu4ZcpV2jYtRbAYKzEZlJzihBxlCgBQxB_37C7N-RXCMKmwQ316jL7jWj7w_S9PcjHiaQJb5LzSk0ogTiyLjHMye0hgeK2GrITjw7azDMC5A3qwTtE_UM_9fgAsLRgtOjRqqumcVdc-H5fiJbYgN"
    },
    {
      id: 2,
      text: "Here's to another year of <span class=\"text-primary\">us</span>.",
      label: "Reason #2",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC8-L4UxrVm2I2qhJlFFASXd-KZzQn6gMM8cTWqq-pM7AkSlP5ViVdwQCsvtXC5sQsHvzfX-vzChTxOMNL9hI0jPPqJisrNO0HECDkersX-uSOEsRp38Ub3XC6Pv2YfwDmhur8cHcrmhRj6LrHQwK7p_bQtHd-Z80TJqEKgnqGeIBNKlpNxH154VVs9ih50Z81ZGoWZXl8QDX8Y1WWdwFzXDVDBw0aaPErNuox3JibsTpB1MPX2xv2wCsKCsauPn9Kx9AwiZW8AVBL9"
    },
    {
      id: 3,
      text: "2026 will be our <span class=\"text-primary\">best chapter</span> yet.",
      label: "Reason #3",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCg3tfKKkY6HbWBlv1Lr0k-VnMOPs7s4wT3JlJ0Zo9wOeJ0WNNEP4-nVIY8KbeMwFgYfcJAVYbn5rVFh4koIS4Ge9hW6x7pQZBTphr4YpyTY0NxvYDvJNR6ui1kKSpINpiwp09kXFqmTPOiAnV3yXm2CAFUo2nP2Dpphp-k2oS4z-0Igkug_Lu3rWDw5iIsb6uAk94rxD2HRQ58oHADyOuQQaaPHjwuE-rCwL8u3CGEhhg-47y-f1TSIEKc9X3_ysrMS5oRrPtRMdBW"
    }
  ];

  return (
    <div className="bg-background-dark min-h-screen flex flex-col font-display overflow-hidden relative selection:bg-primary selection:text-white animate-fadeIn">
      {/* Atmospheric Background Layer */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-background-dark"></div>
        <div className="absolute top-0 left-0 w-full h-[60%] bg-gradient-to-b from-[#3a1a21] to-transparent opacity-60"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[80vw] h-[80vw] bg-primary/10 rounded-full blur-[100px] animate-pulse"></div>
        <div className="absolute top-[10%] left-[-10%] w-[60vw] h-[60vw] bg-[#67323f]/20 rounded-full blur-[80px]"></div>
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>
      </div>

      {/* Main Content Layer */}
      <div className="relative z-10 flex flex-col h-screen w-full max-w-md mx-auto">
        {/* TopAppBar */}
        <div className="flex items-center p-4 pb-2 justify-between shrink-0">
          <button 
            onClick={onBack}
            className="text-white/80 hover:text-white flex size-12 shrink-0 items-center justify-center rounded-full active:bg-white/10 transition-colors"
          >
            <span className="text-[28px] font-sans">⇠</span>
          </button>
          <h2 className="text-white text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center font-display drop-shadow-md">Our Love Story</h2>
          <div className="flex w-12 items-center justify-end">
            <p className="text-primary text-base font-bold leading-normal tracking-[0.015em] shrink-0 drop-shadow-sm">2026</p>
          </div>
        </div>

        {/* SectionHeader */}
        <div className="w-full shrink-0 animate-fadeIn" style={{ animationDelay: '0.1s' }}>
          <h4 className="text-primary/80 text-xs uppercase tracking-[0.2em] font-bold px-4 py-2 text-center drop-shadow-sm">Notes for You</h4>
        </div>

        {/* Carousel */}
        <div 
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex-1 overflow-x-auto snap-x snap-mandatory flex w-full items-center no-scrollbar py-4 px-6 gap-6 animate-fadeIn"
          style={{ animationDelay: '0.2s' }}
        >
          {cards.map((card, i) => (
            <div key={card.id} className="snap-center w-full flex-shrink-0 flex flex-col items-center justify-center h-full">
              <div className="w-full h-full max-h-[65vh] bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-1 flex flex-col shadow-2xl relative overflow-hidden group">
                <div className="relative w-full h-[55%] rounded-xl overflow-hidden">
                  <img 
                    src={card.image} 
                    alt={card.label}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-[20s] ease-linear transform group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-transparent to-transparent opacity-90"></div>
                  <div className="absolute bottom-4 left-4 right-4 text-center">
                    <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-2">
                      <span className="text-white text-xl">❤️</span>
                    </div>
                  </div>
                </div>
                <div className="flex-1 flex flex-col items-center justify-center text-center p-6 -mt-4 relative z-10">
                  <span className="text-primary/40 text-5xl mb-2 italic">“</span>
                  <p 
                    className="text-white font-serif text-2xl lg:text-3xl italic leading-relaxed drop-shadow-lg"
                    dangerouslySetInnerHTML={{ __html: card.text }}
                  ></p>
                  <div className="w-12 h-[1px] bg-gradient-to-r from-transparent via-primary/60 to-transparent mx-auto my-6"></div>
                  <p className="text-white/60 text-xs font-bold tracking-[0.15em] uppercase font-display">{card.label}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* PageIndicators */}
        <div className="flex w-full flex-row items-center justify-center gap-4 py-4 shrink-0 animate-fadeIn" style={{ animationDelay: '0.3s' }}>
          {cards.map((_, i) => (
            <div 
              key={i} 
              className={`h-1.5 w-1.5 rounded-full transition-all duration-300 ${i === activeIndex ? 'bg-primary ring-4 ring-primary/20 scale-125' : 'bg-white/20'}`}
            />
          ))}
        </div>

        {/* ActionsBar */}
        <div className="pb-8 pt-2 px-6 shrink-0 animate-fadeIn" style={{ animationDelay: '0.4s' }}>
          <div className="flex flex-col items-center gap-8">
            <button 
              onClick={onNext}
              className="w-full py-4 bg-primary text-white rounded-xl font-sans tracking-[0.2em] uppercase text-xs font-bold shadow-xl shadow-primary/20 hover:scale-105 active:scale-95 transition-all"
            >
              Our Final Chapter ➔
            </button>
            <div className="flex justify-center gap-12">
              <button className="flex flex-col items-center gap-2 group outline-none">
                <div className="rounded-full bg-white/5 p-3 group-active:bg-primary/20 group-hover:bg-white/10 transition-all duration-300 border border-white/10 group-active:scale-95 group-active:border-primary/50 shadow-lg">
                  <span className="text-white/90 group-active:text-primary transition-colors text-xl">🔖</span>
                </div>
                <span className="text-white/50 text-[10px] uppercase tracking-widest font-medium group-hover:text-white/80 transition-colors">Save</span>
              </button>
              <button className="flex flex-col items-center gap-2 group outline-none">
                <div className="rounded-full bg-white/5 p-3 group-active:bg-primary/20 group-hover:bg-white/10 transition-all duration-300 border border-white/10 group-active:scale-95 group-active:border-primary/50 shadow-lg">
                  <span className="text-white/90 transition-colors text-xl">🔗</span>
                </div>
                <span className="text-white/50 text-[10px] uppercase tracking-widest font-medium group-hover:text-white/80 transition-colors">Share</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <style dangerouslySetInnerHTML={{ __html: `
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}} />
    </div>
  );
};

export default RomanticGallery;
