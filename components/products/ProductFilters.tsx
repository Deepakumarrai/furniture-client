"use client";

import React from "react";
import { Search, X } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProductFiltersProps {
  categories: string[];
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
  selectedSubCategory?: string;
  onSelectSubCategory?: (subCategory: string) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  totalResults: number;
}

export const ProductFilters: React.FC<ProductFiltersProps> = ({
  categories,
  selectedCategory,
  onSelectCategory,
  selectedSubCategory = "",
  onSelectSubCategory,
  searchQuery,
  onSearchChange,
  totalResults,
}) => {
  const chairSubcategories = [
    "All Chairs",
    "Lounge Chair",
    "Folding Chair",
    "Dining Chair",
    "Office Chair",
    "Armchair",
    "Bar Stool",
    "Club Chair",
    "Gaming Chair",
  ];

  const lightingSubcategories = [
    "All Lighting",
    "Table Lamps",
    "Floor Lamps",
    "Ceiling Lamps",
    "Wall Lamps",
  ];

  const isChairsCategory =
    selectedCategory.toLowerCase() === "chairs" ||
    (selectedSubCategory &&
      chairSubcategories.some(
        (c) => c.toLowerCase() === selectedSubCategory.toLowerCase()
      ));

  const isLightingCategory =
    selectedCategory.toLowerCase() === "lighting" ||
    (selectedSubCategory &&
      lightingSubcategories.some(
        (l) => l.toLowerCase() === selectedSubCategory.toLowerCase()
      ));

  return (
    <div className="space-y-4 mb-8 pb-6 border-b border-border">
      {/* Search and count bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Search input */}
        <div className="relative w-full sm:w-80">
          <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-text-secondary" />
          <input
            type="text"
            placeholder="Search chairs, lighting, tables..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full pl-10 pr-10 py-2.5 bg-white border border-border text-text-primary placeholder:text-text-muted rounded-full text-xs sm:text-sm focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-colors shadow-2xs font-poppins"
          />
          {searchQuery && (
            <button
              onClick={() => onSearchChange("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-text-muted hover:text-text-primary"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Results counter */}
        <div className="text-xs text-text-secondary font-medium tracking-wide self-end sm:self-center">
          Showing <span className="font-bold text-text-primary">{totalResults}</span>{" "}
          {totalResults === 1 ? "piece" : "pieces"}
        </div>
      </div>

      {/* Main Category Pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none -mx-4 px-4 sm:mx-0 sm:px-0">
        <button
          onClick={() => {
            onSelectCategory("All");
            if (onSelectSubCategory) onSelectSubCategory("");
          }}
          className={cn(
            "px-4 py-2 text-xs font-semibold rounded-full transition-all flex-shrink-0 font-poppins cursor-pointer active:scale-95",
            selectedCategory === "All" && !selectedSubCategory
              ? "bg-primary text-white shadow-xs"
              : "bg-white text-text-secondary hover:text-text-primary border border-border"
          )}
        >
          All Collections
        </button>
        {categories.map((cat) => {
          const isSelected =
            selectedCategory.toLowerCase() === cat.toLowerCase() &&
            !selectedSubCategory;
          return (
            <button
              key={cat}
              onClick={() => {
                onSelectCategory(cat);
                if (onSelectSubCategory) onSelectSubCategory("");
              }}
              className={cn(
                "px-4 py-2 text-xs font-semibold rounded-full transition-all flex-shrink-0 font-poppins cursor-pointer active:scale-95",
                isSelected
                  ? "bg-primary text-white shadow-xs"
                  : "bg-white text-text-secondary hover:text-text-primary border border-border"
              )}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* Subcategory Pills when in Chairs category */}
      {isChairsCategory && onSelectSubCategory && (
        <div className="pt-2 border-t border-[#EDEDEA]">
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none -mx-4 px-4 sm:mx-0 sm:px-0">
            <span className="text-[11px] font-semibold text-primary uppercase tracking-wider mr-1 flex-shrink-0">
              Chair Types:
            </span>
            {chairSubcategories.map((sub) => {
              const isAll = sub === "All Chairs";
              const isSelected = isAll
                ? !selectedSubCategory
                : selectedSubCategory.toLowerCase() === sub.toLowerCase();

              return (
                <button
                  key={sub}
                  onClick={() => {
                    onSelectCategory("Chairs");
                    onSelectSubCategory(isAll ? "" : sub);
                  }}
                  className={cn(
                    "px-3 py-1.5 text-xs font-medium rounded-full transition-all flex-shrink-0 cursor-pointer active:scale-95",
                    isSelected
                      ? "bg-[#18552B] text-white shadow-2xs font-semibold"
                      : "bg-[#EFEFEA] text-[#4A4A48] hover:bg-[#E2E2DC] hover:text-[#171717]"
                  )}
                >
                  {sub}
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Subcategory Pills when in Lighting category */}
      {isLightingCategory && onSelectSubCategory && (
        <div className="pt-2 border-t border-[#EDEDEA]">
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none -mx-4 px-4 sm:mx-0 sm:px-0">
            <span className="text-[11px] font-semibold text-primary uppercase tracking-wider mr-1 flex-shrink-0">
              Lighting Types:
            </span>
            {lightingSubcategories.map((sub) => {
              const isAll = sub === "All Lighting";
              const isSelected = isAll
                ? !selectedSubCategory
                : selectedSubCategory.toLowerCase() === sub.toLowerCase();

              return (
                <button
                  key={sub}
                  onClick={() => {
                    onSelectCategory("Lighting");
                    onSelectSubCategory(isAll ? "" : sub);
                  }}
                  className={cn(
                    "px-3 py-1.5 text-xs font-medium rounded-full transition-all flex-shrink-0 cursor-pointer active:scale-95",
                    isSelected
                      ? "bg-[#18552B] text-white shadow-2xs font-semibold"
                      : "bg-[#EFEFEA] text-[#4A4A48] hover:bg-[#E2E2DC] hover:text-[#171717]"
                  )}
                >
                  {sub}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
