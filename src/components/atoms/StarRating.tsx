'use client';

import { FaStar, FaStarHalf, FaRegStar } from 'react-icons/fa';

interface StarRatingProps {
  rating: number;
  className?: string;
}

export const StarRating = ({ rating, className = '' }: StarRatingProps) => {
  const stars = [];
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;

  for (let i = 0; i < 5; i++) {
    if (i < fullStars) {
      stars.push(<FaStar key={i} className="text-neon-primary" />);
    } else if (i === fullStars && hasHalfStar) {
      stars.push(<FaStarHalf key={i} className="text-neon-primary" />);
    } else {
      stars.push(<FaRegStar key={i} className="text-neon-primary opacity-50" />);
    }
  }

  return (
    <div className={`flex gap-1 ${className}`}>
      {stars}
    </div>
  );
}; 