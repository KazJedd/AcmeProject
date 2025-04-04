'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { FadeIn, SlideIn, AnimatedList, AnimatedListItem } from '@/animations/components';
import { pageTransition } from '@/animations/variants';

const teamMembers = [
  {
    name: 'Sarah Johnson',
    role: 'CEO & Founder',
    image: 'https://picsum.photos/400/400?person1',
    bio: 'With over 15 years of experience in technology and business consulting, Sarah leads our company with vision and innovation.',
  },
  {
    name: 'Michael Chen',
    role: 'CTO',
    image: 'https://picsum.photos/400/400?person2',
    bio: 'Michael brings deep technical expertise and leadership in software development and emerging technologies.',
  },
  {
    name: 'Emily Rodriguez',
    role: 'Head of Operations',
    image: 'https://picsum.photos/400/400?person3',
    bio: 'Emily ensures smooth execution of our projects and maintains high standards of service delivery.',
  },
  {
    name: 'David Kim',
    role: 'Lead Solutions Architect',
    image: 'https://picsum.photos/400/400?person4',
    bio: 'David designs innovative solutions that help our clients achieve their digital transformation goals.',
  },
];

const values = [
  {
    title: 'Innovation',
    description: 'We embrace cutting-edge technologies and creative solutions to solve complex business challenges.',
    icon: (
      <svg className="w-12 h-12 text-neon-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: 'Excellence',
    description: 'We maintain the highest standards in our work and continuously strive for improvement.',
    icon: (
      <svg className="w-12 h-12 text-neon-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
  },
  {
    title: 'Collaboration',
    description: 'We work closely with our clients to understand their needs and deliver tailored solutions.',
    icon: (
      <svg className="w-12 h-12 text-neon-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    title: 'Integrity',
    description: 'We conduct our business with honesty, transparency, and ethical practices.',
    icon: (
      <svg className="w-12 h-12 text-neon-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
];

export default function AboutPage() {
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
          <div className="max-w-4xl mx-auto text-center">
            <FadeIn>
              <h1 className="text-4xl font-display text-tech-white mb-4">
                About <span className="text-neon-primary animate-glow">Us</span>
              </h1>
            </FadeIn>
            <SlideIn delay={0.2}>
              <p className="text-lg text-tech-textLight">
                We are a team of passionate professionals dedicated to helping businesses thrive in the digital age through innovative solutions and expert guidance.
              </p>
            </SlideIn>
          </div>
        </div>
        <div className="absolute bottom-[-50px] left-[-50px] w-[200px] h-[200px] bg-tech-shape bg-no-repeat opacity-20 float-element"></div>
      </section>

      {/* Values Section - Lighter */}
      <section className="relative w-full bg-tech-darkGray dark:bg-tech-charcoal py-14">
        <div className="section-pattern blueprint-pattern"></div>
        <div className="corner-gradient absolute top-0 right-0 w-full h-full opacity-30"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="w-full mx-auto">
            <div className="text-center mb-10">
              <FadeIn>
                <h2 className="text-2xl md:text-3xl font-display text-tech-white mb-3">
                  Our <span className="text-neon-primary animate-glow">Values</span>
                </h2>
              </FadeIn>
            </div>
            <AnimatedList className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {values.map((value) => (
                <AnimatedListItem key={value.title}>
                  <div className="tech-card relative overflow-hidden group h-full p-6">
                    <div className="bg-shimmer absolute inset-0"></div>
                    <div className="flex items-start gap-4 relative z-10">
                      <div className="flex-shrink-0 text-neon-primary w-16 h-16 flex items-center justify-center pulse-element">
                        <div className="w-14 h-14">
                          {value.icon}
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-tech text-neon-primary mb-3">{value.title}</h3>
                        <p className="text-tech-textLight text-base">{value.description}</p>
                      </div>
                    </div>
                  </div>
                </AnimatedListItem>
              ))}
            </AnimatedList>
          </div>
        </div>
      </section>

      {/* Team Section - Darker */}
      <section className="relative w-full bg-tech-charcoal dark:bg-tech-black py-14">
        <div className="section-pattern circuit-pattern"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="w-full mx-auto">
            <div className="text-center mb-10">
              <FadeIn>
                <h2 className="text-2xl md:text-3xl font-display text-tech-white mb-3">
                  Our <span className="text-neon-primary animate-glow">Team</span>
                </h2>
              </FadeIn>
            </div>
            <AnimatedList className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member) => (
                <AnimatedListItem key={member.name}>
                  <div className="tech-card relative overflow-hidden group h-full p-5">
                    <div className="bg-shimmer absolute inset-0"></div>
                    <div className="relative z-10">
                      <div className="relative w-full aspect-square rounded-angular overflow-hidden border border-tech-silver/10 group-hover:border-neon-primary transition-all duration-300 mb-4">
                        <Image
                          src={member.image}
                          alt={member.name}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                          className="object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>
                      <div>
                        <h3 className="text-xl font-tech text-tech-white mb-2">{member.name}</h3>
                        <p className="text-neon-primary font-tech text-base mb-3">{member.role}</p>
                        <p className="text-tech-textLight text-base">{member.bio}</p>
                      </div>
                    </div>
                  </div>
                </AnimatedListItem>
              ))}
            </AnimatedList>
          </div>
        </div>
      </section>

      {/* CTA Section - Lighter */}
      <section className="relative w-full bg-tech-darkGray dark:bg-tech-charcoal py-14">
        <div className="section-pattern dots-pattern"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="w-full mx-auto text-center">
            <FadeIn>
              <h2 className="text-2xl md:text-3xl font-display text-tech-white mb-3">
                Ready to <span className="text-neon-primary animate-glow">Work</span> with Us?
              </h2>
            </FadeIn>
            <SlideIn delay={0.2}>
              <p className="text-lg text-tech-textLight mb-6">
                Let's discuss how we can help your business succeed in the digital age.
              </p>
              <div className="corner-accent inline-block">
                <a
                  href="/contact"
                  className="btn-primary bg-shimmer"
                >
                  Get in Touch
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