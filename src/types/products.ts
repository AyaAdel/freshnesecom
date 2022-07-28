export type ProductItem = {
  brand: string;
  category: string;
  description: string;
  discountPercentage: number;
  id: number;
  images: string[];
  price: number;
  rating: number;
  stock: number;
  thumbnail: string;
  title: string;
};

export type AllProducts = {
  limit: number;
  products: ProductItem[];
  skip: number;
  total: number;
};
