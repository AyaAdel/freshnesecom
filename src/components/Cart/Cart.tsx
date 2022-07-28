import CartIcon from 'assets/cart.svg';
import { useAppSelector } from 'app/hooks';
import type { RootState } from 'app/store';

import './Cart.css';

export default function Cart() {
  const totalProducts: number = useAppSelector(
    (state: RootState) => state.cart.totalProducts
  );
  return (
    <div className="cart">
      <img src={CartIcon} className="icon" />
      {totalProducts > 0 && (
        <span className="cart__total">{totalProducts}</span>
      )}
    </div>
  );
}
