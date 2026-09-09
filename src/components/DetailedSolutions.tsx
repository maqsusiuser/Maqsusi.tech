import { Check } from 'lucide-react';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

const rows = [
  {
    num: '01',
    title: 'Beautiful website design with modern UI / UX',
    desc: 'Create stunning, high-converting websites with modern UI/UX that elevate your brand and deliver seamless, engaging experiences. Our designs captivate visitors, simplify navigation, and turn your website into a powerful engine for engagement, conversions, and customer trust.',
    bullets: ['Modern UI/UX that elevates your brand', 'Seamless, engaging experiences', 'A powerful engine for conversions & trust'],
    img: 'https://images.pexels.com/photos/6805152/pexels-photo-6805152.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
    alt: 'Developer crafting a modern website',
    chip: '98% Client Satisfaction',
    chipIcon: '💜'
  },
  {
    num: '02',
    title: 'Empowering your digital marketing strategy',
    desc: 'Increase conversions using smart automation, personalization, and real-time insights — streamlining customer journeys, delivering the right message at the perfect moment, and optimizing every touchpoint to turn prospects into loyal customers.',
    bullets: ['Smart automation & personalization', 'Real-time insights on every touchpoint', 'Turn prospects into loyal customers'],
    img: 'https://images.pexels.com/photos/12969403/pexels-photo-12969403.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
    alt: 'Analytics dashboard for digital marketing',
    chip: '3.2x More Conversions',
    chipIcon: '📈'
  },
  {
    num: '03',
    title: 'Take your brand to the next level design concept',
    desc: 'Transform your brand identity with innovative design concepts that not only elevate your visual appeal but also strengthen your presence across every digital touchpoint. By blending strategy, creativity, and modern aesthetics, we craft designs that resonate with your audience — sparking engagement, inspiring trust, and driving long-term brand loyalty.',
    bullets: ['Innovative brand identity concepts', 'Stronger presence on every touchpoint', 'Designs that spark trust & loyalty'],
    img: 'https://images.pexels.com/photos/7598009/pexels-photo-7598009.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
    alt: 'Brand identity design moodboard',
    chip: 'Brands Amplified',
    chipIcon: '✨'
  }
];

export default function DetailedSolutions() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="pointer-events-none absolute right-0 top-40 h-[420px] w-[420px] rounded-full bg-[#ff9ffc]/10 blur-[130px]" />
      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          eyebrow="What We Craft"
          title={
            <>
              Design, Marketing & Brand Experiences <span className="text-gradient">That Convert</span>
            </>
          }
        />

        <div className="mt-20 space-y-24">
          {rows.map((row, i) => {
            const flipped = i % 2 === 1;
            return (
              <div key={row.num} className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
                {/* Image */}
                <Reveal direction={flipped ? 'right' : 'left'} className={flipped ? 'lg:order-2' : ''}>
                  <div className="group relative">
                    <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-[#5227ff]/25 to-[#ff9ffc]/25 opacity-0 blur-2xl transition-opacity duration-700 group-hover:opacity-100" />
                    <div className="relative overflow-hidden rounded-[2rem] border border-white/10 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.8)]">
                      <img
                        src={row.img}
                        alt={row.alt}
                        loading="lazy"
                        className="h-72 w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 md:h-96"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#05050f]/70 via-transparent to-transparent" />
                    </div>
                    <div className="glass animate-float absolute -bottom-5 left-6 flex items-center gap-3 rounded-2xl px-5 py-3.5 shadow-xl">
                      <span className="text-xl">{row.chipIcon}</span>
                      <span className="text-sm font-semibold text-white">{row.chip}</span>
                    </div>
                    <span className="font-display absolute -top-7 right-4 text-6xl font-bold text-white/10 transition-colors duration-500 group-hover:text-white/20">
                      {row.num}
                    </span>
                  </div>
                </Reveal>

                {/* Text */}
                <Reveal direction={flipped ? 'left' : 'right'} delay={0.1} className={flipped ? 'lg:order-1' : ''}>
                  <div>
                    <span className="font-display text-sm font-bold tracking-[0.3em] text-[#ff9ffc]">0{row.num} —</span>
                    <h3 className="font-display mt-3 text-2xl font-bold leading-snug text-white md:text-3xl">{row.title}</h3>
                    <p className="mt-5 text-[15px] leading-relaxed text-white/60">{row.desc}</p>
                    <ul className="mt-7 space-y-3.5">
                      {row.bullets.map((b) => (
                        <li key={b} className="group flex items-start gap-3">
                          <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#5227ff] to-[#ff9ffc] shadow-[0_4px_14px_-2px_rgba(124,92,255,0.6)] transition-transform duration-300 group-hover:scale-110">
                            <Check className="h-3.5 w-3.5 text-white" strokeWidth={3} />
                          </span>
                          <span className="text-sm text-white/75">{b}</span>
                        </li>
                      ))}
                    </ul>
                    <a href="#contact" className="btn-ghost mt-8 !px-6 !py-3 text-sm">
                      Start Your Project
                    </a>
                  </div>
                </Reveal>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
