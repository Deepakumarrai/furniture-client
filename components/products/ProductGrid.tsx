import React from "react";
import { Product } from "@/types/product";
import { ProductCard } from "./ProductCard";
import { cn } from "@/lib/utils";

interface ProductGridProps {
  products: Product[];
  className?: string;
  columns?: 3 | 4;
}

export const ProductGrid: React.FC<ProductGridProps> = ({
  products,
  className,
  columns = 4,
}) => {
  if (products.length === 0) {
    return (
      <div className="py-20 text-center bg-sand-50 rounded-md border border-dashed border-brand-200">
        <p className="text-charcoal-500 font-light text-base">
          No furniture pieces match your selected filter criteria.
        </p>
      </div>
    );
  }

  return (
    <div
      className={cn(
        "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8",
        columns === 4 && "xl:grid-cols-4",
        className
      )}
    >
      {products.map((product, idx) => (
        <ProductCard
          key={product.id}
          product={product}
          priority={idx < 4}
        />
      ))}
    </div>
  );
};
