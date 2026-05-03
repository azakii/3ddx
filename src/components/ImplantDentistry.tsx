import { motion } from 'motion/react';
import { Play } from 'lucide-react';

export default function ImplantDentistry() {
  return (
    <section className="px-4 md:px-8 py-16 md:py-24 w-full bg-white dark:bg-[#0a0a0a] transition-colors duration-300">
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="max-w-[1400px] mx-auto"
      >
        <div className="flex flex-col md:flex-row justify-between md:items-end mb-16 gap-8">
          <div className="max-w-3xl">
            <span className="inline-block border border-gray-200 dark:border-gray-800 rounded-full px-4 py-1.5 text-xs font-bold text-graphite dark:text-gray-300 mb-6 bg-gray-50 dark:bg-white/5 shadow-sm tracking-widest uppercase">
              Workflow Hub
            </span>
            <h2 className="text-3xl md:text-5xl lg:text-[4rem] font-display font-bold leading-[1.05] tracking-tight mb-6 text-graphite dark:text-white uppercase transition-colors">
              {"Master the 3DDX".split(" ").map((word, index) => (
                <span key={index}>
                  <motion.span
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, margin: "-50px" }}
                    transition={{ delay: index * 0.1, duration: 0.8 }}
                    className="inline-block"
                  >
                    {word}
                  </motion.span>
                  {" "}
                </span>
              ))}
              <br className="hidden md:block" />
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, margin: "-50px" }}
                transition={{ delay: 3 * 0.1, duration: 0.8 }}
                className="text-[#188DBA] relative inline-block"
              >
                Digital Workflow
                <svg className="absolute w-full h-3 -bottom-2 md:-bottom-4 left-0 text-[#188DBA]/20" viewBox="0 0 100 12" preserveAspectRatio="none">
                  <path d="M0,10 Q50,-5 100,10" stroke="currentColor" strokeWidth="4" fill="none" />
                </svg>
              </motion.span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg md:text-xl leading-relaxed transition-colors max-w-xl">
              Discover how digital workflows improve precision,
              efficiency, and patient satisfaction in modern implant dentistry.
            </p>
          </div>
          <div className="pb-2">
            <button className="bg-graphite dark:bg-white text-white dark:text-graphite py-4 px-8 rounded-full font-bold hover:scale-105 transition-transform flex items-center gap-2 shadow-xl shadow-graphite/10 dark:shadow-white/5">
              Start a Case <Play className="w-4 h-4 fill-current ml-1" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Large Video Card - Spans 2 cols on lg */}
          <div className="lg:col-span-2 relative rounded-[2.5rem] overflow-hidden aspect-[16/10] md:aspect-auto min-h-[450px] border border-gray-100 dark:border-gray-800 group shadow-lg bg-[#0a0a0a]">
            <video 
              src="https://assets.mixkit.co/videos/preview/mixkit-dentist-examining-a-patient-in-a-dental-clinic-42862-large.mp4" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-70 mix-blend-luminosity"
              autoPlay loop muted playsInline
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80"></div>
            <div className="absolute bottom-0 left-0 w-full p-8 md:p-12 z-10 flex flex-col justify-end h-full">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 w-full mt-auto">
                <div>
                  <span className="inline-block px-3 py-1.5 bg-white/10 backdrop-blur-md rounded-lg text-white text-xs font-bold mb-5 uppercase tracking-wider border border-white/20">Tutorial</span>
                  <h3 className="text-white text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4 tracking-tight leading-tight">See how it works</h3>
                  <p className="text-gray-300 max-w-md text-lg leading-relaxed">Jump right in — get an overview of the basics and see a full implant procedure from start to finish.</p>
                </div>
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-[#188DBA] flex items-center justify-center cursor-pointer hover:bg-white group/btn transition-colors shadow-2xl shadow-[#188DBA]/40 shrink-0">
                  <Play className="w-8 h-8 md:w-10 md:h-10 text-white fill-white ml-2 group-hover/btn:text-[#188DBA] group-hover/btn:fill-[#188DBA] transition-colors" />
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 lg:col-span-1">
            {/* Step 1 */}
            <div className="rounded-[2.5rem] bg-gray-50 dark:bg-[#121212] border border-gray-100 dark:border-gray-800 p-8 flex flex-col justify-between group hover:border-[#188DBA]/30 transition-all shadow-sm hover:shadow-xl hover:-translate-y-1">
              <div className="w-14 h-14 rounded-2xl bg-white dark:bg-[#1a1a1a] shadow-sm text-[#188DBA] flex items-center justify-center text-xl font-bold font-display group-hover:bg-[#188DBA] group-hover:text-white transition-colors border border-gray-100 dark:border-gray-800">
                01
              </div>
              <div className="mt-8">
                <h3 className="text-xl md:text-2xl font-display font-bold text-graphite dark:text-white mb-3 uppercase tracking-tight">
                  SCAN & PLAN
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed font-medium transition-colors">
                  Capture accurate CBCT and intraoral scans to prepare your implant case with clinical precision.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="rounded-[2.5rem] bg-gray-50 dark:bg-[#121212] border border-gray-100 dark:border-gray-800 p-8 flex flex-col justify-between group hover:border-[#188DBA]/30 transition-all shadow-sm hover:shadow-xl hover:-translate-y-1">
              <div className="w-14 h-14 rounded-2xl bg-white dark:bg-[#1a1a1a] shadow-sm text-[#188DBA] flex items-center justify-center text-xl font-bold font-display group-hover:bg-[#188DBA] group-hover:text-white transition-colors border border-gray-100 dark:border-gray-800">
                02
              </div>
              <div className="mt-8">
                <h3 className="text-xl md:text-2xl font-display font-bold text-graphite dark:text-white mb-3 uppercase tracking-tight">
                  SURGICAL GUIDES
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed font-medium transition-colors">
                  Custom 3D-printed guides designed for precise, safe, and efficient implant surgery.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:col-span-3">
            {/* Step 3 */}
            <div className="rounded-[2.5rem] bg-gray-50 dark:bg-[#121212] border border-gray-100 dark:border-gray-800 p-8 flex flex-col justify-between group hover:border-[#188DBA]/30 transition-all shadow-sm hover:shadow-lg h-full">
              <div className="flex justify-between items-start mb-8">
                <div className="w-14 h-14 rounded-2xl bg-white dark:bg-[#1a1a1a] shadow-sm text-[#188DBA] flex items-center justify-center text-xl font-bold font-display group-hover:bg-[#188DBA] group-hover:text-white transition-colors border border-gray-100 dark:border-gray-800">
                  03
                </div>
                <div className="w-12 h-12 rounded-full border border-gray-200 dark:border-gray-700 flex items-center justify-center text-gray-400 group-hover:text-[#188DBA] group-hover:border-[#188DBA]/30 transition-colors">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </div>
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-display font-bold text-graphite dark:text-white mb-3 uppercase tracking-tight">
                  PROSTHETICS
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed font-medium transition-colors">
                  Efficient delivery of prosthetics for predictable, aesthetically pleasing patient outcomes. From single crowns to full arches.
                </p>
              </div>
            </div>
            
            {/* Additional Box (e.g. CTA/Promo) */}
            <div className="rounded-[2.5rem] bg-[#188DBA] text-white p-8 md:p-10 flex flex-col justify-center group relative overflow-hidden shadow-xl shadow-[#188DBA]/20">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/20 rounded-full blur-3xl transform -translate-y-1/2 translate-x-1/3 group-hover:scale-150 transition-transform duration-700"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-cyan-400/20 rounded-full blur-2xl transform translate-y-1/2 -translate-x-1/2"></div>
              
              <div className="relative z-10 flex flex-col md:flex-row items-center md:items-center gap-8 justify-between">
                <div className="flex-1">
                  <div className="w-14 h-14 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center backdrop-blur-sm mb-6">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22 17H2C2 17 2 5 2 5C2 5 22 5 22 5" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M12 17V22" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M8 22H16" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-display font-bold mb-4 leading-tight tracking-tight text-white">Ready to upgrade<br/>your digital workflow?</h3>
                  <p className="text-white/80 text-lg mb-0 font-medium">Join thousands of dental professionals.</p>
                </div>
                <button className="w-full md:w-auto bg-white text-[#188DBA] py-4 px-8 rounded-full font-bold hover:bg-gray-50 transition-colors shadow-lg hover:shadow-xl text-lg shrink-0 hover:-translate-y-1">
                  Start Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
