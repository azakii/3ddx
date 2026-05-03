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
    stiffness: 70,
    damping: 20,
    restDelta: 0.001
  });

  const yBg = useTransform(smoothProgress, [0, 1], ["-10%", "10%"]);
  const yText = useTransform(smoothProgress, [0, 1], ["10%", "-30%"]);
  
  // Waving effect: moving on X, Y, and skewing slightly
  const xText = useTransform(smoothProgress, [0, 0.25, 0.5, 0.75, 1], ["-1%", "1%", "-2%", "2%", "0%"]);
  const skewXText = useTransform(smoothProgress, [0, 0.25, 0.5, 0.75, 1], [-1, 2, -1, 1, 0]);
  const skewYText = useTransform(smoothProgress, [0, 0.25, 0.5, 0.75, 1], [0.5, -0.5, 1, -1, 0]);

  return (
    <section ref={containerRef} className="relative h-[80vh] overflow-hidden bg-[#050505] flex items-center justify-center">
      {/* Background Parallax Layer */}
      <motion.div 
        style={{ y: yBg }}
        className="absolute inset-0 z-0 w-full h-[140%] -top-[20%]"
      >
        <video 
          src="https://assets.mixkit.co/videos/preview/mixkit-dentist-checking-the-molds-of-the-teeth-of-a-medical-42866-large.mp4" 
          autoPlay loop muted playsInline
          className="w-full h-full object-cover opacity-30 mix-blend-luminosity"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505]"></div>
      </motion.div>
      
      {/* Foreground Text Layer */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-12 pointer-events-none">
        <motion.div 
          style={{ y: yText, x: xText, skewX: skewXText, skewY: skewYText }}
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
