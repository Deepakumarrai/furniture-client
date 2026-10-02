import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://furniture-client.vercel.app"),
  title: {
    default: "Furniture. | Modern Living & Interior Solutions",
    template: "%s | Furniture.",
  },
  description:
    "Discover beautifully crafted, comfortable, and functional modern furniture designed to elevate your living spaces with timeless aesthetics.",
  keywords: [
    "modern furniture",
    "living room chairs",
    "sectional sofas",
    "solid wood dining tables",
    "platform beds",
    "executive office desks",
    "bespoke furniture",
  ],
  authors: [{ name: "Furniture. Design Studio" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://furniture.com",
    title: "Furniture. | Modern Living & Interior Solutions",
    description:
      "Explore our modern furniture collection crafted with sustainable solid woods, master joinery, and ergonomic comfort.",
    siteName: "Furniture.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Furniture. Collection",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Furniture. | Modern Living & Interior Solutions",
    description:
      "Explore our modern furniture collection crafted with sustainable solid woods, master joinery, and ergonomic comfort.",
    images: ["https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1200&q=80"],
  },
};

import { WishlistProvider } from "@/context/WishlistContext";
import { SearchModal } from "@/components/ui/SearchModal";
import { WishlistDrawer } from "@/components/ui/WishlistDrawer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen flex flex-col bg-[#F7F7F5] text-text-primary selection:bg-accent-yellow selection:text-text-primary font-sans antialiased">
        <WishlistProvider>
          <Navbar />
          <main className="flex-grow flex flex-col">{children}</main>
          <Footer />
          <SearchModal />
          <WishlistDrawer />
        </WishlistProvider>
      </body>
    </html>
  );
}
