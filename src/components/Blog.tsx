import { motion } from 'motion/react';
import { ArrowUpRight, Search, FileText, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import { WordFadeIn } from './WordFadeIn';

export default function Blog() {
  const blogPosts = [
    {
      id: 1,
      tag: "Case Study",
      title: "Optimizing the All-on-X Workflow for Full-Arch Restorations",
      excerpt: "How Dr. Jenkins reduced chair time by 30% using combined CBCT and intraoral scan merging techniques.",
      image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=800&auto=format&fit=crop",
      date: "Nov 12, 2026",
      readTime: "5 min read"
    },
    {
      id: 2,
      tag: "Technology",
      title: "The Future of Surgical Guides: AI-Driven Predictability",
      excerpt: "Exploring the impact of machine learning algorithms on nerve mapping and implant placement accuracy.",
      image: "https://images.unsplash.com/photo-1563213126-a4273aed2016?q=80&w=800&auto=format&fit=crop",
      date: "Oct 28, 2026",
      readTime: "7 min read"
    },
    {
      id: 3,
      tag: "Clinical Update",
      title: "Best Practices for Capturing High-Quality CBCT Scans",
      excerpt: "A step-by-step guide to minimizing artifacts and ensuring clear scans for complex radiological reports.",
      image: "https://placehold.co/800x600/eaeaea/888888?text=Placeholder+Image",
      date: "Oct 15, 2026",
      readTime: "4 min read"
    },
    {
      id: 4,
      tag: "Interview",
      title: "Dr. Chen's Approach to Complex Aligner Cases",
      excerpt: "An in-depth look at managing challenging orthodontic movements using digital staging and custom aligners.",
      image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=800&auto=format&fit=crop",
      date: "Sep 30, 2026",
      readTime: "6 min read"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleItems = 3;
  const maxIndex = blogPosts.length - visibleItems;

  const next = () => setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  const prev = () => setCurrentIndex((prev) => Math.max(prev - 1, 0));

  return (
    <section className="py-20 md:py-24 px-4 md:px-8 w-full bg-white dark:bg-[#0a0a0a] transition-colors duration-300 overflow-hidden">
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="max-w-[1600px] mx-auto"
      >
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-8">
          <div className="max-w-2xl">
            <span className="text-cyan font-bold tracking-widest uppercase mb-4 block flex items-center gap-2">
              <FileText className="w-5 h-5" /> 3DDX Insights
            </span>
            <WordFadeIn 
              text="Clinical expertise,<br/>delivered digitally." 
              as="h2" 
              className="text-4xl md:text-5xl lg:text-6xl font-display font-medium tracking-tighter text-graphite dark:text-white transition-colors" 
            />
          </div>
          <div className="flex gap-2 ml-auto">
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
            {blogPosts.map((post, i) => (
              <motion.div 
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-titanium dark:bg-[#121212] rounded-[2rem] overflow-hidden w-[300px] flex flex-col hover:-translate-y-2 transition-transform duration-300 group border border-gray-100 dark:border-gray-800 shrink-0"
              >
                <div className="h-48 overflow-hidden relative">
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 grayscale group-hover:grayscale-0" />
                  <div className="absolute top-4 left-4 bg-white/90 dark:bg-black/80 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-graphite dark:text-gray-200 uppercase tracking-wider">
                    {post.tag}
                  </div>
                </div>
                <div className="p-6 flex flex-col grow">
                  <div className="flex gap-4 text-xs font-medium text-gray-500 dark:text-gray-400 mb-3">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-display font-medium leading-tight mb-3 text-graphite dark:text-white group-hover:text-cyan transition-colors">{post.title}</h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm mb-6 grow line-clamp-3">{post.excerpt}</p>
                  
                  <button className="flex items-center gap-2 text-sm font-bold text-graphite dark:text-white group-hover:text-cyan transition-colors mt-auto w-max">
                    Read More <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Desktop view - carousel */}
          <div className="hidden md:block overflow-hidden w-full relative">
            <motion.div 
              className="flex"
              style={{ width: '100%', gap: '1.5rem' }} // gap-6
              animate={{ x: `calc(-${currentIndex * (100 / visibleItems)}% - ${currentIndex * 0.5}rem)` }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
            >
              {blogPosts.map((post, i) => (
                <div 
                  key={post.id}
                  className="bg-titanium dark:bg-[#121212] rounded-[2.5rem] overflow-hidden flex flex-col hover:-translate-y-2 transition-transform duration-300 group border border-gray-100 dark:border-gray-800 shrink-0"
                  style={{ width: `calc((100% - ${(visibleItems - 1) * 1.5}rem) / ${visibleItems})` }}
                >
                   <div className="h-56 xl:h-64 overflow-hidden relative">
                    <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 grayscale group-hover:grayscale-0" />
                    <div className="absolute top-6 left-6 bg-white/90 dark:bg-black/80 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-bold text-graphite dark:text-gray-200 uppercase tracking-wider">
                      {post.tag}
                    </div>
                  </div>
                  <div className="p-8 xl:p-10 flex flex-col grow">
                    <div className="flex gap-4 text-sm font-medium text-gray-500 dark:text-gray-400 mb-4">
                      <span>{post.date}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>
                    <h3 className="text-2xl xl:text-3xl font-display font-medium leading-tight mb-4 text-graphite dark:text-gray-100 group-hover:text-cyan transition-colors">{post.title}</h3>
                    <p className="text-gray-500 dark:text-gray-400 mb-8 grow line-clamp-3 leading-relaxed">{post.excerpt}</p>
                    
                    <button className="flex items-center gap-2 font-bold text-graphite dark:text-white group-hover:text-cyan transition-colors mt-auto w-max">
                      Read More <ArrowUpRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
