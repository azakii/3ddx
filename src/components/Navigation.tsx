import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ChevronRight, ArrowUpRight, Facebook, Twitter, Instagram, Linkedin, Moon, Sun } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null);
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleMouseEnter = (menu: string) => setActiveMegaMenu(menu);
  const handleMouseLeave = () => setActiveMegaMenu(null);

  useEffect(() => {
    // Check initial pref
    if (document.documentElement.classList.contains('dark')) {
      setIsDarkMode(true);
    }
  }, []);

  const toggleTheme = () => {
    const root = document.documentElement;
    root.classList.toggle('dark');
    setIsDarkMode(root.classList.contains('dark'));
  };

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
      className={`fixed top-0 left-0 right-0 z-50 flex flex-col w-full transition-all duration-500`}
    >
      {/* Top Small Navigation */}
      <div className="w-full bg-graphite text-white text-xs py-2 px-4 md:px-8 flex justify-between items-center relative z-20">
        <div className="flex items-center gap-4 text-gray-300">
          <a href="#" className="hover:text-[#188DBA] transition-colors">Remote access</a>
          <a href="#" className="hover:text-[#188DBA] transition-colors">Join fine-tune</a>
        </div>
        <div className="flex items-center gap-6">
          <a href="mailto:info@3ddx.com" className="hover:text-[#188DBA] transition-colors hidden md:block text-gray-300">email us: info@3ddx.com</a>
          <a href="tel:617-820-5279" className="hover:text-[#188DBA] transition-colors hidden md:block text-gray-300">617-820-5279</a>
          <div className="flex items-center gap-4 text-gray-300">
            <Facebook className="w-3 h-3 hover:text-[#188DBA] cursor-pointer transition-colors"/>
            <Twitter className="w-3 h-3 hover:text-[#188DBA] cursor-pointer transition-colors"/>
            <Instagram className="w-3 h-3 hover:text-[#188DBA] cursor-pointer transition-colors"/>
            <Linkedin className="w-3 h-3 hover:text-[#188DBA] cursor-pointer transition-colors"/>
          </div>
        </div>
      </div>

      <div className="w-full shrink-0 transition-all duration-300">
        <div 
          className={`w-full flex items-center justify-between px-6 md:px-12 py-4 transition-colors duration-300 ${
            lastScrollY > 20 
              ? 'bg-white/95 dark:bg-[#0a0a0a]/95 backdrop-blur-xl border-b border-gray-100 dark:border-gray-800 hover:shadow-sm' 
              : 'bg-transparent border-b border-transparent'
          }`}
          onMouseLeave={handleMouseLeave}
        >
          {/* Logo matching uploaded image */}
          <div className="flex items-end font-display tracking-tight leading-none cursor-pointer w-1/4">
            <span className="text-[28px] font-bold text-[#188DBA] mr-1">3D</span>
            <div className="w-0.5 h-8 bg-[#188DBA] mx-1 mr-2 opacity-80"></div>
            <span className="text-[28px] font-medium text-[#F2701D]">Diagnostix</span>
            <span className="text-sm font-bold tracking-widest text-gray-500 mb-[2px] ml-1 uppercase">.com</span>
          </div>

          {/* Centered Desktop Links */}
          <div className="hidden lg:flex flex-1 justify-center relative lg:static">
            <ul className={`flex items-center gap-8 text-[15px] font-medium transition-colors duration-300 ${
              lastScrollY > 20 
                ? 'text-graphite/90 dark:text-gray-200' 
                : 'text-white dark:text-gray-200'
            }`}>
              <li 
                onMouseEnter={() => handleMouseEnter('solutions')}
                className="hover:text-cyan transition-colors cursor-pointer py-2 flex items-center gap-1"
              >
                Solutions
                <ChevronRight className="w-3 h-3" />
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
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full left-0 w-full bg-white dark:bg-[#121212] border-t border-gray-100 dark:border-white/5 hover:shadow-2xl flex text-graphite dark:text-white"
                >
                  <div className="max-w-[1400px] mx-auto w-full flex">
                    {/* Left sidebar */}
                    <div className="w-[30%] border-r border-gray-100 dark:border-white/5 py-6 flex flex-col">
                      <button className="text-left px-8 py-3 bg-cyan/10 text-cyan font-bold flex justify-between items-center group">
                        Guided surgery solutions
                        <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </button>
                      <button className="text-left px-8 py-3 hover:bg-gray-50 dark:hover:bg-white/5 text-gray-600 dark:text-gray-300 hover:text-graphite dark:hover:text-white transition-colors flex justify-between items-center group">
                        All on X solutions
                        <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                      </button>
                      <button className="text-left px-8 py-3 hover:bg-gray-50 dark:hover:bg-white/5 text-gray-600 dark:text-gray-300 hover:text-graphite dark:hover:text-white transition-colors flex justify-between items-center group">
                        Restorations
                        <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                      </button>
                      <button className="text-left px-8 py-3 hover:bg-gray-50 dark:hover:bg-white/5 text-gray-600 dark:text-gray-300 hover:text-graphite dark:hover:text-white transition-colors flex justify-between items-center group">
                        Capital Equipment
                        <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                      </button>
                      <button className="text-left px-8 py-3 hover:bg-gray-50 dark:hover:bg-white/5 text-gray-600 dark:text-gray-300 hover:text-graphite dark:hover:text-white transition-colors flex justify-between items-center group">
                        Other solutions
                        <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                      </button>
                      <button className="text-left px-8 py-3 hover:bg-gray-50 dark:hover:bg-white/5 text-gray-600 dark:text-gray-300 hover:text-graphite dark:hover:text-white transition-colors flex justify-between items-center mt-4 border-t border-gray-100 dark:border-white/5 font-bold text-cyan">
                        Shop
                        <ArrowUpRight className="w-4 h-4" />
                      </button>
                    </div>
                    
                    {/* Middle content */}
                    <div className="w-[45%] p-8 flex flex-col border-r border-gray-100 dark:border-white/5">
                      <h3 className="text-cyan font-bold mb-6 text-lg">Guided surgery solutions</h3>
                      <ul className="space-y-4">
                        <li><a href="#" className="font-medium text-gray-800 dark:text-gray-200 hover:text-cyan transition-colors border-b border-gray-100 dark:border-gray-800 pb-3 block">Simple Cases</a></li>
                        <li><a href="#" className="font-medium text-gray-800 dark:text-gray-200 hover:text-cyan transition-colors block">Complex Cases</a></li>
                      </ul>
                    </div>

                    {/* Right promo */}
                    <div className="w-[25%] p-8 flex flex-col justify-center">
                      <h3 className="text-graphite dark:text-white font-bold mb-4">Featured Product</h3>
                      <div className="rounded-2xl overflow-hidden mb-4 aspect-[16/10] bg-gray-200 dark:bg-gray-800 hover:shadow-sm">
                        <img src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=1000&auto=format&fit=crop" alt="Dental Model" className="w-full h-full object-cover" />
                      </div>
                      <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed font-medium">
                        Jump right in — get an overview of the basics and get started with our digital workflows.
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Right CTA */}
          <div className="hidden lg:flex items-center justify-end w-1/4 gap-4">
            <button 
              onClick={toggleTheme}
              className={`p-2 rounded-full hover:bg-white/10 dark:hover:bg-gray-800 transition-colors ${
                lastScrollY > 20 ? 'text-graphite dark:text-white' : 'text-white'
              }`}
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <button className="bg-[#f6823c] text-white px-6 py-2.5 rounded hover:bg-[#e0702a] transition-all font-medium text-[15px] hover:shadow-sm">
              My account
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden flex items-center gap-4">
            <button 
              onClick={toggleTheme}
              className={`p-2 rounded-full hover:bg-white/10 dark:hover:bg-gray-800 transition-colors ${
                lastScrollY > 20 ? 'text-graphite dark:text-white' : 'text-white'
              }`}
            >
              {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 ${
                lastScrollY > 20 ? 'text-graphite dark:text-white' : 'text-white'
              }`}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white dark:bg-[#0a0a0a] border-b border-gray-200 dark:border-gray-800 overflow-hidden px-6 py-4 hover:shadow-xl absolute w-full transition-colors duration-300"
            >
              <ul className="flex flex-col gap-4 text-lg font-display font-medium dark:text-gray-200">
                <li><a href="#" className="block hover:text-cyan transition-colors">Solutions</a></li>
                <li><a href="#" className="block hover:text-cyan transition-colors">Company</a></li>
                <li><a href="#" className="block hover:text-cyan transition-colors">Learning Center</a></li>
                <li><a href="#" className="block hover:text-cyan transition-colors">B2B Solutions</a></li>
                <li className="pt-4 border-t border-gray-100 dark:border-gray-800 flex gap-4">
                  <button className="flex-1 bg-[#f6823c] text-white py-3 rounded text-sm font-bold">My account</button>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
