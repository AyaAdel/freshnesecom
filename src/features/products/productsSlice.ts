import { createSlice } from '@reduxjs/toolkit';
import { AllProducts } from 'types/products';

const initialState: AllProducts = {} as AllProducts;

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    loadProducts: (state, action) => (state = action.payload),
  },
});

export const { loadProducts } = productsSlice.actions;

export default productsSlice.reducer;
