'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { FadeIn, SlideIn, AnimatedList, AnimatedListItem } from '@/animations/components';
import { pageTransition } from '@/animations/variants';

const services = [
  {
    title: 'Business Consulting',
    description: 'Strategic guidance and expert advice to help your business grow and succeed.',
    image: 'https://picsum.photos/800/600?business',
    features: [
      'Market Analysis & Strategy',
      'Business Process Optimization',
      'Growth Strategy Development',
      'Digital Transformation Planning',
    ],
    benefits: [
      'Improved Operational Efficiency',
      'Enhanced Market Position',
      'Clear Strategic Direction',
      'Measurable Business Outcomes',
    ],
  },
  {
    title: 'Digital Solutions',
    description: 'Custom software development and digital services to modernize your operations.',
    image: 'https://picsum.photos/800/600?tech',
    features: [
      'Custom Software Development',
      'Web & Mobile Applications',
      'Cloud Solutions',
      'System Integration',
    ],
    benefits: [
      'Increased Productivity',
      'Enhanced User Experience',
      'Scalable Infrastructure',
      'Reduced Operational Costs',
    ],
  },
  {
    title: 'Data Analytics',
    description: 'Transform your data into actionable insights for better decision-making.',
    image: 'https://picsum.photos/800/600?data',
    features: [
      'Business Intelligence',
      'Predictive Analytics',
      'Data Visualization',
      'Machine Learning Solutions',
    ],
    benefits: [
      'Data-Driven Decisions',
      'Improved Forecasting',
      'Real-time Insights',
      'Competitive Advantage',
    ],
  },
];

export default function ServicesPage() {
  return (
    <motion.div
      variants={pageTransition}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      {/* Hero Section - Darker */}
      <section className="relative w-full bg-tech-charcoal dark:bg-tech-black py-24 overflow-hidden">
        <div className="section-pattern wave-pattern"></div>
        <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-pulse opacity-30"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <FadeIn>
              <h1 className="text-4xl font-display text-tech-white mb-6">
                Our <span className="text-neon-primary animate-glow">Services</span>
              </h1>
            </FadeIn>
            <SlideIn delay={0.2}>
              <p className="text-xl text-tech-textLight">
                Comprehensive solutions tailored to your business needs. We help you transform, grow, and succeed in today's digital world.
              </p>
            </SlideIn>
          </div>
        </div>
        <div className="absolute bottom-[-50px] left-[-50px] w-[200px] h-[200px] bg-tech-shape bg-no-repeat opacity-20 float-element"></div>
      </section>

      {/* Services Section - Lighter */}
      <section className="relative w-full bg-tech-darkGray dark:bg-tech-charcoal py-24">
        <div className="section-pattern blueprint-pattern"></div>
        <div className="corner-gradient absolute top-0 right-0 w-full h-full opacity-30"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="w-full mx-auto">
            <AnimatedList>
              <div className="space-y-32">
                {services.map((service, index) => (
                  <AnimatedListItem key={service.title}>
                    <div className="grid md:grid-cols-5 gap-8 md:gap-12 items-center mb-24">
                      <div className={`md:col-span-2 ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                        <div className="relative aspect-video rounded-angular overflow-hidden border border-tech-silver/10 hover:border-neon-primary transition-all duration-300">
                          <Image
                            src={service.image}
                            alt={service.title}
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 40vw"
                            className="object-cover transition-transform duration-300 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-br from-tech-black/60 to-tech-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </div>
                      </div>
                      <div className="md:col-span-3">
                        <div className="tech-card relative overflow-hidden group p-6">
                          <div className="bg-shimmer absolute inset-0"></div>
                          <div className="relative z-10">
                            <h3 className="text-2xl font-tech text-neon-primary mb-3">
                              {service.title}
                            </h3>
                            <p className="text-tech-textLight text-lg mb-5">
                              {service.description}
                            </p>
                            <div className="grid md:grid-cols-2 gap-6">
                              <div>
                                <h4 className="text-tech-white font-tech text-base mb-3">Key Features</h4>
                                <ul className="text-base text-tech-textLight">
                                  {service.features.map((feature) => (
                                    <li key={feature} className="mb-2 flex items-center">
                                      <span className="text-neon-primary mr-2 pulse-element">•</span>
                                      {feature}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                              <div>
                                <h4 className="text-tech-white font-tech text-base mb-3">Benefits</h4>
                                <ul className="text-base text-tech-textLight">
                                  {service.benefits.map((benefit) => (
                                    <li key={benefit} className="mb-2 flex items-center">
                                      <span className="text-neon-primary mr-2 pulse-element">•</span>
                                      {benefit}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </AnimatedListItem>
                ))}
              </div>
            </AnimatedList>
          </div>
        </div>
      </section>

      {/* CTA Section - Darker */}
      <section className="relative w-full bg-tech-charcoal dark:bg-tech-black py-24 overflow-hidden">
        <div className="section-pattern grid-pattern"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="w-full mx-auto text-center">
            <FadeIn>
              <h2 className="text-3xl font-display text-tech-white mb-6">
                Ready to <span className="text-neon-primary animate-glow">Transform</span> Your Business?
              </h2>
            </FadeIn>
            <SlideIn delay={0.2}>
              <p className="text-xl text-tech-textLight mb-8">
                Let's discuss how our services can help you achieve your business goals.
              </p>
              <div className="corner-accent inline-block">
                <a
                  href="/contact"
                  className="btn-primary bg-shimmer"
                >
                  Get Started
                </a>
              </div>
            </SlideIn>
          </div>
        </div>
        <div className="absolute bottom-[-30px] right-[-30px] w-[150px] h-[150px] bg-tech-shape bg-no-repeat opacity-20 float-element"></div>
      </section>
    </motion.div>
  );
} 