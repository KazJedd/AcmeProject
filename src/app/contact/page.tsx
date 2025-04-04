'use client';

import { motion } from 'framer-motion';
import { FadeIn, SlideIn } from '@/animations/components';
import { pageTransition } from '@/animations/variants';
import ContactForm from '@/components/organisms/ContactForm';

const contactInfo = [
  {
    title: 'Email',
    info: 'contact@acmesolutions.com',
    icon: (
      <svg className="w-12 h-12 text-neon-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: 'Phone',
    info: '+1 (555) 123-4567',
    icon: (
      <svg className="w-12 h-12 text-neon-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
  },
  {
    title: 'Location',
    info: '123 Tech Street, Digital City, TC 12345',
    icon: (
      <svg className="w-12 h-12 text-neon-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
];

export default function ContactPage() {
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
              <h1 className="text-4xl font-display text-tech-white mb-4">
                Get in <span className="text-neon-primary animate-glow">Touch</span>
              </h1>
            </FadeIn>
            <SlideIn delay={0.2}>
              <p className="text-lg text-tech-textLight">
                Have a question or want to discuss a project? We'd love to hear from you.
              </p>
            </SlideIn>
          </div>
        </div>
        <div className="absolute bottom-[-50px] left-[-50px] w-[200px] h-[200px] bg-tech-shape bg-no-repeat opacity-20 float-element"></div>
      </section>

      {/* Contact Info Section - Lighter */}
      <section className="relative w-full bg-tech-darkGray dark:bg-tech-charcoal py-14">
        <div className="section-pattern blueprint-pattern"></div>
        <div className="corner-gradient absolute top-0 right-0 w-full h-full opacity-30"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="w-full mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
              {contactInfo.map((item) => (
                <div
                  key={item.title}
                  className="tech-card relative overflow-hidden group h-full"
                >
                  <div className="bg-shimmer absolute inset-0"></div>
                  <div className="flex items-start gap-3 relative z-10">
                    <div className="flex-shrink-0 text-neon-primary w-12 h-12 flex items-center justify-center pulse-element">{item.icon}</div>
                    <div className="flex-1">
                      <h3 className="text-lg font-tech text-neon-primary mb-2">{item.title}</h3>
                      <p className="text-tech-textLight text-sm">{item.info}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section - Darker */}
      <section className="relative w-full bg-tech-charcoal dark:bg-tech-black py-14">
        <div className="section-pattern circuit-pattern"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="w-full mx-auto">
            <div className="text-center mb-8">
              <FadeIn>
                <h2 className="text-2xl md:text-3xl font-display text-tech-white mb-3">
                  Send Us a <span className="text-neon-primary animate-glow">Message</span>
                </h2>
              </FadeIn>
              <SlideIn delay={0.2}>
                <p className="text-tech-textLight text-sm md:text-base">
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>
              </SlideIn>
            </div>
            <ContactForm />
          </div>
        </div>
        <div className="absolute bottom-[-30px] right-[-30px] w-[150px] h-[150px] bg-tech-shape bg-no-repeat opacity-20 float-element"></div>
      </section>
    </motion.div>
  );
}