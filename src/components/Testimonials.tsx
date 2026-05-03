import { motion, AnimatePresence } from 'motion/react';
import { Star, ArrowLeft, ArrowRight, User } from 'lucide-react';
import { useState } from 'react';
import { WordFadeIn } from './WordFadeIn';
import AnimatedButton from './AnimatedButton';

export default function Testimonials() {
  const testimonials = [
    {
      quote: "3DDX has completely transformed our guided surgery workflow. The precision of their surgical guides and radiology reports gives us absolute confidence in every procedure.",
      author: "Dr. Sarah Jenkins",
      title: "Oral & Maxillofacial Surgeon, NY",
      image: "https://placehold.co/200x200/eaeaea/888888?text=Avatar+Placeholder"
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
    },
    {
      quote: "The quality of the 3D models and aligner setups exceed anything we've worked with previously. It truly elevates our orthodontic offerings.",
      author: "Dr. James Wilson",
      title: "Orthodontist, TX",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=200&auto=format&fit=crop"
    },
    {
      quote: "Communication with their lab is phenomenal. Any adjustments we need for complex restorative cases are handled swiftly and accurately.",
      author: "Dr. Emily Taylor",
      title: "General Dentist, WA",
      image: ""
    },
    {
      quote: "Integrating their radiology reports into our daily workflow has saved us countless hours. The detailed analysis provides insights we can trust.",
      author: "Dr. Robert Foster",
      title: "Periodontist, IL",
      image: ""
    }
  ];

  const itemsPerPage = 2;
  const totalPages = Math.ceil(testimonials.length / itemsPerPage);

  const [currentPage, setCurrentPage] = useState(0);

  const handleNext = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages - 1));
  };

  const handlePrev = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 0));
  };

  return (
    <section className="py-20 md:py-32 px-4 md:px-8 w-full bg-[#f4f4f5] dark:bg-[#0a0a0a] transition-colors duration-300 rounded-[2.5rem]">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <span className="text-[#188DBA] font-bold tracking-widest uppercase mb-4 block">Clinical Outcomes</span>
            <WordFadeIn 
              text="Trusted by leading clinicians worldwide." 
              as="h2" 
              className="text-4xl md:text-5xl lg:text-6xl font-display font-medium tracking-tighter text-graphite dark:text-white transition-colors" 
            />
          </div>
          
          <div className="flex gap-4 ml-auto items-center">
            <AnimatedButton className="bg-[#188DBA] text-white hover:bg-[#F2701D] px-6 py-3 hidden md:inline-flex text-sm">
              View All Outcomes
            </AnimatedButton>
            <div className="flex gap-2">
              <button 
                onClick={handlePrev}
                disabled={currentPage === 0}
                className="w-14 h-14 rounded-full border border-gray-300 dark:border-gray-700 flex items-center justify-center text-graphite dark:text-white hover:bg-[#188DBA] hover:text-white hover:border-[#188DBA] transition-colors bg-white dark:bg-[#121212] disabled:opacity-50 disabled:hover:bg-white disabled:hover:dark:bg-[#121212] disabled:hover:border-gray-300 disabled:hover:dark:border-gray-700 disabled:hover:text-graphite disabled:hover:dark:text-white"
                aria-label="Previous testimonial"
              >
                <ArrowLeft className="w-6 h-6" />
              </button>
              <button 
                onClick={handleNext}
                disabled={currentPage === totalPages - 1}
                className="w-14 h-14 rounded-full border border-gray-300 dark:border-gray-700 flex items-center justify-center text-graphite dark:text-white hover:bg-[#188DBA] hover:text-white hover:border-[#188DBA] transition-colors bg-white dark:bg-[#121212] disabled:opacity-50 disabled:hover:bg-white disabled:hover:dark:bg-[#121212] disabled:hover:border-gray-300 disabled:hover:dark:border-gray-700 disabled:hover:text-graphite disabled:hover:dark:text-white"
                aria-label="Next testimonial"
              >
                <ArrowRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>

        <div className="relative overflow-visible w-full min-h-[350px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentPage}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="w-full grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {testimonials.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage).map((testimonial, idx) => (
                <div key={idx} className="bg-white dark:bg-[#121212] p-8 md:p-12 border border-gray-100 dark:border-gray-800 rounded-[2rem] flex flex-col justify-between transition-colors h-full">
                  <div>
                    <div className="flex gap-1 mb-8 text-[#F2701D]">
                      {[...Array(5)].map((_, i) => <Star key={i} fill="currentColor" className="w-5 h-5" />)}
                    </div>
                    <p className="text-lg md:text-xl text-graphite dark:text-gray-200 leading-relaxed font-medium mb-10">
                      "{testimonial.quote}"
                    </p>
                  </div>
                  
                  <div className="flex items-center gap-4 shrink-0">
                    {testimonial.image && !testimonial.image.includes('placehold.co') ? (
                      <img src={testimonial.image} alt={testimonial.author} className="w-14 h-14 md:w-16 md:h-16 rounded-full object-cover shadow-sm bg-gray-100 dark:bg-gray-800" />
                    ) : (
                      <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center shadow-sm text-gray-400 dark:text-gray-500">
                        <User className="w-6 h-6 md:w-8 md:h-8" />
                      </div>
                    )}
                    <div>
                      <h4 className="font-display font-bold text-graphite dark:text-white text-lg transition-colors mb-0.5">{testimonial.author}</h4>
                      <p className="text-[#188DBA] font-medium transition-colors text-sm">{testimonial.title}</p>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
        
        {/* Pagination Dots */}
        <div className="flex justify-center mt-12 gap-3">
          {Array.from({ length: totalPages }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentPage(idx)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                idx === currentPage 
                  ? "bg-[#188DBA] w-8" 
                  : "bg-gray-300 dark:bg-gray-700 hover:bg-gray-400"
              }`}
              aria-label={`Go to page ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
