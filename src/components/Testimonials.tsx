import { motion, AnimatePresence } from 'motion/react';
import { Star, ArrowLeft, ArrowRight } from 'lucide-react';
import { useState } from 'react';

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

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 md:py-32 px-4 md:px-8 w-full bg-[#f4f4f5] dark:bg-[#0a0a0a] transition-colors duration-300">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <span className="text-[#188DBA] font-bold tracking-widest uppercase mb-4 block">Clinical Outcomes</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-medium tracking-tighter text-graphite dark:text-white transition-colors">
              Trusted by leading clinicians worldwide.
            </h2>
          </div>
          
          <div className="flex items-center gap-4">
            <button 
              onClick={handlePrev}
              className="w-14 h-14 rounded-full border border-gray-300 dark:border-gray-700 flex items-center justify-center text-graphite dark:text-white hover:bg-[#188DBA] hover:text-white hover:border-[#188DBA] transition-colors bg-white dark:bg-[#121212]"
              aria-label="Previous testimonial"
            >
              <ArrowLeft className="w-6 h-6" />
            </button>
            <button 
              onClick={handleNext}
              className="w-14 h-14 rounded-full border border-gray-300 dark:border-gray-700 flex items-center justify-center text-graphite dark:text-white hover:bg-[#188DBA] hover:text-white hover:border-[#188DBA] transition-colors bg-white dark:bg-[#121212]"
              aria-label="Next testimonial"
            >
              <ArrowRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        <div className="relative overflow-hidden w-full h-[400px] rounded-[2rem]">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="absolute inset-0 bg-white dark:bg-[#121212] p-8 md:p-16 border border-gray-100 dark:border-gray-800 flex flex-col justify-center transition-colors"
            >
              <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center md:items-start h-full">
                <div className="flex-1">
                  <div className="flex gap-1 mb-8 text-[#F2701D]">
                    {[...Array(5)].map((_, i) => <Star key={i} fill="currentColor" className="w-6 h-6" />)}
                  </div>
                  <p className="text-2xl md:text-3xl lg:text-4xl text-graphite dark:text-gray-200 leading-tight font-medium mb-12">
                    "{testimonials[currentIndex].quote}"
                  </p>
                </div>
                
                <div className="flex items-center gap-6 shrink-0 pt-4 md:pt-0">
                  <img src={testimonials[currentIndex].image} alt={testimonials[currentIndex].author} className="w-20 h-20 md:w-24 md:h-24 rounded-full object-cover shadow-lg" />
                  <div>
                    <h4 className="font-display font-bold text-graphite dark:text-white text-xl md:text-2xl transition-colors mb-1">{testimonials[currentIndex].author}</h4>
                    <p className="text-[#188DBA] font-medium transition-colors text-sm md:text-base">{testimonials[currentIndex].title}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
        
        {/* Pagination Dots */}
        <div className="flex justify-center mt-8 gap-3">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                idx === currentIndex 
                  ? "bg-[#188DBA] w-8" 
                  : "bg-gray-300 dark:bg-gray-700 hover:bg-gray-400"
              }`}
              aria-label={`Go to testimonial ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
