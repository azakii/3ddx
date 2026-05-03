import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

export default function Preloader({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Fake loading progress
    const duration = 2000;
    const interval = 20;
    const steps = duration / interval;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const nextProgress = Math.min(Math.round((currentStep / steps) * 100), 100);
      setProgress(nextProgress);

      if (currentStep >= steps) {
        clearInterval(timer);
        setTimeout(onComplete, 400); // slight delay before unmounting
      }
    }, interval);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{ y: progress === 100 ? "-100%" : 0 }}
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2 }}
      className="fixed inset-0 z-[9999] bg-[#188DBA] flex flex-col items-center justify-center pointer-events-none"
    >
      <div className="flex flex-col items-center justify-center overflow-hidden">
        <motion.div 
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-white text-7xl md:text-9xl font-display font-medium tracking-tighter mix-blend-difference"
        >
          3DDX
        </motion.div>
        
        <motion.div
           className="mt-8 flex items-center justify-between w-64 md:w-96 text-white font-mono text-sm uppercase tracking-widest mix-blend-difference"
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{ delay: 0.5 }}
        >
          <span>Loading</span>
          <span>{progress}%</span>
        </motion.div>
        <div className="w-64 md:w-96 h-1 bg-white/20 mt-4 rounded-full overflow-hidden mix-blend-difference">
          <motion.div
            className="h-full bg-white rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ ease: "linear" }}
          />
        </div>
      </div>
    </motion.div>
  );
}
