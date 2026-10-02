"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { X, CheckCircle, Send, Loader2 } from "lucide-react";
import { customQuoteSchema, CustomQuoteFormData } from "@/types/contact";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { Select } from "@/components/ui/Select";
import { Button } from "@/components/ui/Button";

interface CustomQuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  productContext?: string;
}

export const CustomQuoteModal: React.FC<CustomQuoteModalProps> = ({
  isOpen,
  onClose,
  productContext,
}) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<CustomQuoteFormData>({
    resolver: zodResolver(customQuoteSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      furnitureType: productContext ? `Inquiry regarding: ${productContext}` : "Dining Table",
      spaceType: "Residential Living / Dining",
      dimensions: "",
      estimatedBudget: "",
      details: productContext ? `I am interested in custom sizes or finishes for ${productContext}.` : "",
    },
  });

  if (!isOpen) return null;

  const onSubmit = async (data: CustomQuoteFormData) => {
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 700));
    setIsSubmitting(false);
    setIsSubmitted(true);
    reset();
  };

  const furnitureTypeOptions = [
    { value: "Dining Table", label: "Custom Dining Table" },
    { value: "Lounge Seating / Sofa", label: "Custom Sofa / Armchair" },
    { value: "Executive Desk / Workstation", label: "Executive Desk / Workstation" },
    { value: "Wardrobe & Cabinetry", label: "Wardrobe & Built-in Cabinetry" },
    { value: "Bed & Bedroom Suite", label: "Platform Bed & Bedroom Suite" },
    { value: "Credenza & Console", label: "Credenza / Console / Storage" },
  ];

  const spaceTypeOptions = [
    { value: "Residential Living / Dining", label: "Residential (Living / Dining / Bedroom)" },
    { value: "Executive Commercial Office", label: "Commercial Office / Boardroom" },
    { value: "Hospitality & Restaurant", label: "Hospitality / Restaurant / Hotel" },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fade-in">
      <div className="relative w-full max-w-xl bg-white rounded-card-lg border border-border shadow-card-hover overflow-hidden max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="p-5 border-b border-border flex items-center justify-between bg-[#F7F7F5]">
          <div>
            <span className="text-[11px] uppercase tracking-wider font-semibold text-primary block mb-0.5">
              Custom Atelier
            </span>
            <h3 className="font-poppins font-bold text-lg sm:text-xl text-text-primary">
              {productContext ? `Inquire: ${productContext}` : "Request a Custom Quote"}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-text-secondary hover:text-text-primary rounded-full hover:bg-border/60 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-5 sm:p-6 overflow-y-auto flex-1">
          {isSubmitted ? (
            <div className="text-center py-8 space-y-3">
              <div className="w-12 h-12 rounded-full bg-primary-50 text-primary flex items-center justify-center mx-auto">
                <CheckCircle className="w-6 h-6" />
              </div>
              <h4 className="font-poppins font-bold text-lg text-text-primary">
                Custom Request Received
              </h4>
              <p className="text-xs text-text-secondary leading-relaxed max-w-sm mx-auto">
                Our design team will review your specifications and get in touch with finish samples and a tailored quote within 24 hours.
              </p>
              <div className="pt-3">
                <Button variant="primary" size="sm" onClick={onClose}>
                  Close Window
                </Button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <Input
                  label="Full Name"
                  placeholder="e.g. Julian Hayes"
                  required
                  error={errors.fullName?.message}
                  {...register("fullName")}
                />
                <Input
                  label="Email Address"
                  type="email"
                  placeholder="e.g. julian@example.com"
                  required
                  error={errors.email?.message}
                  {...register("email")}
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <Input
                  label="Phone Number"
                  type="tel"
                  placeholder="e.g. +1 (555) 012-3456"
                  required
                  error={errors.phone?.message}
                  {...register("phone")}
                />
                <Select
                  label="Space Type"
                  options={spaceTypeOptions}
                  required
                  error={errors.spaceType?.message}
                  {...register("spaceType")}
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <Select
                  label="Furniture Category"
                  options={furnitureTypeOptions}
                  required
                  error={errors.furnitureType?.message}
                  {...register("furnitureType")}
                />
                <Input
                  label="Approx. Dimensions"
                  placeholder="e.g. 240cm x 100cm x 75cm"
                  error={errors.dimensions?.message}
                  {...register("dimensions")}
                />
              </div>

              <Textarea
                label="Custom Details & Wood Preferences"
                rows={3}
                placeholder="Describe desired wood species (Oak, Walnut, Ash), upholstery type, or delivery requirements..."
                required
                error={errors.details?.message}
                {...register("details")}
              />

              <div className="pt-2 flex items-center justify-end gap-2.5">
                <Button type="button" variant="outline" size="sm" onClick={onClose}>
                  Cancel
                </Button>
                <Button
                  type="submit"
                  variant="primary"
                  size="sm"
                  disabled={isSubmitting}
                  icon={
                    isSubmitting ? (
                      <Loader2 className="w-3.5 h-3.5 animate-spin" />
                    ) : (
                      <Send className="w-3.5 h-3.5" />
                    )
                  }
                >
                  {isSubmitting ? "Submitting..." : "Submit Quote Request"}
                </Button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
