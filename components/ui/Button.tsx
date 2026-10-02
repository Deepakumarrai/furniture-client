"use client";

import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "yellow" | "dark";
  size?: "sm" | "md" | "lg";
  href?: string;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  className,
  variant = "primary",
  size = "md",
  href,
  icon,
  iconPosition = "right",
  fullWidth = false,
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center justify-center font-semibold font-poppins transition-all duration-200 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98]";

  const sizeStyles = {
    sm: "text-xs px-4 py-2 gap-1.5",
    md: "text-xs sm:text-sm px-6 py-3 gap-2",
    lg: "text-sm sm:text-base px-8 py-3.5 gap-2.5",
  };

  const variantStyles = {
    primary:
      "bg-primary hover:bg-primary-hover text-white focus:ring-primary shadow-card hover:shadow-card-hover",
    secondary:
      "bg-[#F7F7F5] text-text-primary hover:bg-border border border-border focus:ring-primary",
    outline:
      "border border-border hover:border-primary text-text-primary hover:text-primary bg-white focus:ring-primary",
    ghost:
      "text-text-primary hover:text-primary hover:bg-primary-50 focus:ring-primary",
    yellow:
      "bg-accent-yellow hover:bg-accent-hover text-text-primary focus:ring-accent-yellow shadow-card",
    dark:
      "bg-[#123D20] hover:bg-primary text-white focus:ring-primary shadow-card",
  };

  const combinedStyles = cn(
    baseStyles,
    sizeStyles[size],
    variantStyles[variant],
    fullWidth ? "w-full" : "",
    className
  );

  if (href) {
    return (
      <Link href={href} className={combinedStyles}>
        {icon && iconPosition === "left" && <span>{icon}</span>}
        <span>{children}</span>
        {icon && iconPosition === "right" && <span>{icon}</span>}
      </Link>
    );
  }

  return (
    <button className={combinedStyles} {...props}>
      {icon && iconPosition === "left" && <span>{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === "right" && <span>{icon}</span>}
    </button>
  );
};
