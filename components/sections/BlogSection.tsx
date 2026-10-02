import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar, User } from "lucide-react";

export const BlogSection: React.FC = () => {
  const blogs = [
    {
      id: "b-1",
      title: "7 Modern Living Room Decor Ideas for 2026",
      date: "14 April 2024",
      author: "Aarav Sharma",
      category: "Interior Design",
      image: "/images/hero-living-room.png",
    },
    {
      id: "b-2",
      title: "How to Choose the Perfect Solid Wood Dining Table",
      date: "12 April 2024",
      author: "Rohan Verma",
      category: "Craftsmanship",
      image: "/images/hero-dining-room.png",
    },
    {
      id: "b-3",
      title: "Sustainable Timber: Why FSC Hardwood Matters",
      date: "08 April 2024",
      author: "Priya Malhotra",
      category: "Sustainability",
      image: "/images/lounge-room-yellow.jpg",
    },
  ];

  return (
    <section id="blog" className="py-14 sm:py-18 bg-[#F7F7F5]">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
          <div>
            <span className="text-xs uppercase tracking-wider font-semibold text-[#18552B] block mb-1">
              — Our Blogs
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-poppins text-[#171717]">
              Our <span className="text-[#18552B]">Recent</span> Blogs
            </h2>
          </div>

          <Link
            href="/about#blog"
            className="inline-flex items-center gap-2 bg-[#18552B] hover:bg-[#123D20] text-white text-xs font-semibold px-5 py-2.5 rounded-full transition-all shadow-xs self-start sm:self-auto"
          >
            <span>View All Blogs</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* 3 Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white rounded-2xl overflow-hidden border border-[#E8E8E5] shadow-xs hover:shadow-md transition-all duration-300 group flex flex-col"
            >
              {/* Image Container with Yellow Date Badge */}
              <div className="relative aspect-[16/10] w-full bg-[#EFEFEA] overflow-hidden">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Yellow Date Pill Badge */}
                <div className="absolute bottom-3 left-3 bg-[#FFB82E] text-[#171717] text-[11px] font-bold px-3 py-1 rounded-full shadow-2xs">
                  {blog.date}
                </div>
              </div>

              {/* Blog Content */}
              <div className="p-5 flex flex-col flex-1 justify-between">
                <div>
                  <div className="flex items-center gap-3 text-[11px] text-[#757575] font-medium mb-2">
                    <span className="flex items-center gap-1">
                      <User className="w-3 h-3 text-[#18552B]" /> {blog.author}
                    </span>
                    <span>•</span>
                    <span>{blog.category}</span>
                  </div>

                  <h3 className="font-poppins font-bold text-sm sm:text-base text-[#171717] group-hover:text-[#18552B] transition-colors leading-snug">
                    <Link href="/about#blog">
                      {blog.title}
                    </Link>
                  </h3>
                </div>

                <div className="pt-4 mt-4 border-t border-[#F0F0ED]">
                  <Link
                    href="/about#blog"
                    className="text-xs font-semibold text-[#18552B] hover:underline inline-flex items-center gap-1"
                  >
                    <span>Read More</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
