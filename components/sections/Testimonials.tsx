"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Star, Quote, ChevronLeft, ChevronRight, CheckCircle2 } from "lucide-react";

export const Testimonials: React.FC = () => {
  const [activeIdx, setActiveIdx] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const reviews = [
    {
      id: "rev-1",
      name: "Aarav Sharma",
      role: "Principal Architect",
      city: "Bengaluru, Karnataka",
      avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=250&q=80",
      rating: 5.0,
      item: "Purchased Solid Oak Dining Set",
      text: "The quality and joinery of our solid oak dining set exceeded all expectations. Finding authentic FSC-certified hardwood furniture with such refined modern proportions in India has been a game changer for my residential projects.",
    },
    {
      id: "rev-2",
      name: "Priya Malhotra",
      role: "Luxury Interior Stylist",
      city: "South Mumbai",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=250&q=80",
      rating: 5.0,
      item: "Purchased Wingback Armchairs & Sofa",
      text: "As a stylist, I am extremely particular about textile breathability and wood finishes. The natural organic hardwax oil on the timber feels silky and tactile. Delivery across Mumbai was prompt, seamless, and impeccably packaged.",
    },
    {
      id: "rev-3",
      name: "Vikramaditya Singhania",
      role: "Design Director",
      city: "New Delhi",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=250&q=80",
      rating: 5.0,
      item: "Custom Executive Office Suite",
      text: "Outstanding craftsmanship. From custom dimensional adjustments to structural rigidity, every single detail speaks of timeless heritage. The ergonomic seating comfort during long work hours is unparalleled.",
    },
    {
      id: "rev-4",
      name: "Ananya Deshmukh",
      role: "Creative Entrepreneur",
      city: "Koregaon Park, Pune",
      avatar: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&w=250&q=80",
      rating: 5.0,
      item: "Purchased Papasan & Nightstands",
      text: "The circular rattan chair and bedside nightstands brought effortless warmth into our penthouse. The online ordering process was transparent and the customer support team in India was delightfully responsive.",
    },
  ];

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Auto slide every 6 seconds unless user is hovering
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveIdx((prev) => {
        const maxIdx = isMobile ? reviews.length - 1 : reviews.length - 2;
        return (prev + 1) > maxIdx ? 0 : prev + 1;
      });
    }, 6000);
    return () => clearInterval(interval);
  }, [isPaused, reviews.length, isMobile]);

  const prevSlide = () => {
    const maxIdx = isMobile ? reviews.length - 1 : reviews.length - 2;
    setActiveIdx((prev) => (prev === 0 ? maxIdx : prev - 1));
  };

  const nextSlide = () => {
    const maxIdx = isMobile ? reviews.length - 1 : reviews.length - 2;
    setActiveIdx((prev) => (prev >= maxIdx ? 0 : prev + 1));
  };

  return (
    <section
      className="py-16 sm:py-20 bg-gradient-to-b from-[#F7F7F5] to-white border-b border-[#EBEBE8] overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="max-w-[1240px] mx-auto px-4 sm:px-8">
        
        {/* Section Header with Navigation Buttons */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#18552B]/10 text-[#18552B] text-xs font-bold uppercase tracking-wider mb-2">
              <span>★ Trusted by 5,000+ Indian Homes</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-poppins text-[#171717] tracking-tight">
              What Our <span className="text-[#18552B]">Clients</span> Say
            </h2>
            <p className="text-xs sm:text-sm text-[#757575] mt-1">
              Real stories from homeowners, architects, and designers across India.
            </p>
          </div>

          {/* Carousel Next / Prev Controls */}
          <div className="flex items-center gap-2 self-start sm:self-auto">
            <button
              onClick={prevSlide}
              aria-label="Previous reviews"
              className="w-10 h-10 rounded-full border border-[#D5D5D0] bg-white text-[#171717] hover:bg-[#18552B] hover:text-white hover:border-[#18552B] transition-all duration-200 flex items-center justify-center shadow-2xs hover:shadow-xs active:scale-95 cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              aria-label="Next reviews"
              className="w-10 h-10 rounded-full border border-[#D5D5D0] bg-white text-[#171717] hover:bg-[#18552B] hover:text-white hover:border-[#18552B] transition-all duration-200 flex items-center justify-center shadow-2xs hover:shadow-xs active:scale-95 cursor-pointer"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Carousel Viewport */}
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-700 ease-out gap-6"
            style={{
              transform: `translateX(-${activeIdx * (isMobile ? 100 : 50)}%)`,
            }}
          >
            {reviews.map((rev) => (
              <div
                key={rev.id}
                className="w-full md:w-[calc(50%-12px)] flex-shrink-0 bg-white rounded-3xl p-6 sm:p-8 border border-[#E8E8E5] hover:border-[#18552B]/40 shadow-xs hover:shadow-xl transition-all duration-300 relative group flex flex-col justify-between hover:-translate-y-1"
              >
                {/* Accent Top Decorative Border Glow on Hover */}
                <div className="absolute top-0 left-8 right-8 h-1 bg-gradient-to-r from-transparent via-[#18552B] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-full" />

                <div>
                  {/* Top Row: User Avatar, Info & Quote Icon */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3.5">
                      <div className="w-13 h-13 rounded-full ring-2 ring-[#18552B]/20 p-0.5 overflow-hidden relative shadow-xs flex-shrink-0 bg-white">
                        <div className="relative w-12 h-12 rounded-full overflow-hidden">
                          <Image
                            src={rev.avatar}
                            alt={rev.name}
                            fill
                            sizes="48px"
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="flex items-center gap-1.5">
                          <h4 className="font-poppins font-bold text-sm sm:text-base text-[#171717]">
                            {rev.name}
                          </h4>
                          <CheckCircle2 className="w-4 h-4 text-[#18552B] fill-[#18552B]/10" />
                        </div>
                        <p className="text-xs text-[#18552B] font-medium">
                          {rev.role}
                        </p>
                        <p className="text-[11px] text-[#8C8C88] font-normal">
                          {rev.city}
                        </p>
                      </div>
                    </div>

                    {/* Styled Quote Icon */}
                    <div className="w-10 h-10 rounded-2xl bg-[#F7F7F5] group-hover:bg-[#18552B]/10 flex items-center justify-center text-[#18552B] transition-colors duration-300 flex-shrink-0">
                      <Quote className="w-5 h-5 rotate-180 opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300" />
                    </div>
                  </div>

                  {/* Rating Stars & Item Tag */}
                  <div className="flex flex-wrap items-center justify-between gap-2 py-2 mb-3 border-y border-[#F0F0ED]">
                    <div className="flex items-center gap-1 text-[#FFB82E]">
                      {[...Array(5)].map((_, sIdx) => (
                        <Star key={sIdx} className="w-3.5 h-3.5 fill-[#FFB82E]" />
                      ))}
                      <span className="text-xs font-bold text-[#171717] ml-1">5.0</span>
                    </div>
                    <span className="text-[11px] font-semibold text-[#757575] bg-[#F7F7F5] px-2.5 py-0.5 rounded-full">
                      {rev.item}
                    </span>
                  </div>

                  {/* Review Quote */}
                  <p className="text-xs sm:text-sm text-[#4A4A48] font-normal leading-relaxed italic">
                    &ldquo;{rev.text}&rdquo;
                  </p>
                </div>

                {/* Bottom Verified Badge */}
                <div className="mt-5 pt-3 border-t border-[#F5F5F2] flex items-center justify-between text-[11px] text-[#757575]">
                  <span className="flex items-center gap-1 text-[#18552B] font-semibold">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#18552B] animate-pulse" />
                    Verified Purchase
                  </span>
                  <span>100% Authentic Indian Craftsmanship</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Interactive Progress Pill Bars */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {Array.from({ length: reviews.length - 1 }).map((_, pIdx) => (
            <button
              key={pIdx}
              onClick={() => setActiveIdx(pIdx)}
              aria-label={`Go to slide ${pIdx + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                activeIdx === pIdx
                  ? "w-8 bg-[#18552B]"
                  : "w-2.5 bg-[#DCDCD8] hover:bg-[#B0B0AA]"
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

