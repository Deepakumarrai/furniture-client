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
      {/* Hero Section */}
      <section className="relative py-16 sm:py-20 bg-[#123D20] text-white overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <Image
            src="https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&w=2000&q=80"
            alt="Showroom and Studio"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#123D20] via-[#123D20]/80 to-[#123D20]/90" />
        </div>

        <div className="relative z-10 max-w-container mx-auto px-4 sm:px-6 text-center">
          <span className="text-xs uppercase tracking-widest font-semibold text-accent-yellow mb-2.5 block">
            Collaborate With Us
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-poppins tracking-tight text-white mb-3">
            Let&apos;s Build Your Perfect Space
          </h1>
          <p className="text-xs sm:text-sm text-white/80 font-normal max-w-lg mx-auto leading-relaxed">
            Whether you are selecting a signature dining piece, furnishing a residence, or commissioning bespoke furniture, our team is here to assist.
          </p>
        </div>
      </section>

      {/* Main Form & Information Section */}
      <section className="py-12 sm:py-16">
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
