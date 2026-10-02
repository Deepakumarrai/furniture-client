"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle, Send, Loader2 } from "lucide-react";
import { contactFormSchema, ContactFormData } from "@/types/contact";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { Select } from "@/components/ui/Select";
import { Button } from "@/components/ui/Button";

interface ContactFormProps {
  defaultInterest?: string;
}

export const ContactForm: React.FC<ContactFormProps> = ({ defaultInterest }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      company: "",
      interestedIn: defaultInterest || "Custom Furniture Project",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 700));
    setIsSubmitting(false);
    setIsSubmitted(true);
    reset();
  };

  const interestOptions = [
    { value: "Living Room Collection", label: "Living Room Furniture" },
    { value: "Dining Collection", label: "Dining Tables & Chairs" },
    { value: "Bedroom Collection", label: "Bedrooms & Wardrobes" },
    { value: "Office & Executive", label: "Office & Executive Workspaces" },
    { value: "Custom Furniture Project", label: "Custom Bespoke Furniture" },
    { value: "Trade Inquiry", label: "Trade & Designer Partnership" },
  ];

  if (isSubmitted) {
    return (
      <div className="bg-white p-8 rounded-card-lg border border-border text-center shadow-card animate-fade-in">
        <div className="w-12 h-12 rounded-full bg-primary-50 text-primary flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="w-6 h-6" />
        </div>
        <h3 className="font-poppins font-bold text-xl text-text-primary mb-2">
          Thank You for Reaching Out
        </h3>
        <p className="text-xs sm:text-sm text-text-secondary leading-relaxed max-w-sm mx-auto mb-6">
          We have received your message. One of our furniture specialists will get back to you within 24 hours.
        </p>
        <Button
          variant="secondary"
          size="sm"
          onClick={() => setIsSubmitted(false)}
        >
          Send Another Inquiry
        </Button>
      </div>
    );
  }

  return (
    <div className="bg-white p-6 sm:p-8 rounded-card-lg border border-border shadow-card">
      <div className="mb-6">
        <h3 className="font-poppins font-bold text-xl sm:text-2xl text-text-primary">
          Send Us an Inquiry
        </h3>
        <p className="text-xs text-text-secondary font-normal mt-1">
          Fill out the form below and our design team will promptly assist you with product specifications or custom quotes.
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Input
            label="Your Full Name"
            placeholder="e.g. Eleanor Vance"
            required
            error={errors.name?.message}
            {...register("name")}
          />
          <Input
            label="Email Address"
            type="email"
            placeholder="e.g. eleanor@example.com"
            required
            error={errors.email?.message}
            {...register("email")}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Input
            label="Phone Number"
            type="tel"
            placeholder="e.g. +1 (555) 019-2834"
            required
            error={errors.phone?.message}
            {...register("phone")}
          />
          <Input
            label="Company (Optional)"
            placeholder="e.g. Studio Interiors"
            error={errors.company?.message}
            {...register("company")}
          />
        </div>

        <Select
          label="Interested In"
          options={interestOptions}
          required
          error={errors.interestedIn?.message}
          {...register("interestedIn")}
        />

        <Textarea
          label="Your Message"
          rows={4}
          placeholder="Tell us about your space, wood preferences, or product questions..."
          required
          error={errors.message?.message}
          {...register("message")}
        />

        <Button
          type="submit"
          variant="primary"
          size="md"
          fullWidth
          disabled={isSubmitting}
          icon={
            isSubmitting ? (
              <Loader2 className="w-4 h-4 animate-spin" />
            ) : (
              <Send className="w-4 h-4" />
            )
          }
        >
          {isSubmitting ? "Sending..." : "Send Inquiry"}
        </Button>
      </form>
    </div>
  );
};
