import { motion } from 'motion/react';
import { Star } from 'lucide-react';

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

  return (
    <section className="py-20 md:py-24 px-4 md:px-8 w-full bg-titanium dark:bg-[#050505] transition-colors duration-300">
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="max-w-[1600px] mx-auto"
      >
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <span className="text-cyan font-bold tracking-widest uppercase mb-4 block">Clinical Outcomes</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-medium tracking-tighter dark:text-white transition-colors">
              Trusted by leading clinicians worldwide.
            </h2>
          </div>
          <p className="text-gray-500 dark:text-gray-400 max-w-xs transition-colors">
            See how top specialists are scaling their practices and improving predictability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white dark:bg-[#121212] rounded-[2rem] p-8 md:p-10 shadow-sm border border-gray-100 dark:border-gray-800 flex flex-col justify-between h-full hover:shadow-md transition-all duration-300"
            >
              <div>
                <div className="flex gap-1 mb-8 text-cyan">
                  {[...Array(5)].map((_, i) => <Star key={i} fill="currentColor" className="w-5 h-5" />)}
                </div>
                <p className="text-lg md:text-xl text-gray-800 dark:text-gray-200 leading-relaxed font-medium mb-12">
                  "{testimonial.quote}"
                </p>
              </div>
              
              <div className="flex items-center gap-4 mt-auto">
                <img src={testimonial.image} alt={testimonial.author} className="w-14 h-14 rounded-full object-cover grayscale" />
                <div>
                  <h4 className="font-display font-bold text-graphite dark:text-white text-lg transition-colors">{testimonial.author}</h4>
                  <p className="text-gray-500 dark:text-gray-400 font-medium text-sm transition-colors">{testimonial.title}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
