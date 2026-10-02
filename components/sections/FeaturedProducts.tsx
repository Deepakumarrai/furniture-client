"use client";

import React, { useState } from "react";
import { PRODUCTS } from "@/lib/products-data";
import { ProductCard } from "@/components/products/ProductCard";
import { cn } from "@/lib/utils";

export const FeaturedProducts: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("Latest Products");

  const tabs = ["All", "Latest Products", "Best Sellers", "Featured Products"];

  const displayProducts = PRODUCTS.slice(0, 8);

  return (
    <section className="py-14 sm:py-18 bg-white border-b border-[#EBEBE8]">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-8">
        
        {/* Centered Header & Tabs */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-[#171717] font-poppins mb-6">
            Our <span className="text-[#18552B]">Products Collections</span>
          </h2>

          {/* Centered Filter Tabs */}
          <div className="inline-flex flex-wrap items-center justify-center gap-3">
            {tabs.map((tab) => {
              const isSelected = activeTab === tab;
              return (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={cn(
                    "px-6 py-2.5 text-xs sm:text-sm font-semibold rounded-full transition-all duration-200 font-poppins",
                    isSelected
                      ? "bg-[#18552B] text-white shadow-xs"
                      : "bg-white text-[#171717] hover:text-[#18552B] border border-[#E8E8E5] hover:border-[#18552B]"
                  )}
                >
                  {tab}
                </button>
              );
            })}
          </div>
        </div>

        {/* Product Grid (4 columns) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayProducts.map((product, idx) => (
            <ProductCard
              key={product.id}
              product={product}
              priority={idx < 4}
            />
          ))}
        </div>

      </div>
    </section>
  );
};
