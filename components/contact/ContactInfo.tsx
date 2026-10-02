import React from "react";
import { Phone, Mail, MapPin, Clock, ShieldCheck, Truck } from "lucide-react";
import { COMPANY_INFO } from "@/lib/products-data";

export const ContactInfo: React.FC = () => {
  return (
    <div className="space-y-6">
      {/* Contact Cards */}
      <div className="bg-white p-6 sm:p-7 rounded-card-lg border border-border shadow-card">
        <h3 className="font-poppins font-bold text-xl text-text-primary mb-5">
          Showroom & Customer Care
        </h3>

        <div className="space-y-4">
          <div className="flex items-start gap-3.5">
            <div className="w-9 h-9 rounded-full bg-primary-50 flex items-center justify-center flex-shrink-0 text-primary">
              <MapPin className="w-4 h-4" />
            </div>
            <div>
              <p className="text-[11px] uppercase tracking-wider font-semibold text-text-secondary">
                Location
              </p>
              <p className="text-xs sm:text-sm text-text-primary font-medium">
                {COMPANY_INFO.address}
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3.5">
            <div className="w-9 h-9 rounded-full bg-primary-50 flex items-center justify-center flex-shrink-0 text-primary">
              <Phone className="w-4 h-4" />
            </div>
            <div>
              <p className="text-[11px] uppercase tracking-wider font-semibold text-text-secondary">
                Phone
              </p>
              <a
                href={`tel:${COMPANY_INFO.phone}`}
                className="text-xs sm:text-sm text-text-primary font-medium hover:text-primary transition-colors block"
              >
                {COMPANY_INFO.phone}
              </a>
            </div>
          </div>

          <div className="flex items-start gap-3.5">
            <div className="w-9 h-9 rounded-full bg-primary-50 flex items-center justify-center flex-shrink-0 text-primary">
              <Mail className="w-4 h-4" />
            </div>
            <div>
              <p className="text-[11px] uppercase tracking-wider font-semibold text-text-secondary">
                Email
              </p>
              <a
                href={`mailto:${COMPANY_INFO.email}`}
                className="text-xs sm:text-sm text-text-primary font-medium hover:text-primary transition-colors block"
              >
                {COMPANY_INFO.email}
              </a>
            </div>
          </div>

          <div className="flex items-start gap-3.5">
            <div className="w-9 h-9 rounded-full bg-primary-50 flex items-center justify-center flex-shrink-0 text-primary">
              <Clock className="w-4 h-4" />
            </div>
            <div>
              <p className="text-[11px] uppercase tracking-wider font-semibold text-text-secondary">
                Opening Hours
              </p>
              <p className="text-xs text-text-primary font-medium">
                {COMPANY_INFO.hours}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Trust Highlights */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="p-4 bg-white rounded-card border border-border flex items-start gap-3 shadow-card">
          <Truck className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
          <div>
            <h4 className="text-xs font-bold text-text-primary">
              Free Delivery
            </h4>
            <p className="text-[11px] text-text-secondary">
              Free white-glove delivery on orders above ₹4,999.
            </p>
          </div>
        </div>

        <div className="p-4 bg-white rounded-card border border-border flex items-start gap-3 shadow-card">
          <ShieldCheck className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
          <div>
            <h4 className="text-xs font-bold text-text-primary">
              10-Year Warranty
            </h4>
            <p className="text-[11px] text-text-secondary">
              Solid timber craft guarantee across India.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
