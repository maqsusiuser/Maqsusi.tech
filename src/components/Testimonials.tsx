import { useCallback, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';
import SectionHeading from './SectionHeading';
import Reveal from './Reveal';

const testimonials = [
  {
    name: 'Naveed Ullah Khan',
    role: 'Principal Product Manager – Markets – Digital and Process Excellence',
    initials: 'NK',
    gradient: 'from-[#5227ff] to-[#8b5cf6]',
    quote:
      'For over a year, our partnership with LGS has been exceptional. Their team demonstrated a deep understanding of our intricate internal processes, successfully implementing multiple integrations on Mendix. Their sincerity and dedication were evident in delivering the product on time. We continue to engage with their team members, who consistently perform well in meeting project timelines. LGS has proven to be a trusted partner on our Mendix product build journey, and their expertise has been immensely valuable throughout.'
  },
  {
    name: 'Naser Ali',
    role: 'Avionics Software Engineer',
    initials: 'NA',
    gradient: 'from-[#ff9ffc] to-[#5227ff]',
    quote:
      'Dear Labyrinth Team, Thank you for the smooth and efficient integration of the Polarian (ALM) tool. Your planning, collaboration, and technical expertise were key to the success. The clear training sessions and ongoing support have made a huge difference in helping our team adapt quickly and confidently. We truly appreciate your professionalism and continued assistance.'
  }
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => setIndex((i) => (i + 1) % testimonials.length), []);
  const prev = () => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(next, 7500);
    return () => clearInterval(id);
  }, [paused, next]);

  const t = testimonials[index];

  return (
    <section id="testimonials" className="relative overflow-hidden py-24 md:py-32">
      <div className="pointer-events-none absolute right-0 top-20 h-[400px] w-[400px] rounded-full bg-[#ff9ffc]/8 blur-[130px]" />
      <div className="relative mx-auto max-w-5xl px-5 md:px-8">
        <SectionHeading
          eyebrow="Client Testimonials"
          title={
            <>
              Hear from our <span className="text-gradient">happy clients</span>
            </>
          }
        />

        <Reveal delay={0.2}>
          <div
            className="relative mt-14"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            {/* Watermark quote */}
            <Quote className="absolute -top-8 left-2 h-24 w-24 rotate-180 text-white/5" />

            <div className="glass relative overflow-hidden rounded-[2rem] px-6 py-12 text-center md:px-16">
              <AnimatePresence mode="wait">
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 70 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -70 }}
                  transition={{ duration: 0.55, ease: [0.21, 0.47, 0.32, 0.98] }}
                >
                  <div className="flex justify-center gap-1.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <motion.span
                        key={i}
                        initial={{ opacity: 0, scale: 0, rotate: -90 }}
                        animate={{ opacity: 1, scale: 1, rotate: 0 }}
                        transition={{ delay: 0.15 + i * 0.08 }}
                      >
                        <Star className="h-5 w-5 fill-[#ff9ffc] text-[#ff9ffc] drop-shadow-[0_0_8px_rgba(255,159,252,0.6)]" />
                      </motion.span>
                    ))}
                  </div>

                  <blockquote className="mx-auto mt-8 max-w-3xl text-[15px] leading-relaxed text-white/75 md:text-lg">
                    “{t.quote}”
                  </blockquote>

                  <div className="mt-10 flex items-center justify-center gap-4">
                    <div
                      className={`flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br ${t.gradient} font-display text-lg font-bold text-white shadow-[0_10px_30px_-8px_rgba(124,92,255,0.7)] ring-2 ring-white/20 transition-transform duration-500 hover:scale-110`}
                    >
                      {t.initials}
                    </div>
                    <div className="text-left">
                      <p className="font-display text-base font-bold text-white">{t.name}</p>
                      <p className="mt-0.5 text-xs text-white/50 md:text-sm">{t.role}</p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Controls */}
            <div className="mt-8 flex items-center justify-center gap-6">
              <button
                onClick={prev}
                aria-label="Previous testimonial"
                className="glass flex h-11 w-11 items-center justify-center rounded-full text-white/70 transition-all duration-300 hover:scale-110 hover:border-[#ff9ffc]/50 hover:text-white hover:shadow-[0_0_24px_-4px_rgba(255,159,252,0.5)]"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>

              <div className="flex items-center gap-2.5">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setIndex(i)}
                    aria-label={`Go to testimonial ${i + 1}`}
                    className={`h-2 rounded-full transition-all duration-500 ${
                      i === index
                        ? 'w-8 bg-gradient-to-r from-[#5227ff] to-[#ff9ffc] shadow-[0_0_12px_rgba(255,159,252,0.6)]'
                        : 'w-2 bg-white/20 hover:bg-white/40'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={next}
                aria-label="Next testimonial"
                className="glass flex h-11 w-11 items-center justify-center rounded-full text-white/70 transition-all duration-300 hover:scale-110 hover:border-[#ff9ffc]/50 hover:text-white hover:shadow-[0_0_24px_-4px_rgba(255,159,252,0.5)]"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
