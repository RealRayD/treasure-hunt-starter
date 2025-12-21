export interface Product {
  id: string;
  name: string;
  brand: string;
  category: string;
  subcategory: string;
  originalPrice: number;
  salePrice: number;
  discount: number;
  image: string;
  sizes: string[];
  colors: string[];
  isNew?: boolean;
  isBestSeller?: boolean;
  isClearance?: boolean;
}

export interface CartItem extends Product {
  quantity: number;
  selectedSize: string;
  selectedColor: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  image: string;
  subcategories?: string[];
}

export interface Brand {
  id: string;
  name: string;
  logo: string;
}
