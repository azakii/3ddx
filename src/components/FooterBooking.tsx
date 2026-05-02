import { motion } from 'motion/react';

export default function FooterBooking() {
  return (
    <footer className="w-full bg-graphite dark:bg-[#0a0a0a] text-white rounded-[2rem] md:rounded-[3rem] p-8 md:p-16 lg:p-24 relative overflow-hidden transition-colors duration-300">
      <div className="absolute inset-0 bg-gradient-to-br from-cyan/5 dark:from-cyan/10 to-transparent pointer-events-none"></div>
      
      <div className="max-w-[1600px] mx-auto relative z-10 w-full">
        <div className="flex flex-col lg:flex-row gap-12 justify-between mb-16">
          <div className="max-w-2xl w-full">
            <h2 className="text-6xl md:text-8xl lg:text-9xl xl:text-[9rem] font-display font-medium leading-[0.8] tracking-tighter mb-8 break-words hyphens-auto">
              Start a<br/>Case
            </h2>
            <p className="text-gray-400 text-lg md:text-xl font-medium">Partner with 3DDX today for predictable surgical outcomes.</p>
          </div>
          <div className="flex flex-col gap-4 max-w-sm justify-end pb-8">
            <p className="text-gray-300">Need immediate assistance? Call our clinical support team.</p>
            <p className="text-3xl font-display text-cyan">1-800-555-3DDX</p>
          </div>
        </div>

        {/* Form area mirroring the 'Book Online' fields vertically on mobile, row on desktop */}
        <form className="flex flex-col md:flex-row gap-4 items-end w-full border-t border-white/10 pt-16 pb-8">
          
          <div className="flex-1 w-full relative">
            <label className="text-xs text-cyan uppercase tracking-widest absolute -top-6 left-6 font-bold">Your Name</label>
            <input 
              type="text" 
              placeholder="Dr. Full Name"
              className="w-full bg-white/5 border border-white/10 rounded-full px-8 py-5 outline-none focus:border-cyan focus:bg-white/10 transition-colors text-white text-lg placeholder-gray-500"
            />
          </div>

          <div className="flex-1 w-full relative mt-8 md:mt-0">
            <label className="text-xs text-cyan uppercase tracking-widest absolute -top-6 left-6 font-bold">Clinic Name</label>
            <input 
              type="text" 
              placeholder="Practice Name"
              className="w-full bg-white/5 border border-white/10 rounded-full px-8 py-5 outline-none focus:border-cyan focus:bg-white/10 transition-colors text-white text-lg placeholder-gray-500"
            />
          </div>

          <div className="flex-1 w-full relative mt-8 md:mt-0">
            <label className="text-xs text-cyan uppercase tracking-widest absolute -top-6 left-6 font-bold">Service Needed</label>
            <select className="w-full bg-white/5 border border-white/10 rounded-full px-8 py-5 outline-none focus:border-cyan focus:bg-white/10 transition-colors text-white text-lg appearance-none">
              <option className="text-graphite">Guided Surgery</option>
              <option className="text-graphite">Radiology Report</option>
              <option className="text-graphite">Clear Aligners</option>
              <option className="text-graphite">Software Demo</option>
            </select>
          </div>

          <button 
            type="button" 
            className="w-full md:w-auto mt-4 md:mt-0 bg-white text-graphite font-bold rounded-full px-12 py-5 flex items-center justify-center hover:bg-cyan hover:text-graphite transition-colors text-lg whitespace-nowrap"
          >
            Submit Request
          </button>
        </form>

        {/* Bottom Footer Links */}
        <div className="mt-16 pt-8 flex flex-col md:flex-row justify-between text-sm text-gray-500 font-medium border-t border-white/10">
          <ul className="flex flex-wrap gap-8 mb-4 md:mb-0">
            <li><a href="#" className="hover:text-cyan transition-colors">Our Solutions</a></li>
            <li><a href="#" className="hover:text-cyan transition-colors">Company</a></li>
            <li><a href="#" className="hover:text-cyan transition-colors">Integrations</a></li>
            <li><a href="#" className="hover:text-cyan transition-colors">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-cyan transition-colors">Terms of Service</a></li>
          </ul>
          <p>Copyright &copy; 3DDX 2026. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
