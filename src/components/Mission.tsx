import { Rocket, HeartHandshake, ShieldCheck } from 'lucide-react';
import SectionHeading from './SectionHeading';
import Reveal from './Reveal';

const pillars = [
  {
    icon: Rocket,
    title: 'Innovation & Excellence',
    desc: 'At MDIS, we are committed to driving innovation and delivering exceptional solutions ensuring the highest standards of quality and performance in everything we do.',
    gradient: 'from-[#5227ff] to-[#8b5cf6]'
  },
  {
    icon: HeartHandshake,
    title: 'Client-Centric Approach',
    desc: "We prioritize our clients' success by building strong, collaborative partnerships, understanding their unique challenges, and providing tailored solutions, measurable results.",
    gradient: 'from-[#8b5cf6] to-[#ff9ffc]'
  },
  {
    icon: ShieldCheck,
    title: 'Integrity and Transparency',
    desc: 'We believe in conducting business with integrity, honesty, and transparency, fostering trust with our clients, partners, and always delivering on our promises.',
    gradient: 'from-[#ff9ffc] to-[#f472b6]'
  }
];

export default function Mission() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-[#5227ff]/10 blur-[150px]" />

      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          eyebrow="Our Mission"
          title={
            <>
              The Values That <span className="text-gradient">Drive Everything We Do</span>
            </>
          }
        />

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {pillars.map((p, i) => (
            <Reveal key={p.title} delay={0.12 * i} className="h-full">
              <div className="card-glow group glass relative flex h-full flex-col items-start overflow-hidden rounded-3xl p-8 transition-all duration-500 hover:-translate-y-2 hover:border-white/20 hover:shadow-[0_26px_70px_-24px_rgba(124,92,255,0.55)]">
                <div
                  className={`absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br ${p.gradient} opacity-10 blur-2xl transition-all duration-700 group-hover:opacity-25 group-hover:scale-125`}
                />
                <div
                  className={`relative flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${p.gradient} shadow-lg transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6`}
                >
                  <p.icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="font-display relative mt-6 text-xl font-bold text-white">{p.title}</h3>
                <p className="relative mt-3 text-sm leading-relaxed text-white/60">{p.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
