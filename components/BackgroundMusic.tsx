
import React, { useState, useEffect, useRef } from 'react';

const BackgroundMusic: React.FC<{ isPlaying: boolean }> = ({ isPlaying }) => {
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (audioRef.current) {
      // Set initial volume low for a romantic atmosphere
      audioRef.current.volume = 0.2;
      if (isPlaying) {
        // Play when the user interacts (opens the envelope)
        const playPromise = audioRef.current.play();
        if (playPromise !== undefined) {
          playPromise.catch((error) => {
            console.log("Playback was prevented. Most browsers require user interaction first.", error);
          });
        }
      }
    }
  }, [isPlaying]);

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <>
      <audio 
        ref={audioRef} 
        loop 
        // Using a soft romantic piano track
        src="https://res.cloudinary.com/dodhvvewu/video/upload/v1767189894/Tere_Liye_Prince_128_Kbps_hs6brw.mp3" 
      />
      <button 
        onClick={toggleMute}
        className="fixed top-6 right-6 z-50 p-3 rounded-full glass hover:bg-white/60 transition-all text-[#ee2b5b] shadow-sm border border-white/40"
        title={isMuted ? "Unmute" : "Mute"}
      >
        {isMuted ? (
          <span className="material-symbols-outlined text-xl">volume_off</span>
        ) : (
          <span className="material-symbols-outlined text-xl">volume_up</span>
        )}
      </button>
    </>
  );
};

export default BackgroundMusic;
