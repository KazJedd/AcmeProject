'use client';

import { useState } from 'react';
import Link from 'next/link';
import ThemeToggle from '@/components/atoms/ThemeToggle';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full bg-tech-charcoal dark:bg-tech-black border-b border-tech-silver/10">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-display text-tech-white hover:text-neon-primary transition-colors">
            Acme <span className="text-neon-primary">Solutions</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="font-tech text-tech-textLight hover:text-neon-primary transition-colors">
              Home
            </Link>
            <Link href="/about" className="font-tech text-tech-textLight hover:text-neon-primary transition-colors">
              About
            </Link>
            <Link href="/services" className="font-tech text-tech-textLight hover:text-neon-primary transition-colors">
              Services
            </Link>
            <Link href="/contact" className="font-tech text-tech-textLight hover:text-neon-primary transition-colors">
              Contact
            </Link>
            <ThemeToggle />
          </nav>

          {/* Mobile Menu Controls */}
          <div className="flex md:hidden items-center">
            <ThemeToggle />
            <button
              className="ml-4 p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6 text-tech-textLight hover:text-neon-primary transition-colors"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 space-y-4 border-t border-tech-silver/10 pt-4">
            <Link href="/" className="block font-tech text-tech-textLight hover:text-neon-primary transition-colors">
              Home
            </Link>
            <Link href="/about" className="block font-tech text-tech-textLight hover:text-neon-primary transition-colors">
              About
            </Link>
            <Link href="/services" className="block font-tech text-tech-textLight hover:text-neon-primary transition-colors">
              Services
            </Link>
            <Link href="/contact" className="block font-tech text-tech-textLight hover:text-neon-primary transition-colors">
              Contact
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
} 