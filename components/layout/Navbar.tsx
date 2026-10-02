"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Phone,
  Search,
  Heart,
  ShoppingBag,
  User,
  Menu,
  X,
  Armchair,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useWishlist } from "@/context/WishlistContext";

export const Navbar: React.FC = () => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { wishlistCount, setIsWishlistOpen, setIsSearchOpen } = useWishlist();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Shop", href: "/products" },
    { name: "Categories", href: "/#categories" },
    { name: "About Us", href: "/about" },
    { name: "Contact Us", href: "/contact" },
    { name: "Blog", href: "/about#blog" },
  ];

  const isActive = (href: string) => {
    if (href === "/" && pathname === "/") return true;
    if (href !== "/" && href.startsWith("/") && !href.includes("#") && pathname.startsWith(href)) return true;
    return false;
  };

  // Close mobile menu on pathname change and lock body scroll
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <>
      {/* 1. TOP PROMOTIONAL BAR (Dark Forest Green #1E392A) */}
      <div className="bg-[#1E392A] text-white text-[11px] sm:text-xs py-2 px-4 sm:px-8 border-b border-[#2A4D3B]">
        <div className="max-w-[1240px] mx-auto flex items-center justify-between">
          
          {/* Left: Call Us */}
          <div className="flex items-center gap-1.5 text-white/90 font-medium">
            <span>Call Us :</span>
            <a href="tel:+919876543210" className="hover:text-[#FFB82E] transition-colors">
              +91 98765 43210
            </a>
          </div>

          {/* Center: Promo Offer */}
          <div className="text-center font-normal text-white/90 hidden sm:block">
            <span>Sign up and </span>
            <strong className="font-semibold text-white">GET 25% OFF</strong>
            <span> for your first order. </span>
            <Link
              href="/contact"
              className="text-[#FFB82E] hover:underline font-semibold ml-1 transition-colors"
            >
              Sign up now
            </Link>
          </div>

          {/* Right: Round Social Icons (Yellow circles with dark green icons) */}
          <div className="flex items-center space-x-2">
            {[
              { label: "Facebook", svg: <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /> },
              { label: "Twitter", svg: <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" /> },
              { label: "Pinterest", svg: <path d="M12 2a10 10 0 0 0-3.5 19.4c-.1-.8-.2-2 .1-2.9l1.4-6s-.4-.7-.4-1.8c0-1.7 1-3 2.2-3 1 0 1.5.8 1.5 1.8 0 1-.7 2.7-1 4.2-.3 1.2.6 2.2 1.8 2.2 2.2 0 3.7-2.8 3.7-6.2 0-2.6-1.7-4.5-4.9-4.5-3.6 0-5.8 2.7-5.8 5.7 0 1 .4 2.2.9 2.8.1.1.1.2 0 .5l-.3 1.4c0 .2-.2.3-.4.2-1.7-.8-2.5-2.8-2.5-4.6 0-3.8 3.2-8.3 9.4-8.3 5 0 8.3 3.6 8.3 7.6 0 5.1-2.8 8.9-7 8.9-1.4 0-2.7-.8-3.1-1.6l-.9 3.5c-.3 1.2-1.1 2.7-1.7 3.6A10 10 0 1 0 12 2z" /> },
              { label: "Instagram", svg: <rect width="20" height="20" x="2" y="2" rx="5" ry="5" strokeWidth="2" fill="none" stroke="currentColor" /> },
              { label: "YouTube", svg: <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" /> }
            ].map((s, idx) => (
              <a
                key={idx}
                href="#"
                aria-label={s.label}
                className="w-5 h-5 rounded-full bg-[#FFB82E] text-[#1E392A] flex items-center justify-center hover:scale-110 transition-transform active:scale-95"
              >
                <svg className="w-2.5 h-2.5 fill-current" viewBox="0 0 24 24">
                  {s.svg}
                </svg>
              </a>
            ))}
          </div>

        </div>
      </div>

      {/* 2. MAIN NAVIGATION (White background, subtle bottom border) */}
      <header
        className={cn(
          "bg-white sticky top-0 z-50 transition-all duration-200 border-b border-[#EBEBE8]",
          isScrolled ? "shadow-sm py-3" : "py-4"
        )}
      >
        <div className="max-w-[1240px] mx-auto px-4 sm:px-8 flex items-center justify-between">
          
          {/* Logo: Dark Green circle with Armchair + "Furniture." with Yellow Dot */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-full bg-[#18552B] flex items-center justify-center text-white shadow-xs transition-transform group-hover:scale-105">
              <Armchair className="w-5 h-5 text-white" />
            </div>
            <span className="font-poppins font-bold text-2xl tracking-tight text-[#171717]">
              Furniture<span className="text-[#FFB82E]">.</span>
            </span>
          </Link>

          {/* Center Nav Links */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={cn(
                    "text-[13px] font-semibold transition-colors relative py-1",
                    active
                      ? "text-[#18552B]"
                      : "text-[#171717] hover:text-[#18552B]"
                  )}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Icons: Search, Wishlist, Cart, User */}
          <div className="flex items-center space-x-2 sm:space-x-4 text-[#171717]">
            {/* Search Button */}
            <button
              type="button"
              onClick={() => setIsSearchOpen(true)}
              className="p-2 sm:p-1.5 hover:text-[#18552B] transition-colors rounded-full hover:bg-gray-100 active:scale-95 cursor-pointer"
              aria-label="Search Products"
            >
              <Search className="w-5 h-5 stroke-[2]" />
            </button>

            {/* Wishlist Button with dynamic badge */}
            <button
              type="button"
              onClick={() => setIsWishlistOpen(true)}
              className="p-2 sm:p-1.5 hover:text-[#18552B] transition-colors relative rounded-full hover:bg-gray-100 active:scale-95 cursor-pointer"
              aria-label="My Wishlist"
            >
              <Heart className="w-5 h-5 stroke-[2]" />
              {wishlistCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-[#18552B] text-white text-[10px] font-bold rounded-full flex items-center justify-center animate-scale-in">
                  {wishlistCount}
                </span>
              )}
            </button>

            {/* Shopping Bag */}
            <button
              type="button"
              onClick={() => setIsWishlistOpen(true)}
              className="p-2 sm:p-1.5 hover:text-[#18552B] transition-colors relative rounded-full hover:bg-gray-100 active:scale-95 cursor-pointer"
              aria-label="Shopping Cart"
            >
              <ShoppingBag className="w-5 h-5 stroke-[2]" />
            </button>

            <Link
              href="/contact"
              className="p-1.5 hover:text-[#18552B] transition-colors hidden sm:block rounded-full hover:bg-gray-100"
              aria-label="Account"
            >
              <User className="w-5 h-5 stroke-[2]" />
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-[#171717] hover:text-[#18552B] focus:outline-none rounded-lg active:bg-gray-100 cursor-pointer"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

        </div>

        {/* Mobile Slide-Out Drawer & Backdrop */}
        {mobileMenuOpen && (
          <div className="md:hidden fixed inset-0 top-[110px] z-50 flex flex-col bg-black/40 backdrop-blur-xs animate-fade-in">
            <div className="bg-white border-b border-[#EBEBE8] px-6 py-6 shadow-xl flex-1 max-h-[calc(100vh-110px)] overflow-y-auto">
              <nav className="flex flex-col space-y-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={cn(
                      "py-3 text-base font-semibold border-b border-gray-100 flex items-center justify-between active:text-[#18552B]",
                      isActive(link.href) ? "text-[#18552B]" : "text-[#171717]"
                    )}
                  >
                    <span>{link.name}</span>
                    {isActive(link.href) && (
                      <span className="w-2 h-2 rounded-full bg-[#18552B]" />
                    )}
                  </Link>
                ))}
              </nav>

              {/* Mobile Drawer Quick Action Buttons */}
              <div className="pt-6 space-y-3">
                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setIsSearchOpen(true);
                  }}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-full bg-[#F7F7F5] border border-[#E8E8E5] text-xs font-semibold text-[#171717] active:bg-[#ECECE8]"
                >
                  <Search className="w-4 h-4 text-text-secondary" />
                  <span>Search Furniture Collection</span>
                </button>

                <div className="flex items-center justify-between pt-4 border-t border-gray-100 text-xs text-[#757575]">
                  <span>Studio Hotline:</span>
                  <a href="tel:+919876543210" className="font-bold text-[#18552B]">
                    +91 98765 43210
                  </a>
                </div>
              </div>
            </div>
            {/* Click-to-close Backdrop bottom */}
            <div className="flex-1" onClick={() => setMobileMenuOpen(false)} />
          </div>
        )}
      </header>
    </>
  );
};
