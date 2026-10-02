"use client";

import React, { useState, useMemo, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { PRODUCTS, CATEGORIES } from "@/lib/products-data";
import { ProductFilters } from "@/components/products/ProductFilters";
import { ProductGrid } from "@/components/products/ProductGrid";
import { CTASection } from "@/components/sections/CTASection";

export function ProductsClient() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("category") || "All";

  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);
  const [searchQuery, setSearchQuery] = useState<string>("");

  const [selectedSubCategory, setSelectedSubCategory] = useState<string>("");

  useEffect(() => {
    const cat = searchParams.get("category");
    const sub = searchParams.get("sub");
    if (cat) {
      setSelectedCategory(cat);
    }
    if (sub) {
      setSelectedSubCategory(sub);
      setSearchQuery("");
    }
  }, [searchParams]);

  const categoryList = CATEGORIES.map((c) => c.name);

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      const matchesCategory =
        selectedCategory === "All" ||
        product.category.toLowerCase() === selectedCategory.toLowerCase();

      const matchesSubCategory =
        !selectedSubCategory ||
        (product.subCategory &&
          product.subCategory.toLowerCase() === selectedSubCategory.toLowerCase()) ||
        product.name.toLowerCase().includes(selectedSubCategory.toLowerCase()) ||
        product.tagline.toLowerCase().includes(selectedSubCategory.toLowerCase());

      const matchesSearch =
        searchQuery.trim() === "" ||
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (product.subCategory &&
          product.subCategory.toLowerCase().includes(searchQuery.toLowerCase())) ||
        product.materials.some((m) =>
          m.toLowerCase().includes(searchQuery.toLowerCase())
        );

      return matchesCategory && matchesSubCategory && matchesSearch;
    });
  }, [selectedCategory, selectedSubCategory, searchQuery]);

  return (
    <div className="bg-[#F7F7F5] py-10 sm:py-14">
      <div className="max-w-container mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="max-w-2xl mb-8 sm:mb-10">
          <span className="text-xs uppercase tracking-wider font-semibold text-primary block mb-1.5">
            Furniture Catalog
          </span>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-poppins text-text-primary tracking-tight">
            Our Furniture Collection
          </h1>
          <p className="mt-2 text-xs sm:text-sm text-text-secondary font-normal leading-relaxed">
            Explore furniture designed for homes, offices, and modern spaces. Built with sustainable solid woods and tailored detailing.
          </p>
        </div>

        {/* Filters */}
        <ProductFilters
          categories={categoryList}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
          selectedSubCategory={selectedSubCategory}
          onSelectSubCategory={setSelectedSubCategory}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          totalResults={filteredProducts.length}
        />

        {/* Product Grid (4 columns) */}
        <ProductGrid products={filteredProducts} columns={4} />
      </div>

      <div className="mt-16">
        <CTASection />
      </div>
    </div>
  );
}
