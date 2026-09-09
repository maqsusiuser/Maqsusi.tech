import { motion } from 'framer-motion';
import { Award, Users2, Medal, CheckCircle2 } from 'lucide-react';
import SectionHeading from './SectionHeading';
import Reveal from './Reveal';

const reasons = [
  'Leadership philosophy of investing in its customers growth and success',
  'Reduced cost of enhancements & projects',
  'Diverse set of technology skills',
  'Focused industry expertise',
  'Our customers deal directly with Labyrinth leadership',
  'IT and business expertise on tap',
  'Onsite, near-shore & offshore delivery options',
  'Mature methodologies, PMO governance and tools'
];

const pillars = [
  {
    icon: Award,
    num: '01',
    title: '10+ Years Experience',
    desc: 'We are committed to excellence. Delivering proven and results-driven strategies for your business.',
    gradient: 'from-[#5227ff] to-[#8b5cf6]'
  },
  {
    icon: Users2,
    num: '02',
    title: 'Technical Experts',
    desc: 'Operating flawlessly around the clock, we remain committed to delivering innovative and efficient solutions.',
    gradient: 'from-[#8b5cf6] to-[#d946ef]'
  },
  {
    icon: Medal,
    num: '03',
    title: 'Best Skills & Experience',
    desc: 'We boast the best team, combining expertise, innovation, and a passion for excellence.',
    gradient: 'from-[#d946ef] to-[#ff9ffc]'
  }
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="relative overflow-hidden py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-40 [mask-image:radial-gradient(ellipse_60%_60%_at_30%_40%,black,transparent)]" />
      <div className="pointer-events-none absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-[#ff9ffc]/8 blur-[150px]" />

      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid gap-14 lg:grid-cols-[1.05fr_1fr] lg:gap-20">
          {/* Left: heading + pillars */}
          <div>
            <SectionHeading
              align="left"
              eyebrow="Why Choose Us"
              title={
                <>
                  Your Desirable <span className="text-gradient">Digital Transformation Partner</span>
                </>
              }
              subtitle={
                <>
                  <p>
                    In today's fast paced and ever changing business environment, organizations face constant challenge
                    from technological disruptions to shifting market demands.
                  </p>
                  <p>
                    Staying ahead of the competition requires not only expertise but also a reliable partner who
                    understands your goals and can guide you through complexity.
                  </p>
                </>
              }
            />

            <div className="mt-12 space-y-5">
              {pillars.map((p, i) => (
                <Reveal key={p.num} delay={0.1 * i}>
                  <div className="card-glow group glass flex gap-5 rounded-2xl p-6 transition-all duration-500 hover:-translate-y-1.5 hover:border-white/20 hover:shadow-[0_20px_50px_-20px_rgba(124,92,255,0.5)]">
                    <div
                      className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${p.gradient} shadow-lg transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6`}
                    >
                      <p.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="font-display text-xs font-bold tracking-[0.28em] text-[#ff9ffc]">{p.num} —</p>
                      <h3 className="font-display mt-1 text-lg font-bold text-white">{p.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-white/60">{p.desc}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Right: why partners choose us */}
          <Reveal direction="right" delay={0.15}>
            <div className="glass ring-gradient relative h-full rounded-[2rem] p-8 md:p-10">
              <div className="absolute -top-5 left-8 rounded-full bg-gradient-to-r from-[#5227ff] to-[#ff9ffc] px-5 py-2 text-xs font-bold uppercase tracking-[0.18em] text-white shadow-lg">
                Why partners choose us
              </div>

              <p className="mt-6 text-[15px] leading-relaxed text-white/60">
                Maqsusi tech distinguishes itself as a trusted leader, delivering innovative, tailor-made solutions
                that drive operational excellence, fuel growth, and create lasting value. By combining deep industry
                knowledge with cutting-edge technology, we empower businesses to overcome obstacles, seize
                opportunities, and achieve measurable success.
              </p>

              <ul className="mt-8 grid gap-3.5 sm:grid-cols-1">
                {reasons.map((r, i) => (
                  <motion.li
                    key={r}
                    initial={{ opacity: 0, x: 24 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.05 * i, duration: 0.5 }}
                    className="group flex items-start gap-3"
                  >
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#ff9ffc] transition-transform duration-300 group-hover:scale-125" />
                    <span className="text-sm leading-relaxed text-white/75 transition-colors duration-300 group-hover:text-white">
                      {r}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
