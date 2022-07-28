import { useState } from 'react';
import SearchIcon from 'assets/search.svg';
import { searchProducts, getProductsOfCategory } from 'services/products';
import Dropdown from 'components/Dropdown/Dropdown';
import { useAppSelector, useAppDispatch } from 'app/hooks';
import type { RootState, AppDispatch } from 'app/store';
import { loadProducts } from 'features/products/productsSlice';

import './SearchProducts.css';

export default function SearchProducts() {
  const [value, setValue] = useState('');
  const categories: string[] = useAppSelector(
    (state: RootState) => state.categories
  );

  const dispatch: AppDispatch = useAppDispatch();

  const filterProducts = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const productName = event.target.value;

    setValue(productName);
    const response = await searchProducts(productName);
    dispatch(loadProducts(response));
  };

  const filterProductsWithCategory = async (category: string) => {
    const response = await getProductsOfCategory(category);
    dispatch(loadProducts(response));
  };

  return (
    <div className="search-products">
      <Dropdown
        defaultSelected="All Categories"
        list={categories}
        onSelect={filterProductsWithCategory}
      />
      <input
        className="search-products__input"
        placeholder="Search Products, categories ..."
        onChange={filterProducts}
        value={value}
      />
      <img src={SearchIcon} className="search-products__icon" />
    </div>
  );
}
