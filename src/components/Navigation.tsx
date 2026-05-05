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
            <svg width="160" height="42" viewBox="0 0 160 42" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M0 24.8503H7.59198L7.89328 24.7268C7.98713 24.6576 8.04146 24.5934 8.05134 24.5342V22.8597C8.05134 22.3608 7.7698 22.1138 7.21163 22.1138H3.94664V17.6683H7.21163C7.7698 17.6683 8.05134 17.4114 8.05134 16.9027V15.2578C8.05134 15.2578 8.04147 15.2381 8.01677 15.2084C7.99701 15.1738 7.95256 15.1343 7.89328 15.0849C7.83401 15.0355 7.73522 14.9911 7.60679 14.9565H0V10.3529H8.20941C9.07876 10.3529 9.71101 10.4122 10.1062 10.5357C10.5013 10.6592 11.015 11.0148 11.6522 11.6125C12.2894 12.2102 12.6055 13.0202 12.6055 14.0378V17.0261C12.6055 17.3818 12.5216 17.777 12.3536 18.2067C12.1857 18.6364 11.9683 18.9871 11.6967 19.2539C11.4299 19.5206 11.0496 19.7379 10.5655 19.896C10.9261 19.9849 11.2373 20.143 11.509 20.3702C11.7806 20.5925 12.0276 20.9333 12.2598 21.3828C12.487 21.8323 12.6055 22.2818 12.6055 22.7263V25.7196C12.6055 26.7569 12.2795 27.5917 11.6325 28.219C11.0644 28.7327 10.5507 29.0785 10.1012 29.2464C9.88883 29.3057 9.63692 29.3502 9.35043 29.3847C9.06394 29.4193 8.68359 29.4391 8.21928 29.4391H0.00988106V24.8355L0 24.8503Z" fill="#0487B3"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M15.5605 10.3624H25.3407C26.7732 10.3624 27.8401 10.7181 28.5464 11.4294C29.2528 12.1406 29.6035 13.2421 29.6035 14.724V25.092C29.6035 26.4503 29.2429 27.5173 28.5217 28.2928C27.8006 29.0683 26.7929 29.4585 25.4988 29.4585H15.5605V10.3674V10.3624ZM20.1147 24.929H23.933C24.4121 24.929 24.7183 24.8499 24.8517 24.6968C24.9851 24.5437 25.0542 24.1683 25.0542 23.5706V15.4699C25.0542 15.3118 24.9554 15.1735 24.7628 15.0599C24.5701 14.9413 24.2886 14.887 23.928 14.887H20.1098V24.9339L20.1147 24.929Z" fill="#0487B3"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M44.3675 12.6251V27.7745H48.1807C50.5566 27.7745 52.3892 27.1077 53.6734 25.774C54.9577 24.4404 55.5998 22.5486 55.5998 20.0986C55.5998 18.8736 55.3825 17.7474 54.9429 16.7101C54.5082 15.6728 53.8809 14.8084 53.0708 14.102C52.4633 13.5735 51.7816 13.1932 51.0308 12.966C50.28 12.7387 49.1835 12.6251 47.7461 12.6251H44.3724H44.3675ZM42.5547 10.837H47.8745C49.3366 10.837 50.5665 10.9803 51.5643 11.2717C52.5621 11.5631 53.4413 12.0275 54.202 12.6696C55.2689 13.5686 56.0987 14.6701 56.6915 15.9692C57.2842 17.2682 57.5756 18.6612 57.5756 20.143C57.5756 21.7978 57.2496 23.2994 56.6026 24.6577C55.9505 26.0161 55.0318 27.1225 53.8463 27.977C53.0609 28.5352 52.2064 28.9304 51.2926 29.1724C50.3788 29.4144 48.9661 29.533 47.0595 29.533H42.5646V10.837H42.5547Z" fill="#F58345"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M61.6595 13.7562H59.8467V10.8369H61.6595V13.7562ZM59.8418 29.5329V15.4109H61.6546V29.5329H59.8418Z" fill="#F58345"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M76.4977 22.3809C76.4977 20.8842 75.9642 19.5753 74.8923 18.4589C73.8205 17.3426 72.5905 16.7845 71.1927 16.7845C69.6762 16.7845 68.387 17.3426 67.3201 18.4589C66.2532 19.5753 65.7197 20.9583 65.7197 22.613C65.7197 24.2678 66.2532 25.5175 67.3152 26.5992C68.3772 27.681 69.6515 28.2243 71.1433 28.2243C72.635 28.2243 73.8353 27.6513 74.9022 26.5103C75.9691 25.3693 76.5026 23.9912 76.5026 22.3809H76.4977ZM76.4977 27.2957C75.9346 28.1107 75.1689 28.7479 74.2057 29.2073C73.2425 29.6716 72.2053 29.8988 71.0939 29.8988C69.0193 29.8988 67.2954 29.1924 65.9173 27.7748C64.5392 26.3572 63.8477 24.6086 63.8477 22.5291C63.8477 20.4496 64.554 18.6466 65.9618 17.2241C67.3695 15.8015 69.1329 15.0902 71.247 15.0902C72.3337 15.0902 73.3315 15.3125 74.2403 15.7521C75.1492 16.1917 75.9 16.8289 76.5026 17.6587V15.4063H78.266V29.5283H76.5026V27.2907L76.4977 27.2957Z" fill="#F58345"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M83.5463 30.6938C83.8179 31.5138 84.3168 32.1559 85.038 32.6104C85.7592 33.0697 86.6285 33.297 87.6559 33.297C89.2662 33.297 90.5554 32.7635 91.5284 31.6916C92.5015 30.6198 92.9856 29.1922 92.9856 27.3992V27.0287C92.299 27.9623 91.5235 28.6637 90.6492 29.1428C89.7749 29.617 88.8117 29.8541 87.7596 29.8541C85.6357 29.8541 83.8723 29.1478 82.4695 27.7302C81.0666 26.3125 80.3652 24.5491 80.3652 22.435C80.3652 20.3209 81.0568 18.6069 82.4448 17.1942C83.8328 15.7815 85.5467 15.0752 87.5917 15.0752C88.7821 15.0752 89.8095 15.2876 90.6789 15.7173C91.5482 16.1471 92.3138 16.8139 92.9856 17.7228V15.421H94.749V27.2016C94.749 29.6714 94.1315 31.5978 92.8967 32.9858C91.6618 34.3738 89.9577 35.0653 87.7843 35.0653C86.1839 35.0653 84.8108 34.6701 83.6648 33.8798C82.5189 33.0895 81.7779 32.0275 81.447 30.7037H83.5512L83.5463 30.6938ZM82.2818 22.3511C82.2818 24.0008 82.8053 25.3839 83.8574 26.4953C84.9046 27.6067 86.1741 28.1648 87.6559 28.1648C89.0538 28.1648 90.2837 27.6067 91.3556 26.4903C92.4274 25.374 92.9609 24.0601 92.9609 22.5536C92.9609 20.9433 92.4324 19.5701 91.3803 18.434C90.3282 17.298 89.0834 16.725 87.6559 16.725C86.2284 16.725 84.9194 17.2683 83.8673 18.3501C82.8152 19.4318 82.2867 20.7655 82.2867 22.3511H82.2818Z" fill="#F58345"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M97.5723 15.4109H99.3357V17.0113C99.8938 16.3692 100.536 15.895 101.267 15.5838C101.998 15.2776 102.838 15.1195 103.776 15.1195C104.814 15.1195 105.737 15.3121 106.547 15.6974C107.357 16.0827 107.995 16.6359 108.469 17.3522C108.795 17.856 109.027 18.4487 109.17 19.1304C109.313 19.812 109.383 20.8147 109.383 22.1435V29.528H107.594V21.6149C107.594 19.9454 107.273 18.7352 106.636 17.9795C105.999 17.2237 104.977 16.8483 103.574 16.8483C102.754 16.8483 102.033 17.0113 101.41 17.3423C100.788 17.6732 100.299 18.1425 99.9383 18.7599C99.716 19.1452 99.5579 19.5848 99.469 20.0738C99.3801 20.5678 99.3357 21.4223 99.3357 22.6473V29.5181H97.5723V15.3961V15.4109Z" fill="#F58345"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M113.356 22.4547C113.356 24.0798 113.874 25.4431 114.912 26.5446C115.949 27.6461 117.238 28.1944 118.779 28.1944C120.32 28.1944 121.57 27.6461 122.597 26.5446C123.625 25.4431 124.139 24.0748 124.139 22.43C124.139 20.7851 123.62 19.3873 122.578 18.3154C121.536 17.2386 120.217 16.7051 118.611 16.7051C117.169 16.7051 115.934 17.2584 114.902 18.3599C113.869 19.4663 113.351 20.8296 113.351 22.4547H113.356ZM111.464 22.4893C111.464 20.4196 112.175 18.6463 113.593 17.1744C115.015 15.7024 116.695 14.9664 118.636 14.9664C120.681 14.9664 122.425 15.6876 123.867 17.1349C125.309 18.5821 126.03 20.306 126.03 22.3065C126.03 24.4107 125.324 26.2087 123.911 27.6955C122.499 29.1823 120.79 29.9281 118.774 29.9281C116.759 29.9281 115.001 29.1971 113.583 27.7399C112.165 26.2828 111.459 24.5293 111.459 22.4843L111.464 22.4893Z" fill="#F58345"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M127.285 25.0926H129.152V25.142C129.152 26.0212 129.404 26.7522 129.908 27.3302C130.412 27.9081 131.034 28.1946 131.78 28.1946C132.526 28.1946 133.079 27.9723 133.549 27.5277C134.018 27.0832 134.255 26.5201 134.255 25.8483C134.255 25.1765 134.067 24.6283 133.697 24.2183C133.326 23.8083 132.65 23.423 131.672 23.0624C130.111 22.5043 129.088 21.9362 128.609 21.3534C128.13 20.7705 127.893 19.9901 127.893 19.017C127.893 17.9106 128.293 16.9721 129.093 16.2015C129.893 15.4309 130.861 15.0457 132.002 15.0457C133.208 15.0457 134.166 15.3865 134.877 16.0731C135.589 16.7597 135.969 17.713 136.018 18.938H134.072C134.028 18.2711 133.82 17.7525 133.435 17.387C133.055 17.0214 132.536 16.8337 131.874 16.8337C131.281 16.8337 130.792 17.0313 130.397 17.4314C130.002 17.8315 129.804 18.3255 129.804 18.9133C129.804 19.3331 129.883 19.6838 130.046 19.9703C130.209 20.2568 130.481 20.5137 130.857 20.7458C131.197 20.9582 131.701 21.1657 132.353 21.3633C133.01 21.5608 133.45 21.7041 133.672 21.7979C134.556 22.1733 135.203 22.6772 135.623 23.2995C136.038 23.9219 136.245 24.7221 136.245 25.6853C136.245 26.9004 135.821 27.9081 134.971 28.7033C134.122 29.4986 133.05 29.8987 131.746 29.8987C130.442 29.8987 129.35 29.464 128.545 28.5947C127.74 27.7253 127.315 26.5547 127.275 25.0827L127.285 25.0926Z" fill="#F58345"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M139.639 29.5329V17.2286H136.957V15.4109H139.639V10.8369H141.452V15.4109H144.134V17.2286H141.452V29.5329H139.639Z" fill="#F58345"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M147.448 13.7562H145.635V10.8369H147.448V13.7562ZM145.635 29.5329V15.4109H147.448V29.5329H145.635Z" fill="#F58345"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M151.115 15.411L154.4 20.7555L157.921 15.411H160.001L155.432 22.1781L159.976 29.533H157.921L154.301 23.6451L150.512 29.533H148.512L153.298 22.2028L149.085 15.411H151.115Z" fill="#F58345"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M141.576 35.2284C141.225 34.7444 140.835 34.3838 140.405 34.1566C139.975 33.9293 139.481 33.8157 138.928 33.8157C138.059 33.8157 137.318 34.1368 136.705 34.7789C136.088 35.4211 135.782 36.1867 135.782 37.0708C135.782 38.0143 136.088 38.8096 136.7 39.4517C137.313 40.0988 138.054 40.4198 138.928 40.4198C139.467 40.4198 139.956 40.3062 140.39 40.079C140.825 39.8518 141.205 39.5159 141.526 39.0713H142.435C142.08 39.7332 141.6 40.2469 141.003 40.6125C140.405 40.973 139.733 41.1558 138.987 41.1558C137.841 41.1558 136.888 40.7656 136.123 39.9851C135.357 39.2047 134.977 38.2316 134.977 37.061C134.977 36.5176 135.08 35.999 135.288 35.51C135.495 35.021 135.797 34.5814 136.197 34.1862C136.567 33.8157 136.982 33.5342 137.446 33.3415C137.906 33.1489 138.41 33.0551 138.948 33.0551C139.723 33.0551 140.42 33.2428 141.037 33.6231C141.655 33.9985 142.144 34.5369 142.504 35.2284H141.586H141.576Z" fill="#6D7072"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M144.005 37.0759C144.005 38.0242 144.312 38.8195 144.929 39.4616C145.546 40.1038 146.307 40.4248 147.211 40.4248C148.115 40.4248 148.841 40.0988 149.454 39.4518C150.061 38.8047 150.367 38.0045 150.367 37.0561C150.367 36.1719 150.051 35.4112 149.424 34.7691C148.797 34.127 148.041 33.8109 147.157 33.8109C146.796 33.8109 146.45 33.8701 146.114 33.9936C145.783 34.1171 145.472 34.2999 145.191 34.537C144.82 34.8531 144.529 35.2334 144.316 35.6879C144.104 36.1423 144 36.6066 144 37.0808L144.005 37.0759ZM143.205 37.061C143.205 36.5177 143.309 36.004 143.516 35.51C143.724 35.0161 144.03 34.5765 144.425 34.1863C144.805 33.8109 145.225 33.5293 145.685 33.3416C146.144 33.1539 146.638 33.0601 147.176 33.0601C147.715 33.0601 148.229 33.1539 148.693 33.3465C149.157 33.5392 149.582 33.8207 149.967 34.2011C150.362 34.5913 150.659 35.026 150.861 35.5051C151.059 35.9842 151.163 36.5078 151.163 37.061C151.163 37.6143 151.079 38.123 150.906 38.5824C150.733 39.0418 150.476 39.4616 150.135 39.842C149.74 40.2766 149.291 40.6027 148.792 40.8249C148.293 41.0472 147.749 41.1559 147.167 41.1559C146.045 41.1559 145.107 40.7657 144.346 39.9753C143.585 39.185 143.205 38.2169 143.205 37.0561V37.061Z" fill="#6D7072"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M152.27 41.0026V33.213H153.391L156.088 39.985L158.775 33.213H159.906V41.0026H159.17V34.1219L156.434 41.0026H155.742L153.001 34.1219V41.0026H152.27Z" fill="#6D7072"/>
              <path d="M36.1473 0H35.0508V40.1778H36.1473V0Z" fill="#0487B3"/>
              <path d="M130.004 40.316C131.174 40.316 132.123 39.3672 132.123 38.1969C132.123 37.0266 131.174 36.0779 130.004 36.0779C128.833 36.0779 127.885 37.0266 127.885 38.1969C127.885 39.3672 128.833 40.316 130.004 40.316Z" fill="#6D7072"/>
            </svg>
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
