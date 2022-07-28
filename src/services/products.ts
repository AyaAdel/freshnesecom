import { http } from 'utils/http';

export const getAllProducts = (limit = 9, skip = 0) =>
  http(`https://dummyjson.com/products?limit=${limit}&skip=${skip}`);

export const allProductsCategories = () =>
  http('https://dummyjson.com/products/categories');

export const searchProducts = (productName: string) =>
  http(`https://dummyjson.com/products/search?q=${productName}`);

export const getProductsOfCategory = (category: string) =>
  http(`https://dummyjson.com/products/category/${category}`);
