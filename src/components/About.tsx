import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import SectionHeading from './SectionHeading';
import Reveal from './Reveal';
import Stat from './Stat';

const stats = [
  { value: 10, suffix: '', label: 'Years of Experience', sub: 'Committed to excellence' },
  { value: 830, suffix: '+', label: 'Positive Reviews', sub: 'From happy clients' },
  { value: 350, suffix: '+', label: 'Projects Done', sub: 'Across the globe' },
  { value: 130, suffix: '+', label: 'Technical Experts', sub: 'Working seamlessly 24/7' },
  { value: 10, suffix: '+', label: 'Global Awards', sub: 'Triumphed' }
];

export default function About() {
  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="pointer-events-none absolute left-0 top-1/4 h-[460px] w-[460px] rounded-full bg-[#5227ff]/12 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          {/* Image side */}
          <Reveal direction="left">
            <div className="group relative">
              <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-[#5227ff]/25 via-transparent to-[#ff9ffc]/25 opacity-60 blur-2xl transition-opacity duration-700 group-hover:opacity-100" />
              <div className="relative overflow-hidden rounded-[2rem] border border-white/10 shadow-[0_40px_100px_-30px_rgba(0,0,0,0.9)]">
                <img
                  src="https://images.pexels.com/photos/6804068/pexels-photo-6804068.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200"
                  alt="Maqsusi team of experts collaborating"
                  loading="lazy"
                  className="h-[420px] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 md:h-[520px]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#05050f]/80 via-transparent to-transparent" />
              </div>

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.35, duration: 0.7 }}
                className="glass animate-float absolute -bottom-8 left-6 right-6 flex items-center gap-4 rounded-2xl p-5 shadow-2xl md:left-10 md:right-auto"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#5227ff] to-[#ff9ffc]">
                  <Sparkles className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="font-display text-lg font-bold text-white">10+ Years of Excellence</p>
                  <p className="text-xs text-white/55">Trusted digital transformation partner</p>
                </div>
              </motion.div>
            </div>
          </Reveal>

          {/* Text side */}
          <div>
            <SectionHeading
              align="left"
              eyebrow="About Us"
              title={
                <>
                  Our Dream is <span className="text-gradient">Global Learning Transformation</span>
                </>
              }
              subtitle={
                <>
                  <p className="font-semibold text-white/85">Who We Are</p>
                  <p>
                    At Maqsusi Digital Industries Software, we're your trusted partner in digital transformation.
                  </p>
                  <p>
                    With a decade of experience, we've served diverse industries, delivering excellence, on-time
                    solutions, and quality.
                  </p>
                  <p>
                    Our commitment is to empower your digital journey, driving your success, and positioning you for
                    continued growth in the digital age.
                  </p>
                </>
              }
            />

            <Reveal delay={0.25}>
              <div className="mt-10">
                <a href="#contact" className="btn-primary group">
                  Partner With Us
                  <Sparkles className="h-4 w-4 transition-transform duration-300 group-hover:rotate-12" />
                </a>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Stats */}
        <Reveal delay={0.15}>
          <div className="glass mt-24 grid grid-cols-2 gap-x-6 gap-y-10 rounded-[2rem] px-6 py-12 md:grid-cols-5">
            {stats.map((s) => (
              <Stat key={s.label} value={s.value} suffix={s.suffix} label={s.label} sub={s.sub} />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
