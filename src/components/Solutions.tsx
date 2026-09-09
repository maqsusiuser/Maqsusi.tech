import { Blocks, GitBranch, Boxes, Brain, Package, Palette, ArrowUpRight } from 'lucide-react';
import SectionHeading from './SectionHeading';
import Reveal from './Reveal';

const solutions = [
  {
    icon: Blocks,
    title: 'Mendix',
    desc: 'Mendix is a low-code application development platform that enables users to build, test, and deploy applications quickly with minimal coding.',
    tags: ['Low-Code', 'Rapid Deployment', 'Scalable Apps'],
    gradient: 'from-[#5227ff] to-[#8b5cf6]'
  },
  {
    icon: GitBranch,
    title: 'Polarion',
    desc: 'Polarion is an application lifecycle management (ALM) platform designed to streamline software development by providing tools for requirements management, test case management, and collaboration.',
    tags: ['ALM', 'Requirements', 'Test Management'],
    gradient: 'from-[#8b5cf6] to-[#d946ef]'
  },
  {
    icon: Boxes,
    title: 'Teamcenter (PLM)',
    desc: 'Teamcenter is a product lifecycle management (PLM) software system that helps companies develop products more quickly and efficiently.',
    tags: ['PLM', 'Product Lifecycle', 'Industry 4.0'],
    gradient: 'from-[#d946ef] to-[#ff9ffc]'
  },
  {
    icon: Brain,
    title: 'AI & ML',
    desc: 'At MDIS, we harness the power of AI and ML to unlock new opportunities, spark breakthrough innovation, and drive unstoppable business growth.',
    tags: ['Machine Learning', 'Data Science', 'Innovation'],
    gradient: 'from-[#5227ff] to-[#ff9ffc]'
  },
  {
    icon: Package,
    title: 'LGS Core Products',
    desc: 'Our world-class solutions power long-term value across life sciences, banking, and recruitment.',
    tags: ['DigiVal', 'ATS & CRM 360', 'Talent Trace', 'Engage 360', 'Collection Management'],
    gradient: 'from-[#ff9ffc] to-[#f472b6]'
  },
  {
    icon: Palette,
    title: 'Customized Solutions',
    desc: 'At Maqsusi Digital Industries Software, we create more than websites and applications — we craft experiences that connect, inspire, and empower.',
    tags: ['Web Apps', 'Design', 'Experience'],
    gradient: 'from-[#f472b6] to-[#5227ff]'
  }
];

export default function Solutions() {
  return (
    <section id="solutions" className="relative py-24 md:py-32">
      <div className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-[#5227ff]/12 blur-[140px]" />
      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          eyebrow="Our Solutions"
          title={
            <>
              Solutions Built to <span className="text-gradient">Move Your Business Forward</span>
            </>
          }
          subtitle="From low-code platforms and lifecycle management to AI-driven intelligence — explore the capabilities that keep our clients ahead of the curve."
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {solutions.map((s, i) => (
            <Reveal key={s.title} delay={0.08 * (i % 3)} className="h-full">
              <div className="card-glow group glass flex h-full flex-col rounded-3xl p-7 transition-all duration-500 hover:-translate-y-2 hover:border-white/20 hover:shadow-[0_24px_60px_-20px_rgba(82,39,255,0.5)]">
                <div
                  className={`relative flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${s.gradient} shadow-lg transition-all duration-500 group-hover:scale-110 group-hover:rotate-6`}
                >
                  <s.icon className="h-7 w-7 text-white" />
                  <span className="absolute inset-0 rounded-2xl bg-white/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </div>

                <h3 className="font-display mt-6 text-xl font-bold text-white transition-colors duration-300 group-hover:text-[#ff9ffc]">
                  {s.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-white/60">{s.desc}</p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {s.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-medium text-white/55 transition-all duration-300 hover:border-[#ff9ffc]/40 hover:text-white"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex items-center gap-1.5 text-sm font-semibold text-[#a78bfa] opacity-0 transition-all duration-300 group-hover:opacity-100">
                  <span>Explore</span>
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
