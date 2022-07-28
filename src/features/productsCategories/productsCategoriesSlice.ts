import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: string[] = [] as string[];

export const productsCategoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    initCategories: (state, action: PayloadAction<string[]>) =>
      (state = action.payload),
  },
});

export const { initCategories } = productsCategoriesSlice.actions;

export default productsCategoriesSlice.reducer;
