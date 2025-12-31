
import React from 'react';

interface CinematicStoryProps {
  onNext: () => void;
}

const CinematicStory: React.FC<CinematicStoryProps> = ({ onNext }) => {
  return (
    <div className="bg-background-dark text-white font-display overflow-x-hidden antialiased selection:bg-primary selection:text-white min-h-screen animate-fadeIn">
      {/* Sticky Top Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between p-4 bg-background-dark/80 backdrop-blur-md border-b border-white/5 transition-all duration-300">
        <div className="flex size-10 shrink-0 items-center justify-center rounded-full active:bg-white/10 transition-colors cursor-pointer opacity-0 pointer-events-none">
          <span className="material-symbols-outlined text-white" style={{ fontSize: '24px' }}>arrow_back</span>
        </div>
        <h2 className="text-white text-lg font-bold leading-tight tracking-tight flex-1 text-center opacity-90 font-sans">The Story of Us</h2>
        <div className="flex size-10 items-center justify-center">
          <button className="flex size-10 items-center justify-center rounded-full bg-white/5 active:bg-primary transition-all duration-300">
            <span className="material-symbols-outlined text-white" style={{ fontSize: '20px' }}>music_note</span>
          </button>
        </div>
      </nav>

      {/* Main Content Container */}
      <main className="relative flex flex-col w-full min-h-screen pb-20 pt-16">
        {/* Hero Section */}
        <section className="relative h-[90vh] w-full flex flex-col items-center justify-end pb-20 overflow-hidden">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-background-dark z-10"></div>
            <div className="absolute inset-0 bg-black/40 z-0"></div>
            <div 
              className="w-full h-full bg-cover bg-center bg-no-repeat scale-105 animate-float" 
              style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAUZb7eWQBiWbXuCUpgHpsQ8kKKUt0d3Ml9cdBGAI1ubtMfbpiiRHbvO-rnwMa58lelmQbJc1Kkmnde_Jr-z2o1LFr_Erjwt1Q_4thgczPH3LdnrTky7GVUbbTCfVQZ6_JRdyrd58T0Mj7m4R6nttxSUQ4EgznybJ-ajceNjAJnkpWLNwf9EudlP4uh7d2JgxbfukFNgMACdf9ixd8HQo6OKDtno3Yxzt98FWeyyQ1IFD6gZCRdDj5vL9TcXzYmZs-csWJVUILIeT07')" }}
            ></div>
          </div>
          {/* Hero Content */}
          <div className="relative z-20 flex flex-col items-center gap-6 px-6 text-center animate-slideUp">
            <div className="space-y-2">
              <h1 className="text-white text-5xl font-serif italic tracking-tight drop-shadow-lg">
                Two dates <br/> <span className="font-bold not-italic text-4xl mt-2 block uppercase font-sans tracking-widest">changed everything</span>
              </h1>
              <p className="text-white/80 text-lg font-light tracking-wide mt-4">
                A story of the 17th & 25th
              </p>
            </div>
            <div className="absolute bottom-[-60px] animate-bounce opacity-50">
              <span className="material-symbols-outlined text-white" style={{ fontSize: '24px' }}>keyboard_arrow_down</span>
            </div>
          </div>
        </section>

        {/* Chapter 1: The 17th */}
        <section className="relative px-6 py-12 flex flex-col gap-8 items-center">
          <div className="text-center space-y-2">
            <span className="text-primary/80 uppercase tracking-[0.2em] text-xs font-bold font-sans">Chapter One</span>
            <h2 className="text-6xl font-bold text-white tracking-tight italic font-serif">The 17th</h2>
          </div>
          <div className="w-full max-w-sm aspect-[3/4] rounded-lg overflow-hidden shadow-2xl relative group border border-white/5">
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
            <div 
              className="w-full h-full bg-cover bg-center transition-transform duration-1000 group-hover:scale-110" 
              style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCusVwZ0axiMoslT2_mDmh1-fukV7_zKLzZj8X-_w_erJElHobq34WI6aZjwwu7_EG54omFgOqPLR6wdXouc_Vkne8OrFYpFI-yUhI7GVnJOthIV7OqVei2WROJ9SQk1hKypKu-loi0P10pSXuHOhfYX39viAKoLaW4N17RrpmUTTk8phlD7JzIFigIFlyE3u7lk9JkpS-FEOZhkZ0irIrxlI1FZAEt21UKeMA7PaU8CJ5PWavTAviDZL8D8FuoIQmLTFNxTH0TvUgG')" }}
            ></div>
            <div className="absolute bottom-6 left-6 z-20">
              <div className="flex items-center gap-2 text-white/90">
                <span className="material-symbols-outlined text-primary" style={{ fontSize: '24px' }}>favorite</span>
                <span className="text-sm font-sans tracking-[0.2em] uppercase font-bold">She said yes</span>
              </div>
            </div>
          </div>
          <div className="max-w-md text-center px-2">
            <p className="text-white/80 text-lg leading-relaxed font-serif italic">
              It started with a nervous heartbeat and a question that changed our world forever. Under the starlit sky, the 17th became ours. The air was still, but my heart was racing until your smile calmed everything.
            </p>
          </div>
        </section>

        {/* Connector */}
        <div className="flex flex-col items-center justify-center py-4 gap-2 opacity-30">
          <div className="w-px h-16 bg-gradient-to-b from-transparent via-primary to-transparent"></div>
          <span className="material-symbols-outlined text-primary text-xl">all_inclusive</span>
          <div className="w-px h-16 bg-gradient-to-b from-transparent via-primary to-transparent"></div>
        </div>

        {/* Chapter 2: The 25th */}
        <section className="relative px-6 py-12 flex flex-col gap-8 items-center">
          <div className="text-center space-y-2">
            <span className="text-primary/80 uppercase tracking-[0.2em] text-xs font-bold font-sans">Chapter Two</span>
            <h2 className="text-6xl font-bold text-white tracking-tight italic font-serif">The 25th</h2>
          </div>
          <div className="w-full max-w-sm aspect-[3/4] rounded-lg overflow-hidden shadow-2xl relative group border border-white/5">
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
            <div 
              className="w-full h-full bg-cover bg-center transition-transform duration-1000 group-hover:scale-110" 
              style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBEBxxYfNu5HU6yDua-61x8XOBsijTHM2yn4Ct4t9U6ENOygb5jh7GPvSTwhLiWkI3s00nNJP-KsG3kKVNWryIsgRPo5Ij1Yh18Rk6DgJF-SP44qlfeND0HyfmZLBZq50MpPkVaVRZI_ZCn2LQEa3nVMm1-HGwXjAZodneI1bBmI6Im5WUctLhiRjMYpXNBUwHu3hB4CSasPIP-DZVri2AHkTfnPSVrZ-YeaqFd4eytFjZ6MStmFwtIcSXEOcPYDrpuXmgMLo0njEih')" }}
            ></div>
            <div className="absolute bottom-6 right-6 z-20 text-right">
              <div className="flex items-center justify-end gap-2 text-white/90">
                <span className="text-sm font-sans tracking-[0.2em] uppercase font-bold">A reciprocal promise</span>
                <span className="material-symbols-outlined text-primary" style={{ fontSize: '24px' }}>hotel_class</span>
              </div>
            </div>
          </div>
          <div className="max-w-md text-center px-2">
            <p className="text-white/80 text-lg leading-relaxed font-serif italic">
              Just eight days later, you surprised me. A reciprocal promise, a deeper bond. The 25th wasn't just a date, it was a confirmation that this love flows both ways, endlessly.
            </p>
          </div>
        </section>

        {/* Synthesis Section */}
        <section className="py-20 px-6 bg-gradient-to-b from-background-dark via-[#2a161b] to-background-dark text-center">
          <h3 className="text-2xl font-serif italic text-white/90 mb-10">
            But the truth is...<br/>
            <span className="text-primary not-italic font-bold text-xl mt-3 block uppercase tracking-[0.3em] font-sans">We propose every day</span>
          </h3>
          <div className="grid grid-cols-2 gap-4 max-w-lg mx-auto mb-12">
            <div 
              className="aspect-square bg-cover bg-center rounded-lg opacity-80 hover:opacity-100 transition-opacity border border-white/5" 
              style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBrZXCvNDsnw9JnkvIFtbL_84ZzP5PxB8USAaYyL98kYvvUJdPqGSxPf1D8HsPcKcWiXGcqE_qa0-ZECfyhoW8M5CAoJclp5Cahl0PSrW15tcKoMy7Iu1r5AzGEK84QtAn82SC0qVCXJBCd0VjbveSTi3MQVikBLHdsh50kFexxGTx85C9VpTdAVil84JzaKECa-HTjAECXnpckUJrSSdpQxP4ir45p0YhPAJYJyfPKjxWJsf4AnWTUojhmrHXwpy90fpfqCdnFYNIP')" }}
            ></div>
            <div 
              className="aspect-square bg-cover bg-center rounded-lg opacity-80 hover:opacity-100 transition-opacity border border-white/5" 
              style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBV1FrckdN-9ai8RPfqvU3Ju5e6AbBpgG2h20GdUNQrde0XKOXgPWtmux_oUGz0oBK085Ew-kMJhk1jLeEYafwWNm3kqPFr9uaRJfi8KbAOBVvtakkDzFx7lJCvWeTvS__jcpyIQmLx2K5Nn48vtIaZuTZVbhqPHrQ9LqJhT_NQRAeRze8R_xNnkbVf52OUy0f-Ulw97tNUUUpR39qLD7ZOjXsf4EHtXu7cMqBXchdjKdZ0Dwf-G4G8xZ7n-CgNzuOxWMT6WV_WXi5A')" }}
            ></div>
            <div 
              className="col-span-2 aspect-[16/9] bg-cover bg-center rounded-lg opacity-90 hover:opacity-100 transition-opacity relative border border-white/5" 
              style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDJQMKgraVdAE8vN2_858PcXho_qLGoUkONSU71-fqmT_durdYvmgJLnj6egP4rdoLVGG-laEVvoNNGBsVcID9pjkivJXQ_cfoCBLathLZLW378w7Db9V8bNC5BfTU1NsNzz3dnEzQktMxd7wd3CdnTChPTq0qBxPxpvu3K27Lzbfdb72z4lYBBL8z8759CNAcBXd39XzylRrFQmbn94NsY89UJesbVdswhJS7lqoRPz4nkEURSUIy8lgUoXGmXC_BA0UpvNsZVHIIT')" }}
            >
              <div className="absolute inset-0 flex items-center justify-center bg-black/30 p-6">
                <p className="text-white font-serif italic text-2xl drop-shadow-lg leading-relaxed">
                  "In the small moments,<br/>we choose us."
                </p>
              </div>
            </div>
          </div>
          
          <div className="mt-16 flex flex-col items-center gap-6">
             <button 
              onClick={onNext}
              className="group flex items-center justify-center gap-4 rounded-xl bg-primary text-white px-10 py-5 text-base font-bold tracking-[0.2em] uppercase shadow-[0_0_30px_rgba(235,71,112,0.4)] transition-all hover:scale-105 active:scale-95"
            >
              <span className="material-symbols-outlined group-hover:animate-pulse">redeem</span>
              Continue Our Journey
            </button>
            <footer className="text-white/30 text-[10px] tracking-[0.5em] uppercase font-sans mt-8">
              Forever & Always • 17th & 25th
            </footer>
          </div>
        </section>
      </main>
    </div>
  );
};

export default CinematicStory;
