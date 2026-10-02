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
  const statIcons = [
    <Award key="1" className="w-5 h-5 text-accent-yellow" />,
    <Building2 key="2" className="w-5 h-5 text-accent-yellow" />,
    <Users key="3" className="w-5 h-5 text-accent-yellow" />,
    <Sparkles key="4" className="w-5 h-5 text-accent-yellow" />,
  ];

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
      {/* 3D Immersive Hero Section */}
      <section className="relative py-18 sm:py-24 lg:py-28 bg-gradient-to-b from-[#0F3019] via-[#144423] to-[#123D20] text-white overflow-hidden">
        {/* Ambient Glows & Background Texture */}
        <div className="absolute inset-0 z-0 opacity-25">
          <Image
            src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=2000&q=80"
            alt="Artisans Working in Furniture Workshop"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F3019] via-[#123D20]/85 to-[#0F3019]/90" />
        </div>

        {/* 3D Floating Glowing Rings */}
        <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-[#FFB82E]/10 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-[#18552B]/40 blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Top Pill Tag */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-accent-yellow text-xs font-bold uppercase tracking-widest mb-4 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-accent-yellow animate-pulse" />
            <span>Our Purpose & Heritage</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold font-poppins tracking-tight text-white mb-5 leading-tight">
            Crafted for <span className="text-accent-yellow">Modern Living</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xs sm:text-base text-white/85 font-normal max-w-2xl mx-auto leading-relaxed mb-8">
            We exist to bring enduring warmth, tactile natural beauty, and quiet architectural harmony into modern homes and workspaces across India.
          </p>

          {/* Floating Trust Pills for Mobile & Desktop */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/30 backdrop-blur-md border border-white/15 text-white/90 text-xs font-medium">
              🌿 100% FSC® Hardwoods
            </span>
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/30 backdrop-blur-md border border-white/15 text-white/90 text-xs font-medium">
              🛡️ 10-Year Craft Guarantee
            </span>
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/30 backdrop-blur-md border border-white/15 text-white/90 text-xs font-medium">
              ✨ Zero-VOC Organic Oils
            </span>
          </div>
        </div>
      </section>

      {/* 3D Floating Stats Grid Section */}
      <section className="relative -mt-8 sm:-mt-12 z-20 max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {COMPANY_INFO.stats.map((stat, idx) => (
            <div
              key={idx}
              className="bg-white/95 backdrop-blur-md rounded-2xl sm:rounded-3xl p-5 sm:p-7 border border-[#E8E8E5] shadow-3d hover:shadow-3d-hover transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between group active:scale-[0.98]"
            >
              {/* Top Row: Value & Icon */}
              <div className="flex items-start justify-between mb-2">
                <p className="text-2xl sm:text-4xl font-bold text-[#18552B] font-poppins tracking-tight group-hover:scale-105 transition-transform">
                  {stat.value}
                </p>
                <div className="w-9 h-9 rounded-2xl bg-[#18552B]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#18552B] transition-colors">
                  {statIcons[idx % statIcons.length]}
                </div>
              </div>

              {/* Label */}
              <div>
                <p className="text-xs sm:text-sm font-bold text-[#171717] font-poppins">
                  {stat.label}
                </p>
                <p className="text-[11px] text-[#757575] mt-0.5 hidden sm:block">
                  Verified Heritage Standard
                </p>
              </div>
            </div>
          ))}
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
