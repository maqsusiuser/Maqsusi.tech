import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

type Direction = 'up' | 'down' | 'left' | 'right' | 'none';

const offsets: Record<Direction, { x?: number; y?: number }> = {
  up: { y: 48 },
  down: { y: -48 },
  left: { x: 48 },
  right: { x: -48 },
  none: {}
};

interface RevealProps {
  children: ReactNode;
  delay?: number;
  direction?: Direction;
  className?: string;
  duration?: number;
  once?: boolean;
}

export default function Reveal({
  children,
  delay = 0,
  direction = 'up',
  className = '',
  duration = 0.8,
  once = true
}: RevealProps) {
  const off = offsets[direction];
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, x: off.x ?? 0, y: off.y ?? 0 }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once, margin: '-70px' }}
      transition={{ duration, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
    >
      {children}
    </motion.div>
  );
}
