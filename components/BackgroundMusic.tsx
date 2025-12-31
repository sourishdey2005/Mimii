
import React, { useState, useEffect, useRef } from 'react';

const BackgroundMusic: React.FC<{ isPlaying: boolean }> = ({ isPlaying }) => {
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.2;
      if (isPlaying) {
        const playPromise = audioRef.current.play();
        if (playPromise !== undefined) {
          playPromise.catch(() => {});
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
        src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3" 
      />
      <button 
        onClick={toggleMute}
        className="fixed top-6 right-6 z-50 p-3 rounded-full bg-white/40 backdrop-blur-md hover:bg-white/60 transition-all text-[#ee2b5b] shadow-sm border border-white/40"
      >
        <span className="material-symbols-outlined text-xl">
          {isMuted ? 'volume_off' : 'volume_up'}
        </span>
      </button>
    </>
  );
};

export default BackgroundMusic;
