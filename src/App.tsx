import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import Solutions from './components/Solutions';
import DetailedSolutions from './components/DetailedSolutions';
import Pricing from './components/Pricing';
import Trust from './components/Trust';
import Testimonials from './components/Testimonials';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import About from './components/About';
import LearnMore from './components/LearnMore';
import Mission from './components/Mission';
import Contact from './components/Contact';
import Footer from './components/Footer';

function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 700);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.a
          href="#home"
          initial={{ opacity: 0, y: 24, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 24, scale: 0.8 }}
          transition={{ duration: 0.35 }}
          aria-label="Back to top"
          className="fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#5227ff] to-[#ff9ffc] text-white shadow-[0_12px_36px_-8px_rgba(124,92,255,0.8)] transition-transform duration-300 hover:-translate-y-1.5 hover:scale-110"
        >
          <ArrowUp className="h-5 w-5" />
        </motion.a>
      )}
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#05050f] text-white">
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Solutions />
        <DetailedSolutions />
        <Pricing />
        <Trust />
        <Testimonials />
        <Services />
        <WhyChooseUs />
        <About />
        <LearnMore />
        <Mission />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}
