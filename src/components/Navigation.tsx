import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ChevronRight, ArrowUpRight, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null);
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleMouseEnter = (menu: string) => setActiveMegaMenu(menu);
  const handleMouseLeave = () => setActiveMegaMenu(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setShowNav(false);
      } else {
        setShowNav(true);
      }
      setLastScrollY(currentScrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <motion.nav 
      initial={{ y: 0 }}
      animate={{ y: showNav ? 0 : -150 }}
      transition={{ duration: 0.3 }}
      className="fixed top-0 left-0 right-0 z-50 flex flex-col w-full"
    >
      {/* Top Small Navigation */}
      <div className="w-full bg-graphite text-white text-xs py-2 px-4 md:px-8 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <a href="#" className="hover:text-cyan transition-colors">Remote access</a>
          <a href="#" className="hover:text-cyan transition-colors">Join fine-tune</a>
        </div>
        <div className="flex items-center gap-6">
          <a href="mailto:info@3ddx.com" className="hover:text-cyan transition-colors hidden md:block">email us: info@3ddx.com</a>
          <a href="tel:617-820-5279" className="hover:text-cyan transition-colors hidden md:block">617-820-5279</a>
          <div className="flex items-center gap-4">
            <Facebook className="w-3 h-3 hover:text-cyan cursor-pointer transition-colors"/>
            <Twitter className="w-3 h-3 hover:text-cyan cursor-pointer transition-colors"/>
            <Instagram className="w-3 h-3 hover:text-cyan cursor-pointer transition-colors"/>
            <Linkedin className="w-3 h-3 hover:text-cyan cursor-pointer transition-colors"/>
          </div>
        </div>
      </div>

      <div className="w-full p-4 shrink-0 transition-all duration-300">
        <div 
          className="mx-auto w-full max-w-[1600px] bg-white/70 backdrop-blur-xl border border-white/20 shadow-sm rounded-full px-6 py-3 flex items-center justify-between"
          onMouseLeave={handleMouseLeave}
        >
          {/* Logo */}
          <div className="text-2xl font-bold font-display tracking-tighter text-graphite flex items-center gap-2 w-1/4">
            <span className="text-cyan">3D</span>DX
          </div>

          {/* Centered Desktop Links */}
          <div className="hidden lg:flex flex-1 justify-center relative">
            <ul className="flex items-center gap-8 text-sm font-bold text-graphite">
              <li 
                onMouseEnter={() => handleMouseEnter('solutions')}
                className="hover:text-cyan transition-colors cursor-pointer py-2"
              >
                Solutions
              </li>
              <li className="hover:text-cyan transition-colors cursor-pointer py-2">Company</li>
              <li className="hover:text-cyan transition-colors cursor-pointer py-2">Learning Center</li>
              <li className="hover:text-cyan transition-colors cursor-pointer py-2">B2B Solutions</li>
              <li className="hover:text-cyan transition-colors cursor-pointer py-2">Contact Us</li>
            </ul>

            {/* Mega Menu Dropdown */}
            <AnimatePresence>
              {activeMegaMenu === 'solutions' && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-[50px] left-1/2 -translate-x-1/2 w-[800px] bg-graphite/95 backdrop-blur-2xl border border-white/10 rounded-[2rem] overflow-hidden shadow-2xl flex text-white"
                >
                  {/* Left sidebar */}
                  <div className="w-1/3 border-r border-white/10 py-6 flex flex-col">
                    <button className="text-left px-6 py-3 bg-cyan/10 text-cyan font-bold flex justify-between items-center group">
                      Guided surgery solutions
                      <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                    <button className="text-left px-6 py-3 hover:bg-white/5 text-gray-300 hover:text-white transition-colors flex justify-between items-center group">
                      All on X solutions
                      <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                    </button>
                    <button className="text-left px-6 py-3 hover:bg-white/5 text-gray-300 hover:text-white transition-colors flex justify-between items-center group">
                      Restorations
                      <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                    </button>
                    <button className="text-left px-6 py-3 hover:bg-white/5 text-gray-300 hover:text-white transition-colors flex justify-between items-center group">
                      Capital Equipment
                      <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                    </button>
                    <button className="text-left px-6 py-3 hover:bg-white/5 text-gray-300 hover:text-white transition-colors flex justify-between items-center group">
                      Other solutions
                      <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                    </button>
                    <button className="text-left px-6 py-3 hover:bg-white/5 text-gray-300 hover:text-white transition-colors flex justify-between items-center mt-auto border-t border-white/10 font-bold">
                      Shop
                      <ArrowUpRight className="w-4 h-4" />
                    </button>
                  </div>
                  
                  {/* Middle content */}
                  <div className="w-1/3 p-6 flex flex-col border-r border-white/10">
                    <h3 className="text-cyan font-bold mb-6">Guided surgery solutions</h3>
                    <ul className="space-y-4">
                      <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Simple Cases</a></li>
                      <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Complex Cases</a></li>
                    </ul>
                  </div>

                  {/* Right promo */}
                  <div className="w-1/3 p-6 bg-white/5">
                    <h3 className="text-white font-bold mb-4">Featured Product</h3>
                    <div className="rounded-xl overflow-hidden mb-4 aspect-video bg-gray-800">
                      <img src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=1000&auto=format&fit=crop" alt="Dental Model" className="w-full h-full object-cover" />
                    </div>
                    <p className="text-sm text-gray-400">
                      Jump right in — get an overview of the basics and get started.
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Right CTA */}
          <div className="hidden lg:flex items-center justify-end w-1/4">
            <button className="bg-graphite text-white px-6 py-2.5 rounded-full font-bold text-sm hover:bg-cyan hover:text-graphite transition-colors shadow-sm">
              My Account
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-graphite p-2"
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden mt-2 bg-white/95 backdrop-blur-xl border border-white/20 rounded-3xl overflow-hidden px-6 py-4 shadow-xl"
            >
              <ul className="flex flex-col gap-4 text-lg font-display font-medium">
                <li><a href="#" className="block hover:text-cyan transition-colors">Solutions</a></li>
                <li><a href="#" className="block hover:text-cyan transition-colors">Company</a></li>
                <li><a href="#" className="block hover:text-cyan transition-colors">Learning Center</a></li>
                <li><a href="#" className="block hover:text-cyan transition-colors">B2B Solutions</a></li>
                <li className="pt-4 border-t border-gray-100 flex gap-4">
                  <button className="flex-1 bg-cyan text-graphite py-3 rounded-full text-sm font-bold">My Account</button>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
