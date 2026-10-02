import React from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  badge?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
  className?: string;
  light?: boolean;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  badge,
  title,
  subtitle,
  align = "center",
  className,
  light = false,
}) => {
  const alignment = {
    left: "text-left items-start",
    center: "text-center items-center mx-auto",
    right: "text-right items-end ml-auto",
  };

  return (
    <div
      className={cn(
        "flex flex-col max-w-3xl mb-12 md:mb-16",
        alignment[align],
        className
      )}
    >
      {badge && (
        <span
          className={cn(
            "text-xs md:text-sm uppercase tracking-[0.2em] font-semibold mb-3.5",
            light ? "text-brand-300" : "text-wood"
          )}
        >
          {badge}
        </span>
      )}
      <h2
        className={cn(
          "text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight font-serif leading-[1.15]",
          light ? "text-white" : "text-charcoal-900"
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "mt-4 text-base sm:text-lg leading-relaxed font-light",
            light ? "text-brand-200" : "text-charcoal-600"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};
