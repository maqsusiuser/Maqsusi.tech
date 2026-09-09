import { MapPin, Mail, Phone, ArrowUp } from 'lucide-react';
import logo from '../assets/logo.ts';

const socials = [
  {
    label: 'LinkedIn',
    path: 'M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z'
  },
  {
    label: 'X',
    path: 'M18.24 2.25h3.31l-7.23 8.26 8.5 11.24h-6.66l-5.21-6.82-5.97 6.82H1.67l7.73-8.84L1.25 2.25h6.83l4.71 6.23 5.45-6.23zm-1.16 17.52h1.83L7.08 4.13H5.12l11.96 15.64z'
  },
  {
    label: 'GitHub',
    path: 'M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.49v-1.7c-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.5-1.11-1.5-.91-.63.07-.62.07-.62 1 .07 1.53 1.06 1.53 1.06.9 1.57 2.36 1.12 2.94.85.09-.66.35-1.12.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.28 2.75 1.05a9.36 9.36 0 0 1 5 0c1.91-1.33 2.75-1.05 2.75-1.05.55 1.4.2 2.44.1 2.7.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.8-4.57 5.06.36.32.68.94.68 1.9v2.81c0 .27.18.6.69.49A10.25 10.25 0 0 0 22 12.25C22 6.58 17.52 2 12 2z'
  }
];

const company = ['About us', 'Partners', 'Contact Us', 'Support', 'Privacy Policy', 'Contact Support'];
const services = ['Mendix', 'Polarion', 'Teamcenter (PLM)', 'AI & ML', 'Digital Marketing', 'Custom Solutions'];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#04040c]">
      <div className="pointer-events-none absolute left-1/2 top-0 h-[300px] w-[700px] -translate-x-1/2 rounded-full bg-[#5227ff]/8 blur-[130px]" />

      <div className="relative mx-auto max-w-7xl px-5 pb-10 pt-16 md:px-8 md:pt-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          {/* Brand */}
          <div>
            <a href="#home" className="flex items-center gap-2.5">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/95 p-1.5 shadow-[0_8px_24px_-6px_rgba(124,92,255,0.7)] transition-transform duration-300 hover:rotate-6 hover:scale-105">
                <img src={logo} alt="Maqsusi logo" className="h-full w-full object-contain" />
              </span>
              <span className="font-display text-xl font-bold text-white">
                Maqsusi<span className="text-gradient">.tech</span>
              </span>
            </a>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/50">
              “With the power of modern science and technology, Maqsusi enables organizations to move forward rapidly
              and address their most demanding health challenges.”
            </p>
            <div className="mt-6 flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href="#home"
                  aria-label={s.label}
                  className="glass flex h-10 w-10 items-center justify-center rounded-xl text-white/60 transition-all duration-300 hover:-translate-y-1 hover:border-[#ff9ffc]/50 hover:text-white hover:shadow-[0_8px_24px_-6px_rgba(255,159,252,0.5)]"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                    <path d={s.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-[0.2em] text-white">Company</h4>
            <ul className="mt-5 space-y-3">
              {company.map((item) => (
                <li key={item}>
                  <a
                    href="#home"
                    className="group flex items-center gap-2 text-sm text-white/55 transition-colors duration-300 hover:text-white"
                  >
                    <span className="h-px w-0 bg-gradient-to-r from-[#5227ff] to-[#ff9ffc] transition-all duration-300 group-hover:w-4" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-[0.2em] text-white">Services</h4>
            <ul className="mt-5 space-y-3">
              {services.map((item) => (
                <li key={item}>
                  <a
                    href="#services"
                    className="group flex items-center gap-2 text-sm text-white/55 transition-colors duration-300 hover:text-white"
                  >
                    <span className="h-px w-0 bg-gradient-to-r from-[#5227ff] to-[#ff9ffc] transition-all duration-300 group-hover:w-4" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-[0.2em] text-white">Get In Touch</h4>
            <ul className="mt-5 space-y-4 text-sm text-white/55">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#ff9ffc]" />
                <span>
                  16-2-668/3, First floor, B/S portion, New Malakpet, opposite Church, Hyderabad, TS 500024
                </span>
              </li>
              <li>
                <a href="mailto:Sujana@maqsusi.tech" className="flex items-center gap-3 transition-colors hover:text-white">
                  <Mail className="h-4 w-4 shrink-0 text-[#ff9ffc]" />
                  Sujana@maqsusi.tech
                </a>
              </li>
              <li>
                <a href="tel:+919010535867" className="flex items-center gap-3 transition-colors hover:text-white">
                  <Phone className="h-4 w-4 shrink-0 text-[#ff9ffc]" />
                  +91 90105 35867
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/8 pt-7 sm:flex-row">
          <p className="text-xs text-white/40">Copyright © 2025 · Maqsusi.tech · All rights reserved</p>
          <a
            href="#home"
            className="glass group flex h-10 w-10 items-center justify-center rounded-xl text-white/60 transition-all duration-300 hover:-translate-y-1 hover:border-[#ff9ffc]/50 hover:text-white hover:shadow-[0_8px_24px_-6px_rgba(255,159,252,0.5)]"
            aria-label="Back to top"
          >
            <ArrowUp className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
