"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const FlashSaleBanner: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({ hours: 4, minutes: 48, seconds: 18 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: 59, seconds: 59 };
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-12 sm:py-16 bg-[#F7F7F5]">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* ================= LEFT FLASH SALE CARD (7 cols) ================= */}
          <div className="lg:col-span-7 bg-[#F4F4F2] rounded-3xl p-8 sm:p-10 border border-[#E8E8E5] shadow-xs relative overflow-hidden flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="relative z-10 max-w-xs space-y-4 text-left w-full sm:w-auto">
              <span className="text-sm font-bold text-[#18552B] tracking-wide block font-poppins">
                Flash Sale!
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold font-poppins text-[#171717] leading-tight">
                20% off - Limited Time Offer!
              </h3>

              {/* Countdown Timer Row */}
              <div className="flex items-center gap-2 text-center pt-2">
                <div className="bg-white px-3 py-2 rounded-xl border border-[#E8E8E5] shadow-2xs">
                  <span className="text-base sm:text-lg font-bold font-poppins text-[#171717] block">
                    {String(timeLeft.hours).padStart(2, "0")}
                  </span>
                  <span className="text-[10px] text-[#757575] font-medium uppercase">Hours</span>
                </div>
                <span className="font-bold text-[#171717]">:</span>
                <div className="bg-white px-3 py-2 rounded-xl border border-[#E8E8E5] shadow-2xs">
                  <span className="text-base sm:text-lg font-bold font-poppins text-[#171717] block">
                    {String(timeLeft.minutes).padStart(2, "0")}
                  </span>
                  <span className="text-[10px] text-[#757575] font-medium uppercase">Minutes</span>
                </div>
                <span className="font-bold text-[#171717]">:</span>
                <div className="bg-white px-3 py-2 rounded-xl border border-[#E8E8E5] shadow-2xs">
                  <span className="text-base sm:text-lg font-bold font-poppins text-[#171717] block">
                    {String(timeLeft.seconds).padStart(2, "0")}
                  </span>
                  <span className="text-[10px] text-[#757575] font-medium uppercase">Seconds</span>
                </div>
              </div>

              <div className="pt-3">
                <Link
                  href="/products"
                  className="inline-flex items-center gap-2 bg-[#18552B] hover:bg-[#123D20] text-white text-xs font-semibold px-6 py-3 rounded-full transition-all shadow-xs"
                >
                  <span>Shop Now</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Dual Arched Window Frames Image */}
            <div className="flex items-center gap-2 flex-shrink-0">
              <div className="relative w-28 sm:w-32 h-48 sm:h-56 rounded-t-full overflow-hidden border-2 border-white shadow-sm">
                <Image
                  src="/images/lounge-room-yellow.jpg"
                  alt="Sunlit Lounge Corner"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative w-28 sm:w-32 h-48 sm:h-56 rounded-t-full overflow-hidden border-2 border-white shadow-sm -mt-6">
                <Image
                  src="/images/hero-dining-room.png"
                  alt="Modern Dining Room"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* ================= RIGHT YELLOW BANNER (5 cols) ================= */}
          <Link
            href="/products?category=Chairs"
            className="lg:col-span-5 relative rounded-3xl overflow-hidden shadow-xs hover:shadow-md transition-all duration-300 block group aspect-[16/10] sm:aspect-[16/10] lg:aspect-auto h-full min-h-[280px]"
          >
            <Image
              src="/images/banner-wood-chair.jpg"
              alt="Flat 15% Discount - Wood Chair Collection"
              fill
              sizes="(max-width: 1024px) 100vw, 42vw"
              className="object-cover object-center group-hover:scale-[1.02] transition-transform duration-500 rounded-3xl"
              priority
            />
          </Link>

        </div>
      </div>
    </section>
  );
};
