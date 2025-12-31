
import React, { useState, useEffect } from 'react';
import { AppSection } from './types.ts';
import { 
  GRATITUDE_QUOTES, 
  ROMANTIC_QUOTES, 
  FIRST_MET_STORY, 
  PROPOSAL_STORY, 
  FESTIVAL_STORY, 
  ANNIVERSARY_STORY 
} from './constants.tsx';
import FloatingHearts from './components/FloatingHearts.tsx';
import Envelope from './components/Envelope.tsx';
import QuoteSlider from './components/QuoteSlider.tsx';
import BackgroundMusic from './components/BackgroundMusic.tsx';
import CinematicStory from './components/CinematicStory.tsx';
import FutureDreams from './components/FutureDreams.tsx';
import RomanticGallery from './components/RomanticGallery.tsx';
import ExpandedGratitude from './components/ExpandedGratitude.tsx';
import MemoriesStrength from './components/MemoriesStrength.tsx';
import MemoriesGallery from './components/MemoriesGallery.tsx';
import PhotoCanvasGallery from './components/PhotoCanvasGallery.tsx';

const App: React.FC = () => {
  const [section, setSection] = useState<AppSection>(AppSection.ENVELOPE);
  const [isOpen, setIsOpen] = useState(false);
  const [musicStarted, setMusicStarted] = useState(false);

  useEffect(() => {
    // Prevent right-click for a more "private/app-like" feel
    const handleContextMenu = (e: MouseEvent) => e.preventDefault();
    document.addEventListener('contextmenu', handleContextMenu);
    return () => document.removeEventListener('contextmenu', handleContextMenu);
  }, []);

  const handleOpenEnvelope = () => {
    setIsOpen(true);
    // Start background music on user interaction
    setMusicStarted(true);
    
    // Play a one-time "paper opening" sound effect
    const paperSound = new Audio('https://res.cloudinary.com/dodhvvewu/video/upload/v1767189894/Tere_Liye_Prince_128_Kbps_hs6brw.mp3');
    paperSound.volume = 0.4;
    paperSound.play().catch(() => {});
  };

  const handleProceedFromLetter = () => {
     setSection(AppSection.GREETING);
     window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const resetLetter = () => {
    setSection(AppSection.ENVELOPE);
    setIsOpen(false);
    // We don't stop music here so it keeps playing once started
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen w-full select-none font-display overflow-x-hidden">
      <BackgroundMusic isPlaying={musicStarted} />
      
      {/* Conditionally render floating hearts if not in cinematic panel to avoid clutter */}
      {section !== AppSection.CINEMATIC_STORY && 
       section !== AppSection.FUTURE_DREAMS && 
       section !== AppSection.ROMANTIC_GALLERY && 
       section !== AppSection.EXPANDED_GRATITUDE && 
       section !== AppSection.MEMORIES_STRENGTH && 
       section !== AppSection.MEMORIES_GALLERY && 
       section !== AppSection.CANVAS_GALLERY && <FloatingHearts />}

      {/* Global Branding Header */}
      {section !== AppSection.ENVELOPE && 
       section !== AppSection.CINEMATIC_STORY && 
       section !== AppSection.FUTURE_DREAMS && 
       section !== AppSection.ROMANTIC_GALLERY && 
       section !== AppSection.EXPANDED_GRATITUDE && 
       section !== AppSection.MEMORIES_STRENGTH && 
       section !== AppSection.MEMORIES_GALLERY && 
       section !== AppSection.CANVAS_GALLERY && (
        <div className="fixed top-8 left-1/2 -translate-x-1/2 z-[60] flex flex-col items-center pointer-events-none animate-fadeIn">
          <span className="font-cursive text-2xl text-[#ee2b5b] opacity-60">Sourish & Arunima</span>
        </div>
      )}

      <div className="relative transition-all duration-1000 w-full min-h-screen">
        {section === AppSection.ENVELOPE && (
          <Envelope isOpen={isOpen} onOpen={handleOpenEnvelope} onProceed={handleProceedFromLetter} />
        )}

        {section === AppSection.GREETING && (
          <section className="min-h-screen flex flex-col items-center justify-center px-6 text-center z-10 animate-fadeIn">
            <h1 className="font-cursive text-6xl md:text-8xl text-[#ee2b5b] mb-8 animate-slideUp drop-shadow-md">
              Happy New Year 2026 ❤️
            </h1>
            <p className="font-serif text-xl md:text-2xl text-gray-500 max-w-2xl leading-relaxed animate-fadeIn" style={{ animationDelay: '0.8s' }}>
              For the one who holds my heart. Sourish & Arunima, a love story written in the stars...
            </p>
            <div className="mt-16 animate-fadeIn" style={{ animationDelay: '1.4s' }}>
                <button 
                  onClick={() => setSection(AppSection.GRATITUDE)}
                  className="px-14 py-5 bg-[#ee2b5b] text-white rounded-full font-sans tracking-[0.4em] uppercase text-[10px] hover:bg-[#d0244f] hover:scale-105 transition-all shadow-xl active:scale-95 group flex items-center gap-3"
                >
                  Enter Our World ➔ ✨
                </button>
            </div>
          </section>
        )}

        {section === AppSection.GRATITUDE && (
          <QuoteSlider 
            title="My Deepest Gratitude"
            subTitle="The foundation of everything"
            quotes={GRATITUDE_QUOTES}
            onComplete={() => setSection(AppSection.EXPANDED_GRATITUDE)}
            animationClass="animate-fadeIn"
            themeColor="#ee2b5b"
          />
        )}

        {section === AppSection.EXPANDED_GRATITUDE && (
          <ExpandedGratitude 
            onNext={() => setSection(AppSection.FIRST_MET)}
            onBack={() => setSection(AppSection.GRATITUDE)}
          />
        )}

        {section === AppSection.FIRST_MET && (
          <QuoteSlider 
            title="Laal Quila: The Beginning"
            subTitle="Where history met our future"
            quotes={FIRST_MET_STORY}
            themeColor="#B76E79"
            onComplete={() => setSection(AppSection.PROPOSAL)}
            animationClass="animate-dreamy"
          />
        )}

        {section === AppSection.PROPOSAL && (
          <QuoteSlider 
            title="The Moment of 'Yes'"
            subTitle="A promise of a lifetime"
            quotes={PROPOSAL_STORY}
            themeColor="#d97706"
            onComplete={() => setSection(AppSection.FESTIVALS)}
            animationClass="animate-kenBurns"
          />
        )}

        {section === AppSection.FESTIVALS && (
          <QuoteSlider 
            title="Our Festive Glow"
            subTitle="Brighter together"
            quotes={FESTIVAL_STORY}
            themeColor="#be123c"
            onComplete={() => setSection(AppSection.MEMORIES_STRENGTH)}
            animationClass="animate-shimmer"
          />
        )}

        {section === AppSection.MEMORIES_STRENGTH && (
          <MemoriesStrength 
            onNext={() => setSection(AppSection.MEMORIES_GALLERY)}
            onBack={() => setSection(AppSection.FESTIVALS)}
          />
        )}

        {section === AppSection.MEMORIES_GALLERY && (
          <MemoriesGallery 
            onNext={() => setSection(AppSection.CANVAS_GALLERY)}
            onBack={() => setSection(AppSection.MEMORIES_STRENGTH)}
          />
        )}

        {section === AppSection.CANVAS_GALLERY && (
          <PhotoCanvasGallery 
            onNext={() => setSection(AppSection.ANNIVERSARIES)}
            onBack={() => setSection(AppSection.MEMORIES_GALLERY)}
          />
        )}

        {section === AppSection.ANNIVERSARIES && (
          <QuoteSlider 
            title="Pulses of Our Love"
            subTitle="The 17th and the 25th"
            quotes={ANNIVERSARY_STORY}
            themeColor="#B76E79"
            onComplete={() => setSection(AppSection.CINEMATIC_STORY)}
            animationClass="animate-fadeIn"
          />
        )}

        {section === AppSection.CINEMATIC_STORY && (
          <CinematicStory onNext={() => setSection(AppSection.FUTURE_DREAMS)} />
        )}

        {section === AppSection.FUTURE_DREAMS && (
          <FutureDreams 
            onNext={() => setSection(AppSection.ROMANTIC_GALLERY)} 
            onBack={() => setSection(AppSection.CINEMATIC_STORY)}
          />
        )}

        {section === AppSection.ROMANTIC_GALLERY && (
          <RomanticGallery 
            onNext={() => setSection(AppSection.ROMANTIC)}
            onBack={() => setSection(AppSection.FUTURE_DREAMS)}
          />
        )}

        {section === AppSection.ROMANTIC && (
          <QuoteSlider 
            title="A Love Like No Other"
            subTitle="Soulmates across time"
            quotes={ROMANTIC_QUOTES}
            onComplete={() => setSection(AppSection.PROMISE)}
            animationClass="animate-fadeIn"
            themeColor="#ee2b5b"
          />
        )}

        {section === AppSection.PROMISE && (
          <section className="min-h-screen flex flex-col items-center justify-center px-6 text-center z-10">
            <div className="animate-scaleIn max-w-2xl bg-white/40 p-12 rounded-[3rem] backdrop-blur-md border border-white/50">
              <p className="font-serif text-2xl md:text-3xl text-gray-600 italic mb-6">In 2026 and beyond,</p>
              <h2 className="font-cursive text-7xl md:text-9xl text-[#ee2b5b] mt-4 mb-8 drop-shadow-2xl">
                I choose you. ❤️
              </h2>
              <p className="font-cursive text-3xl md:text-4xl text-[#B76E79] mb-12">Sourish & Arunima Forever ♾️</p>
              <button 
                onClick={() => setSection(AppSection.CLOSING)}
                className="px-16 py-5 bg-[#ee2b5b] text-white rounded-full font-sans tracking-[0.3em] uppercase text-[10px] hover:bg-[#d0244f] transition-all shadow-xl active:scale-95 hover:scale-105"
              >
                Our Final Vow ➔ 💍
              </button>
            </div>
          </section>
        )}

        {section === AppSection.CLOSING && (
          <section className="min-h-screen flex flex-col items-center justify-center px-6 text-center z-10">
            <div className="glass p-16 md:p-24 rounded-[4rem] max-w-2xl animate-fadeIn shadow-2xl border border-white/80 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#ee2b5b] to-transparent opacity-30"></div>
              <h2 className="font-cursive text-6xl md:text-8xl text-[#ee2b5b] mb-10 leading-tight">
                Thank you for being my miracle. ✨
              </h2>
              <p className="font-serif text-2xl md:text-3xl text-gray-500 mb-16 italic font-light">
                Happy New Year, my beautiful Arunima ❤️
              </p>
              <div className="flex flex-col gap-6 items-center">
                <button 
                  onClick={resetLetter}
                  className="px-12 py-5 rounded-full bg-white border border-[#fecaca] text-[#ee2b5b] font-sans tracking-[0.3em] uppercase text-[10px] hover:bg-[#fffafa] transition-all shadow-md flex items-center gap-3 group"
                >
                  Relive Our Story 💌
                </button>
                <span className="font-sans text-[10px] tracking-[0.5em] text-gray-400 uppercase opacity-60">Forever Starts Here ➔ 💖</span>
              </div>
            </div>
          </section>
        )}
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes slideUp { from { opacity: 0; transform: translateY(60px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes scaleIn { from { opacity: 0; transform: scale(0.85); } to { opacity: 1; transform: scale(1); } }
        .animate-fadeIn { animation: fadeIn 2.5s ease-in-out forwards; }
        .animate-slideUp { animation: slideUp 1.8s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        .animate-scaleIn { animation: scaleIn 2.2s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        @keyframes fadeInUp { to { opacity: 1; transform: translateY(0); } }
        .animate-fade-in-up { animation: fadeInUp 0.8s ease-out forwards; opacity: 0; transform: translateY(20px); }
      `}} />
    </div>
  );
};

export default App;
