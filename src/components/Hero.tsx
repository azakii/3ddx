import { motion, useScroll, useTransform, useSpring } from 'motion/react';

export default function Hero() {
  const { scrollY } = useScroll();
  const rawY = useTransform(scrollY, [0, 1000], [0, -500]);
  const rawOpacity = useTransform(scrollY, [0, 400, 800], [1, 1, 0]);
  
  const y = useSpring(rawY, { stiffness: 50, damping: 20, restDelta: 0.001 });
  const opacity = useSpring(rawOpacity, { stiffness: 50, damping: 20, restDelta: 0.001 });

  return (
    <section className="h-[100vh] w-full bg-graphite transition-colors duration-300">
      <motion.div 
        style={{ y, opacity }}
        className="w-full h-full flex flex-col justify-end pt-32 md:pt-40 pb-12 md:pb-16 px-6 md:px-16 bg-graphite transition-colors duration-300 relative"
      >
        
        {/* Background Video */}
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0 opacity-70"
        >
          {/* using a high quality dental/medical stock video reference representation */}
          <source src="https://cdn-cf-east.streamable.com/video/mp4/gnm4rw.mp4?Expires=1778094864606&Key-Pair-Id=APKAIEYUVEN4EVB2OKEQ&Signature=BmDA0vOemP9Bt5zIkWUAaBYPDquEKVGwrR0LikEa0DQzMqns1xnFrFYLTYcbHqNh6nlsg~smC3qn-Mxx7q0WwXPZXxCQtd1ca84C8BZ54M~X9c8eahN7EDM49d9yc~SC4rA5BSdiX7KhYazF3Tjf0YybdCBuSzWAz3SXkEsVlsIKTELC-Ktx0yHokPzlpu5IGQaoHrncoV0r35iKclQ0pUc8BcAQd9jSDvlOheQdCimHAYZTfNIztJs6xI~IIMTp76wqqUhdWo8oBM-cug6YVhC1ECvCoLxigkVYGtNWPEb6OLm3Em1TqiWiHXUwxhh0LEiUClD93UBzvNcTMqrg-Q__" type="video/mp4" />
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
             <button className="bg-[#188DBA] text-white rounded-full px-10 py-5 font-bold text-lg hover:bg-white hover:text-graphite transition-all hover:scale-105 inline-block mt-4 w-max hover:shadow-lg">
               Book an appointment
             </button>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
