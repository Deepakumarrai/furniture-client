import React, { Suspense } from "react";
import { Metadata } from "next";
import { ContactClient } from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact Us | Furniture & Custom Solutions",
  description:
    "Get in touch with Vélora Living for furniture inquiries, custom bespoke commissions, trade partnerships, or to schedule a private showroom consultation.",
};

export default function ContactPage() {
  return (
    <Suspense
      fallback={
        <div className="py-28 text-center text-charcoal-500 font-light">
          Loading contact concierge...
        </div>
      }
    >
      <ContactClient />
    </Suspense>
  );
}
