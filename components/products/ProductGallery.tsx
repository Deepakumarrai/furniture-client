"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProductGalleryProps {
  images: string[];
  productName: string;
  activeImageIndex?: number;
  onSelectImageIndex?: (index: number) => void;
}

export const ProductGallery: React.FC<ProductGalleryProps> = ({
  images,
  productName,
  activeImageIndex: controlledIndex,
  onSelectImageIndex,
}) => {
  const [internalIndex, setInternalIndex] = useState(0);

  const activeImageIndex = controlledIndex !== undefined ? controlledIndex : internalIndex;

  const setActiveImageIndex = (newIdx: number | ((prev: number) => number)) => {
    const nextVal = typeof newIdx === "function" ? newIdx(activeImageIndex) : newIdx;
    if (onSelectImageIndex) {
      onSelectImageIndex(nextVal);
    } else {
      setInternalIndex(nextVal);
    }
  };

  const galleryImages = images && images.length > 0 ? images : [
    "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1580481077195-738b5f36e88e?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=900&q=80"
  ];

  const activeImage = galleryImages[activeImageIndex] || galleryImages[0];

  const handlePrev = () => {
    setActiveImageIndex((activeImageIndex - 1 + galleryImages.length) % galleryImages.length);
  };

  const handleNext = () => {
    setActiveImageIndex((activeImageIndex + 1) % galleryImages.length);
  };

  return (
    <div className="flex flex-col gap-4">
      {/* Main Image Viewport with Previous/Next Arrows (Matching Screenshot) */}
      <div className="relative w-full aspect-square sm:aspect-[4/3] bg-[#F7F7F5] rounded-2xl overflow-hidden border border-[#E8E8E5] p-6 flex items-center justify-center group shadow-xs">
        
        {/* Left Arrow Button */}
        <button
          type="button"
          onClick={handlePrev}
          className="absolute left-3.5 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-[#18552B] text-white flex items-center justify-center shadow-md hover:bg-[#123D20] transition-transform active:scale-95 z-10"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        {/* Large Product Image */}
        <div className="relative w-full h-full">
          <Image
            src={activeImage}
            alt={`${productName} view ${activeImageIndex + 1}`}
            fill
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-contain object-center transition-all duration-300 ease-out"
          />
        </div>

        {/* Right Arrow Button (Yellow Accent in Screenshot) */}
        <button
          type="button"
          onClick={handleNext}
          className="absolute right-3.5 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-[#FFB82E] text-[#171717] flex items-center justify-center shadow-md hover:bg-[#ECA31F] transition-transform active:scale-95 z-10"
          aria-label="Next image"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* Image Counter Badge */}
        <div className="absolute bottom-3 right-3 bg-black/60 text-white text-[11px] font-medium px-2.5 py-0.5 rounded-full">
          {activeImageIndex + 1} / {galleryImages.length}
        </div>
      </div>

      {/* Thumbnails Strip (4 Boxes below) */}
      <div className="grid grid-cols-4 gap-3">
        {galleryImages.map((img, idx) => {
          const isSelected = activeImageIndex === idx;
          return (
            <button
              key={idx}
              type="button"
              onClick={() => setActiveImageIndex(idx)}
              className={cn(
                "relative aspect-square rounded-xl overflow-hidden border-2 transition-all duration-200 bg-[#F7F7F5] p-2",
                isSelected
                  ? "border-[#18552B] ring-2 ring-[#18552B]/20"
                  : "border-[#E8E8E5] hover:border-[#18552B]/50 opacity-75 hover:opacity-100"
              )}
            >
              <div className="relative w-full h-full">
                <Image
                  src={img}
                  alt={`${productName} thumbnail ${idx + 1}`}
                  fill
                  sizes="120px"
                  className="object-contain object-center"
                />
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};
