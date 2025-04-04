import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-tech-charcoal dark:bg-tech-black border-t border-tech-silver/10">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-display text-tech-white">
              Acme <span className="text-neon-primary">Solutions</span>
            </h3>
            <p className="text-tech-textLight">
              Transforming businesses through innovative solutions and cutting-edge technology.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-tech text-tech-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="font-tech text-tech-textLight hover:text-neon-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="font-tech text-tech-textLight hover:text-neon-primary transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/services" className="font-tech text-tech-textLight hover:text-neon-primary transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="font-tech text-tech-textLight hover:text-neon-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-tech text-tech-white mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/services/consulting" className="font-tech text-tech-textLight hover:text-neon-primary transition-colors">
                  Consulting
                </Link>
              </li>
              <li>
                <Link href="/services/development" className="font-tech text-tech-textLight hover:text-neon-primary transition-colors">
                  Development
                </Link>
              </li>
              <li>
                <Link href="/services/analytics" className="font-tech text-tech-textLight hover:text-neon-primary transition-colors">
                  Analytics
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-tech text-tech-white mb-4">Contact Us</h4>
            <ul className="space-y-2 text-tech-textLight font-tech">
              <li>123 Business Street</li>
              <li>Suite 100</li>
              <li>Business City, BZ 12345</li>
              <li>contact@acmesolutions.com</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-tech-silver/10">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-tech-textLight font-tech">
              © {new Date().getFullYear()} Acme Solutions. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="font-tech text-tech-textLight hover:text-neon-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="font-tech text-tech-textLight hover:text-neon-primary transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 