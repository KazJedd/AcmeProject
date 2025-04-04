import { useInView } from 'framer-motion';
import { useRef } from 'react';

export const useAnimateOnScroll = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "0px 0px -100px 0px"
  });

  return { ref, isInView };
};

export const useDelayedAnimation = (delay: number = 0) => {
  return {
    initial: "hidden",
    animate: "visible",
    transition: { delay }
  };
}; 