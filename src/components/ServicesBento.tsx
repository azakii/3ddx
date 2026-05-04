import { motion } from 'motion/react';
import { ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import { WordFadeIn } from './WordFadeIn';

export default function ServicesBento() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const services = [
    { num: '01', title: 'Implant Planning', desc: 'Precision CBCT merging and nerve mapping.', img: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=800&auto=format&fit=crop' },
    { num: '02', title: 'Surgical Guides', desc: 'Custom printed with ISO-certified materials.', img: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=800&auto=format&fit=crop' },
    { num: '03', title: 'Radiology Reports', desc: 'Board-certified OMR evaluations.', img: 'https://placehold.co/800x600/eaeaea/888888?text=Placeholder+Image' },
    { num: '04', title: 'Aligner Services', desc: 'Full digital setup and staging.', img: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=800&auto=format&fit=crop' },
    { num: '05', title: 'Restorations', desc: 'Custom abutments and crowns.', img: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=800&auto=format&fit=crop' }
  ];

  const visibleItems = 3; // for desktop
  const maxIndex = services.length - visibleItems;

  const next = () => setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  const prev = () => setCurrentIndex((prev) => Math.max(prev - 1, 0));

  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        if (prev >= maxIndex) {
          return 0; // jump back to start
        }
        return prev + 1;
      });
    }, 4000); // 4 seconds between sliding
    return () => clearInterval(interval);
  }, [maxIndex, isHovered]);

  return (
    <section className="px-4 md:px-8 py-12 md:py-16 w-full overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 max-w-[1600px] mx-auto"
      >
        
        {/* Left Big Text Box */}
        <div className="md:col-span-5 bg-white dark:bg-[#121212] rounded-huge p-10 md:p-16 flex flex-col justify-between min-h-[500px] hover:shadow-sm border border-gray-100 dark:border-gray-800 transition-colors duration-300">
          <div className="space-y-4">
             <p className="text-cyan font-medium uppercase tracking-widest text-sm">Our Elite Service Offerings</p>
             <p className="text-gray-500 dark:text-gray-400 text-lg max-w-sm mt-4 transition-colors">
               From single units to complex full-arch rehabilitation, our digital workflow dramatically reduces chair time.
             </p>
          </div>
          <div className="mt-12 w-full overflow-hidden">
            <WordFadeIn 
              text="Digital<br/>Solutions" 
              as="h2" 
              className="text-4xl md:text-5xl lg:text-6xl leading-[0.9] tracking-tighter font-display text-graphite dark:text-white transition-colors duration-300 break-words hyphens-auto" 
            />
          </div>
        </div>

        {/* Right Big Image Box */}
        <div className="md:col-span-7 relative bg-gray-200 dark:bg-gray-800 rounded-huge overflow-hidden min-h-[500px] group border border-gray-100 dark:border-gray-800 transition-colors">
          <img 
            src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2068&auto=format&fit=crop" 
            alt="Dental workflow on screen" 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
          
          <div className="absolute top-8 right-8 max-w-[280px]">
             <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-6 rounded-3xl hidden md:block">
               <p className="font-medium text-white text-lg leading-snug">
                 "3DDX increased our workflow efficiency by 40%."
               </p>
               <p className="text-gray-300 text-sm mt-2">- Dr. Emily Davis</p>
             </div>
          </div>
          
          <div className="absolute bottom-6 md:bottom-8 right-6 md:right-8 left-6 md:left-8 flex flex-col md:flex-row justify-between items-start md:items-end gap-6 md:gap-0">
            <div className="text-white max-w-sm">
               <h3 className="text-2xl md:text-3xl font-display font-medium mb-2">Predictable Outcomes</h3>
               <p className="text-gray-300 text-sm">We process over 50,000 cases annually with an accuracy rate of 99.8%.</p>
            </div>
            <button className="bg-white text-graphite rounded-full px-8 py-4 flex items-center gap-2 font-bold hover:bg-cyan hover:text-graphite transition-all shrink-0">
              Consultation <ArrowUpRight className="w-5 h-5"/>
            </button>
          </div>
        </div>
      </motion.div>

      {/* Horizontal List of Services - Carousel */}
      <div 
        className="mt-12 max-w-[1600px] mx-auto pb-8 relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="flex justify-between items-end mb-6">
          <h3 className="text-2xl font-display font-medium text-graphite dark:text-white transition-colors hidden md:block">Explore Solutions</h3>
          <div className="flex gap-2 ml-auto hidden md:flex">
            <button 
              onClick={prev} 
              disabled={currentIndex === 0}
              className="w-12 h-12 rounded-full border border-gray-200 dark:border-gray-800 flex items-center justify-center hover:bg-cyan hover:border-cyan hover:text-graphite transition-all bg-white dark:bg-[#121212] dark:text-gray-300 hover:shadow-sm disabled:opacity-50 disabled:hover:bg-white disabled:hover:dark:bg-[#121212] disabled:hover:border-gray-200 disabled:hover:dark:border-gray-800 disabled:hover:text-current"
            >
               <ChevronLeft className="w-6 h-6" />
            </button>
            <button 
              onClick={next} 
              disabled={currentIndex === maxIndex}
              className="w-12 h-12 rounded-full border border-gray-200 dark:border-gray-800 flex items-center justify-center hover:bg-cyan hover:border-cyan hover:text-graphite transition-all bg-white dark:bg-[#121212] dark:text-gray-300 hover:shadow-sm disabled:opacity-50 disabled:hover:bg-white disabled:hover:dark:bg-[#121212] disabled:hover:border-gray-200 disabled:hover:dark:border-gray-800 disabled:hover:text-current"
            >
               <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Carousel Container */}
        <div className="w-full relative">
          {/* Mobile view - scrollable */}
          <div className="md:hidden flex gap-4 overflow-x-auto hide-scrollbar pb-4 min-w-max">
            {services.map((service, i) => (
              <motion.div 
                key={service.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white dark:bg-[#121212] border border-gray-200 dark:border-gray-800 rounded-[2rem] p-8 w-[280px] aspect-[4/3] flex flex-col justify-between hover:bg-graphite hover:dark:bg-white transition-all duration-300 cursor-pointer group hover:shadow-sm shrink-0 relative overflow-hidden"
              >
                <img src={service.img} alt={service.title} className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
                <div className="flex justify-between items-start relative z-10">
                  <div className="w-12 h-12 rounded-full border border-gray-200 dark:border-gray-700 flex items-center justify-center font-mono text-sm group-hover:border-gray-700 dark:group-hover:border-gray-300 bg-gray-50 dark:bg-gray-900 group-hover:bg-transparent text-graphite dark:text-gray-300 transition-colors">
                    {service.num}
                  </div>
                  <ArrowUpRight className="w-6 h-6 text-gray-300 dark:text-gray-600 group-hover:text-cyan transition-colors" />
                </div>
                <div className="relative z-10">
                  <h3 className="text-2xl font-display font-medium mb-2 dark:text-gray-100 group-hover:text-white group-hover:dark:text-graphite">{service.title}</h3>
                  <p className="text-gray-500 dark:text-gray-400 group-hover:text-gray-300 group-hover:dark:text-gray-600 text-sm">{service.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Desktop view - carousel */}
          <div className="hidden md:block overflow-hidden w-full relative">
            <motion.div 
              className="flex"
              style={{ width: '100%', gap: '1.5rem' }} // gap-6 is 1.5rem
              animate={{ x: `calc(-${currentIndex * (100 / visibleItems)}% - ${currentIndex * 0.5}rem)` }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
            >
              {services.map((service, i) => (
                <div 
                  key={service.num}
                  className="bg-white dark:bg-[#121212] border border-gray-200 dark:border-gray-800 rounded-[2rem] p-10 flex flex-col justify-between hover:bg-graphite hover:dark:bg-white transition-all duration-300 cursor-pointer group hover:shadow-sm shrink-0 aspect-[4/3] relative overflow-hidden"
                  style={{ width: `calc((100% - ${(visibleItems - 1) * 1.5}rem) / ${visibleItems})` }}
                >
                  <img src={service.img} alt={service.title} className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-30 dark:group-hover:opacity-10 transition-opacity duration-500 blur-[2px]" />
                  <div className="absolute inset-0 bg-gradient-to-t from-graphite/80 dark:from-white/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="flex justify-between items-start relative z-10">
                    <div className="w-12 h-12 rounded-full border border-gray-200 dark:border-gray-700 flex items-center justify-center font-mono text-sm group-hover:border-white/20 dark:group-hover:border-gray-300 bg-gray-50 dark:bg-gray-900 group-hover:bg-transparent text-graphite dark:text-gray-300 group-hover:text-white dark:group-hover:text-graphite transition-colors">
                      {service.num}
                    </div>
                    <ArrowUpRight className="w-6 h-6 text-gray-300 dark:text-gray-600 group-hover:text-cyan transition-colors" />
                  </div>
                  <div className="relative z-10">
                    <h3 className="text-3xl font-display font-medium mb-3 dark:text-gray-100 group-hover:text-white group-hover:dark:text-graphite">{service.title}</h3>
                    <p className="text-gray-500 dark:text-gray-400 group-hover:text-gray-200 group-hover:dark:text-gray-700 text-sm">{service.desc}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
