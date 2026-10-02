import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().min(8, { message: "Please enter a valid phone number." }),
  company: z.string().optional(),
  interestedIn: z.string().min(1, { message: "Please select an area of interest." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

export const customQuoteSchema = z.object({
  fullName: z.string().min(2, { message: "Name is required" }),
  email: z.string().email({ message: "Valid email is required" }),
  phone: z.string().min(8, { message: "Valid phone is required" }),
  furnitureType: z.string().min(1, { message: "Please select furniture type" }),
  spaceType: z.string().min(1, { message: "Please select space type (Residential, Commercial, etc.)" }),
  dimensions: z.string().optional(),
  estimatedBudget: z.string().optional(),
  details: z.string().min(10, { message: "Please describe your custom requirement" }),
});

export type CustomQuoteFormData = z.infer<typeof customQuoteSchema>;
