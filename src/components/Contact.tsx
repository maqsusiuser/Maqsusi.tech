import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, Send, CheckCircle2, ArrowDown } from 'lucide-react';
import WebThreads from './WebThreads';
import Reveal from './Reveal';

const info = [
  {
    icon: MapPin,
    title: 'Headquarters',
    lines: [
      '16-2-668/3, First floor, B/S portion,',
      'New Malakpet, opposite Church,',
      'Hyderabad, Telangana 500024'
    ],
    gradient: 'from-[#5227ff] to-[#8b5cf6]'
  },
  {
    icon: Mail,
    title: 'Email Address',
    lines: ['Sujana@maqsusi.tech'],
    gradient: 'from-[#8b5cf6] to-[#d946ef]'
  },
  {
    icon: Phone,
    title: 'Contact Us!',
    lines: ['+91 90105 35867'],
    gradient: 'from-[#d946ef] to-[#ff9ffc]'
  }
];

const inputClass =
  'w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/35 outline-none transition-all duration-300 focus:border-[#ff9ffc]/60 focus:bg-white/[0.07] focus:shadow-[0_0_0_3px_rgba(255,159,252,0.12)]';

export default function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 6000);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="contact" className="relative overflow-hidden">
      {/* CTA band with subtle WebThreads */}
      <div className="relative overflow-hidden border-y border-white/10">
        <div className="absolute inset-0 opacity-50">
          <WebThreads
            color1="#5227FF"
            color2="#FF9FFC"
            color3="#FFFFFF"
            speed={0.3}
            threadCount={5}
            frequency={4}
            spread={0.25}
            taper={1.4}
            position={0.5}
            fanMode="center"
            glow={0.02}
            falloff={0.6}
            thickness={1.0}
            brightness={0.55}
            opacity={0.75}
            mirror={true}
            shimmer={false}
            grain={true}
            grainIntensity={0.03}
            mouseInteraction={false}
            mouseStrength={0.2}
          />
        </div>
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#05050f]/60 via-transparent to-[#05050f]/60" />

        <div className="relative mx-auto max-w-4xl px-5 py-20 text-center md:py-24">
          <Reveal>
            <span className="glass inline-flex items-center gap-2 rounded-full px-5 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#ff9ffc]">
              <span className="h-1.5 w-1.5 animate-pulse-soft rounded-full bg-[#ff9ffc]" />
              Lets Get Connected
            </span>
          </Reveal>
          <Reveal delay={0.12}>
            <h2 className="font-display mt-6 text-3xl font-bold leading-tight text-white md:text-5xl">
              Every big journey starts <br className="hidden md:block" /> with a{' '}
              <span className="text-gradient">single step</span>
            </h2>
          </Reveal>
          <Reveal delay={0.22}>
            <p className="mx-auto mt-5 max-w-xl text-[15px] leading-relaxed text-white/65">
              Your success is our priority. Let's connect.
            </p>
          </Reveal>
          <Reveal delay={0.32}>
            <motion.a
              href="#contact-form"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
              className="btn-primary mx-auto mt-9 group"
            >
              Get In Touch
              <ArrowDown className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-1" />
            </motion.a>
          </Reveal>
        </div>
      </div>

      {/* Contact body */}
      <div id="contact-form" className="relative mx-auto max-w-7xl scroll-mt-24 px-5 py-24 md:px-8 md:py-32">
        <div className="pointer-events-none absolute left-1/2 top-10 h-[420px] w-[760px] -translate-x-1/2 rounded-full bg-[#5227ff]/10 blur-[150px]" />

        <div className="relative grid gap-14 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
          {/* Info */}
          <div>
            <Reveal>
              <span className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#ff9ffc]">
                <span className="h-1.5 w-1.5 animate-pulse-soft rounded-full bg-gradient-to-r from-[#5227ff] to-[#ff9ffc]" />
                Contact
              </span>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="font-display mt-5 text-3xl font-bold leading-tight text-white md:text-[2.75rem] md:leading-[1.15]">
                Trusted By Leading Teams Worldwide —{' '}
                <span className="text-gradient">Get In Touch With Our Professionals!</span>
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-6 max-w-lg text-[15px] leading-relaxed text-white/60">
                “At Labyrinth Global Solutions, we bridge innovation and excellence to deliver solutions that empower
                your success. Reach out to us because your vision is our mission.”
              </p>
            </Reveal>

            <div className="mt-10 space-y-4">
              {info.map((item, i) => (
                <Reveal key={item.title} delay={0.1 * i}>
                  <div className="card-glow group glass flex items-start gap-4 rounded-2xl p-5 transition-all duration-500 hover:-translate-y-1 hover:border-white/20 hover:shadow-[0_18px_44px_-18px_rgba(124,92,255,0.5)]">
                    <div
                      className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${item.gradient} shadow-lg transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6`}
                    >
                      <item.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="font-display text-sm font-bold uppercase tracking-[0.16em] text-white/50">
                        {item.title}
                      </p>
                      {item.lines.map((line) => (
                        <p key={line} className="mt-1 text-sm leading-relaxed text-white/80">
                          {line}
                        </p>
                      ))}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Form */}
          <Reveal direction="right" delay={0.15}>
            <div className="glass ring-gradient relative rounded-[2rem] p-8 md:p-10">
              <h3 className="font-display text-xl font-bold text-white">Send us a message</h3>
              <p className="mt-2 text-sm text-white/55">We usually respond within 24 hours.</p>

              <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="group">
                    <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-white/50">
                      First Name
                    </label>
                    <input required type="text" placeholder="John" className={inputClass} />
                  </div>
                  <div>
                    <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-white/50">
                      Last Name
                    </label>
                    <input required type="text" placeholder="Doe" className={inputClass} />
                  </div>
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-white/50">
                      Telephone
                    </label>
                    <input required type="tel" placeholder="+91 90000 00000" className={inputClass} />
                  </div>
                  <div>
                    <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-white/50">
                      Email
                    </label>
                    <input required type="email" placeholder="you@company.com" className={inputClass} />
                  </div>
                </div>
                <div>
                  <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-white/50">
                    Comment or Message
                  </label>
                  <textarea
                    required
                    rows={5}
                    placeholder="Tell us about your project..."
                    className={`${inputClass} resize-none`}
                  />
                </div>

                <button type="submit" className="btn-primary group w-full">
                  <Send className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                  Submit
                </button>

                {sent && (
                  <motion.div
                    initial={{ opacity: 0, y: 12, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    className="flex items-center gap-3 rounded-xl border border-emerald-400/30 bg-emerald-400/10 px-4 py-3.5 text-sm text-emerald-300"
                  >
                    <CheckCircle2 className="h-5 w-5 shrink-0" />
                    Thank you! Your message has been sent — our team will reach out shortly.
                  </motion.div>
                )}
              </form>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
