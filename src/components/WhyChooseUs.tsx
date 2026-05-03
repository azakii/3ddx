import { motion } from 'motion/react';
import { Target, Users, Zap, ShieldCheck } from 'lucide-react';
import { WordFadeIn } from './WordFadeIn';

export default function WhyChooseUs() {
  const features = [
    {
      title: "Unmatched Precision",
      description: "Our proprietary digital workflows ensure millimeter accuracy for predictable, flawless surgical outcomes every single time.",
      icon: <Target className="w-8 h-8 text-[#F2701D]" />,
    },
    {
      title: "Expert Clinical Support",
      description: "Partner with a dedicated team of digital dentistry experts who review and optimize every case for maximum success.",
      icon: <Users className="w-8 h-8 text-[#F2701D]" />,
    },
    {
      title: "Rapid Turnarounds",
      description: "Streamlined processes and in-house manufacturing mean you get your surgical guides and prosthetics faster than ever.",
      icon: <Zap className="w-8 h-8 text-[#F2701D]" />,
    },
    {
      title: "Guaranteed Compatibility",
      description: "Seamlessly integrate with your existing CBCT scanners, intraoral scanners, and major implant systems.",
      icon: <ShieldCheck className="w-8 h-8 text-[#F2701D]" />,
    }
  ];

  return (
    <section className="px-4 md:px-8 py-16 md:py-24 w-full bg-white dark:bg-[#0a0a0a] transition-colors duration-300">
      <div className="max-w-[1400px] mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <WordFadeIn 
            text="Why Choose Us" 
            as="h2" 
            className="text-4xl md:text-5xl lg:text-6xl font-display font-medium text-graphite dark:text-white uppercase tracking-tight mb-4" 
          />
          <p className="text-gray-500 dark:text-gray-400 text-lg max-w-2xl mx-auto mb-16">
            We are the premier partner for oral surgeons and restorative dentists, delivering enterprise-level precision for your most complex cases.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 text-left">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="flex flex-col items-start"
            >
              <div className="w-16 h-16 rounded-2xl bg-[#F2701D]/10 flex items-center justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-display font-bold text-graphite dark:text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
