import React, { Suspense } from "react";
import { Metadata } from "next";
import { ProductsClient } from "./ProductsClient";

export const metadata: Metadata = {
  title: "Furniture Collection",
  description:
    "Explore our complete collection of handcrafted solid wood tables, lounge chairs, sofas, platform beds, executive desks, and bespoke custom furniture.",
};

export default function ProductsPage() {
  return (
    <Suspense
      fallback={
        <div className="py-28 text-center text-charcoal-500 font-light">
          Loading furniture collection...
        </div>
      }
    >
      <ProductsClient />
    </Suspense>
  );
}
