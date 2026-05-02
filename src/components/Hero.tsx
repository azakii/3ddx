import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] py-2 md:py-4 px-2 md:px-4 w-full bg-titanium dark:bg-[#050505] transition-colors duration-300">
      <div className="w-full h-full min-h-[85vh] rounded-[2rem] md:rounded-[3rem] overflow-hidden relative shadow-xl flex flex-col justify-between pt-48 pb-12 px-6 md:px-16 bg-graphite transition-colors duration-300 border border-transparent dark:border-gray-800">
        
        {/* Background Video */}
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          {/* using a high quality dental/medical stock video reference representation */}
          <source src="https://assets.mixkit.co/videos/preview/mixkit-dentist-examining-a-patient-in-a-dental-clinic-42862-large.mp4" type="video/mp4" />
        </video>
        
        {/* Adjusted overlay without mix-blend-multiply to ensure video is visible but darkened */}
        <div className="absolute inset-0 bg-graphite/50 z-0"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-graphite/90 via-transparent to-graphite/40 z-0 dark:from-black dark:via-black/40 dark:to-transparent"></div>

        {/* Content Overlay */}
        <div className="relative z-10 flex flex-col items-center justify-center w-full grow">
          <div className="w-full max-w-5xl space-y-4 text-center md:text-left">
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 w-full mt-12 md:mt-0">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="w-full md:w-auto border-b md:border-b-0 md:border-l border-white/20 pb-4 md:pb-0 md:pl-6 text-center md:text-left"
              >
                <h3 className="text-white md:text-xl lg:text-2xl font-medium tracking-tight whitespace-nowrap">Precision Implant Planning</h3>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="w-full md:w-auto border-b md:border-b-0 md:border-l border-white/20 pb-4 md:pb-0 md:pl-6 text-center md:text-left"
              >
                <h3 className="text-white md:text-xl lg:text-2xl font-medium tracking-tight whitespace-nowrap">Advanced Surgical Guides</h3>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="w-full md:w-auto border-b md:border-b-0 md:border-l border-white/20 pb-4 md:pb-0 md:pl-6 text-center md:text-left"
              >
                <h3 className="text-white md:text-xl lg:text-2xl font-medium tracking-tight whitespace-nowrap">Restorative Workflows</h3>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Bottom Elements */}
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-end w-full max-w-[1600px] mx-auto pt-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="w-full overflow-hidden"
          >
            <p className="text-white/80 max-w-sm text-sm lg:text-base mb-6 font-medium leading-relaxed">
              We empower oral surgeons and restorative dentists with elite digital workflows for predictable clinical outcomes.
            </p>
            <h1 className="text-8xl md:text-9xl lg:text-[10rem] xl:text-[12rem] font-bold text-white leading-[0.8] tracking-tighter mt-4 break-words">
              3DDX
            </h1>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="flex flex-col md:items-end text-left md:text-right space-y-6"
          >
             <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-medium text-white max-w-lg leading-tight break-words">
               We believe in the power of precision.
             </h2>
             <span className="text-white/60 text-sm uppercase tracking-[0.2em] font-medium border border-white/20 px-4 py-2 rounded-full backdrop-blur-md w-max">Enterprise MedTech</span>
             <button className="bg-white text-graphite rounded-full px-10 py-5 font-bold text-lg hover:bg-cyan hover:text-graphite transition-all hover:scale-105 inline-block mt-4 w-max shadow-[0_0_40px_rgba(0,229,255,0.2)] hover:shadow-[0_0_60px_rgba(0,229,255,0.4)]">
               Book an appointment
             </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
