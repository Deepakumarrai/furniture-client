import React from "react";
import Link from "next/link";
import { ArrowLeft, Compass } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-sand-50 py-20 px-4">
      <div className="max-w-md text-center">
        <div className="w-16 h-16 rounded-full bg-brand-100 text-wood-dark flex items-center justify-center mx-auto mb-6">
          <Compass className="w-8 h-8" />
        </div>
        <span className="text-xs uppercase tracking-[0.25em] font-semibold text-wood block mb-2">
          Page Not Found (404)
        </span>
        <h1 className="font-serif text-3xl sm:text-4xl text-charcoal-950 font-normal mb-4">
          This Piece Seems Out of Place
        </h1>
        <p className="text-sm text-charcoal-600 font-light leading-relaxed mb-8">
          The furniture design or page you were looking for might have been retired or moved to another collection.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Button href="/" variant="primary" size="md">
            Return to Homepage
          </Button>
          <Button href="/products" variant="outline" size="md">
            Browse All Products
          </Button>
        </div>
      </div>
    </div>
  );
}
