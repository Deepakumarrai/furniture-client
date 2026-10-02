export interface Product {
  id: string;
  name: string;
  slug: string;
  category: ProductCategory;
  tagline: string;
  description: string;
  fullStory?: string;
  priceFormatted?: string;
  images: string[];
  materials: string[];
  dimensions: {
    width: string;
    depth: string;
    height: string;
    seatHeight?: string;
  };
  finishes: {
    name: string;
    colorCode: string;
    image?: string;
    imageIndex?: number;
  }[];
  subCategory?: string;
  features?: string[];
  leadTime?: string;
  isFeatured?: boolean;
  inStock?: boolean;
  discountBadge?: string;
  rating?: number;
  dealCountdown?: {
    days: number;
    hours: number;
    mins: number;
    secs: number;
  };
}

export type ProductCategory =
  | "Living Room"
  | "Bedroom"
  | "Dining"
  | "Office"
  | "Tables"
  | "Chairs"
  | "Storage"
  | "Custom";

export interface CategoryInfo {
  id: string;
  name: ProductCategory;
  description: string;
  image: string;
  itemCount: number;
}
