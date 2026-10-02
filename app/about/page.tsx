import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import {
  TreeDeciduous,
  Ruler,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  Users,
  Award,
  Building2,
  ArrowRight,
} from "lucide-react";
import { CTASection } from "@/components/sections/CTASection";
import { COMPANY_INFO } from "@/lib/products-data";

export const metadata: Metadata = {
  title: "About Us | Furniture.",
  description:
    "Learn about our heritage of woodworking craftsmanship, sustainable materials, and dedication to timeless modern furniture.",
};

export default function AboutPage() {
  const values = [
    {
      icon: <TreeDeciduous className="w-5 h-5 text-primary" />,
      title: "Sustainable Forestry",
      description:
        "We exclusively source 100% FSC-certified hardwoods from responsibly managed North American and European forests, ensuring regenerative wood harvesting.",
    },
    {
      icon: <Ruler className="w-5 h-5 text-primary" />,
      title: "Precision Engineering",
      description:
        "Blending traditional mortise-and-tenon woodworking with state-of-the-art CNC precision for flawless tolerances and enduring strength.",
    },
    {
      icon: <Sparkles className="w-5 h-5 text-primary" />,
      title: "Natural Finishes",
      description:
        "Every surface is hand-finished with organic hardwax oils and waterborne sealants that preserve wood breathability and indoor air purity.",
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-primary" />,
      title: "10-Year Craft Guarantee",
      description:
        "We build pieces intended to be passed down through generations. Our furniture is backed by a comprehensive structural integrity warranty.",
    },
  ];

  const timeline = [
    {
      year: "2012",
      title: "The Workshop Begins",
      description:
        "Started in a small timber workshop with three master carpenters dedicated to building handcrafted solid oak dining tables.",
    },
    {
      year: "2016",
      title: "Modern Collection Launch",
      description:
        "Expanded our catalog to include modern living, bedroom, and executive office furniture.",
    },
    {
      year: "2020",
      title: "100% Sustainable Guarantee",
      description:
        "Achieved full sustainable lumber certification and transitioned to non-toxic organic hardwax oil finishes.",
    },
    {
      year: "2024",
      title: "Flagship Showroom & Custom Atelier",
      description:
        "Opened our flagship design showroom and introduced dedicated custom sizing and bespoke specifications.",
    },
  ];

  return (
    <div className="bg-[#F7F7F5]">
      {/* Hero Section */}
      <section className="relative py-16 sm:py-24 bg-[#123D20] text-white overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <Image
            src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=2000&q=80"
            alt="Artisans Working in Furniture Workshop"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#123D20] via-[#123D20]/80 to-[#123D20]/90" />
        </div>

        <div className="relative z-10 max-w-container mx-auto px-4 sm:px-6 text-center">
          <span className="text-xs uppercase tracking-widest font-semibold text-accent-yellow mb-3 block">
            Our Purpose & Heritage
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-poppins tracking-tight text-white mb-4">
            Crafted for Modern Living
          </h1>
          <p className="text-xs sm:text-sm md:text-base text-white/80 font-normal max-w-xl mx-auto leading-relaxed">
            We exist to bring enduring warmth, tactile beauty, and quiet architectural harmony into modern homes and workspaces.
          </p>
        </div>
      </section>

      {/* Stats Counter Section */}
      <section className="bg-white border-b border-border">
        <div className="max-w-container mx-auto px-4 sm:px-6 py-10 sm:py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {COMPANY_INFO.stats.map((stat, idx) => (
              <div key={idx} className="p-3 border-r last:border-r-0 border-border">
                <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary mb-1 font-poppins">
                  {stat.value}
                </p>
                <p className="text-[11px] uppercase tracking-wider text-text-secondary font-semibold">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Story & Philosophy */}
      <section className="py-16 sm:py-20">
        <div className="max-w-container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center mb-16">
            <div className="lg:col-span-6 space-y-4">
              <span className="text-xs uppercase tracking-wider font-semibold text-primary block">
                The Origin Story
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold font-poppins text-text-primary leading-tight">
                Rooted in the Honesty of Natural Timber
              </h2>
              <p className="text-xs sm:text-sm text-text-secondary leading-relaxed font-normal">
                Founded on a simple conviction: the objects that inhabit our homes should be built with integrity, care, and permanence. We chose a deliberate path of tactile craftsmanship and timeless modern aesthetics.
              </p>
              <p className="text-xs sm:text-sm text-text-secondary leading-relaxed font-normal">
                Every board of White Oak, American Walnut, and Ash is hand-inspected for grain continuity, moisture balance, and structural character.
              </p>
              <div className="pt-2">
                <blockquote className="border-l-2 border-primary pl-4 italic text-xs sm:text-sm text-text-primary font-medium">
                  &ldquo;A well-designed chair or table is not a seasonal commodity. It is a lasting companion to life&apos;s most meaningful conversations.&rdquo;
                </blockquote>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative aspect-[4/3] rounded-card-lg overflow-hidden border border-border shadow-card bg-white">
                <Image
                  src="/images/lounge-room-yellow.jpg"
                  alt="Living Space Furnished with Furniture."
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center"
                />
              </div>
            </div>
          </div>

          {/* Philosophy & Standards Cards */}
          <div className="mb-16">
            <div className="text-center max-w-xl mx-auto mb-10">
              <span className="text-xs uppercase tracking-wider font-semibold text-primary block mb-1">
                Our Philosophy
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold font-poppins text-text-primary">
                Standards Without Compromise
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((v, idx) => (
                <div
                  key={idx}
                  className="bg-white p-6 rounded-card border border-border shadow-card hover:shadow-card-hover transition-all duration-200 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 rounded-full bg-primary-50 flex items-center justify-center mb-4">
                      {v.icon}
                    </div>
                    <h4 className="font-poppins font-bold text-base text-text-primary mb-2">
                      {v.title}
                    </h4>
                    <p className="text-xs text-text-secondary leading-relaxed">
                      {v.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Craftsmanship Timeline */}
          <div className="bg-white p-8 sm:p-12 rounded-card-lg border border-border shadow-card">
            <div className="max-w-xl mx-auto text-center mb-10">
              <span className="text-xs uppercase tracking-wider font-semibold text-primary block mb-1">
                Our Journey
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold font-poppins text-text-primary">
                A Decade of Continuous Refinement
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {timeline.map((item, idx) => (
                <div key={idx} className="space-y-2">
                  <div className="font-poppins font-bold text-2xl text-primary">
                    {item.year}
                  </div>
                  <h4 className="text-sm font-bold text-text-primary">
                    {item.title}
                  </h4>
                  <p className="text-xs text-text-secondary leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* CTA */}
      <CTASection />
    </div>
  );
}
