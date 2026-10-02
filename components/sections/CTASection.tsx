import React from "react";
import Link from "next/link";
import { ArrowRight, Ruler, Compass, Hammer } from "lucide-react";

export const CTASection: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-container mx-auto px-4 sm:px-6">
        <div className="relative bg-[#123D20] text-white rounded-card-lg p-8 sm:p-14 overflow-hidden shadow-card">
          {/* Subtle Decorative Background Dot Pattern */}
          <div className="absolute top-0 right-0 w-64 h-48 dot-pattern opacity-10 pointer-events-none" />
          <div className="absolute bottom-0 left-10 w-48 h-32 dot-pattern opacity-10 pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto text-center">
            <span className="text-xs uppercase tracking-widest font-semibold text-accent-yellow mb-2 block">
              Bespoke Custom Furniture
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-poppins text-white mb-4 leading-tight">
              Have Something Specific in Mind?
            </h2>
            <p className="text-xs sm:text-sm text-white/80 font-normal leading-relaxed mb-8 max-w-lg mx-auto">
              Talk to us about custom furniture designed specifically for your space. From bespoke sizing to custom timber finishes, our master artisans bring your exact vision to reality.
            </p>

            {/* 3 Quick Value Icons */}
            <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-white/90 mb-8 font-medium">
              <div className="flex items-center gap-1.5">
                <Ruler className="w-3.5 h-3.5 text-accent-yellow" />
                <span>Custom Dimensions</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Compass className="w-3.5 h-3.5 text-accent-yellow" />
                <span>3D Render Consultation</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Hammer className="w-3.5 h-3.5 text-accent-yellow" />
                <span>Solid Timber Craft</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact?type=custom"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-accent-yellow hover:bg-accent-hover text-text-primary text-xs sm:text-sm font-semibold px-7 py-3.5 rounded-full shadow-card transition-all"
              >
                <span>Request a Quote</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/products?category=Custom"
                className="w-full sm:w-auto text-xs sm:text-sm font-semibold text-white/90 hover:text-white underline underline-offset-4 py-2"
              >
                View Custom Portfolio
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
