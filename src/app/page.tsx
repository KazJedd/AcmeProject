'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FadeIn, SlideIn, AnimatedList, AnimatedListItem } from '@/animations/components';
import { pageTransition } from '@/animations/variants';
import ServiceCard from '@/components/molecules/ServiceCard';
import { TestimonialsSection } from '@/components/organisms/TestimonialsSection';

const services = [
  {
    title: 'Business Consulting',
    description: 'Strategic guidance and expert advice to help your business grow and succeed.',
    icon: (
      <svg className="w-12 h-12 text-neon-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    href: '/services/consulting',
  },
  {
    title: 'Digital Solutions',
    description: 'Custom software development and digital services to modernize your operations.',
    icon: (
      <svg className="w-12 h-12 text-neon-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    href: '/services/development',
  },
  {
    title: 'Data Analytics',
    description: 'Transform your data into actionable insights for better decision-making.',
    icon: (
      <svg className="w-12 h-12 text-neon-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    href: '/services/analytics',
  },
];

const features = [
  {
    title: 'Innovative Solutions',
    description: 'Cutting-edge technology and creative approaches to solve complex business challenges.',
    icon: (
      <svg className="w-12 h-12 text-neon-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: 'Expert Team',
    description: 'Seasoned professionals with deep industry knowledge and technical expertise.',
    icon: (
      <svg className="w-12 h-12 text-neon-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
  },
  {
    title: 'Proven Results',
    description: 'Track record of delivering successful outcomes and measurable business value.',
    icon: (
      <svg className="w-12 h-12 text-neon-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
  },
  {
    title: 'Client-Focused',
    description: 'Dedicated to understanding your needs and delivering personalized solutions.',
    icon: (
      <svg className="w-12 h-12 text-neon-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
      </svg>
    ),
  },
];

export default function HomePage() {
  return (
    <motion.div
      variants={pageTransition}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      {/* Hero Section - Darker */}
      <section className="relative w-full bg-tech-charcoal dark:bg-tech-black py-14 overflow-hidden">
        <div className="section-pattern wave-pattern"></div>
        <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-pulse opacity-30"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="w-full mx-auto text-center">
            <FadeIn>
              <h1 className="text-4xl md:text-5xl font-display text-tech-white mb-4">
                Transform Your Business with <span className="text-neon-primary animate-glow">Technology</span>
              </h1>
            </FadeIn>
            <SlideIn delay={0.2}>
              <p className="text-lg text-tech-textLight mb-6">
                We help businesses thrive in the digital age through innovative solutions and expert guidance.
              </p>
              <div className="corner-accent inline-block">
                <Link href="/contact" className="btn-primary bg-shimmer">
                  Get Started
                </Link>
              </div>
            </SlideIn>
          </div>
        </div>
        {/* Floating tech shape */}
        <div className="absolute bottom-[-50px] left-[-50px] w-[200px] h-[200px] bg-tech-shape bg-no-repeat opacity-20 float-element"></div>
      </section>

      {/* Services Section - Lighter */}
      <section className="relative w-full bg-tech-darkGray dark:bg-tech-charcoal py-14">
        <div className="section-pattern blueprint-pattern"></div>
        <div className="corner-gradient absolute top-0 right-0 w-full h-full opacity-30"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="w-full mx-auto">
            <div className="text-center mb-14">
              <FadeIn>
                <h2 className="text-2xl md:text-3xl font-display text-tech-white mb-3">
                  Our <span className="text-neon-primary animate-glow">Services</span>
                </h2>
              </FadeIn>
              <SlideIn delay={0.2}>
                <p className="text-tech-textLight text-sm md:text-base">
                  Innovative solutions to help your business succeed
                </p>
              </SlideIn>
            </div>
            <AnimatedList className="grid grid-cols-1 md:grid-cols-3 gap-8 py-4">
              {services.map((service) => (
                <AnimatedListItem key={service.title}>
                  <ServiceCard
                    title={service.title}
                    description={service.description}
                    icon={service.icon}
                    href={service.href}
                  />
                </AnimatedListItem>
              ))}
            </AnimatedList>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section - Darker */}
      <section className="relative w-full bg-tech-charcoal dark:bg-tech-black py-14">
        <div className="section-pattern circuit-pattern"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="w-full mx-auto">
            <div className="text-center mb-14">
              <FadeIn>
                <h2 className="text-2xl md:text-3xl font-display text-tech-white mb-3">
                  Why <span className="text-neon-primary animate-glow">Choose</span> Us
                </h2>
              </FadeIn>
              <SlideIn delay={0.2}>
                <p className="text-tech-textLight text-sm md:text-base">
                  What sets us apart from the competition
                </p>
              </SlideIn>
            </div>
            <AnimatedList className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-4">
              {features.map((feature) => (
                <AnimatedListItem key={feature.title} className="h-full">
                  <div className="tech-card h-full">
                    <div className="bg-shimmer absolute inset-0"></div>
                    <div className="relative z-10">
                      <div className="flex justify-center mb-5">
                        <div className="text-neon-primary w-20 h-20 flex items-center justify-center pulse-element">
                          <div className="w-16 h-16">{feature.icon}</div>
                        </div>
                      </div>
                      <h3 className="text-center text-xl font-tech text-tech-white mb-3">
                        {feature.title}
                      </h3>
                      <p className="text-center text-tech-textLight text-base">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </AnimatedListItem>
              ))}
            </AnimatedList>
          </div>
        </div>
      </section>

      {/* Testimonials Section - Lighter */}
      <section className="relative w-full bg-tech-darkGray dark:bg-tech-charcoal py-14">
        <div className="section-pattern dots-pattern"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="w-full mx-auto">
            <div className="text-center mb-14">
              <FadeIn>
                <h2 className="text-2xl md:text-3xl font-display text-tech-white mb-3">
                  Client <span className="text-neon-primary animate-glow">Success</span> Stories
                </h2>
              </FadeIn>
              <SlideIn delay={0.2}>
                <p className="text-tech-textLight text-sm md:text-base">
                  Hear what our clients have to say about working with us
                </p>
              </SlideIn>
            </div>
            <TestimonialsSection />
          </div>
        </div>
      </section>

      {/* CTA Section - Darker */}
      <section className="relative w-full bg-tech-charcoal dark:bg-tech-black py-14">
        <div className="section-pattern grid-pattern"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="w-full mx-auto text-center">
            <FadeIn>
              <h2 className="text-2xl md:text-3xl font-display text-tech-white mb-3">
                Ready to <span className="text-neon-primary animate-glow">Transform</span> Your Business?
              </h2>
            </FadeIn>
            <SlideIn delay={0.2}>
              <p className="text-lg text-tech-textLight mb-6">
                Let's discuss how we can help you achieve your business goals.
              </p>
              <div className="corner-accent inline-block">
                <Link href="/contact" className="btn-primary bg-shimmer">
                  Get Started
                </Link>
              </div>
            </SlideIn>
          </div>
        </div>
        <div className="absolute bottom-[-30px] right-[-30px] w-[150px] h-[150px] bg-tech-shape bg-no-repeat opacity-20 float-element"></div>
      </section>
    </motion.div>
  );
}
