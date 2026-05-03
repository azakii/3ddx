import { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'motion/react';

export default function ParallaxSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Smooth out the scroll progress
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 50,
    damping: 20,
    restDelta: 0.001
  });

  const y = useTransform(smoothProgress, [0, 1], ["0%", "-20%"]);
  
  return (
    <section ref={containerRef} className="relative h-[80vh] overflow-hidden bg-[#050505] flex items-center justify-center">
      {/* Background Parallax Layer */}
      <motion.div 
        style={{ y }}
        className="absolute inset-0 z-0 w-full h-[120%]"
      >
        <img 
          src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=2000&auto=format&fit=crop" 
          alt="Dentist surgery check up"
          className="w-full h-full object-cover object-[center_top] opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/20 to-[#050505]/40 z-0"></div>
      </motion.div>
      
      {/* Foreground Text Layer */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-12 pointer-events-none">
        <motion.div 
          className="flex flex-col items-center text-center"
        >
          <h2 className="text-6xl md:text-8xl lg:text-[10rem] xl:text-[11rem] font-display font-medium text-white leading-[0.8] tracking-tighter">
            IMPERCEPTIBLE
            <br />
            <span className="italic text-[#188DBA] font-serif">PRECISION</span>
          </h2>
          <p className="max-w-xl mx-auto mt-8 text-lg md:text-xl text-gray-400 font-medium leading-relaxed drop-shadow-lg">
            Experience the zenith of digital workflows. Fluid motion, absolute accuracy, and visionary results for modern implantology.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
