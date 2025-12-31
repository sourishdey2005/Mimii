
import React, { useEffect } from 'react';

interface FutureDreamsProps {
  onNext: () => void;
  onBack: () => void;
}

const FutureDreams: React.FC<FutureDreamsProps> = ({ onNext, onBack }) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-gray-900 dark:text-gray-100 transition-colors duration-200 min-h-screen animate-fadeIn">
      <div className="relative min-h-screen w-full flex flex-col overflow-hidden max-w-md mx-auto bg-background-light dark:bg-background-dark shadow-2xl">
        {/* Sticky Header with Glassmorphism */}
        <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 glass-panel max-w-md mx-auto rounded-b-xl backdrop-blur-md border-b border-white/10">
          <button 
            onClick={onBack}
            className="flex items-center justify-center p-2 rounded-full text-gray-800 dark:text-white hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
          >
            <span className="material-symbols-outlined text-[24px]">arrow_back</span>
          </button>
          <h1 className="text-lg font-bold tracking-tight text-gray-900 dark:text-white">Our Future</h1>
          <button className="flex items-center justify-center p-2 rounded-full text-primary hover:bg-primary/10 transition-colors">
            <span className="material-symbols-outlined text-[24px]">favorite</span>
          </button>
        </header>

        {/* Main Scrollable Content */}
        <main className="flex-1 overflow-y-auto no-scrollbar pt-24 pb-24 px-4 space-y-8 scroll-smooth">
          {/* Intro & Timer Section */}
          <section className="flex flex-col items-center justify-center gap-6 py-4 animate-fadeIn">
            <div className="text-center space-y-2">
              <p className="text-primary font-medium tracking-wide uppercase text-xs">Countdown to 2026</p>
              <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white leading-tight">Time until our next<br/>big chapter</h2>
            </div>
            {/* Timer Component */}
            <div className="flex gap-3 w-full justify-center">
              {[
                { label: 'Days', value: '365' },
                { label: 'Hrs', value: '12' },
                { label: 'Mins', value: '45' },
                { label: 'Secs', value: '08' }
              ].map((item, idx) => (
                <div key={idx} className="flex flex-col items-center gap-2">
                  <div className="flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-2xl bg-primary/10 dark:bg-primary/20 border border-primary/20">
                    <p className="text-primary text-xl sm:text-2xl font-bold leading-none">{item.value}</p>
                  </div>
                  <p className="text-gray-500 dark:text-gray-400 text-xs font-medium uppercase tracking-wider">{item.label}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Vertical Dream Cards */}
          <div className="flex flex-col gap-6 w-full pb-8">
            {/* Card 1 */}
            <div className="group relative w-full h-[70vh] rounded-[2rem] overflow-hidden shadow-2xl transition-transform duration-500">
              <div className="absolute inset-0 bg-gray-200">
                <div 
                  className="w-full h-full bg-cover bg-center transition-transform duration-1000 group-hover:scale-105" 
                  style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuB0ID5o_0N_S6AQucl3zEjskCxmjpkrtZVpYaaxgkYysYD2OPSt5iB0iSqesBBtJjhvuMxilnfyxgrJIIwXkTRf_09t5QhkzZyZxofiUageZEvqXOXrLZ7tzENdUaJlPbO3F_shVSNQY42GqdLm9PjXkDrBkr_e7PSFVYldfhxut9SmAVP1igKRIMUgOk9ug6EM-7TeUCb9EiL0lC8QKcrxZkOGWWj7uydLgCiPlAWn9jEbLRmdwyvqkYnzWYxNulED2ckvTyKdSp_J')" }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/60"></div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-1">
                <div className="glass-panel rounded-[1.75rem] p-6 flex flex-col gap-4 mx-1 mb-1 shadow-lg">
                  <div className="flex items-start justify-between">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 text-primary dark:text-primary font-semibold text-xs tracking-wider uppercase">
                        <span className="material-symbols-outlined text-[16px]">flight_takeoff</span>
                        Summer 2026
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white leading-tight font-display">The Next Big Trip</h3>
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 text-sm font-normal leading-relaxed">
                    Getting lost in the winding streets of Greece together. Sunsets, wine, and just us.
                  </p>
                  <button className="w-full h-12 bg-primary hover:bg-primary/90 active:scale-95 transition-all text-white text-sm font-bold rounded-full flex items-center justify-center gap-2 mt-2 shadow-lg shadow-primary/30">
                    <span>Let's make this happen</span>
                    <span className="material-symbols-outlined text-[18px]">favorite</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="group relative w-full h-[70vh] rounded-[2rem] overflow-hidden shadow-2xl transition-transform duration-500">
              <div className="absolute inset-0 bg-gray-200">
                <div 
                  className="w-full h-full bg-cover bg-center transition-transform duration-1000 group-hover:scale-105" 
                  style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuB-X3e8q_wP7NyziDBW9hChbJISAmVrKbvDkQefOushG-1Tn1RVUjvSIG6ruW4aBBwC2Pr02TxjUudzJRVGUVMfFTF4KZg0vNNeuuC9jLd5xQj75zwdqbUiiHvafjFZExZd98cOhiP-GEY0odRx3qZfUm6eUaz4lwxniWuVWIWEUPHT03k8ftolagukDHRMy1Ol6BTHkj39cqZh9CZy3nX9xzZ5ErZw07lVJQhFSK0dMMkOpDxegChI_iuB88yrzPzyU7EpoyAeiFJv')" }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/60"></div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-1">
                <div className="glass-panel rounded-[1.75rem] p-6 flex flex-col gap-4 mx-1 mb-1 shadow-lg">
                  <div className="flex items-start justify-between">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 text-primary dark:text-primary font-semibold text-xs tracking-wider uppercase">
                        <span className="material-symbols-outlined text-[16px]">key</span>
                        Milestone
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white leading-tight font-display">A Shared Sanctuary</h3>
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 text-sm font-normal leading-relaxed">
                    Building our sanctuary. Our first apartment, filled with plants, books, and laughter.
                  </p>
                  <button className="w-full h-12 bg-primary hover:bg-primary/90 active:scale-95 transition-all text-white text-sm font-bold rounded-full flex items-center justify-center gap-2 mt-2 shadow-lg shadow-primary/30">
                    <span>I promise</span>
                    <span className="material-symbols-outlined text-[18px]">check_circle</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="group relative w-full h-[70vh] rounded-[2rem] overflow-hidden shadow-2xl transition-transform duration-500">
              <div className="absolute inset-0 bg-gray-200">
                <div 
                  className="w-full h-full bg-cover bg-center transition-transform duration-1000 group-hover:scale-105" 
                  style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBWv0Kddn9i5IXywJUiSl3wzlt5SxsGseQY07q8Atm1Z79XWNeB_RIT-1_T6hGTYf-HeDVepgWkz2uxIXQnOfD8N5I9JkU3FupCiKfFXFfZ5wq8GHU3H4JWrjYq2CrYGBQeXZvKmIloyb1RlLTSmPYU0keWx8bjnw_JM3NCDqb5YtrA3DRXxiDPPO1CyXNKIYtpNYY8ngji9UrsOPithXFPXJVKwE2Kj8_a1HxqIDKuIVkzai7Zb-CaFo6zk-cYkPr5D3XVlrBtRJtO')" }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/60"></div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-1">
                <div className="glass-panel rounded-[1.75rem] p-6 flex flex-col gap-4 mx-1 mb-1 shadow-lg">
                  <div className="flex items-start justify-between">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 text-primary dark:text-primary font-semibold text-xs tracking-wider uppercase">
                        <span className="material-symbols-outlined text-[16px]">landscape</span>
                        Growth
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white leading-tight font-display">Growing Together</h3>
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 text-sm font-normal leading-relaxed">
                    Learning new recipes, conquering new peaks, and becoming better versions of ourselves, side by side.
                  </p>
                  <button className="w-full h-12 bg-primary hover:bg-primary/90 active:scale-95 transition-all text-white text-sm font-bold rounded-full flex items-center justify-center gap-2 mt-2 shadow-lg shadow-primary/30">
                    <span>Let's do this</span>
                    <span className="material-symbols-outlined text-[18px]">bolt</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Card 4 */}
            <div className="group relative w-full h-[70vh] rounded-[2rem] overflow-hidden shadow-2xl transition-transform duration-500">
              <div className="absolute inset-0 bg-gray-200">
                <div 
                  className="w-full h-full bg-cover bg-center transition-transform duration-1000 group-hover:scale-105" 
                  style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuB1g3bR9nZHOzM73PpCFMUZEPJkqJ497MJe7SiZCzKy3rSmCecuuvczQpehjuH77pmfwAxjzwsg_JgWFv-NT6d4uNqIgTlbpA7bCpRBfN872Svqzj7o52hbnXkXdnW7mIRWiS7K0crGtmVe4LvMAiNRMRT3wOxTD7G4OGhpi1nr4eGZMEvnmzhqGgey9DId-9C8P6z4nvhoQISE3N1ghxYjWckuAx0KRnHKlt-JlhoCfZ2sxFtdavftaZUymxBReUbzOQ4_uvMN-Jfo')" }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/60"></div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-1">
                <div className="glass-panel rounded-[1.75rem] p-6 flex flex-col gap-4 mx-1 mb-1 shadow-lg">
                  <div className="flex items-start justify-between">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 text-primary dark:text-primary font-semibold text-xs tracking-wider uppercase">
                        <span className="material-symbols-outlined text-[16px]">coffee</span>
                        Daily Life
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white leading-tight font-display">The Simple Things</h3>
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 text-sm font-normal leading-relaxed">
                    More slow mornings, Sunday cuddles, and finding magic in our everyday routine.
                  </p>
                  <button className="w-full h-12 bg-primary hover:bg-primary/90 active:scale-95 transition-all text-white text-sm font-bold rounded-full flex items-center justify-center gap-2 mt-2 shadow-lg shadow-primary/30">
                    <span>Always</span>
                    <span className="material-symbols-outlined text-[18px]">all_inclusive</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Message & Call to Action */}
          <div className="flex flex-col items-center justify-center py-8 text-center gap-6">
            <span className="material-symbols-outlined text-primary text-3xl animate-pulse">favorite</span>
            <div className="space-y-1">
              <p className="text-lg font-bold text-gray-800 dark:text-gray-200">I can't wait for all of this with you.</p>
              <p className="text-sm text-gray-500 font-sans tracking-widest uppercase">Happy New Year, my love.</p>
            </div>
            
            <button 
              onClick={onNext}
              className="mt-4 px-12 py-5 bg-primary text-white rounded-full font-sans tracking-[0.3em] uppercase text-[10px] hover:bg-primary/90 hover:scale-105 transition-all shadow-xl active:scale-95 flex items-center gap-3"
            >
              Continue Our Story
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </button>
          </div>
        </main>

        {/* Floating Action Button (Music) */}
        <div className="fixed bottom-6 right-6 z-50">
          <button className="h-12 w-12 rounded-full bg-white dark:bg-gray-800 text-primary shadow-lg shadow-primary/20 flex items-center justify-center transition-transform hover:scale-110 active:scale-95 border border-primary/10">
            <span className="material-symbols-outlined">music_note</span>
          </button>
        </div>
      </div>
      <style dangerouslySetInnerHTML={{ __html: `
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}} />
    </div>
  );
};

export default FutureDreams;
