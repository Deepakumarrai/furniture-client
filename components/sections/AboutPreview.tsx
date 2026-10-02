import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

export const AboutPreview: React.FC = () => {
  const highlights = [
    "100% Sustainably harvested solid hardwoods",
    "Non-toxic organic hardwax oil and zero-VOC sealants",
    "Ergonomic geometry designed for modern living",
    "Bespoke sizing and tailored room solutions",
  ];

  return (
    <section className="py-16 sm:py-24 bg-[#F7F7F5] overflow-hidden">
      <div className="max-w-container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left: Furniture Image Composition with Accent Floating Badge */}
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[4/3] rounded-card-lg overflow-hidden border border-border shadow-card bg-white">
              <Image
                src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=80"
                alt="Craftsmanship & Modern Living"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center"
              />
            </div>

            {/* Floating Trust Pill */}
            <div className="absolute -bottom-5 -right-2 sm:right-6 bg-white p-4 rounded-card border border-border shadow-card max-w-[220px]">
              <div className="flex items-center gap-2 mb-1">
                <span className="w-2.5 h-2.5 rounded-full bg-primary" />
                <span className="text-xs font-bold text-text-primary">14+ Years</span>
              </div>
              <p className="text-[11px] text-text-secondary leading-tight">
                Crafting timeless furniture for over 50,000+ happy homes.
              </p>
            </div>
          </div>

          {/* Right: Company Story */}
          <div className="lg:col-span-6">
            <span className="text-xs uppercase tracking-wider font-semibold text-primary block mb-2">
              About Our Company
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-text-primary font-poppins leading-tight mb-4">
              Crafted for Better Spaces & Modern Living
            </h2>
            <p className="text-xs sm:text-sm text-text-secondary leading-relaxed mb-6 font-normal">
              We create modern furniture that balances quiet elegance with everyday durability. Every piece begins with sustainably sourced hardwoods and ends with meticulous hand-finishing by master woodworkers.
            </p>

            {/* Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {highlights.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs text-text-primary font-medium">
                  <div className="w-4 h-4 rounded-full bg-primary-50 text-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-2.5 h-2.5 stroke-[3]" />
                  </div>
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary-hover text-white text-xs sm:text-sm font-semibold px-6 py-3 rounded-full shadow-card hover:shadow-card-hover transition-all"
            >
              <span>Read Our Full Story</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
};
