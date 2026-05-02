import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function ImplantDentistry() {
  return (
    <section className="px-4 md:px-8 py-12 md:py-16 w-full bg-titanium dark:bg-[#050505] transition-colors duration-300">
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="bg-white dark:bg-[#121212] rounded-[3rem] p-8 md:p-12 lg:p-16 shadow-xl border border-gray-100 dark:border-gray-800 max-w-[1600px] mx-auto transition-colors duration-300"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column Text */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <span className="text-sm font-bold tracking-widest uppercase text-cyan mb-6 block">Surgical Authority</span>
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-display font-medium leading-[0.9] tracking-tighter mb-8 text-graphite dark:text-white transition-colors duration-300">
              Guided<br/>Surgery
            </h2>
            <p className="text-gray-500 dark:text-gray-400 text-lg md:text-xl max-w-md mb-8 transition-colors">
              Achieve unprecedented accuracy with our full-arch and single-unit precision guided workflows. We integrate smoothly with your existing scanners and CBCTs.
            </p>
            
            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-3 text-gray-700 dark:text-gray-300 font-medium transition-colors">
                <CheckCircle2 className="w-6 h-6 text-emerald" /> 
                Bone reduction guides and stackable solutions
              </li>
              <li className="flex items-center gap-3 text-gray-700 dark:text-gray-300 font-medium transition-colors">
                <CheckCircle2 className="w-6 h-6 text-emerald" /> 
                Prosthetically-driven implant placement
              </li>
              <li className="flex items-center gap-3 text-gray-700 dark:text-gray-300 font-medium transition-colors">
                <CheckCircle2 className="w-6 h-6 text-emerald" /> 
                Integrated immediate load temporaries
              </li>
            </ul>

            <button className="bg-graphite dark:bg-white text-white dark:text-graphite rounded-full px-8 py-4 font-bold hover:bg-cyan hover:dark:bg-cyan hover:dark:text-white hover:text-graphite transition-all w-max inline-flex items-center gap-2">
              Explore All-on-X <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          {/* Right Column Huge Image */}
          <div className="lg:col-span-7">
            <div className="rounded-[2.5rem] overflow-hidden h-[500px] lg:h-[700px] w-full bg-gray-100 dark:bg-gray-800 relative group transition-colors">
              <img 
                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=2070&auto=format&fit=crop" 
                alt="Medical precision" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" 
              />
              {/* Overlay content */}
              <div className="absolute inset-0 bg-gradient-to-t from-graphite/90 via-transparent to-transparent opacity-80"></div>
              <div className="absolute bottom-10 left-10 text-white max-w-md">
                <h4 className="text-2xl font-display font-medium mb-2">Flawless Registration</h4>
                <p className="text-gray-300">Our proprietary merging protocol ensures optical scans align perfectly with DICOM volumes for zero-error planning.</p>
              </div>
            </div>
          </div>

          {/* Bottom Cards row */}
          <div className="lg:col-span-12 grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-gray-50 dark:bg-[#18181A] border border-gray-200 dark:border-gray-800 rounded-[2.5rem] p-8 md:p-10 flex flex-col justify-between group h-[340px] relative overflow-hidden hover:border-cyan dark:hover:border-cyan transition-colors"
            >
               <div className="absolute inset-0 bg-gradient-to-tr from-gray-100 dark:from-[#18181A] to-white dark:to-[#202022] flex items-center justify-center opacity-50 transition-colors">
                 <div className="w-48 h-48 blur-3xl bg-cyan/20 rounded-full absolute -top-10 -right-10 transition-transform group-hover:scale-150 duration-700"></div>
               </div>
               <div className="relative z-10 flex flex-col h-full justify-between">
                  <div>
                    <span className="text-xs uppercase tracking-widest font-bold text-gray-400">Technology</span>
                    <h3 className="text-4xl font-display mt-4 font-medium text-graphite dark:text-white mb-3 transition-colors">Predictable<br/>Restorations</h3>
                    <p className="text-gray-500 dark:text-gray-400 text-sm transition-colors">Custom abutments and crowns designed concurrently with your surgical guide.</p>
                  </div>
                  <button className="bg-white dark:bg-[#202022] border border-gray-200 dark:border-gray-700 text-graphite dark:text-white rounded-full px-6 py-3 w-fit font-bold flex items-center gap-2 group-hover:bg-graphite group-hover:dark:bg-white group-hover:text-white group-hover:dark:text-graphite transition-colors shadow-sm">
                    View Cases
                  </button>
               </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-gray-50 dark:bg-[#18181A] border border-gray-200 dark:border-gray-800 rounded-[2.5rem] p-8 md:p-10 flex flex-col justify-end group h-[340px] relative overflow-hidden hover:border-graphite dark:hover:border-gray-500 transition-colors"
            >
               <img src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=800&auto=format&fit=crop" alt="Planning layout" className="absolute inset-0 w-full h-full object-cover opacity-20 sepia mix-blend-multiply dark:mix-blend-overlay group-hover:opacity-40 transition-opacity" />
               <div className="relative z-10">
                 <div className="text-2xl font-display font-medium text-graphite dark:text-white max-w-[200px] mb-6 transition-colors">
                   The Digital Planning Process
                 </div>
                 <div className="w-14 h-14 rounded-full border border-gray-300 dark:border-gray-600 flex items-center justify-center group-hover:bg-cyan group-hover:border-cyan transition-colors cursor-pointer bg-white dark:bg-[#202022]">
                   <ArrowRight className="w-6 h-6 text-graphite dark:text-white" />
                 </div>
               </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-graphite text-white rounded-[2.5rem] p-8 md:p-10 flex flex-col justify-end group h-[340px] relative overflow-hidden"
            >
               <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan via-graphite to-graphite mix-blend-overlay"></div>
               <div className="relative z-10">
                 <div className="text-2xl font-display font-medium max-w-[200px] text-white/90 mb-6">
                   Ensuring Surgical Success Rates
                 </div>
                 <div className="w-14 h-14 rounded-full border border-gray-600 flex items-center justify-center group-hover:bg-emerald group-hover:border-emerald transition-colors cursor-pointer bg-graphite">
                   <ArrowRight className="w-6 h-6" />
                 </div>
               </div>
            </motion.div>

          </div>
        </div>
      </motion.div>
    </section>
  );
}
