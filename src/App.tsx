/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import WhyChooseUs from './components/WhyChooseUs';
import ServicesBento from './components/ServicesBento';
import ImplantDentistry from './components/ImplantDentistry';
import Testimonials from './components/Testimonials';
import Blog from './components/Blog';
import FAQ from './components/FAQ';
import FooterBooking from './components/FooterBooking';
import FloatingContact from './components/FloatingContact';
import Preloader from './components/Preloader';
import ParallaxSection from './components/ParallaxSection';

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // We keep loading true while Preloader animates.
    // It's removed after animation.
    if (!loading) {
      document.body.style.overflow = 'unset';
    } else {
      document.body.style.overflow = 'hidden';
    }
  }, [loading]);

  return (
    <div className="min-h-screen bg-white dark:bg-[#050505] transition-colors duration-300 flex flex-col">
      {loading && <Preloader onComplete={() => setLoading(false)} />}
      
      <Navigation />
      
      <div className="w-full relative h-[80vh]">
        <div className="fixed top-0 left-0 w-full h-[80vh] z-0">
          <Hero />
        </div>
      </div>

      <div className="relative z-10 flex-grow px-4 md:px-8 pb-4 md:pb-8 pt-8 bg-white dark:bg-[#050505]">
        <div className="w-full max-w-[1800px] mx-auto flex flex-col gap-8 md:gap-16">
          <main className="flex flex-col gap-8 md:gap-16">
            <div className="overflow-hidden bg-white dark:bg-[#0a0a0a]">
              <TrustBar />
            </div>

            <div className="overflow-hidden bg-white dark:bg-[#0a0a0a]">
              <WhyChooseUs />
            </div>
            <div className="overflow-hidden bg-white dark:bg-[#0a0a0a]">
              <ServicesBento />
            </div>
            <div className="overflow-hidden bg-white dark:bg-[#0a0a0a]">
              <ImplantDentistry />
            </div>
          </main>
        </div>
      </div>
      
      <div className="relative z-10 w-full overflow-hidden bg-white dark:bg-[#050505] py-8 md:py-16">
        <div className="w-full overflow-hidden bg-[#050505]">
          <ParallaxSection />
        </div>
      </div>

      <div className="relative z-10 flex-grow px-4 md:px-8 pb-4 md:pb-8 bg-white dark:bg-[#050505]">
        <div className="w-full max-w-[1800px] mx-auto flex flex-col gap-8 md:gap-16">
          <main className="flex flex-col gap-8 md:gap-16">
            <div className="overflow-hidden bg-white dark:bg-[#0a0a0a]">
              <Testimonials />
            </div>
            <div className="overflow-hidden bg-white dark:bg-[#0a0a0a]">
              <Blog />
            </div>
            <div className="overflow-hidden bg-white dark:bg-[#0a0a0a]">
              <FAQ />
            </div>
          </main>
          <FooterBooking />
        </div>
      </div>
      <FloatingContact />
    </div>
  );
}
