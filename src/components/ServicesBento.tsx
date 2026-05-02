import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

export default function ServicesBento() {
  const services = [
    { num: '01', title: 'Implant Planning', desc: 'Precision CBCT merging and nerve mapping.' },
    { num: '02', title: 'Surgical Guides', desc: 'Custom printed with ISO-certified materials.' },
    { num: '03', title: 'Radiology Reports', desc: 'Board-certified OMR evaluations.' },
    { num: '04', title: 'Aligner Services', desc: 'Full digital setup and staging.' },
    { num: '05', title: 'Restorations', desc: 'Custom abutments and crowns.' }
  ];

  return (
    <section className="px-4 md:px-8 py-12 md:py-16 w-full">
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 max-w-[1600px] mx-auto"
      >
        
        {/* Left Big Text Box */}
        <div className="md:col-span-5 bg-white rounded-huge p-10 md:p-16 flex flex-col justify-between min-h-[500px] shadow-sm border border-gray-100">
          <div className="space-y-4">
             <p className="text-cyan font-medium uppercase tracking-widest text-sm">Our Elite Service Offerings</p>
             <p className="text-gray-500 text-lg max-w-sm mt-4">
               From single units to complex full-arch rehabilitation, our digital workflow dramatically reduces chair time.
             </p>
          </div>
          <div className="mt-12">
            <h2 className="text-6xl md:text-7xl lg:text-[8rem] leading-[0.8] tracking-tighter font-display text-graphite">
              Digital<br/>Workflows
            </h2>
          </div>
        </div>

        {/* Right Big Image Box */}
        <div className="md:col-span-7 relative bg-gray-200 rounded-huge overflow-hidden min-h-[500px] group border border-gray-100">
          <img 
            src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2068&auto=format&fit=crop" 
            alt="Dental workflow on screen" 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
          
          <div className="absolute top-8 right-8 max-w-[280px]">
             <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-6 rounded-3xl">
               <p className="font-medium text-white text-lg leading-snug">
                 "3DDX increased our workflow efficiency by 40%."
               </p>
               <p className="text-gray-300 text-sm mt-2">- Dr. Emily Davis</p>
             </div>
          </div>
          
          <div className="absolute bottom-8 right-8 left-8 flex justify-between items-end">
            <div className="text-white max-w-sm">
               <h3 className="text-3xl font-display font-medium mb-2">Predictable Outcomes</h3>
               <p className="text-gray-300 text-sm">We process over 50,000 cases annually with an accuracy rate of 99.8%.</p>
            </div>
            <button className="bg-white text-graphite rounded-full px-8 py-4 flex items-center gap-2 font-bold hover:bg-cyan hover:text-graphite transition-all shrink-0">
              Consultation <ArrowUpRight className="w-5 h-5"/>
            </button>
          </div>
        </div>
      </motion.div>

      {/* Horizontal List of Services - Full width scroll */}
      <div className="mt-8 max-w-[1600px] mx-auto overflow-x-auto pb-8 hide-scrollbar">
        <div className="flex gap-4 md:gap-6 min-w-max">
          {services.map((service, i) => (
            <motion.div 
              key={service.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white border border-gray-200 rounded-[2rem] p-10 w-[300px] md:w-[380px] aspect-[4/3] flex flex-col justify-between hover:bg-graphite hover:text-white transition-all duration-300 cursor-pointer group shadow-sm"
            >
              <div className="flex justify-between items-start">
                <div className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center font-mono text-sm group-hover:border-gray-700 bg-gray-50 text-graphite">
                  {service.num}
                </div>
                <ArrowUpRight className="w-6 h-6 text-gray-300 group-hover:text-cyan transition-colors" />
              </div>
              <div>
                <h3 className="text-3xl font-display font-medium mb-3">{service.title}</h3>
                <p className="text-gray-500 group-hover:text-gray-400 text-sm">{service.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
