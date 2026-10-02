"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export const FeaturedCategories: React.FC = () => {
  const chairSubcategories = [
    "Gaming Chair",
    "Lounge Chair",
    "Folding Chair",
    "Dining Chair",
    "Office Chair",
    "Armchair",
    "Bar Stool",
    "Club Chair",
  ];

  const sofaSubcategories = [
    "Reception Sofa",
    "Sectional Sofa",
    "Armless Sofa",
    "Curved Sofa",
  ];

  const lightingSubcategories = [
    "Table Lights",
    "Floor Lights",
    "Ceiling Lights",
    "Wall Lights",
  ];

  return (
    <section id="categories" className="py-12 sm:py-16 bg-[#F7F7F5]">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-8">
        
        {/* Asymmetric Category Grid: Large Chairs card on left, 2 Stacked cards on right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* ================= 1. LARGE CARD: CHAIRS (6 or 6.5 cols) ================= */}
          <div className="lg:col-span-6 bg-[#F4F4F2] rounded-3xl p-8 sm:p-10 border border-[#E8E8E5] shadow-xs relative overflow-hidden flex flex-col justify-between min-h-[500px]">
            {/* Text & Categories List */}
            <div className="relative z-10 max-w-[240px] sm:max-w-[270px]">
              {/* Yellow Pill Badge */}
              <div className="inline-block bg-white px-3 py-1 rounded-full text-xs font-semibold text-[#171717] border border-[#E8E8E5] shadow-2xs mb-4">
                <span className="text-[#FFB82E] font-bold">1500+</span> Items
              </div>

              {/* Title */}
              <h3 className="text-3xl sm:text-4xl font-bold font-poppins text-[#171717] mb-2.5">
                Chairs
              </h3>

              {/* Description */}
              <p className="text-xs text-[#757575] font-normal leading-relaxed mb-6">
                Ergonomically contoured armchairs, dining perches, and luxury lounge seats crafted with solid hardwoods.
              </p>

              {/* Vertical Subcategories List */}
              <div className="space-y-2.5">
                {chairSubcategories.map((sub, idx) => (
                  <Link
                    key={idx}
                    href={`/products?category=Chairs&sub=${encodeURIComponent(sub)}`}
                    className="block text-xs font-medium text-[#757575] hover:text-[#18552B] transition-colors"
                  >
                    {sub}
                  </Link>
                ))}
              </div>
            </div>

            {/* Luxury Lounge Chair & Ottoman Anchored on the Right */}
            <div className="absolute right-0 bottom-0 top-6 w-[280px] sm:w-[350px] pointer-events-none flex items-end justify-end">
              <div className="relative w-full h-full min-h-[480px]">
                <Image
                  src="/images/lounge-chair-cream.png"
                  alt="Luxury Lounge Chair & Ottoman"
                  fill
                  priority
                  sizes="350px"
                  className="object-contain object-right-bottom furniture-3d transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </div>
          </div>

          {/* ================= 2. RIGHT STACKED CARDS (6 cols) ================= */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            
            {/* Top Card: Sofa */}
            <div className="bg-[#F4F4F2] rounded-3xl p-8 border border-[#E8E8E5] shadow-xs hover:shadow-3d transition-all duration-300 relative overflow-hidden flex items-center justify-between min-h-[238px] group">
              <div className="relative z-10 max-w-[210px]">
                {/* Yellow Pill Badge */}
                <div className="inline-block bg-white px-3 py-1 rounded-full text-xs font-semibold text-[#171717] border border-[#E8E8E5] shadow-2xs mb-3">
                  <span className="text-[#FFB82E] font-bold">750+</span> Items
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold font-poppins text-[#171717] mb-3">
                  Sofa
                </h3>

                <div className="space-y-1.5">
                  {sofaSubcategories.map((sub, idx) => (
                    <Link
                      key={idx}
                      href="/products?category=Living+Room"
                      className="block text-xs font-medium text-[#757575] hover:text-[#18552B] transition-colors"
                    >
                      {sub}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Tufted Armchair / Sofa Image */}
              <div className="relative w-[210px] sm:w-[260px] h-[190px] flex-shrink-0">
                <Image
                  src="/images/sofa-tufted.png"
                  alt="Sofa Collection"
                  fill
                  sizes="(max-width: 640px) 210px, 260px"
                  className="object-contain object-right-center furniture-3d transition-transform duration-500 group-hover:scale-108"
                />
              </div>
            </div>

            {/* Bottom Card: Lighting */}
            <div className="bg-[#F4F4F2] rounded-3xl p-8 border border-[#E8E8E5] shadow-xs hover:shadow-3d transition-all duration-300 relative overflow-hidden flex items-center justify-between min-h-[238px] group">
              <div className="relative z-10 max-w-[210px]">
                {/* Yellow Pill Badge */}
                <div className="inline-block bg-white px-3 py-1 rounded-full text-xs font-semibold text-[#171717] border border-[#E8E8E5] shadow-2xs mb-3">
                  <span className="text-[#FFB82E] font-bold">450+</span> Items
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold font-poppins text-[#171717] mb-3">
                  Lighting
                </h3>

                <div className="space-y-1.5">
                  {lightingSubcategories.map((sub, idx) => (
                    <Link
                      key={idx}
                      href="/products?category=Storage"
                      className="block text-xs font-medium text-[#757575] hover:text-[#18552B] transition-colors"
                    >
                      {sub}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Bronze Dome Pendant Lamp Image */}
              <div className="relative w-[190px] sm:w-[240px] h-[210px] -mt-4 sm:-mt-6 flex-shrink-0">
                <Image
                  src="/images/lighting-lamp.png"
                  alt="Lighting Collection"
                  fill
                  sizes="(max-width: 640px) 190px, 240px"
                  className="object-contain object-top-right furniture-3d transition-transform duration-500 group-hover:scale-108"
                />
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
