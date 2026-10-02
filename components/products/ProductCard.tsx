"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Heart, Maximize2, ShoppingBag, Star } from "lucide-react";
import { Product } from "@/types/product";
import { cn } from "@/lib/utils";

import { useWishlist } from "@/context/WishlistContext";

interface ProductCardProps {
  product: Product;
  className?: string;
  priority?: boolean;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  className,
  priority = false,
}) => {
  const { isInWishlist, toggleWishlist, setIsWishlistOpen } = useWishlist();
  const isLiked = isInWishlist(product.id);
  const discountText = product.discountBadge || "10% off";
  const ratingValue = product.rating ? product.rating.toFixed(1) : "4.9";
  const [activeFinishIdx, setActiveFinishIdx] = useState(0);

  const [countdown, setCountdown] = useState(
    product.dealCountdown || null
  );

  useEffect(() => {
    if (!product.dealCountdown) return;
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (!prev) return null;
        if (prev.secs > 0) return { ...prev, secs: prev.secs - 1 };
        if (prev.mins > 0) return { ...prev, mins: 59, secs: 59 };
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, mins: 59, secs: 59 };
        if (prev.days > 0) return { ...prev, days: prev.days - 1, hours: 23, mins: 59, secs: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [product.dealCountdown]);

  const rawNum = product.priceFormatted ? parseFloat(product.priceFormatted.replace(/[^0-9.]/g, "")) : 0;
  const originalPrice = rawNum > 0
    ? `₹${Math.round(rawNum * (product.discountBadge === "50% off" ? 2 : 1.15)).toLocaleString("en-IN")}`
    : "";

  const currentImage =
    (product.finishes &&
      product.finishes[activeFinishIdx]?.imageIndex !== undefined &&
      product.images[product.finishes[activeFinishIdx].imageIndex!]) ||
    (product.finishes &&
      product.finishes[activeFinishIdx]?.image) ||
    product.images[activeFinishIdx % product.images.length] ||
    product.images[0];

  return (
    <div
      className={cn(
        "group relative flex flex-col bg-transparent transition-all duration-300",
        className
      )}
    >
      {/* Product Image Container (Light grey rounded box with 3D ambient lighting) */}
      <div className="relative w-full aspect-square bg-gradient-to-b from-[#F8F8F6] to-[#ECECE8] rounded-3xl overflow-hidden p-4 flex flex-col items-center justify-between border border-[#EBEBE8] shadow-2xs hover:shadow-3d transition-all duration-400 group/card">
        <div className="absolute inset-0 ambient-light-glow pointer-events-none opacity-60 group-hover/card:opacity-100 transition-opacity" />
        
        {/* Top-Left Green Discount Badge */}
        <div className="self-start z-10">
          <span className="bg-[#18552B] text-white text-[11px] font-semibold px-3 py-1 rounded-full shadow-2xs font-poppins">
            {discountText}
          </span>
        </div>

        {/* Floating Quick Action Icons on Top Right (Heart, Maximize, Shopping Bag) */}
        <div className="absolute top-3.5 right-3.5 z-10 flex flex-col gap-1.5 opacity-90 group-hover:opacity-100 transition-opacity">
          {/* Liked / Heart Button */}
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              toggleWishlist(product.id);
            }}
            className={cn(
              "w-8 h-8 rounded-full flex items-center justify-center shadow-xs border transition-all hover:scale-110 cursor-pointer",
              isLiked
                ? "bg-red-50 text-red-500 border-red-200 fill-red-500 shadow-sm"
                : "bg-white text-[#171717] hover:text-red-500 border-gray-100"
            )}
            aria-label={isLiked ? "Remove from wishlist" : "Add to wishlist"}
          >
            <Heart
              className={cn(
                "w-4 h-4 stroke-[2] transition-colors",
                isLiked && "fill-red-500 text-red-500"
              )}
            />
          </button>

          {/* Quick View */}
          <Link
            href={`/products/${product.slug}`}
            className="w-8 h-8 rounded-full bg-white text-[#171717] hover:text-[#18552B] hover:scale-110 flex items-center justify-center shadow-xs border border-gray-100 transition-all"
            aria-label="Quick View"
          >
            <Maximize2 className="w-3.5 h-3.5 stroke-[2]" />
          </Link>

          {/* Add to Cart / Bag Button */}
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              toggleWishlist(product.id);
              setIsWishlistOpen(true);
            }}
            className="w-8 h-8 rounded-full bg-white text-[#171717] hover:text-[#18552B] hover:scale-110 flex items-center justify-center shadow-xs border border-gray-100 transition-all cursor-pointer"
            aria-label="Add to Bag"
          >
            <ShoppingBag className="w-4 h-4 stroke-[2]" />
          </button>
        </div>

        {/* Product Image with Live Switch & 3D Lighting Animation */}
        <div className="relative w-full flex-1 my-1">
          <Image
            src={currentImage}
            alt={product.name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            priority={priority}
            className={cn(
              "transition-all duration-400 ease-out",
              currentImage.endsWith(".png")
                ? "object-contain p-2 furniture-3d group-hover:scale-108"
                : "object-contain object-center group-hover:scale-105"
            )}
          />
        </div>

        {/* Optional Yellow Deal Countdown Strip at the bottom of the image box */}
        {countdown && (
          <div className="w-full bg-[#FFB82E] text-[#171717] rounded-xl px-3 py-1.5 flex items-center justify-around text-center z-10 shadow-2xs font-poppins">
            <div>
              <span className="text-xs sm:text-sm font-bold block leading-none">
                {String(countdown.days).padStart(2, "0")}
              </span>
              <span className="text-[9px] font-semibold uppercase opacity-80">Days</span>
            </div>
            <span className="font-bold text-xs leading-none">:</span>
            <div>
              <span className="text-xs sm:text-sm font-bold block leading-none">
                {String(countdown.hours).padStart(2, "0")}
              </span>
              <span className="text-[9px] font-semibold uppercase opacity-80">Hours</span>
            </div>
            <span className="font-bold text-xs leading-none">:</span>
            <div>
              <span className="text-xs sm:text-sm font-bold block leading-none">
                {String(countdown.mins).padStart(2, "0")}
              </span>
              <span className="text-[9px] font-semibold uppercase opacity-80">Mins</span>
            </div>
            <span className="font-bold text-xs leading-none">:</span>
            <div>
              <span className="text-xs sm:text-sm font-bold block leading-none">
                {String(countdown.secs).padStart(2, "0")}
              </span>
              <span className="text-[9px] font-semibold uppercase opacity-80">Sec</span>
            </div>
          </div>
        )}
      </div>

      {/* Card Details Below Image */}
      <div className="pt-3 pb-1 flex flex-col justify-between">
        {/* Category on Left + Gold Star Rating on Right */}
        <div className="flex items-center justify-between text-xs mb-1">
          <span className="text-xs text-[#757575] font-normal font-poppins">
            {product.subCategory || (product.category === "Bedroom" ? "Nightstand" : product.category === "Chairs" ? "Chair" : product.category)}
          </span>

          <div className="flex items-center gap-1 text-[#171717] font-bold">
            <Star className="w-3.5 h-3.5 fill-[#FFB82E] text-[#FFB82E]" />
            <span className="text-xs font-bold font-poppins">{ratingValue}</span>
          </div>
        </div>

        {/* Product Title */}
        <h3 className="font-poppins font-bold text-sm sm:text-base text-[#171717] group-hover:text-[#18552B] transition-colors leading-snug line-clamp-1 mb-1.5">
          <Link href={`/products/${product.slug}`}>
            {product.name}
          </Link>
        </h3>

        {/* Price Row + Interactive Color Swatches */}
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="font-poppins font-bold text-sm text-[#171717]">
              {product.priceFormatted}
            </span>
            {originalPrice && (
              <span className="text-xs text-[#9E9E9E] line-through font-normal">
                {originalPrice}
              </span>
            )}
          </div>

          {/* Color Finish Swatches on Card */}
          {product.finishes && product.finishes.length > 0 && (
            <div className="flex items-center gap-1.5">
              {product.finishes.map((f, idx) => {
                const isSelected = activeFinishIdx === idx;
                return (
                  <button
                    key={idx}
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      setActiveFinishIdx(idx);
                    }}
                    onMouseEnter={() => setActiveFinishIdx(idx)}
                    title={f.name}
                    className={cn(
                      "w-4 h-4 rounded-full border transition-all p-[1px] cursor-pointer",
                      isSelected
                        ? "border-[#18552B] scale-110 ring-1 ring-[#18552B]"
                        : "border-gray-200 hover:border-gray-400 opacity-80 hover:opacity-100"
                    )}
                  >
                    <span
                      className="w-full h-full rounded-full block"
                      style={{ backgroundColor: f.colorCode }}
                    />
                  </button>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
