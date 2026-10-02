import React, { forwardRef } from "react";
import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, error, helperText, id, ...props }, ref) => {
    const inputId = id || (label ? label.toLowerCase().replace(/\s+/g, "-") : undefined);

    return (
      <div className="w-full space-y-1.5 text-left">
        {label && (
          <label
            htmlFor={inputId}
            className="block text-xs uppercase tracking-wider font-semibold text-charcoal-700"
          >
            {label} {props.required && <span className="text-red-500">*</span>}
          </label>
        )}
        <input
          id={inputId}
          ref={ref}
          className={cn(
            "w-full px-4 py-3 bg-brand-50/70 border border-brand-200 text-charcoal-900 placeholder:text-charcoal-400 rounded-sm text-sm transition-colors focus:bg-white focus:outline-none focus:ring-1 focus:ring-wood focus:border-wood disabled:opacity-60",
            error && "border-red-400 focus:ring-red-400 focus:border-red-400 bg-red-50/20",
            className
          )}
          {...props}
        />
        {error && <p className="text-xs text-red-600 mt-1">{error}</p>}
        {helperText && !error && (
          <p className="text-xs text-charcoal-500 mt-1">{helperText}</p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";
