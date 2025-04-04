'use client';

import { motion, Variants } from 'framer-motion';
import { ComponentType } from 'react';

export const withAnimation = <P extends object>(
  WrappedComponent: ComponentType<P>,
  variants: Variants,
  initial: string = "hidden",
  animate: string = "visible"
) => {
  return function WithAnimationWrapper(props: P) {
    return (
      <motion.div
        initial={initial}
        animate={animate}
        variants={variants}
      >
        <WrappedComponent {...props} />
      </motion.div>
    );
  };
}; 