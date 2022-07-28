import { useState } from 'react';
import Product from 'components/Product/Product';
import type { AllProducts, ProductItem } from 'types/products';
import { useAppSelector, useAppDispatch } from 'app/hooks';
import type { RootState, AppDispatch } from 'app/store';
import { loadProducts } from 'features/products/productsSlice';
import { getAllProducts } from 'services/products';
import InfiniteScroll from 'react-infinite-scroll-component';

import './Products.css';

export default function Products() {
  const [pageNumber, setPageNumber] = useState<number>(0);
  const [hasMore, setHasMore] = useState(true);

  const dispatch: AppDispatch = useAppDispatch();

  const products: AllProducts = useAppSelector(
    (state: RootState) => state.products
  );

  const pageSize = 9;

  const fetchMoreData = () => {
    if (products.products.length >= products.total) {
      setHasMore(false);
      return;
    }

    setPageNumber((prevPageNumber) => prevPageNumber + 1);

    getAllProducts(pageSize, pageSize * pageNumber + 1).then(
      (response: AllProducts) => {
        dispatch(
          loadProducts({
            ...response,
            products: [...products.products, ...response.products],
          })
        );
      }
    );
  };

  return (
    <>
      {products.products && (
        <InfiniteScroll
          dataLength={products.products.length}
          next={fetchMoreData}
          hasMore={hasMore}
          loader={<h4>Loading...</h4>}
        >
          <div className="products">
            {products.products.map((product: ProductItem) => (
              <Product key={product.id} {...product} />
            ))}
          </div>
        </InfiniteScroll>
      )}
    </>
  );
}
