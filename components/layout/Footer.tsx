import React from "react";
import Link from "next/link";
import {
  Armchair,
  Instagram,
  Facebook,
  Twitter,
  Linkedin,
  MapPin,
  Phone,
  Mail,
  ArrowRight,
} from "lucide-react";
import { COMPANY_INFO } from "@/lib/products-data";

export const Footer: React.FC = () => {
  const currentYear = 2026;

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Products", href: "/products" },
    { name: "Categories", href: "/#categories" },
    { name: "Contact Us", href: "/contact" },
  ];

  const categories = [
    { name: "Living Room", href: "/products?category=Living+Room" },
    { name: "Bedroom", href: "/products?category=Bedroom" },
    { name: "Dining Room", href: "/products?category=Dining" },
    { name: "Office", href: "/products?category=Office" },
    { name: "Tables", href: "/products?category=Tables" },
    { name: "Chairs", href: "/products?category=Chairs" },
  ];

  return (
    <footer className="bg-[#123D20] text-white pt-16 pb-10 border-t border-primary-800">
      <div className="max-w-container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          
          {/* Brand Info (2 cols on lg) */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-2 group inline-block">
              <div className="w-9 h-9 rounded-full bg-white text-primary flex items-center justify-center shadow-xs">
                <Armchair className="w-5 h-5 text-primary" />
              </div>
              <span className="font-poppins font-bold text-xl tracking-tight text-white flex items-center">
                Furniture<span className="text-accent-yellow font-black">.</span>
              </span>
            </Link>

            <p className="text-xs sm:text-sm text-white/75 font-normal leading-relaxed max-w-sm">
              Discover beautifully crafted, comfortable, and functional furniture designed to elevate your living spaces with timeless modern aesthetics.
            </p>

            {/* Social Icons */}
            <div className="pt-2 flex items-center space-x-2.5 text-white/80">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-accent-yellow hover:text-text-primary flex items-center justify-center transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-accent-yellow hover:text-text-primary flex items-center justify-center transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-accent-yellow hover:text-text-primary flex items-center justify-center transition-colors"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-accent-yellow hover:text-text-primary flex items-center justify-center transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-wider font-semibold text-accent-yellow">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-xs sm:text-sm text-white/75 hover:text-accent-yellow transition-colors block"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-wider font-semibold text-accent-yellow">
              Categories
            </h4>
            <ul className="space-y-2">
              {categories.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-xs sm:text-sm text-white/75 hover:text-accent-yellow transition-colors block"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-wider font-semibold text-accent-yellow">
              Contact Info
            </h4>
            <ul className="space-y-2.5 text-xs text-white/75">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-3.5 h-3.5 text-accent-yellow flex-shrink-0 mt-0.5" />
                <span>Studio 48, 100ft Road, Indiranagar, Bengaluru 560038</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-3.5 h-3.5 text-accent-yellow flex-shrink-0" />
                <a href="tel:+919876543210" className="hover:text-accent-yellow transition-colors">
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-3.5 h-3.5 text-accent-yellow flex-shrink-0" />
                <a href="mailto:support@furniture.in" className="hover:text-accent-yellow transition-colors">
                  support@furniture.in
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/60">
          <p>© {currentYear} Furniture. All rights reserved.</p>
          <div className="flex items-center space-x-5">
            <Link href="/about" className="hover:text-white transition-colors">Privacy Policy</Link>
            <span>•</span>
            <Link href="/about" className="hover:text-white transition-colors">Terms of Service</Link>
            <span>•</span>
            <Link href="/contact" className="hover:text-white transition-colors">Help Center</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
