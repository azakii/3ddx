import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus } from 'lucide-react';
import { WordFadeIn } from './WordFadeIn';
import AnimatedButton from './AnimatedButton';

export default function FAQ() {
  const faqs = [
    {
      question: "What is your typical turnaround time?",
      answer: "Our standard turnaround time for Radiology Reports is 2-3 business days. Implant Planning and Surgical Guides typically take 4-5 business days depending on the complexity of the case. Expedited services are available upon request."
    },
    {
      question: "What CBCT machines are compatible with your service?",
      answer: "We support DICOM files from all major CBCT manufacturers, including Dentsply Sirona, Planmeca, Carestream, Vatech, Morita, and i-CAT. If you can export a multi-file DICOM format, we can process it."
    },
    {
      question: "How do I securely send patient data?",
      answer: "You can securely upload your DICOM files and intraoral scans through our HIPAA-compliant, encrypted portal. We do not accept patient data via unencrypted email."
    },
    {
      question: "Can I review the implant plan before the guide is printed?",
      answer: "Absolutely. Every implant planning case includes an interactive digital review session or a comprehensive PDF report. We only proceed to manufacturing the surgical guide after your explicit clinical approval."
    },
    {
      question: "Are your surgical guides compatible with my implant system?",
      answer: "Yes, our surgical guides are compatible with over 150+ implant systems globally. We utilize versatile sleeve systems (like Steco) or system-specific sleeves based on your guided surgery kit requirements."
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 md:py-24 px-4 md:px-8 w-full bg-titanium dark:bg-[#050505] transition-colors duration-300 rounded-[2.5rem]">
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8"
      >
        <div className="lg:col-span-5">
           <span className="text-cyan font-bold tracking-widest uppercase mb-4 block">FAQ</span>
           <WordFadeIn 
             text="Frequently asked questions." 
             as="h2" 
             className="text-4xl md:text-5xl lg:text-6xl font-display font-medium tracking-tighter text-graphite dark:text-white transition-colors mb-6" 
           />
           <p className="text-gray-500 dark:text-gray-400 text-lg transition-colors mb-10">
             Everything you need to know about our digital workflows and clinical services. Can't find the answer? Get in touch.
           </p>
           
           <AnimatedButton className="bg-[#188DBA] text-white px-8 py-4 hover:bg-[#F2701D]">
             Contact Support
           </AnimatedButton>
        </div>

        <div className="lg:col-span-7 flex flex-col gap-4">
          {faqs.map((faq, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-[#121212] rounded-[1.5rem] border border-gray-200 dark:border-gray-800 overflow-hidden transition-colors duration-300"
            >
              <button 
                onClick={() => toggleFAQ(index)}
                className="w-full text-left px-6 py-6 md:px-8 flex justify-between items-center group cursor-pointer"
              >
                <span className="font-display font-medium text-lg md:text-xl text-graphite dark:text-gray-200 group-hover:text-cyan transition-colors pr-8">
                  {faq.question}
                </span>
                <span className="shrink-0 text-gray-400 dark:text-gray-500 bg-gray-50 dark:bg-gray-900 rounded-full p-2 group-hover:bg-cyan/10 group-hover:text-cyan transition-colors">
                  {openIndex === index ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                </span>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 md:px-8 pb-8 text-gray-500 dark:text-gray-400 leading-relaxed font-medium">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
