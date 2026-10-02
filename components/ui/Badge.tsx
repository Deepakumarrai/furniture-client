import React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "wood" | "sand" | "dark" | "outline" | "accent";
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = "sand",
  className,
}) => {
  const styles = {
    sand: "bg-brand-100 text-brand-900 border border-brand-200/80",
    wood: "bg-wood/10 text-wood-dark border border-wood/20",
    dark: "bg-charcoal-900 text-brand-50",
    outline: "bg-transparent text-charcoal-700 border border-charcoal-300",
    accent: "bg-amber-100 text-amber-900 border border-amber-200",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-3 py-1 text-xs uppercase tracking-wider font-semibold rounded-full",
        styles[variant],
        className
      )}
    >
      {children}
    </span>
  );
};
