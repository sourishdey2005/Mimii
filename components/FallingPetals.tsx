
import React, { useEffect, useState } from 'react';

interface Petal {
  id: number;
  left: string;
  size: string;
  delay: string;
  duration: string;
  rotate: string;
}

const FallingPetals: React.FC = () => {
  const [petals, setPetals] = useState<Petal[]>([]);

  useEffect(() => {
    const initialPetals = Array.from({ length: 25 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      size: `${Math.random() * 15 + 10}px`,
      delay: `${Math.random() * 10}s`,
      duration: `${Math.random() * 10 + 10}s`,
      rotate: `${Math.random() * 360}deg`,
    }));
    setPetals(initialPetals);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {petals.map((petal) => (
        <div
          key={petal.id}
          className="absolute animate-petal-fall opacity-40 select-none"
          style={{
            left: petal.left,
            top: '-5vh',
            width: petal.size,
            height: petal.size,
            animationDelay: petal.delay,
            animationDuration: petal.duration,
          }}
        >
          {/* Petal Shape - simple SVG for a rose petal look */}
          <svg
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ transform: `rotate(${petal.rotate})` }}
          >
            <path
              d="M50 0C50 0 100 25 100 50C100 75 75 100 50 100C25 100 0 75 0 50C0 25 50 0 50 0Z"
              fill="#ee2b5b"
              fillOpacity="0.6"
            />
          </svg>
        </div>
      ))}
    </div>
  );
};

export default FallingPetals;
