"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { X, Heart, Trash2, ArrowRight, ShoppingBag } from "lucide-react";
import { useWishlist } from "@/context/WishlistContext";

export const WishlistDrawer: React.FC = () => {
  const {
    isWishlistOpen,
    setIsWishlistOpen,
    wishlistProducts,
    toggleWishlist,
    wishlistCount,
  } = useWishlist();

  useEffect(() => {
    if (isWishlistOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isWishlistOpen]);

  if (!isWishlistOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex justify-end bg-black/60 backdrop-blur-xs animate-fade-in">
      {/* Backdrop */}
      <div
        className="fixed inset-0"
        onClick={() => setIsWishlistOpen(false)}
        aria-hidden="true"
      />

      {/* Slide-over Panel */}
      <div className="relative w-full max-w-md bg-white h-full shadow-2xl z-10 flex flex-col justify-between overflow-hidden">
        {/* Drawer Header */}
        <div className="p-5 border-b border-[#EBEBE8] flex items-center justify-between bg-white">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-[#EBF5EE] text-[#18552B] flex items-center justify-center">
              <Heart className="w-4 h-4 fill-[#18552B]" />
            </div>
            <div>
              <h3 className="font-poppins font-bold text-base text-[#171717]">
                My Wishlist
              </h3>
              <span className="text-xs text-[#757575]">
                {wishlistCount} {wishlistCount === 1 ? "item saved" : "items saved"}
              </span>
            </div>
          </div>

          <button
            onClick={() => setIsWishlistOpen(false)}
            className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 text-[#171717] flex items-center justify-center transition-colors"
            aria-label="Close wishlist"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Drawer Body */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4">
          {wishlistProducts.length === 0 ? (
            <div className="py-20 text-center flex flex-col items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-gray-100 text-[#9E9E9E] flex items-center justify-center mb-4">
                <Heart className="w-8 h-8" />
              </div>
              <h4 className="font-poppins font-bold text-base text-[#171717] mb-1">
                Your wishlist is empty
              </h4>
              <p className="text-xs text-[#757575] max-w-xs mb-6">
                Save furniture pieces you love by tapping the heart icon on any card.
              </p>
              <Link
                href="/products"
                onClick={() => setIsWishlistOpen(false)}
                className="inline-flex items-center gap-2 bg-[#18552B] text-white text-xs font-semibold px-6 py-3 rounded-full hover:bg-[#123D20] transition-colors shadow-xs"
              >
                <span>Browse Products</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          ) : (
            wishlistProducts.map((item) => (
              <div
                key={item.id}
                className="bg-[#F7F7F5] rounded-2xl p-4 border border-[#E8E8E5] flex items-center justify-between gap-4 group"
              >
                <div className="flex items-center gap-3">
                  <div className="relative w-16 h-16 bg-white rounded-xl overflow-hidden p-1 flex-shrink-0 border border-[#E8E8E5]">
                    <Image
                      src={item.images[0]}
                      alt={item.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <span className="text-[10px] font-semibold uppercase text-[#18552B]">
                      {item.category}
                    </span>
                    <h5 className="font-poppins font-bold text-sm text-[#171717] line-clamp-1">
                      <Link
                        href={`/products/${item.slug}`}
                        onClick={() => setIsWishlistOpen(false)}
                        className="hover:text-[#18552B] transition-colors"
                      >
                        {item.name}
                      </Link>
                    </h5>
                    <span className="font-poppins font-bold text-xs text-[#171717]">
                      {item.priceFormatted}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <Link
                    href={`/products/${item.slug}`}
                    onClick={() => setIsWishlistOpen(false)}
                    className="w-8 h-8 rounded-full bg-[#18552B] hover:bg-[#123D20] text-white flex items-center justify-center transition-colors shadow-2xs"
                    aria-label="View product details"
                  >
                    <ShoppingBag className="w-3.5 h-3.5" />
                  </Link>
                  <button
                    onClick={() => toggleWishlist(item.id)}
                    className="w-8 h-8 rounded-full bg-white hover:bg-red-50 text-[#9E9E9E] hover:text-red-600 border border-gray-200 flex items-center justify-center transition-colors"
                    aria-label="Remove from wishlist"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Drawer Footer */}
        {wishlistProducts.length > 0 && (
          <div className="p-5 border-t border-[#EBEBE8] bg-[#F7F7F5] space-y-3">
            <Link
              href="/products"
              onClick={() => setIsWishlistOpen(false)}
              className="w-full inline-flex items-center justify-center gap-2 bg-[#18552B] hover:bg-[#123D20] text-white text-xs sm:text-sm font-semibold py-3.5 rounded-full transition-all shadow-xs"
            >
              <span>Continue Shopping</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};
