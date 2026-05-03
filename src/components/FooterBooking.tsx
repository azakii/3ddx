import { motion } from 'motion/react';
import { Facebook, Instagram, Linkedin, Twitter, Mail } from 'lucide-react';

export default function FooterBooking() {
  return (
    <footer className="w-full bg-graphite dark:bg-[#0a0a0a] text-white p-8 md:p-16 lg:p-24 relative overflow-hidden transition-colors duration-300">
      <div className="absolute inset-0 bg-gradient-to-br from-[#188DBA]/5 dark:from-[#188DBA]/10 to-transparent pointer-events-none"></div>
      
      <div className="max-w-[1400px] mx-auto relative z-10 w-full">
        <div className="flex flex-col lg:flex-row gap-12 justify-between mb-16">
          <div className="max-w-2xl w-full">
            <h2 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-display font-medium leading-[0.8] tracking-tighter mb-8 break-words hyphens-auto">
              Book an<br/>Appointment
            </h2>
            <p className="text-gray-400 text-lg md:text-xl font-medium">Partner with 3DDX today for predictable surgical outcomes.</p>
          </div>
          <div className="flex flex-col gap-4 max-w-sm justify-end pb-8">
            <p className="text-gray-300">Need immediate assistance? Call our clinical support team.</p>
            <p className="text-3xl font-display text-[#188DBA]">1-800-555-3DDX</p>
            <a href="mailto:info@3ddx.com" className="flex items-center gap-2 text-xl mt-2 text-gray-300 hover:text-[#188DBA] transition-colors group">
              <Mail className="w-5 h-5 group-hover:text-[#F2701D] transition-colors" /> info@3ddx.com
            </a>
          </div>
        </div>

        {/* Form area mirroring the 'Book Online' fields vertically on mobile, row on desktop */}
        <form className="flex flex-col md:flex-row gap-4 items-end w-full border-t border-white/10 pt-16 pb-8">
          
          <div className="flex-1 w-full relative">
            <label className="text-xs text-[#188DBA] uppercase tracking-widest absolute -top-6 left-6 font-bold">Your Name</label>
            <input 
              type="text" 
              placeholder="Dr. Full Name"
              className="w-full bg-white/5 border border-white/10 rounded-full px-8 py-5 outline-none focus:border-[#188DBA] focus:bg-white/10 transition-colors text-white text-lg placeholder-gray-500"
            />
          </div>

          <div className="flex-1 w-full relative mt-8 md:mt-0">
            <label className="text-xs text-[#188DBA] uppercase tracking-widest absolute -top-6 left-6 font-bold">Clinic Name</label>
            <input 
              type="text" 
              placeholder="Practice Name"
              className="w-full bg-white/5 border border-white/10 rounded-full px-8 py-5 outline-none focus:border-[#188DBA] focus:bg-white/10 transition-colors text-white text-lg placeholder-gray-500"
            />
          </div>

          <div className="flex-1 w-full relative mt-8 md:mt-0">
            <label className="text-xs text-[#188DBA] uppercase tracking-widest absolute -top-6 left-6 font-bold">Service Needed</label>
            <select className="w-full bg-white/5 border border-white/10 rounded-full px-8 py-5 outline-none focus:border-[#188DBA] focus:bg-white/10 transition-colors text-white text-lg appearance-none">
              <option className="text-graphite">Guided Surgery</option>
              <option className="text-graphite">Radiology Report</option>
              <option className="text-graphite">Clear Aligners</option>
              <option className="text-graphite">Software Demo</option>
            </select>
          </div>

          <button 
            type="button" 
            className="w-full md:w-auto mt-4 md:mt-0 bg-[#F2701D] text-white font-bold rounded-full px-12 py-5 flex items-center justify-center hover:bg-[#d65f12] transition-colors text-lg whitespace-nowrap"
          >
            Submit Request
          </button>
        </form>

        {/* Bottom Footer Links */}
        <div className="mt-16 pt-8 flex flex-col md:flex-row gap-8 justify-between items-center text-sm text-gray-500 font-medium border-t border-white/10">
          <ul className="flex flex-wrap gap-8 justify-center md:justify-start">
            <li><a href="#" className="hover:text-[#188DBA] transition-colors">Our Solutions</a></li>
            <li><a href="#" className="hover:text-[#188DBA] transition-colors">Company</a></li>
            <li><a href="#" className="hover:text-[#188DBA] transition-colors">Integrations</a></li>
            <li><a href="#" className="hover:text-[#188DBA] transition-colors">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-[#188DBA] transition-colors">Terms of Service</a></li>
          </ul>
          
          <div className="flex items-center gap-6">
            <a href="#" aria-label="Facebook" className="text-gray-400 hover:text-[#188DBA] transition-colors"><Facebook className="w-5 h-5" /></a>
            <a href="#" aria-label="Instagram" className="text-gray-400 hover:text-[#188DBA] transition-colors"><Instagram className="w-5 h-5" /></a>
            <a href="#" aria-label="Twitter" className="text-gray-400 hover:text-[#188DBA] transition-colors"><Twitter className="w-5 h-5" /></a>
            <a href="#" aria-label="LinkedIn" className="text-gray-400 hover:text-[#188DBA] transition-colors"><Linkedin className="w-5 h-5" /></a>
          </div>

          <p className="text-center md:text-right">Copyright &copy; 3DDX 2026. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
