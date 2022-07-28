import ListGroup from 'components/ListGroup/ListGroup';
import { getProductsOfCategory } from 'services/products';
import { useAppSelector, useAppDispatch } from 'app/hooks';
import type { RootState, AppDispatch } from 'app/store';
import { loadProducts } from 'features/products/productsSlice';

export default function ProductsCategories() {
  const categories: string[] = useAppSelector(
    (state: RootState) => state.categories
  );

  const dispatch: AppDispatch = useAppDispatch();

  const filterProducts = async (category: string) => {
    const response = await getProductsOfCategory(category);
    dispatch(loadProducts(response));
  };

  return (
    <ListGroup title="Categories" links={categories} onClick={filterProducts} />
  );
}
