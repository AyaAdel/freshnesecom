import { createSlice } from '@reduxjs/toolkit';

interface Cart {
  totalProducts: number;
}

const initialState: Cart = {
  totalProducts: 0,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state) => {
      state.totalProducts += 1;
    },
  },
});

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;
