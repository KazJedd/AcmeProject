'use client';

import { TestimonialCard } from '../molecules/TestimonialCard';
import { AnimatedList, AnimatedListItem } from '@/animations/components';

const testimonials = [
  {
    imageSrc: 'https://i.pravatar.cc/150?img=32',
    name: 'Sarah Johnson',
    rating: 5,
    comment: 'The quality of service exceeded my expectations. The team was professional and delivered exactly what I needed.',
    productType: 'Custom Software Development'
  },
  {
    imageSrc: 'https://i.pravatar.cc/150?img=11',
    name: 'Michael Chen',
    rating: 4.5,
    comment: 'Great experience working with the team. They were responsive and delivered the project on time.',
    productType: 'Mobile App Development'
  },
  {
    imageSrc: 'https://i.pravatar.cc/150?img=23',
    name: 'Emily Rodriguez',
    rating: 5,
    comment: 'Outstanding support and excellent attention to detail. Would definitely recommend their services.',
    productType: 'Web Development'
  }
];

export const TestimonialsSection = () => {
  return (
    <div className="w-full">
      <AnimatedList className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <AnimatedListItem key={index} className="h-full">
            <TestimonialCard
              imageSrc={testimonial.imageSrc}
              name={testimonial.name}
              rating={testimonial.rating}
              comment={testimonial.comment}
              productType={testimonial.productType}
            />
          </AnimatedListItem>
        ))}
      </AnimatedList>
    </div>
  );
}; 