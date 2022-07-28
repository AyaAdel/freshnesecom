import type { ProductItem } from 'types/products';
import { useAppDispatch } from 'app/hooks';
import type { AppDispatch } from 'app/store';
import { addToCart } from 'features/cart/cartSlice';

import './Product.css';

export default function Product({
  id,
  title,
  thumbnail,
  price,
  discountPercentage,
  description,
}: ProductItem) {
  const dispatch: AppDispatch = useAppDispatch();

  const addProductToCart = () => dispatch(addToCart());

  return (
    <div className="product-item" data-testid={`product${id}`}>
      <div className="product-item__image-wrapper">
        <img className="product-item__image" src={thumbnail} />
        <span className="product-item__discount-percent">{`-${discountPercentage}%`}</span>
      </div>
      <h5 className="product-item__name">{title}</h5>
      <p className="product-item__description">{description}</p>
      <div className="product-item__Action">
        <div className="product-item__price">
          <span className="product-item__current-price">{`${price} usd`}</span>
        </div>
        <button className="btn" onClick={addProductToCart}>
          Buy now
        </button>
      </div>
    </div>
  );
}
