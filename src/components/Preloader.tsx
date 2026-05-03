import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

export default function Preloader({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Fake loading progress
    const duration = 2000;
    const interval = 20;
    const steps = duration / interval;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      // Easing out the progress for a more organic feel
      const t = currentStep / steps;
      const easedT = t * (2 - t);
      
      const nextProgress = Math.min(Math.round(easedT * 100), 100);
      setProgress(nextProgress);

      if (currentStep >= steps) {
        clearInterval(timer);
        setIsLoaded(true);
        setTimeout(onComplete, 1200); // Give time for split animation to finish
      }
    }, interval);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-[9999] pointer-events-none flex flex-col items-center justify-center overflow-hidden">
      {/* Top Panel */}
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: isLoaded ? "-100%" : 0 }}
        transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }} 
        className="absolute top-0 left-0 w-full h-1/2 bg-[#050505] origin-top border-b border-gray-900/50"
      />
      
      {/* Bottom Panel */}
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: isLoaded ? "100%" : 0 }}
        transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }} 
        className="absolute bottom-0 left-0 w-full h-1/2 bg-[#050505] origin-bottom border-t border-gray-900/50"
      />

      <motion.div 
        animate={{ opacity: isLoaded ? 0 : 1, scale: isLoaded ? 0.95 : 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="relative z-10 text-white text-[6rem] sm:text-[8rem] md:text-[12rem] leading-none font-display font-medium tracking-tighter mix-blend-difference"
      >
        {progress}%
      </motion.div>
    </div>
  );
}
