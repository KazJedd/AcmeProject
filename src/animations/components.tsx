'use client';

import { motion } from 'framer-motion';
import { fadeIn, slideIn, scaleUp, listItem, staggerContainer } from './variants';
import { ReactNode } from 'react';

interface AnimationProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export const FadeIn = ({ children, delay = 0, className = '' }: AnimationProps) => (
  <motion.div
    variants={fadeIn}
    initial="hidden"
    animate="visible"
    transition={{ delay }}
    className={className}
  >
    {children}
  </motion.div>
);

export const SlideIn = ({ children, delay = 0, className = '' }: AnimationProps) => (
  <motion.div
    variants={slideIn}
    initial="hidden"
    animate="visible"
    transition={{ delay }}
    className={className}
  >
    {children}
  </motion.div>
);

export const ScaleUp = ({ children, delay = 0, className = '' }: AnimationProps) => (
  <motion.div
    variants={scaleUp}
    initial="hidden"
    animate="visible"
    transition={{ delay }}
    className={className}
  >
    {children}
  </motion.div>
);

export const AnimatedList = ({ children, className = '' }: AnimationProps) => (
  <motion.div
    variants={staggerContainer}
    initial="hidden"
    animate="visible"
    className={className}
  >
    {children}
  </motion.div>
);

export const AnimatedListItem = ({ children, className = '' }: AnimationProps) => (
  <motion.div
    variants={listItem}
    className={className}
  >
    {children}
  </motion.div>
); 