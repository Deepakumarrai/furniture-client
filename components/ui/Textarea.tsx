import React, { forwardRef } from "react";
import { cn } from "@/lib/utils";

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  helperText?: string;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, label, error, helperText, id, rows = 4, ...props }, ref) => {
    const textareaId = id || (label ? label.toLowerCase().replace(/\s+/g, "-") : undefined);

    return (
      <div className="w-full space-y-1.5 text-left">
        {label && (
          <label
            htmlFor={textareaId}
            className="block text-xs uppercase tracking-wider font-semibold text-charcoal-700"
          >
            {label} {props.required && <span className="text-red-500">*</span>}
          </label>
        )}
        <textarea
          id={textareaId}
          ref={ref}
          rows={rows}
          className={cn(
            "w-full px-4 py-3 bg-brand-50/70 border border-brand-200 text-charcoal-900 placeholder:text-charcoal-400 rounded-sm text-sm transition-colors focus:bg-white focus:outline-none focus:ring-1 focus:ring-wood focus:border-wood disabled:opacity-60 resize-y",
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

Textarea.displayName = "Textarea";
