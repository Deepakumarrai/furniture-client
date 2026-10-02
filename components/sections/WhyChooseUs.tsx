import React from "react";
import { Package, Wallet, Headphones } from "lucide-react";

export const WhyChooseUs: React.FC = () => {
  const features = [
    {
      icon: (
        <div className="w-11 h-11 rounded-lg bg-[#FFF7E8] text-[#D9822B] flex items-center justify-center flex-shrink-0 border border-[#FFE8C2]">
          <Package className="w-6 h-6 stroke-[1.8]" />
        </div>
      ),
      title: "Free Shipping",
      description: "Free shipping for order above ₹4,999",
    },
    {
      icon: (
        <div className="w-11 h-11 rounded-lg bg-[#FFF7E8] text-[#D9822B] flex items-center justify-center flex-shrink-0 border border-[#FFE8C2]">
          <Wallet className="w-6 h-6 stroke-[1.8]" />
        </div>
      ),
      title: "Flexible Payment",
      description: "Multiple secure payment options",
    },
    {
      icon: (
        <div className="w-11 h-11 rounded-lg bg-[#EBF5EE] text-[#18552B] flex items-center justify-center flex-shrink-0 border border-[#CDE5D5]">
          <Headphones className="w-6 h-6 stroke-[1.8]" />
        </div>
      ),
      title: "24×7 Support",
      description: "We support online all days.",
    },
  ];

  return (
    <section className="bg-[#F7F7F5] py-10 sm:py-12 border-b border-[#EBEBE8]">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {features.map((item, idx) => (
            <div key={idx} className="flex items-center gap-4">
              {item.icon}
              <div>
                <h3 className="font-poppins font-bold text-base text-[#171717]">
                  {item.title}
                </h3>
                <p className="text-xs text-[#757575] font-normal mt-0.5">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
