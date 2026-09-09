import { ArrowRight, Users } from 'lucide-react';
import SectionHeading from './SectionHeading';
import Reveal from './Reveal';
import Stat from './Stat';

const stats = [
  { value: 33, suffix: 'K+', label: 'Active users around the world' },
  { value: 15, suffix: '+', label: 'Years of best experiences' },
  { value: 18, suffix: '+', label: 'Best award achievement' },
  { value: 80, suffix: 'K+', label: 'Satisfied happy customers' }
];

export default function Trust() {
  return (
    <section id="trust" className="relative overflow-hidden py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-50 [mask-image:radial-gradient(ellipse_70%_70%_at_50%_50%,black,transparent)]" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[560px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#5227ff]/15 blur-[160px]" />

      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          eyebrow="Client Trust"
          title={
            <>
              More than <span className="text-gradient">12,000+ happy clients</span> trust us!
            </>
          }
          subtitle={
            <>
              <p>
                To deliver innovation, quality, and tangible results, reflecting our unwavering commitment to excellence
                and customer success.
              </p>
              <p>
                From startups to global enterprises, we consistently provide solutions that drive growth, streamline
                operations, and enhance brand value.
              </p>
              <p>
                Our clients rely on us not just for our technical expertise, but for our ability to understand their
                unique challenges, craft tailored strategies, and deliver measurable impact. This trust is a testament
                to the long-term relationships we build and the consistent value we bring to every project.
              </p>
            </>
          }
        />

        <Reveal delay={0.25}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a href="#contact" className="btn-primary group">
              Get Started
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
            </a>
            <a href="#contact" className="btn-ghost">
              Hire Us Now
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="glass mt-16 grid grid-cols-2 gap-y-10 rounded-[2rem] px-6 py-12 md:grid-cols-4 md:px-10">
            {stats.map((s) => (
              <Stat key={s.label} value={s.value} suffix={s.suffix} label={s.label} />
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.35}>
          <div className="mt-12 flex items-center justify-center gap-2 text-sm text-white/40">
            <Users className="h-4 w-4 text-[#ff9ffc]" />
            Trusted by teams across life sciences, banking, recruitment & manufacturing
          </div>
        </Reveal>
      </div>
    </section>
  );
}
