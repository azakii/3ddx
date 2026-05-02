/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navigation from './components/Navigation';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import ServicesBento from './components/ServicesBento';
import ImplantDentistry from './components/ImplantDentistry';
import Testimonials from './components/Testimonials';
import Blog from './components/Blog';
import FAQ from './components/FAQ';
import FooterBooking from './components/FooterBooking';
import FloatingContact from './components/FloatingContact';

export default function App() {
  return (
    <div className="min-h-screen bg-titanium dark:bg-[#050505] transition-colors duration-300">
      <Navigation />
      <main>
        <Hero />
        <TrustBar />
        <ServicesBento />
        <ImplantDentistry />
        <Testimonials />
        <Blog />
        <FAQ />
      </main>
      <FooterBooking />
      <FloatingContact />
    </div>
  );
}
