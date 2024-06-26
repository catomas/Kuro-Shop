export interface Product {
  id: string;
  title: string;
  description: string;
  images: string[];
  inStock: number;
  price: number;
  sizes: Size[];
  slug: string;
  tags: string[];
  secondCategoryId: string | null;
  principalCategoryId: string;
  gender: string | null;
}

export interface OrderProduct {
  slug: string;
  id: string;
  title: string;
  price: number;
  quantity: number;
  size: Size | null;
  image: string;
}

export interface CartProduct {
  id: string;
  slug: string;
  title: string;
  price: number;
  quantity: number;
  size: Size | null;
  image: string;
}

export interface ProductImage {
  id: number;
  url: string;
  productId?: string;
}

type Category = "men" | "women" | "unisex" | "poster";
export type Size = "XS" | "S" | "M" | "L" | "XL" | "XXL" | "XXXL";
export type Type = "shirts" | "pants" | "hoodies" | "posters" | "body";
