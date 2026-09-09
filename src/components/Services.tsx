import { Blocks, GitBranch, Brain, Megaphone, ArrowUpRight } from 'lucide-react';
import SectionHeading from './SectionHeading';
import Reveal from './Reveal';

const services = [
  {
    icon: Blocks,
    title: 'Mendix',
    desc: "In today's world, staying ahead of the competition requires agility and ability to rapidly deploy custom applications. That's where Mendix comes in — a powerful low-code development platform that enables us to build robust and scalable applications faster than ever.",
    img: 'https://images.pexels.com/photos/6805152/pexels-photo-6805152.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
    alt: 'Mendix low-code development'
  },
  {
    icon: GitBranch,
    title: 'Polarion',
    desc: 'Welcome to the cutting-edge world of Polarion Solutions & Development, where innovation meets excellence! We empower businesses and individuals with state-of-the-art Polarion Solutions that redefine possibilities and accelerate growth.',
    img: 'https://images.pexels.com/photos/38427501/pexels-photo-38427501.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
    alt: 'Polarion ALM solutions'
  },
  {
    icon: Brain,
    title: 'AI & ML',
    desc: 'At LGS, we specialize in providing cutting-edge Artificial Intelligence (AI) and Machine Learning (ML) solutions that drive innovation and business transformation. With a focus on scalability and performance, we are dedicated to delivering AI/ML solutions that create long-term value.',
    img: 'https://images.pexels.com/photos/17483873/pexels-photo-17483873.png?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
    alt: 'Artificial intelligence and machine learning'
  },
  {
    icon: Megaphone,
    title: 'Digital Marketing',
    desc: 'From crafting captivating websites that leave lasting impressions to implementing data-driven SEO strategies that propel businesses. Social media marketing, content creation, and everything in between — we orchestrate the perfect symphony.',
    img: 'https://images.pexels.com/photos/12969403/pexels-photo-12969403.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
    alt: 'Digital marketing strategy'
  }
];

export default function Services() {
  return (
    <section id="services" className="relative py-24 md:py-32">
      <div className="pointer-events-none absolute left-1/2 top-24 h-[420px] w-[760px] -translate-x-1/2 rounded-full bg-[#5227ff]/10 blur-[150px]" />

      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          eyebrow="Services"
          title={
            <>
              We are Committed to <span className="text-gradient">Excellence in Service Delivery</span>
            </>
          }
          subtitle={
            <>
              <p>
                At the heart of our approach lies a deep commitment to our clients' success. We forge strong
                partnerships built on trust, transparency, and collaboration.
              </p>
              <p>Your goals become our goals, and we work tirelessly to deliver results that exceed expectations.</p>
            </>
          }
        />

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={0.1 * (i % 2)} className="h-full">
              <div className="card-glow group glass flex h-full flex-col overflow-hidden rounded-3xl transition-all duration-500 hover:-translate-y-2 hover:border-white/20 hover:shadow-[0_26px_70px_-24px_rgba(124,92,255,0.55)]">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={s.img}
                    alt={s.alt}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a1c] via-[#0a0a1c]/20 to-transparent" />
                  <div className="absolute -bottom-7 left-7 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#5227ff] to-[#ff9ffc] shadow-[0_10px_28px_-8px_rgba(124,92,255,0.8)] transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110">
                    <s.icon className="h-7 w-7 text-white" />
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-7 pt-10">
                  <h3 className="font-display text-xl font-bold text-white transition-colors duration-300 group-hover:text-[#ff9ffc]">
                    {s.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-white/60">{s.desc}</p>
                  <div className="mt-6 flex items-center gap-1.5 text-sm font-semibold text-[#a78bfa] opacity-0 transition-all duration-300 group-hover:opacity-100">
                    <span>Learn more</span>
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
