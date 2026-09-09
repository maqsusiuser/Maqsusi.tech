import { motion } from 'framer-motion';
import { Check, Rocket, ArrowRight } from 'lucide-react';
import SectionHeading from './SectionHeading';
import Reveal from './Reveal';

const specializations = ['Customized Solutions', 'Application / Product Lifecycle Management', 'Low-code Solutions'];

export default function LearnMore() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      <div className="pointer-events-none absolute left-0 top-1/3 h-[420px] w-[420px] rounded-full bg-[#ff9ffc]/8 blur-[130px]" />

      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          {/* Text */}
          <div>
            <SectionHeading
              align="left"
              eyebrow="Learn More About Us"
              title={
                <>
                  Your Reliable IT Consulting Partner for{' '}
                  <span className="text-gradient">Seamless Digital Transformation</span>
                </>
              }
              subtitle={
                <>
                  <p>Welcome to the world of innovation and digital excellence!</p>
                  <p>
                    At Maqsusi Digital Industries Software, we are more than just an IT company. We are your partners
                    in transforming ideas into reality.
                  </p>
                </>
              }
            />

            <Reveal delay={0.2}>
              <div className="mt-8">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/50">As pioneers in:</p>
                <ul className="mt-4 space-y-3.5">
                  {specializations.map((s, i) => (
                    <motion.li
                      key={s}
                      initial={{ opacity: 0, x: -24 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 * i, duration: 0.55 }}
                      className="group flex items-center gap-3"
                    >
                      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-[#5227ff] to-[#ff9ffc] shadow-[0_4px_16px_-2px_rgba(124,92,255,0.7)] transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                        <Check className="h-4 w-4 text-white" strokeWidth={3} />
                      </span>
                      <span className="text-[15px] font-medium text-white/80 transition-colors duration-300 group-hover:text-white">
                        {s}
                      </span>
                    </motion.li>
                  ))}
                </ul>
                <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-white/60">
                  We harness the power of technology to create seamless digital experiences that drive growth and
                  inspire change.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="mt-9 flex flex-wrap gap-4">
                <a href="#contact" className="btn-primary group">
                  <Rocket className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  Launch Your Project
                </a>
                <a href="#services" className="btn-ghost group">
                  Explore Services
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
                </a>
              </div>
            </Reveal>
          </div>

          {/* Image */}
          <Reveal direction="right">
            <div className="group relative">
              <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-[#ff9ffc]/20 via-transparent to-[#5227ff]/25 opacity-60 blur-2xl transition-opacity duration-700 group-hover:opacity-100" />
              <div className="relative overflow-hidden rounded-[2rem] border border-white/10 shadow-[0_40px_100px_-30px_rgba(0,0,0,0.9)]">
                <img
                  src="https://images.pexels.com/photos/7988218/pexels-photo-7988218.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200"
                  alt="Diverse team collaborating on a digital transformation project"
                  loading="lazy"
                  className="h-[400px] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 md:h-[480px]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#05050f]/75 via-transparent to-transparent" />
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="glass animate-float-slow absolute bottom-8 left-8 rounded-2xl px-6 py-4 shadow-2xl"
                >
                  <p className="font-display text-2xl font-bold text-gradient">12,000+</p>
                  <p className="text-xs text-white/60">Happy clients worldwide</p>
                </motion.div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
