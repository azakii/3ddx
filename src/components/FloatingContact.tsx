import { MessageCircle, Mail, Phone, MessageSquare, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';

export default function FloatingContact() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-8 right-8 z-50 flex flex-col items-end gap-4">
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="flex flex-col gap-3"
          >
            <a href="mailto:info@3ddx.com" className="flex items-center gap-3 bg-white px-5 py-3 rounded-full shadow-xl hover:bg-gray-50 transition-all hover:-translate-y-1 group border border-gray-100">
              <span className="font-bold text-sm text-graphite pr-2">Email Us</span>
              <div className="bg-cyan/10 p-2 rounded-full group-hover:bg-cyan transition-colors">
                <Mail className="w-4 h-4 text-graphite" />
              </div>
            </a>
            <a href="https://wa.me/16178205279" target="_blank" rel="noreferrer" className="flex items-center gap-3 bg-white px-5 py-3 rounded-full shadow-xl hover:bg-gray-50 transition-all hover:-translate-y-1 group border border-gray-100">
              <span className="font-bold text-sm text-graphite pr-2">WhatsApp Us</span>
              <div className="bg-[#25D366]/10 p-2 rounded-full group-hover:bg-[#25D366] transition-colors">
                <MessageSquare className="w-4 h-4 group-hover:text-white transition-colors text-[#25D366]" />
              </div>
            </a>
            <a href="tel:617-820-5279" className="flex items-center gap-3 bg-white px-5 py-3 rounded-full shadow-xl hover:bg-gray-50 transition-all hover:-translate-y-1 group border border-gray-100">
              <span className="font-bold text-sm text-graphite pr-2">Call Us</span>
              <div className="bg-cyan/10 p-2 rounded-full group-hover:bg-cyan transition-colors">
                <Phone className="w-4 h-4 text-graphite" />
              </div>
            </a>
          </motion.div>
        )}
      </AnimatePresence>
      
      <motion.button 
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="bg-[#1483b4] text-white rounded-full p-4 shadow-2xl hover:bg-[#f6823c] transition-colors"
        aria-label="Contact Us"
      >
        {isOpen ? <X className="w-7 h-7" /> : <MessageCircle className="w-7 h-7" />}
      </motion.button>
    </div>
  );
}
