import { Check, Zap } from 'lucide-react';
import SectionHeading from './SectionHeading';
import Reveal from './Reveal';

const pods = [
  {
    name: 'Small Pod',
    price: '$7000',
    desc: 'Small pods are designed for stabilizing existing projects and managing support.',
    features: [
      'Dedicated Team',
      'Blend of Mid Level and Senior Developer',
      'SLA or SOW driven',
      'Team Size: 2 Developer, 1 Automation Test Engineer'
    ],
    cta: 'Choose Small Pod',
    featured: false
  },
  {
    name: 'Medium Pod',
    price: '$11000',
    desc: 'Medium pods are designed for increasing development capacity.',
    features: [
      'All the features of Small Pod',
      '50% Solution Architect',
      '100% Business Analyst at No Cost',
      '50% Project Manager',
      'Team Size: 2 Developer, 1 Lead Developer, 1 Automation Test Engineer, 1 BA, 1 PM'
    ],
    cta: 'Choose Medium Pod',
    featured: true
  },
  {
    name: 'Large Pod',
    price: '$15000',
    desc: 'Large pods are designed for large-scale deliveries.',
    features: [
      'All the features of Medium Pod',
      'No Cost Dedicated Project Manager',
      'No Cost Dedicated Business Analyst',
      'No Cost Dedicated Solution Architect',
      'Team Size: 2 Developer, 1 Lead Developer, 1 Solution Architect, 1 Automation Test Engineer, 1 BA, 1 PM'
    ],
    cta: 'Choose Large Pod',
    featured: false
  }
];

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-24 md:py-32">
      <div className="pointer-events-none absolute left-0 top-1/3 h-[500px] w-[500px] rounded-full bg-[#5227ff]/12 blur-[150px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-[#ff9ffc]/8 blur-[130px]" />

      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          eyebrow="Pod Pricing"
          title={
            <>
              Our Pod Pricing — <span className="text-gradient">Choose What You Need</span>
            </>
          }
          subtitle="Flexible, dedicated delivery pods scaled to your goals — from stabilizing existing projects to large-scale transformation."
        />

        <div className="mt-16 grid gap-8 lg:grid-cols-3 lg:items-stretch">
          {pods.map((pod, i) => (
            <Reveal key={pod.name} delay={0.12 * i} className="h-full">
              <div
                className={`card-glow relative flex h-full flex-col rounded-[2rem] p-8 transition-all duration-500 hover:-translate-y-3 ${
                  pod.featured
                    ? 'ring-gradient bg-gradient-to-b from-[#1a1040] to-[#0a0a1c] shadow-[0_30px_80px_-25px_rgba(124,92,255,0.65)] lg:scale-[1.04]'
                    : 'glass hover:border-white/20 hover:shadow-[0_24px_60px_-24px_rgba(124,92,255,0.45)]'
                }`}
              >
                {pod.featured && (
                  <span className="absolute -top-4 left-1/2 flex -translate-x-1/2 items-center gap-1.5 whitespace-nowrap rounded-full bg-gradient-to-r from-[#5227ff] to-[#ff9ffc] px-4 py-1.5 text-[11px] font-bold uppercase tracking-widest text-white shadow-lg">
                    <Zap className="h-3.5 w-3.5" /> Most Popular
                  </span>
                )}

                <h3 className="font-display text-lg font-bold uppercase tracking-[0.18em] text-white/80">{pod.name}</h3>
                <div className="mt-4 flex items-end gap-2">
                  <span className={`font-display text-5xl font-bold ${pod.featured ? 'text-gradient' : 'text-white'}`}>
                    {pod.price}
                  </span>
                  <span className="pb-1.5 text-sm text-white/40">/ pod</span>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-white/55">{pod.desc}</p>

                <div className="my-6 h-px w-full bg-gradient-to-r from-transparent via-white/15 to-transparent" />

                <ul className="flex-1 space-y-3.5">
                  {pod.features.map((f) => (
                    <li key={f} className="group flex items-start gap-3">
                      <span
                        className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full transition-transform duration-300 group-hover:scale-110 ${
                          pod.featured ? 'bg-gradient-to-br from-[#5227ff] to-[#ff9ffc]' : 'border border-[#ff9ffc]/40 bg-white/5'
                        }`}
                      >
                        <Check className="h-3 w-3 text-white" strokeWidth={3.5} />
                      </span>
                      <span className="text-sm leading-relaxed text-white/70">{f}</span>
                    </li>
                  ))}
                </ul>

                <a href="#contact" className={`${pod.featured ? 'btn-primary' : 'btn-ghost'} mt-8 w-full text-sm`}>
                  {pod.cta}
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
