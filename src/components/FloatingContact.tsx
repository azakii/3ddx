import { MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';

export default function FloatingContact() {
  return (
    <motion.button 
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      className="fixed bottom-8 right-8 z-50 bg-cyan text-graphite rounded-full p-4 shadow-xl hover:bg-white hover:text-graphite transition-all hover:scale-105"
      aria-label="Contact Us"
    >
      <MessageCircle className="w-8 h-8" />
    </motion.button>
  );
}
