import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] w-full bg-white dark:bg-[#0a0a0a] transition-colors duration-300">
      <div className="w-full h-full min-h-[80vh] relative flex flex-col justify-end pt-32 md:pt-40 pb-12 md:pb-16 px-6 md:px-16 bg-graphite transition-colors duration-300">
        
        {/* Background Video */}
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0 opacity-60 mix-blend-luminosity"
        >
          {/* using a high quality dental/medical stock video reference representation */}
          <source src="https://assets.mixkit.co/videos/preview/mixkit-orthodontist-checking-a-patient-with-braces-42865-large.mp4" type="video/mp4" />
        </video>
        
        {/* Adjusted overlay without mix-blend-multiply to ensure video is visible but darkened */}
        <div className="absolute inset-0 bg-graphite/40 z-0"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-graphite/90 via-transparent to-graphite/40 z-0 dark:from-black dark:via-black/50 dark:to-transparent"></div>

        {/* Bottom Elements */}
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-end w-full max-w-[1600px] mx-auto pt-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="w-full overflow-hidden"
          >
            <p className="text-white/90 max-w-sm text-sm lg:text-base mb-6 font-medium leading-relaxed">
              We empower oral surgeons and restorative dentists with elite digital workflows for predictable clinical outcomes.
            </p>
            <h1 className="text-7xl md:text-8xl lg:text-9xl xl:text-[10rem] font-bold text-white leading-[0.8] tracking-tighter mt-4 break-words">
              3DDX
            </h1>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="flex flex-col md:items-end text-left md:text-right space-y-6"
          >
             <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-medium text-white max-w-lg leading-tight break-words">
               {"We believe in the power of precision.".split(" ").map((word, index) => (
                 <span key={index}>
                   <motion.span
                     initial={{ opacity: 0, y: 10 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: false }}
                     transition={{ delay: 1 + index * 0.1, duration: 0.8 }}
                     className="inline-block"
                   >
                     {word}
                   </motion.span>
                   {" "}
                 </span>
               ))}
             </h2>
             <button className="bg-[#188DBA] text-white rounded-full px-10 py-5 font-bold text-lg hover:bg-white hover:text-graphite transition-all hover:scale-105 inline-block mt-4 w-max shadow-lg">
               Book an appointment
             </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
