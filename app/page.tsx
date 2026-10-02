import React from "react";
import { Hero } from "@/components/sections/Hero";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { FeaturedCategories } from "@/components/sections/FeaturedCategories";
import { FeaturedProducts } from "@/components/sections/FeaturedProducts";
import { FlashSaleBanner } from "@/components/sections/FlashSaleBanner";
import { Testimonials } from "@/components/sections/Testimonials";
import { BlogSection } from "@/components/sections/BlogSection";
import { CTASection } from "@/components/sections/CTASection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedCategories />
      <FeaturedProducts />
      <FlashSaleBanner />
      <Testimonials />
      <BlogSection />
      <CTASection />
    </>
  );
}
