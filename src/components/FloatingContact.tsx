import { MessageCircle, Mail, Phone, MessageSquare, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';

export default function FloatingContact() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 md:bottom-8 right-6 md:right-8 z-50 flex flex-col items-end gap-3 pointer-events-none">
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: 15, scale: 0.95, transformOrigin: "bottom right" }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 15, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="flex flex-col bg-white dark:bg-[#121212] rounded-[1.5rem] shadow-2xl border border-gray-100 dark:border-gray-800 w-max overflow-hidden pointer-events-auto"
          >
            <div className="flex flex-col p-2">
              <a href="mailto:info@3ddx.com" className="flex items-center gap-4 px-4 py-3 hover:bg-gray-50 dark:hover:bg-white/5 transition-colors rounded-xl group w-full">
                <div className="bg-cyan/10 dark:bg-cyan/20 p-2.5 rounded-full group-hover:bg-cyan transition-colors shrink-0">
                  <Mail className="w-5 h-5 text-cyan group-hover:text-white dark:group-hover:text-graphite transition-colors" />
                </div>
                <span className="font-bold text-sm text-graphite dark:text-gray-200 group-hover:text-cyan transition-colors whitespace-nowrap pr-4">Email Us</span>
              </a>
              <a href="https://wa.me/16178205279" target="_blank" rel="noreferrer" className="flex items-center gap-4 px-4 py-3 hover:bg-gray-50 dark:hover:bg-white/5 transition-colors rounded-xl group w-full">
                <div className="bg-[#25D366]/10 dark:bg-[#25D366]/20 p-2.5 rounded-full group-hover:bg-[#25D366] transition-colors shrink-0">
                  <MessageSquare className="w-5 h-5 text-[#25D366] group-hover:text-white transition-colors" />
                </div>
                <span className="font-bold text-sm text-graphite dark:text-gray-200 group-hover:text-[#25D366] transition-colors whitespace-nowrap pr-4">WhatsApp Us</span>
              </a>
              <a href="tel:617-820-5279" className="flex items-center gap-4 px-4 py-3 hover:bg-gray-50 dark:hover:bg-white/5 transition-colors rounded-xl group w-full">
                <div className="bg-cyan/10 dark:bg-cyan/20 p-2.5 rounded-full group-hover:bg-cyan transition-colors shrink-0">
                  <Phone className="w-5 h-5 text-cyan group-hover:text-white dark:group-hover:text-graphite transition-colors" />
                </div>
                <span className="font-bold text-sm text-graphite dark:text-gray-200 group-hover:text-cyan transition-colors whitespace-nowrap pr-4">Call Us</span>
              </a>
              <a href="#" className="flex items-center gap-4 px-4 py-3 hover:bg-gray-50 dark:hover:bg-white/5 transition-colors rounded-xl group w-full">
                <div className="bg-cyan/10 dark:bg-cyan/20 p-2.5 rounded-full group-hover:bg-cyan transition-colors shrink-0">
                  <MessageCircle className="w-5 h-5 text-cyan group-hover:text-white dark:group-hover:text-graphite transition-colors" />
                </div>
                <span className="font-bold text-sm text-graphite dark:text-gray-200 group-hover:text-cyan transition-colors whitespace-nowrap pr-4">Chat With Us</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      <motion.button 
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="bg-[#1483b4] dark:bg-cyan text-white dark:text-graphite rounded-full p-4 md:p-5 shadow-2xl hover:bg-[#f6823c] dark:hover:bg-[#f6823c] dark:hover:text-white transition-colors border-2 border-transparent dark:border-cyan/20 flex items-center justify-center shrink-0 pointer-events-auto"
        aria-label={isOpen ? "Close contact menu" : "Contact Us"}
      >
        <motion.div
           animate={{ rotate: isOpen ? 90 : 0 }}
           transition={{ duration: 0.2 }}
        >
          {isOpen ? <X className="w-6 h-6 md:w-7 md:h-7" /> : <MessageCircle className="w-6 h-6 md:w-7 md:h-7" />}
        </motion.div>
      </motion.button>
    </div>
  );
}
