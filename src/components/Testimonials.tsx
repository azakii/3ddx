import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      quote: "3DDX has completely transformed our guided surgery workflow. The precision of their surgical guides and radiology reports gives us absolute confidence in every procedure.",
      author: "Dr. Sarah Jenkins",
      title: "Oral & Maxillofacial Surgeon, NY",
      image: "https://images.unsplash.com/photo-1594824436998-d8ea05bbb5eb?q=80&w=200&auto=format&fit=crop"
    },
    {
      quote: "The turnaround time and clinical accuracy for our All-on-X cases have dramatically improved. It's an enterprise-grade solution that acts as an extension of our practice.",
      author: "Dr. Michael Chen",
      title: "Prosthodontist, CA",
      image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=200&auto=format&fit=crop"
    },
    {
      quote: "Their implant planning software integration is seamless. We've reduced our chair time by 30% while maintaining the highest standard of restorative predictability.",
      author: "Dr. Elena Rodriguez",
      title: "Implantologist, FL",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=200&auto=format&fit=crop"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-20 md:py-24 px-4 md:px-8 w-full bg-titanium">
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="max-w-[1600px] mx-auto"
      >
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <span className="text-cyan font-bold tracking-widest uppercase mb-4 block">Clinical Outcomes</span>
            <h2 className="text-4xl md:text-6xl font-display font-medium tracking-tighter">
              Trusted by leading clinicians worldwide.
            </h2>
          </div>
          <div className="flex gap-4 items-center">
            <p className="text-gray-500 max-w-xs mr-4 hidden lg:block">
              See how top specialists are scaling their practices and improving predictability.
            </p>
            <button onClick={prev} className="w-14 h-14 rounded-full border border-gray-300 flex items-center justify-center hover:bg-cyan hover:border-cyan hover:text-graphite transition-all bg-white shadow-sm">
               <ChevronLeft className="w-6 h-6" />
            </button>
            <button onClick={next} className="w-14 h-14 rounded-full border border-gray-300 flex items-center justify-center hover:bg-cyan hover:border-cyan hover:text-graphite transition-all bg-white shadow-sm">
               <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        <div className="relative h-[380px] w-full flex justify-center items-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50, filter: 'blur(4px)' }}
              animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
              exit={{ opacity: 0, x: -50, filter: 'blur(4px)' }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="absolute inset-0 bg-white rounded-[3rem] p-8 md:p-16 shadow-xl border border-gray-100 flex flex-col justify-between w-full h-full"
            >
              <div>
                <div className="flex gap-1 mb-8 text-cyan">
                  {[...Array(5)].map((_, idx) => <Star key={idx} fill="currentColor" className="w-6 h-6" />)}
                </div>
                <p className="text-2xl md:text-4xl text-gray-800 leading-snug tracking-tight font-display font-medium mb-12 max-w-5xl">
                  "{testimonials[currentIndex].quote}"
                </p>
              </div>
              
              <div className="flex items-center gap-6 mt-auto">
                <img src={testimonials[currentIndex].image} alt={testimonials[currentIndex].author} className="w-20 h-20 rounded-full object-cover grayscale" />
                <div>
                  <h4 className="font-display font-bold text-graphite text-xl">{testimonials[currentIndex].author}</h4>
                  <p className="text-gray-500 font-medium">{testimonials[currentIndex].title}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.div>
    </section>
  );
}
