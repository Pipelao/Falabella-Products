import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product, ProductsState } from "../types";

const initialState: ProductsState = {
  items: [],
  selectedProduct: null,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<Product[]>) => {
      state.items = action.payload;
    },
    selectProduct: (state, action: PayloadAction<number>) => {
      state.selectedProduct = state.items.find((p) => p.id === action.payload) || null;
    },
  },
});

export const { setProducts, selectProduct } = productsSlice.actions;
export default productsSlice.reducer;
