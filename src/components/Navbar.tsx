import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight } from 'lucide-react';
import logo from '../assets/logo.ts';

const links = [
  { label: 'Home', href: '#home' },
  { label: 'Solutions', href: '#solutions' },
  { label: 'Services', href: '#services' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' }
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? 'border-b border-white/10 bg-[#05050f]/85 py-3 shadow-[0_10px_40px_-15px_rgba(82,39,255,0.35)] backdrop-blur-xl' : 'bg-transparent py-5'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 md:px-8">
        {/* Logo */}
        <a href="#home" className="group flex items-center gap-2.5">
          <span className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl bg-white/95 p-1.5 shadow-[0_8px_24px_-6px_rgba(124,92,255,0.7)] transition-transform duration-300 group-hover:rotate-6 group-hover:scale-105">
            <img src={logo} alt="Maqsusi logo" className="h-full w-full object-contain" />
          </span>
          <span className="font-display text-xl font-bold tracking-tight text-white">
            Maqsusi<span className="text-gradient">.tech</span>
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="group relative text-sm font-medium text-white/70 transition-colors duration-300 hover:text-white"
              >
                {link.label}
                <span className="absolute -bottom-1.5 left-0 h-px w-full origin-left scale-x-0 bg-gradient-to-r from-[#5227ff] to-[#ff9ffc] transition-transform duration-300 group-hover:scale-x-100" />
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <a href="#contact" className="btn-primary !px-6 !py-2.5 text-sm">
            Get Started
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="glass flex h-10 w-10 items-center justify-center rounded-xl text-white lg:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
            className="overflow-hidden border-b border-white/10 bg-[#05050f]/95 backdrop-blur-2xl lg:hidden"
          >
            <ul className="space-y-1 px-5 py-5">
              {links.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ x: -24, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.06 * i }}
                >
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-xl px-4 py-3 text-sm font-medium text-white/75 transition-colors hover:bg-white/5 hover:text-white"
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
              <li className="pt-3">
                <a href="#contact" onClick={() => setOpen(false)} className="btn-primary w-full text-sm">
                  Get Started
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
