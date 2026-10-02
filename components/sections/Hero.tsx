"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  ArrowLeft,
  Star,
  Plus,
  Sparkles,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface HeroCard {
  id: string;
  category: string;
  itemCount: string;
  price: string;
  image: string;
  link: string;
}

const HERO_SLIDES: HeroCard[] = [
  {
    id: "lounge-chair",
    category: "Lounge Chair",
    itemCount: "850+ Items",
    price: "₹34,999",
    image: "/images/lounge-chair-cream.png",
    link: "/products?category=Chairs&sub=Lounge%20Chair",
  },
  {
    id: "living-room",
    category: "Living Room",
    itemCount: "2,500+ Items",
    price: "₹45,000",
    image: "/images/hero-living-room.png",
    link: "/products?category=Living+Room",
  },
  {
    id: "bedroom",
    category: "Bed Room",
    itemCount: "1,500+ Items",
    price: "₹35,000",
    image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=900&q=80",
    link: "/products?category=Bedroom",
  },
  {
    id: "dining-room",
    category: "Dining Room",
    itemCount: "1,800+ Items",
    price: "₹28,000",
    image: "/images/hero-dining-room.png",
    link: "/products?category=Dining",
  },
  {
    id: "lounge-living",
    category: "Lounge & Living",
    itemCount: "1,200+ Items",
    price: "₹32,000",
    image: "/images/lounge-room-yellow.jpg",
    link: "/products?category=Chairs",
  },
];

export const Hero: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextCard = () => {
    setCurrentIndex((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  const prevCard = () => {
    setCurrentIndex((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  };

  return (
    <section className="relative bg-[#F7F7F5] pt-12 pb-16 lg:pt-14 lg:pb-20 overflow-hidden">
      {/* Decorative Dot Patterns from Screenshot */}
      <div className="absolute top-6 left-[48%] w-32 h-20 dot-pattern-light pointer-events-none" />
      <div className="absolute bottom-6 left-[28%] w-32 h-16 dot-pattern-light pointer-events-none hidden md:block" />

      <div className="max-w-[1240px] mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* ================= LEFT HERO (6 cols on lg) ================= */}
          <div className="lg:col-span-6 z-10">
            {/* Top Pill Badge with Sparkle Accent */}
            <div className="relative inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-[#E8E8E5] shadow-xs mb-6">
              <span className="text-base leading-none">🪑</span>
              <span className="text-xs font-semibold text-[#171717] tracking-tight font-poppins">
                The Best Online Furniture Store
              </span>
              {/* Yellow Sparkles on Top Right */}
              <span className="absolute -top-1.5 -right-1 text-[#FFB82E] text-xs">✨</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[52px] font-bold text-[#171717] leading-[1.12] tracking-tight mb-5 font-poppins">
              Explore Our <span className="text-[#18552B]">Modern</span> <br />
              <span className="text-[#18552B]">Furniture</span> Collection
            </h1>

            {/* Subtitle */}
            <p className="text-xs sm:text-sm text-[#757575] font-normal leading-relaxed max-w-md mb-8">
              Discover thoughtfully designed furniture that combines everyday comfort, durable craftsmanship, and timeless modern style for your home and workspace.
            </p>

            {/* Buttons Row */}
            <div className="flex flex-wrap items-center gap-5 sm:gap-6 pt-2">
              <Link
                href="/products"
                className="inline-flex items-center justify-center gap-2.5 bg-[#18552B] hover:bg-[#123D20] text-white text-xs sm:text-sm font-semibold px-8 py-3.5 rounded-full shadow-sm hover:shadow-md transition-all duration-200"
              >
                <span>Shop Now</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="/products"
                className="text-xs sm:text-sm font-semibold text-[#171717] hover:text-[#18552B] transition-colors underline underline-offset-4 decoration-[#BDBDBD] hover:decoration-[#18552B]"
              >
                View All Products
              </Link>
            </div>
          </div>

          {/* ================= RIGHT HERO: SLIDER CARDS (6 cols on lg) ================= */}
          <div className="lg:col-span-6 relative w-full overflow-hidden">
            <div className="w-full overflow-hidden rounded-3xl">
              
              {/* Carousel Track (Clipped strictly inside right column) */}
              <div
                className="flex gap-4 sm:gap-5 transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${currentIndex * 85}%)` }}
              >
                {HERO_SLIDES.map((card, idx) => (
                  <div
                    key={card.id}
                    className="flex-shrink-0 w-[82%] sm:w-[85%] bg-white rounded-3xl overflow-hidden border border-[#E8E8E5] shadow-xs hover:shadow-md transition-all duration-300 group"
                  >
                    {/* Top Image with Target Tag & 3D Ambient Glow */}
                    <div className="relative h-[250px] sm:h-[300px] w-full bg-gradient-to-b from-[#F8F8F6] to-[#ECECE8] overflow-hidden flex items-center justify-center">
                      <div className="absolute inset-0 ambient-light-glow pointer-events-none" />
                      <Image
                        src={card.image}
                        alt={card.category}
                        fill
                        sizes="(max-width: 640px) 290px, 450px"
                        priority={idx === 0}
                        className={cn(
                          "transition-transform duration-500",
                          card.image.endsWith(".png")
                            ? "object-contain p-4 furniture-3d group-hover:scale-108"
                            : "object-cover object-center group-hover:scale-105"
                        )}
                      />

                      {/* Hotspot Target Marker on Room Image */}
                      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-7 h-7 rounded-full border border-white/70 bg-white/20 backdrop-blur-xs flex items-center justify-center pointer-events-none animate-pulse">
                        <div className="w-2.5 h-2.5 rounded-full bg-white shadow-xs" />
                      </div>

                      {/* Floating Glass Price Tag */}
                      <div className="absolute right-4 bottom-5 glass-badge text-[#171717] text-xs font-bold px-3 py-1 rounded-full shadow-3d">
                        {card.price}
                      </div>
                    </div>

                    {/* Bottom Card Content */}
                    <div className="p-5 flex items-center justify-between bg-white">
                      <div>
                        <h3 className="font-poppins font-bold text-base sm:text-lg text-[#171717] group-hover:text-[#18552B] transition-colors">
                          {card.category}
                        </h3>
                        <p className="text-xs text-[#757575] font-normal mt-0.5 font-poppins">
                          {card.itemCount}
                        </p>
                      </div>

                      {/* Circular Green Arrow Up-Right (↗) */}
                      <Link
                        href={card.link}
                        className="w-10 h-10 rounded-full bg-[#18552B] hover:bg-[#123D20] text-white flex items-center justify-center transition-transform group-hover:scale-105 shadow-xs"
                        aria-label={`Explore ${card.category}`}
                      >
                        <ArrowUpRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Controls: Dark Green Left Button + Yellow Right Button + Dots */}
            <div className="flex items-center justify-between mt-6 px-1">
              <div className="flex items-center gap-3">
                <button
                  onClick={prevCard}
                  className="w-10 h-10 rounded-full bg-[#18552B] hover:bg-[#123D20] text-white flex items-center justify-center shadow-xs transition-transform active:scale-95"
                  aria-label="Previous slide"
                >
                  <ArrowLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={nextCard}
                  className="w-10 h-10 rounded-full bg-[#FFB82E] hover:bg-[#ECA31F] text-[#171717] flex items-center justify-center shadow-xs transition-transform active:scale-95"
                  aria-label="Next slide"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              {/* Pagination Indicator Dots */}
              <div className="flex items-center gap-1.5">
                {HERO_SLIDES.map((_, dotIdx) => (
                  <button
                    key={dotIdx}
                    onClick={() => setCurrentIndex(dotIdx)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      currentIndex === dotIdx
                        ? "w-6 bg-[#18552B]"
                        : "w-2 bg-[#D4D4D0] hover:bg-[#A8A8A4]"
                    }`}
                    aria-label={`Go to slide ${dotIdx + 1}`}
                  />
                ))}
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
