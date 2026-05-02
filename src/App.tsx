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
import FooterBooking from './components/FooterBooking';
import FloatingContact from './components/FloatingContact';

export default function App() {
  return (
    <div className="min-h-screen bg-titanium">
      <Navigation />
      <main>
        <Hero />
        <TrustBar />
        <ServicesBento />
        <ImplantDentistry />
        <Testimonials />
      </main>
      <FooterBooking />
      <FloatingContact />
    </div>
  );
}
