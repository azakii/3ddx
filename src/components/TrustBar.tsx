import { motion } from 'motion/react';

export default function TrustBar() {
  const partners = [
    { name: 'Straumann Group', logo: 'Straumann' },
    { name: 'Nobel Biocare', logo: 'Nobel Biocare' },
    { name: 'Dentsply Sirona', logo: 'Dentsply Sirona' },
    { name: '3Shape', logo: '3Shape' },
    { name: 'exocad', logo: 'exocad' },
    { name: 'Zimmer Biomet', logo: 'Zimmer Biomet' },
  ];

  // Tripling the array to ensure smooth infinite scrolling
  const scrollItems = [...partners, ...partners, ...partners];

  return (
    <section className="py-12 md:py-16 bg-white border-b border-gray-100 w-full overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-4 md:px-8">
        <div className="text-center mb-8">
          <p className="text-sm font-medium text-gray-400 uppercase tracking-widest">
            Trusted by global leaders in digital dentistry
          </p>
        </div>
        
        {/* Infinite sliding container */}
        <div className="relative w-full overflow-hidden flex items-center before:absolute before:left-0 before:w-32 before:h-full before:bg-gradient-to-r before:from-white before:to-transparent before:z-10 after:absolute after:right-0 after:w-32 after:h-full after:bg-gradient-to-l after:from-white after:to-transparent after:z-10">
          <motion.div 
            animate={{ x: ["0%", "-50%"] }}
            transition={{ ease: "linear", duration: 30, repeat: Infinity }}
            className="flex flex-nowrap items-center w-max gap-16 md:gap-32 pr-16 md:pr-32 opacity-60 grayscale hover:grayscale-0 transition-all duration-500"
          >
            {scrollItems.map((partner, index) => (
              <div 
                key={`${partner.name}-${index}`}
                className="text-xl md:text-3xl font-bold font-display text-gray-400 hover:text-graphite transition-colors cursor-default whitespace-nowrap"
              >
                {partner.logo}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
