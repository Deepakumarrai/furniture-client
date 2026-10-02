"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Ruler,
  Star,
  Plus,
  Minus,
  ShoppingBag,
  Heart,
  Share2,
  CheckCircle2,
  Truck,
  ShieldCheck,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";
import { Product } from "@/types/product";
import { ProductGallery } from "@/components/products/ProductGallery";
import { ProductCard } from "@/components/products/ProductCard";
import { Button } from "@/components/ui/Button";
import { CustomQuoteModal } from "@/components/sections/CustomQuoteModal";
import { cn } from "@/lib/utils";

interface ProductDetailClientProps {
  product: Product;
  relatedProducts: Product[];
}

export function ProductDetailClient({
  product,
  relatedProducts,
}: ProductDetailClientProps) {
  const [selectedFinishIndex, setSelectedFinishIndex] = useState(0);
  const [galleryIndex, setGalleryIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<"description" | "additional">("description");
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [isAddedToCart, setIsAddedToCart] = useState(false);

  const selectedFinish = product.finishes[selectedFinishIndex] || product.finishes[0];

  const handleFinishChange = (idx: number) => {
    setSelectedFinishIndex(idx);
    const finish = product.finishes[idx];
    if (finish?.imageIndex !== undefined && finish.imageIndex < product.images.length) {
      setGalleryIndex(finish.imageIndex);
    } else if (finish?.image) {
      const matchIdx = product.images.findIndex((img) => img === finish.image);
      if (matchIdx !== -1) {
        setGalleryIndex(matchIdx);
      } else if (idx < product.images.length) {
        setGalleryIndex(idx);
      }
    } else if (idx < product.images.length) {
      setGalleryIndex(idx);
    }
  };

  const handleAddToCart = () => {
    setIsAddedToCart(true);
    setTimeout(() => setIsAddedToCart(false), 2000);
  };

  const rawNum = product.priceFormatted ? parseFloat(product.priceFormatted.replace(/[^0-9.]/g, "")) : 0;
  const originalPrice = rawNum > 0
    ? `₹${Math.round(rawNum * (product.discountBadge === "50% off" ? 2 : 1.15)).toLocaleString("en-IN")}`
    : "";

  return (
    <div className="bg-[#F7F7F5] py-8 sm:py-12">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-8">
        
        {/* Breadcrumb: Home / Shop / Chair / Product Details */}
        <div className="flex items-center gap-2 text-xs text-[#757575] font-medium mb-8">
          <Link href="/" className="hover:text-[#18552B] transition-colors">Home</Link>
          <span>/</span>
          <Link href="/products" className="hover:text-[#18552B] transition-colors">Shop</Link>
          <span>/</span>
          <Link href={`/products?category=${encodeURIComponent(product.category)}`} className="hover:text-[#18552B] transition-colors">
            {product.category}
          </Link>
          <span>/</span>
          <span className="text-[#171717] font-semibold">Product Details</span>
        </div>

        {/* Product Main Showcase Card (2 Columns) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 bg-white p-6 sm:p-10 rounded-3xl border border-[#E8E8E5] shadow-xs mb-14">
          
          {/* Left Column: Image Gallery (6 cols) */}
          <div className="lg:col-span-6">
            <ProductGallery
              images={product.images}
              productName={product.name}
              activeImageIndex={galleryIndex}
              onSelectImageIndex={setGalleryIndex}
            />
          </div>

          {/* Right Column: Product Meta, Price, Swatches, Add to Cart (6 cols) */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              {/* Category Tag */}
              <span className="text-xs uppercase tracking-wider font-semibold text-[#18552B]">
                {product.category}
              </span>

              {/* Title */}
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-poppins text-[#171717] leading-tight">
                {product.name}
              </h1>

              {/* Rating & Reviews: ★★★★★ 4.9 (24) */}
              <div className="flex items-center gap-2">
                <div className="flex text-[#FFB82E]">
                  {[...Array(5)].map((_, idx) => (
                    <Star key={idx} className="w-4 h-4 fill-[#FFB82E]" />
                  ))}
                </div>
                <span className="text-xs font-bold text-[#171717]">4.9</span>
                <span className="text-xs text-[#757575]">(24 customer reviews)</span>
              </div>

              {/* Price Row */}
              <div className="flex items-center gap-3 pt-1">
                <span className="text-2xl sm:text-3xl font-bold font-poppins text-[#171717]">
                  {product.priceFormatted}
                </span>
                {originalPrice && (
                  <span className="text-base text-[#9E9E9E] line-through font-normal">
                    {originalPrice}
                  </span>
                )}
              </div>

              {/* Short Description */}
              <p className="text-xs sm:text-sm text-[#757575] font-normal leading-relaxed">
                {product.tagline || product.description}
              </p>

              {/* Color Swatch Circles with Active Live Switcher */}
              <div className="pt-2">
                <div className="flex items-center gap-2 mb-2 text-xs font-semibold text-[#171717]">
                  <span>Color :</span>
                  <span className="text-[#18552B] font-bold">{selectedFinish?.name}</span>
                </div>
                <div className="flex items-center gap-3">
                  {product.finishes.map((finish, idx) => {
                    const isSelected = selectedFinishIndex === idx;
                    return (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => handleFinishChange(idx)}
                        className={cn(
                          "w-8 h-8 rounded-full border-2 transition-all p-0.5 flex items-center justify-center relative cursor-pointer active:scale-95",
                          isSelected
                            ? "border-[#18552B] ring-2 ring-[#18552B]/30 scale-110 shadow-xs"
                            : "border-gray-200 hover:border-[#18552B]/60 hover:scale-105 opacity-85 hover:opacity-100"
                        )}
                        title={finish.name}
                      >
                        <span
                          className="w-full h-full rounded-full block shadow-xs"
                          style={{ backgroundColor: finish.colorCode }}
                        />
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Quantity Counter & Add to Cart Action */}
              <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-[#F0F0ED]">
                {/* Quantity - 1 + */}
                <div className="inline-flex items-center border border-[#E8E8E5] rounded-full p-1 bg-[#F7F7F5]">
                  <button
                    type="button"
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    className="w-8 h-8 rounded-full bg-white text-[#171717] hover:bg-gray-100 flex items-center justify-center font-bold text-xs shadow-2xs"
                  >
                    <Minus className="w-3.5 h-3.5" />
                  </button>
                  <span className="w-10 text-center font-poppins font-bold text-xs text-[#171717]">
                    {quantity}
                  </span>
                  <button
                    type="button"
                    onClick={() => setQuantity((q) => q + 1)}
                    className="w-8 h-8 rounded-full bg-white text-[#171717] hover:bg-gray-100 flex items-center justify-center font-bold text-xs shadow-2xs"
                  >
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* Add to Cart Button */}
                <button
                  type="button"
                  onClick={handleAddToCart}
                  className="inline-flex items-center justify-center gap-2 bg-[#18552B] hover:bg-[#123D20] text-white text-xs sm:text-sm font-semibold px-8 py-3 rounded-full shadow-xs transition-all active:scale-95"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>{isAddedToCart ? "Added to Cart!" : "Add to Cart"}</span>
                </button>

                {/* Custom Quote Trigger */}
                <button
                  type="button"
                  onClick={() => setIsQuoteModalOpen(true)}
                  className="text-xs font-semibold text-[#18552B] hover:underline"
                >
                  Request Custom Sizing
                </button>
              </div>

              {/* Product Meta: SKU, Tags, Share */}
              <div className="pt-5 border-t border-[#F0F0ED] space-y-2 text-xs text-[#757575]">
                <p>
                  <strong className="text-[#171717] font-semibold">SKU :</strong> FRN-0875GA4
                </p>
                <p>
                  <strong className="text-[#171717] font-semibold">Tags :</strong> Furniture, Office, Chair, Interior
                </p>
                <div className="flex items-center gap-2 pt-1">
                  <strong className="text-[#171717] font-semibold">Share :</strong>
                  <div className="flex items-center space-x-2 text-[#757575]">
                    <a href="#" className="hover:text-[#18552B] transition-colors"><Facebook className="w-3.5 h-3.5" /></a>
                    <a href="#" className="hover:text-[#18552B] transition-colors"><Twitter className="w-3.5 h-3.5" /></a>
                    <a href="#" className="hover:text-[#18552B] transition-colors"><Instagram className="w-3.5 h-3.5" /></a>
                    <a href="#" className="hover:text-[#18552B] transition-colors"><Linkedin className="w-3.5 h-3.5" /></a>
                  </div>
                </div>
              </div>
            </div>

            {/* Guarantees Strip */}
            <div className="grid grid-cols-2 gap-3 pt-4 border-t border-[#F0F0ED] text-[11px] text-[#757575]">
              <div className="flex items-center gap-2">
                <Truck className="w-4 h-4 text-[#18552B]" />
                <span>Free shipping above $180</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#18552B]" />
                <span>10-Year Craft Warranty</span>
              </div>
            </div>

          </div>

        </div>

        {/* Tabs Section: Description | Additional Information */}
        <div className="bg-white p-6 sm:p-10 rounded-3xl border border-[#E8E8E5] shadow-xs mb-14">
          <div className="flex items-center gap-8 border-b border-[#F0F0ED] pb-4 mb-6">
            <button
              type="button"
              onClick={() => setActiveTab("description")}
              className={cn(
                "text-sm sm:text-base font-bold font-poppins transition-colors relative pb-1",
                activeTab === "description"
                  ? "text-[#18552B]"
                  : "text-[#757575] hover:text-[#171717]"
              )}
            >
              Description
              {activeTab === "description" && (
                <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#18552B] rounded-full" />
              )}
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("additional")}
              className={cn(
                "text-sm sm:text-base font-bold font-poppins transition-colors relative pb-1",
                activeTab === "additional"
                  ? "text-[#18552B]"
                  : "text-[#757575] hover:text-[#171717]"
              )}
            >
              Additional Information
              {activeTab === "additional" && (
                <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#18552B] rounded-full" />
              )}
            </button>
          </div>

          {activeTab === "description" ? (
            <div className="space-y-4 text-xs sm:text-sm text-[#757575] leading-relaxed">
              <p>
                {product.fullStory || product.description}
              </p>
              <p>
                Every piece is hand-inspected for grain continuity, moisture balance, and structural integrity. Hand-finished with organic hardwax oils and waterborne sealants to ensure durability while maintaining tactile wood breathability and indoor air purity.
              </p>
              {product.features && product.features.length > 0 && (
                <ul className="space-y-2 pt-2">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs text-[#171717]">
                      <CheckCircle2 className="w-4 h-4 text-[#18552B] flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs text-[#757575]">
              <div className="p-4 bg-[#F7F7F5] rounded-xl border border-[#E8E8E5]">
                <span className="font-bold text-[#171717] block mb-1">Dimensions</span>
                <p>Width: {product.dimensions.width}</p>
                <p>Depth: {product.dimensions.depth}</p>
                <p>Height: {product.dimensions.height}</p>
              </div>
              <div className="p-4 bg-[#F7F7F5] rounded-xl border border-[#E8E8E5]">
                <span className="font-bold text-[#171717] block mb-1">Materials</span>
                <p>{product.materials.join(", ")}</p>
              </div>
              <div className="p-4 bg-[#F7F7F5] rounded-xl border border-[#E8E8E5]">
                <span className="font-bold text-[#171717] block mb-1">Shipping & Care</span>
                <p>Clean with damp cloth. Fast delivery in 2-3 business days.</p>
              </div>
            </div>
          )}
        </div>

        {/* Explore Related Products */}
        {relatedProducts.length > 0 && (
          <div>
            <div className="flex items-center justify-between mb-6">
              <div>
                <span className="text-xs uppercase tracking-wider font-semibold text-[#18552B] block mb-0.5">
                  — Related Products
                </span>
                <h3 className="font-poppins font-bold text-2xl text-[#171717]">
                  Explore <span className="text-[#18552B]">Related</span> Products
                </h3>
              </div>
              <Link href="/products" className="text-xs font-semibold text-[#18552B] hover:underline">
                View All
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}

      </div>

      {/* Custom Quote Modal */}
      <CustomQuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
        productContext={product.name}
      />
    </div>
  );
}
