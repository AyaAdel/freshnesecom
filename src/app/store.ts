import { configureStore } from '@reduxjs/toolkit';
import productsCategoriesSlice from 'features/productsCategories/productsCategoriesSlice';
import productsSlice from 'features/products/productsSlice';
import cartSlice from 'features/cart/cartSlice';

export const store = configureStore({
  reducer: {
    products: productsSlice,
    categories: productsCategoriesSlice,
    cart: cartSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
