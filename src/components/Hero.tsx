import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] py-2 md:py-4 px-2 md:px-4 w-full">
      <div className="w-full h-full min-h-[85vh] rounded-[2rem] md:rounded-[3rem] overflow-hidden relative shadow-xl flex flex-col justify-between pt-48 pb-12 px-6 md:px-16">
        
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
        
        <div className="absolute inset-0 bg-graphite/40 mix-blend-multiply z-0"></div>

        {/* Content Overlay */}
        <div className="relative z-10 flex flex-col items-center justify-center w-full grow">
          <div className="w-full max-w-5xl space-y-4 text-center md:text-left">
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 w-full mt-12 md:mt-0">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="w-full md:w-auto border-b md:border-b-0 md:border-l border-white/20 pb-4 md:pb-0 md:pl-6 text-center md:text-left"
              >
                <h3 className="text-white md:text-xl lg:text-2xl font-medium tracking-tight whitespace-nowrap">Precision Implant Planning</h3>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="w-full md:w-auto border-b md:border-b-0 md:border-l border-white/20 pb-4 md:pb-0 md:pl-6 text-center md:text-left"
              >
                <h3 className="text-white md:text-xl lg:text-2xl font-medium tracking-tight whitespace-nowrap">Advanced Surgical Guides</h3>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="w-full md:w-auto border-b md:border-b-0 md:border-l border-white/20 pb-4 md:pb-0 md:pl-6 text-center md:text-left"
              >
                <h3 className="text-white md:text-xl lg:text-2xl font-medium tracking-tight whitespace-nowrap">Restorative Workflows</h3>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Bottom Elements */}
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-end w-full max-w-[1600px] mx-auto pt-16">
          <div>
            <p className="text-white/80 max-w-sm text-sm lg:text-base mb-6 font-medium leading-relaxed">
              We empower oral surgeons and restorative dentists with elite digital workflows for predictable clinical outcomes.
            </p>
            <h1 className="text-6xl md:text-8xl lg:text-[12rem] xl:text-[14rem] font-bold text-white leading-[0.8] tracking-tighter">
              3DDX
            </h1>
          </div>
          
          <div className="flex flex-col md:items-end text-left md:text-right space-y-6">
             <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-medium text-white max-w-lg leading-tight">
               We believe in the power of precision.
             </h2>
             <span className="text-white/60 text-sm uppercase tracking-[0.2em] font-medium border border-white/20 px-4 py-2 rounded-full">Enterprise MedTech</span>
             <button className="bg-white text-graphite rounded-full px-10 py-5 font-bold text-lg hover:bg-cyan hover:text-graphite transition-colors inline-block mt-4 w-max">
               Start a Case
             </button>
          </div>
        </div>
      </div>
    </section>
  );
}
