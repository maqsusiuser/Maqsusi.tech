import Reveal from './Reveal';

interface SectionHeadingProps {
  eyebrow: string;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  align?: 'center' | 'left';
}

export default function SectionHeading({ eyebrow, title, subtitle, align = 'center' }: SectionHeadingProps) {
  const centered = align === 'center';
  return (
    <div className={`max-w-3xl ${centered ? 'mx-auto text-center' : 'text-left'}`}>
      <Reveal>
        <span className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#ff9ffc]">
          <span className="h-1.5 w-1.5 animate-pulse-soft rounded-full bg-gradient-to-r from-[#5227ff] to-[#ff9ffc]" />
          {eyebrow}
        </span>
      </Reveal>
      <Reveal delay={0.1}>
        <h2 className="font-display mt-5 text-3xl font-bold leading-tight tracking-tight text-white md:text-[2.75rem] md:leading-[1.15]">
          {title}
        </h2>
      </Reveal>
      {subtitle && (
        <Reveal delay={0.2}>
          <div className={`mt-5 space-y-4 text-[15px] leading-relaxed text-white/60 md:text-base ${centered ? 'mx-auto' : ''}`}>
            {subtitle}
          </div>
        </Reveal>
      )}
    </div>
  );
}
