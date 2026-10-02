import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { PRODUCTS } from "@/lib/products-data";
import { ProductDetailClient } from "./ProductDetailClient";

interface Props {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return PRODUCTS.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const product = PRODUCTS.find((p) => p.slug === params.slug);

  if (!product) {
    return {
      title: "Product Not Found",
    };
  }

  return {
    title: product.name,
    description: product.description,
    openGraph: {
      title: `${product.name} | Vélora Living`,
      description: product.description,
      images: [
        {
          url: product.images[0],
          width: 1200,
          height: 800,
          alt: product.name,
        },
      ],
    },
  };
}

export default function ProductDetailPage({ params }: Props) {
  const product = PRODUCTS.find((p) => p.slug === params.slug);

  if (!product) {
    notFound();
  }

  // Find related products in same category or featured
  const relatedProducts = PRODUCTS.filter(
    (p) => p.id !== product.id && (p.category === product.category || p.isFeatured)
  ).slice(0, 4);

  return (
    <ProductDetailClient
      product={product}
      relatedProducts={relatedProducts}
    />
  );
}
