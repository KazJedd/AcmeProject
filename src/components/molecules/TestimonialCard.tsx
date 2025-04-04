'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { StarRating } from '../atoms/StarRating';
import { cardHover } from '@/animations/variants';

interface TestimonialCardProps {
  imageSrc: string;
  name: string;
  rating: number;
  comment: string;
  productType: string;
  className?: string;
}

export const TestimonialCard = ({
  imageSrc,
  name,
  rating,
  comment,
  productType,
  className = '',
}: TestimonialCardProps) => {
  return (
    <motion.div
      variants={cardHover}
      whileHover="hover"
      whileTap="tap"
      className={`card relative overflow-hidden group h-full p-6 ${className}`}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-tech-charcoal to-tech-black opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="relative z-10">
        <div className="flex items-center gap-4 mb-3">
          <div className="relative w-16 h-16 rounded-angular overflow-hidden border border-tech-silver/10 group-hover:border-neon-primary transition-colors duration-300">
            <Image
              src={imageSrc}
              alt={`${name}'s profile picture`}
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h3 className="font-tech text-xl text-tech-white group-hover:text-neon-primary transition-colors duration-300">{name}</h3>
            <p className="text-sm text-tech-textLight">{productType}</p>
          </div>
        </div>
        <StarRating rating={rating} className="mb-3" />
        <p className="text-tech-textLight text-base">{comment}</p>
      </div>
    </motion.div>
  );
}; 