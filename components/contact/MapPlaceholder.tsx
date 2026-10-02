import React from "react";
import { MapPin, Navigation, ExternalLink } from "lucide-react";
import { COMPANY_INFO } from "@/lib/products-data";

export const MapPlaceholder: React.FC = () => {
  return (
    <div className="relative w-full h-72 sm:h-80 rounded-card-lg overflow-hidden border border-border shadow-card bg-[#F0F0ED] flex items-center justify-center">
      {/* Map visual background with clean dot grid */}
      <div className="absolute inset-0 bg-[#EFEFEA] opacity-90 bg-[radial-gradient(#C5C5BF_1.2px,transparent_1.2px)] [background-size:16px_16px]" />
      
      {/* Map geometric lines */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <line x1="0" y1="35%" x2="100%" y2="35%" stroke="#18552B" strokeWidth="8" />
          <line x1="0" y1="65%" x2="100%" y2="60%" stroke="#18552B" strokeWidth="6" />
          <line x1="35%" y1="0" x2="40%" y2="100%" stroke="#18552B" strokeWidth="10" />
          <line x1="70%" y1="0" x2="65%" y2="100%" stroke="#18552B" strokeWidth="7" />
        </svg>
      </div>

      {/* Showroom Marker Card */}
      <div className="relative z-10 bg-white/95 backdrop-blur-md p-6 rounded-card border border-border shadow-card max-w-sm mx-4 text-center">
        <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center mx-auto mb-2.5 shadow-md">
          <MapPin className="w-5 h-5" />
        </div>
        <h4 className="font-poppins font-bold text-base text-text-primary">
          Furniture. Showroom
        </h4>
        <p className="text-xs text-text-secondary font-normal mt-1 mb-3">
          {COMPANY_INFO.address}
        </p>
        <a
          href="https://maps.google.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline"
        >
          <Navigation className="w-3.5 h-3.5" />
          <span>Get Directions</span>
          <ExternalLink className="w-3 h-3 ml-0.5 opacity-60" />
        </a>
      </div>
    </div>
  );
};
