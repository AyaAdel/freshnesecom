import { useEffect } from 'react';
import Products from './Products/Products';
import ProductsCategories from './ProductsCategories/ProductsCategories';
import Header from 'pages/Home/Header/Header';
import Footer from 'pages/Home/Footer/Footer';
import { getAllProducts, allProductsCategories } from 'services/products';
import { useAppDispatch } from 'app/hooks';
import type { AppDispatch } from 'app/store';
import { loadProducts } from 'features/products/productsSlice';

import { initCategories } from 'features/productsCategories/productsCategoriesSlice';

import './Home.css';

export default function Home() {
  const dispatch: AppDispatch = useAppDispatch();

  useEffect(() => {
    getAllProducts().then((response) => dispatch(loadProducts(response)));
    allProductsCategories().then((response) =>
      dispatch(initCategories(response))
    );
  }, []);

  return (
    <>
      <Header />
      <main className="home-main">
        <aside>
          <ProductsCategories />
        </aside>
        <Products />
      </main>
      <Footer />
    </>
  );
}
