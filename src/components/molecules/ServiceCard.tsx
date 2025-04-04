'use client';

import Link from 'next/link';
import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { cardHover, serviceIcon } from '@/animations/variants';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  href: string;
}

export default function ServiceCard({ title, description, icon, href }: ServiceCardProps) {
  return (
    <Link 
      href={href}
      className="block group h-full"
    >
      <motion.div 
        className="tech-card relative overflow-hidden group h-full p-6"
        variants={cardHover}
        whileHover="hover"
        whileTap="tap"
      >
        <div className="bg-shimmer absolute inset-0"></div>
        <div className="flex items-start gap-5">
          <motion.div 
            className="relative z-10 w-16 h-16 flex-shrink-0 flex items-center justify-center rounded-angular bg-tech-darkGray border border-tech-silver/10 text-neon-primary group-hover:shadow-neon-light dark:group-hover:shadow-neon-dark transition-all duration-300 pulse-element"
            variants={serviceIcon}
            whileHover="hover"
          >
            <div className="w-12 h-12">
              {icon}
            </div>
          </motion.div>
          <div className="flex-1">
            <h3 className="relative z-10 text-xl font-tech text-neon-primary mb-3 group-hover:animate-glow">
              {title}
            </h3>
            <p className="relative z-10 text-tech-textLight text-base">
              {description}
            </p>
            <div className="mt-4 flex justify-end relative z-10">
              <span className="text-neon-primary text-sm flex items-center">
                Learn more
                <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    </Link>
  );
} 