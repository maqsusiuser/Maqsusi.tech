import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';

function useCountUp(target: number, duration = 1900, start = false) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!start) return;
    let raf = 0;
    const t0 = performance.now();
    const tick = (t: number) => {
      const p = Math.min(1, (t - t0) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setValue(Math.round(target * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [start, target, duration]);

  return value;
}

interface StatProps {
  value: number;
  suffix?: string;
  label: string;
  sub?: string;
}

export default function Stat({ value, suffix = '+', label, sub }: StatProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });
  const n = useCountUp(value, 1900, inView);

  return (
    <div ref={ref} className="group text-center">
      <div className="font-display text-4xl font-bold tracking-tight md:text-5xl">
        <span className="text-gradient drop-shadow-[0_0_18px_rgba(255,159,252,0.35)]">
          {n.toLocaleString()}
          {suffix}
        </span>
      </div>
      <div className="mx-auto mt-3 h-px w-10 bg-gradient-to-r from-transparent via-[#ff9ffc] to-transparent transition-all duration-500 group-hover:w-20" />
      <p className="mt-3 text-sm font-medium text-white/70">{label}</p>
      {sub && <p className="mt-1 text-xs text-white/40">{sub}</p>}
    </div>
  );
}
