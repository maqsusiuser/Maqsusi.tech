const items = [
  'Mendix',
  'Polarion',
  'Teamcenter',
  'AI & ML',
  'Low-Code',
  'Industry 4.0',
  'ALM',
  'PLM',
  'Digital Marketing',
  'Custom Solutions'
];

export default function Marquee() {
  const row = [...items, ...items];
  return (
    <div className="relative border-y border-white/5 bg-[#07071a]/80 py-5">
      <div className="mask-fade-x overflow-hidden">
        <div className="flex w-max animate-marquee items-center gap-10 hover:[animation-play-state:paused]">
          {row.map((item, i) => (
            <div key={i} className="flex items-center gap-10">
              <span className="font-display text-sm font-semibold uppercase tracking-[0.3em] text-white/40 transition-colors duration-300 hover:text-[#ff9ffc]">
                {item}
              </span>
              <span className="h-1.5 w-1.5 rotate-45 bg-gradient-to-br from-[#5227ff] to-[#ff9ffc] opacity-60" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
