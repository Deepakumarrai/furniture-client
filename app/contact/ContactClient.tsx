"use client";

import React from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { ContactForm } from "@/components/contact/ContactForm";
import { ContactInfo } from "@/components/contact/ContactInfo";
import { MapPlaceholder } from "@/components/contact/MapPlaceholder";

export function ContactClient() {
  const searchParams = useSearchParams();
  const productParam = searchParams.get("product");
  const typeParam = searchParams.get("type");

  let defaultInterest = "Custom Furniture Project";
  if (typeParam === "custom") {
    defaultInterest = "Custom Furniture Project";
  } else if (productParam) {
    defaultInterest = "Living Room Collection";
  }

  return (
    <div className="bg-[#F7F7F5]">
      {/* 3D Immersive Contact Hero Section */}
      <section className="relative py-18 sm:py-24 lg:py-28 bg-gradient-to-b from-[#0F3019] via-[#144423] to-[#123D20] text-white overflow-hidden">
        {/* Ambient Glows & Background Texture */}
        <div className="absolute inset-0 z-0 opacity-25">
          <Image
            src="https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&w=2000&q=80"
            alt="Showroom and Studio"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F3019] via-[#123D20]/85 to-[#0F3019]/90" />
        </div>

        {/* 3D Floating Glowing Rings */}
        <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-[#FFB82E]/10 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-[#18552B]/40 blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Top Pill Tag */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-accent-yellow text-xs font-bold uppercase tracking-widest mb-4 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-accent-yellow animate-pulse" />
            <span>Showroom Concierge & Custom Atelier</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold font-poppins tracking-tight text-white mb-5 leading-tight">
            Let&apos;s Build Your <span className="text-accent-yellow">Perfect Space</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xs sm:text-base text-white/85 font-normal max-w-2xl mx-auto leading-relaxed mb-8">
            Whether you are commissioning a bespoke dining table, furnishing a penthouse, or scheduling a private showroom viewing in Bengaluru, our master consultants are ready to assist.
          </p>

          {/* Floating Trust Badges for Mobile & Desktop */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/30 backdrop-blur-md border border-white/15 text-white/90 text-xs font-medium">
              📍 Indiranagar, Bengaluru
            </span>
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/30 backdrop-blur-md border border-white/15 text-white/90 text-xs font-medium">
              📞 +91 98765 43210
            </span>
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/30 backdrop-blur-md border border-white/15 text-white/90 text-xs font-medium">
              ⚡ 24hr Design Proposal Guarantee
            </span>
          </div>
        </div>
      </section>

      {/* 3D Floating Contact Quick-Action Cards */}
      <section className="relative -mt-8 sm:-mt-12 z-20 max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          <a
            href="tel:+919876543210"
            className="bg-white/95 backdrop-blur-md rounded-2xl sm:rounded-3xl p-5 sm:p-6 border border-[#E8E8E5] shadow-3d hover:shadow-3d-hover transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between group active:scale-[0.98]"
          >
            <div className="w-10 h-10 rounded-2xl bg-[#18552B]/10 flex items-center justify-center text-[#18552B] mb-3 group-hover:bg-[#18552B] group-hover:text-white transition-colors">
              📞
            </div>
            <div>
              <p className="text-xs text-[#757575] font-medium">Direct Call</p>
              <p className="text-xs sm:text-sm font-bold text-[#171717] font-poppins mt-0.5">
                +91 98765 43210
              </p>
            </div>
          </a>

          <a
            href="mailto:support@furniture.in"
            className="bg-white/95 backdrop-blur-md rounded-2xl sm:rounded-3xl p-5 sm:p-6 border border-[#E8E8E5] shadow-3d hover:shadow-3d-hover transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between group active:scale-[0.98]"
          >
            <div className="w-10 h-10 rounded-2xl bg-[#18552B]/10 flex items-center justify-center text-[#18552B] mb-3 group-hover:bg-[#18552B] group-hover:text-white transition-colors">
              ✉️
            </div>
            <div>
              <p className="text-xs text-[#757575] font-medium">Email Atelier</p>
              <p className="text-xs sm:text-sm font-bold text-[#171717] font-poppins mt-0.5">
                support@furniture.in
              </p>
            </div>
          </a>

          <div className="bg-white/95 backdrop-blur-md rounded-2xl sm:rounded-3xl p-5 sm:p-6 border border-[#E8E8E5] shadow-3d hover:shadow-3d-hover transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between group">
            <div className="w-10 h-10 rounded-2xl bg-[#18552B]/10 flex items-center justify-center text-[#18552B] mb-3 group-hover:bg-[#18552B] group-hover:text-white transition-colors">
              🏛️
            </div>
            <div>
              <p className="text-xs text-[#757575] font-medium">Design Studio</p>
              <p className="text-xs sm:text-sm font-bold text-[#171717] font-poppins mt-0.5">
                Indiranagar, BLR
              </p>
            </div>
          </div>

          <div className="bg-white/95 backdrop-blur-md rounded-2xl sm:rounded-3xl p-5 sm:p-6 border border-[#E8E8E5] shadow-3d hover:shadow-3d-hover transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between group">
            <div className="w-10 h-10 rounded-2xl bg-[#18552B]/10 flex items-center justify-center text-[#18552B] mb-3 group-hover:bg-[#18552B] group-hover:text-white transition-colors">
              ⏱️
            </div>
            <div>
              <p className="text-xs text-[#757575] font-medium">Studio Hours</p>
              <p className="text-xs sm:text-sm font-bold text-[#171717] font-poppins mt-0.5">
                10 AM – 8 PM IST
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Form & Information Section */}
      <section className="py-14 sm:py-18">
        <div className="max-w-container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
            {/* Left: Contact Form (7 cols on lg) */}
            <div className="lg:col-span-7">
              <ContactForm defaultInterest={defaultInterest} />
            </div>

            {/* Right: Contact Information (5 cols on lg) */}
            <div className="lg:col-span-5">
              <ContactInfo />
            </div>
          </div>

          {/* Map Section */}
          <div className="space-y-4">
            <div className="text-center max-w-lg mx-auto mb-6">
              <span className="text-xs uppercase tracking-wider font-semibold text-primary block mb-1">
                Showroom Location
              </span>
              <h3 className="font-poppins font-bold text-2xl text-text-primary">
                Visit Our Design Flagship
              </h3>
            </div>
            <MapPlaceholder />
          </div>
        </div>
      </section>
    </div>
  );
}
