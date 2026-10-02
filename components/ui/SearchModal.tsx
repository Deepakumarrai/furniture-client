"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search, X, ArrowRight, Sparkles } from "lucide-react";
import { useWishlist } from "@/context/WishlistContext";
import { PRODUCTS } from "@/lib/products-data";

export const SearchModal: React.FC = () => {
  const { isSearchOpen, setIsSearchOpen } = useWishlist();
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isSearchOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
      setQuery("");
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isSearchOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsSearchOpen(false);
      }
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setIsSearchOpen(true);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [setIsSearchOpen]);

  if (!isSearchOpen) return null;

  const quickTags = ["Chairs", "Sofa", "Nightstand", "Lighting", "Bedroom", "Office"];

  const filtered = query.trim()
    ? PRODUCTS.filter(
        (p) =>
          p.name.toLowerCase().includes(query.toLowerCase()) ||
          p.category.toLowerCase().includes(query.toLowerCase()) ||
          p.description.toLowerCase().includes(query.toLowerCase())
      )
    : PRODUCTS.slice(0, 4);

  return (
    <div className="fixed inset-0 z-[100] flex items-start justify-center pt-16 sm:pt-24 px-4 bg-black/60 backdrop-blur-xs animate-fade-in">
      {/* Click outside backdrop */}
      <div
        className="fixed inset-0"
        onClick={() => setIsSearchOpen(false)}
        aria-hidden="true"
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-[#E8E8E5] overflow-hidden z-10 flex flex-col max-h-[80vh]">
        {/* Search Input Header */}
        <div className="p-4 sm:p-5 border-b border-[#EBEBE8] flex items-center gap-3">
          <Search className="w-5 h-5 text-[#18552B]" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search furniture by name, style, category..."
            className="flex-1 text-sm sm:text-base text-[#171717] placeholder:text-[#9E9E9E] outline-none font-poppins font-medium bg-transparent"
          />
          {query && (
            <button
              onClick={() => setQuery("")}
              className="text-xs text-[#757575] hover:text-[#171717] px-2 py-1 bg-gray-100 rounded-md"
            >
              Clear
            </button>
          )}
          <button
            onClick={() => setIsSearchOpen(false)}
            className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 text-[#171717] flex items-center justify-center transition-colors"
            aria-label="Close search"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Quick Suggestion Tags */}
        <div className="px-5 py-3 bg-[#F7F7F5] border-b border-[#EBEBE8] flex items-center gap-2 overflow-x-auto scrollbar-none">
          <span className="text-[11px] font-semibold text-[#757575] uppercase tracking-wider flex items-center gap-1 flex-shrink-0">
            <Sparkles className="w-3 h-3 text-[#FFB82E]" /> Popular:
          </span>
          {quickTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setQuery(tag)}
              className="px-3 py-1 bg-white hover:bg-[#18552B] hover:text-white text-[#171717] text-xs font-medium rounded-full border border-[#E8E8E5] transition-colors flex-shrink-0 font-poppins"
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Results List */}
        <div className="overflow-y-auto p-4 sm:p-5 divide-y divide-[#F0F0ED]">
          <div className="text-xs font-semibold text-[#757575] mb-3 uppercase tracking-wider">
            {query.trim() ? `Found (${filtered.length}) Results` : "Featured Collections"}
          </div>

          {filtered.length === 0 ? (
            <div className="py-12 text-center text-sm text-[#757575]">
              No matching furniture found for &ldquo;<span className="font-semibold text-[#171717]">{query}</span>&rdquo;.
            </div>
          ) : (
            filtered.map((item) => (
              <Link
                key={item.id}
                href={`/products/${item.slug}`}
                onClick={() => setIsSearchOpen(false)}
                className="py-3 flex items-center justify-between gap-4 group hover:bg-[#F9F9F7] px-3 rounded-2xl transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className="relative w-14 h-14 bg-[#F4F4F2] rounded-xl overflow-hidden p-1 flex-shrink-0 border border-[#E8E8E5]">
                    <Image
                      src={item.images[0]}
                      alt={item.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <span className="text-[11px] font-semibold text-[#18552B] uppercase">
                      {item.category}
                    </span>
                    <h4 className="font-poppins font-bold text-sm text-[#171717] group-hover:text-[#18552B] transition-colors">
                      {item.name}
                    </h4>
                    <p className="text-xs text-[#757575] font-normal line-clamp-1 max-w-sm">
                      {item.tagline}
                    </p>
                  </div>
                </div>

                <div className="text-right flex-shrink-0 flex items-center gap-3">
                  <div>
                    <span className="font-poppins font-bold text-sm text-[#171717] block">
                      {item.priceFormatted}
                    </span>
                    {item.discountBadge && (
                      <span className="text-[10px] font-semibold text-[#18552B]">
                        {item.discountBadge}
                      </span>
                    )}
                  </div>
                  <div className="w-8 h-8 rounded-full bg-gray-100 group-hover:bg-[#18552B] group-hover:text-white text-[#171717] flex items-center justify-center transition-colors">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            ))
          )}
        </div>

        {/* Footer */}
        <div className="p-4 bg-[#F7F7F5] border-t border-[#EBEBE8] text-center">
          <Link
            href="/products"
            onClick={() => setIsSearchOpen(false)}
            className="text-xs font-semibold text-[#18552B] hover:underline"
          >
            Explore all {PRODUCTS.length} furniture products →
          </Link>
        </div>
      </div>
    </div>
  );
};
