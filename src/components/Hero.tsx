import { motion } from 'framer-motion';
import { ChevronDown, ArrowRight, Sparkles } from 'lucide-react';
import WebThreads from './WebThreads';

const chips = ['Advanced ALM', 'Low-Code Development', 'Industry 4.0', 'AI & ML Solutions'];

export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* WebThreads animated background */}
      <div className="absolute inset-0">
        <WebThreads
          color1="#35b97b"
          color2="#1e83ca"
          color3="#FFFFFF"
          speed={0.25}
          threadCount={7}
          frequency={6}
          spread={0.22}
          taper={1.2}
          position={0.52}
          fanMode="center"
          glow={0.028}
          falloff={0.55}
          thickness={1.15}
          brightness={0.75}
          opacity={0.95}
          mirror={true}
          shimmer={true}
          grain={true}
          grainIntensity={0.04}
          mouseInteraction={true}
          mouseStrength={0.35}
        />
      </div>

      {/* Blend overlays */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_45%,transparent_30%,rgba(5,5,15,0.55)_100%)]" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#05050f]/60 via-transparent to-[#05050f]" />
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-40 [mask-image:radial-gradient(ellipse_55%_45%_at_50%_50%,black,transparent)]" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-5xl px-6 pb-32 pt-40 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          <span className="glass inline-flex items-center gap-2 rounded-full px-5 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-white/85">
            <Sparkles className="h-3.5 w-3.5 text-[#ff9ffc]" />
            Welcome to Maqsusi.tech
            <span className="h-1.5 w-1.5 animate-pulse-soft rounded-full bg-[#ff9ffc]" />
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.3 }}
          className="font-display mt-8 text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-6xl lg:text-[4.4rem]"
        >
          Empowering Digital Transformation with{' '}
          <span className="text-gradient drop-shadow-[0_0_30px_rgba(255,159,252,0.35)]">Smart, Scalable Solutions</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.45 }}
          className="mx-auto mt-7 max-w-2xl text-base leading-relaxed text-white/65 md:text-lg"
        >
          Driving Efficiency Through Advanced ALM, Low-Code, and Industry 4.0 Solutions
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.6 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <a href="#solutions" className="btn-primary group">
            Discover More
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
          </a>
          <a href="#contact" className="btn-ghost">
            Get Started
          </a>
        </motion.div>

        {/* Chips */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.75 }}
          className="mt-14 flex flex-wrap items-center justify-center gap-3"
        >
          {chips.map((chip, i) => (
            <span
              key={chip}
              className="glass animate-float rounded-full px-4 py-2 text-xs font-medium text-white/75 transition-colors duration-300 hover:border-[#ff9ffc]/50 hover:text-white"
              style={{ animationDelay: `${i * 0.8}s` }}
            >
              {chip}
            </span>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#solutions"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-white/50 transition-colors hover:text-white"
        aria-label="Scroll down"
      >
        <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}>
          <ChevronDown className="h-7 w-7" />
        </motion.div>
      </motion.a>
    </section>
  );
}
