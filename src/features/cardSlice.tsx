import { createSlice } from "@reduxjs/toolkit";
import { type PayloadAction } from "@reduxjs/toolkit";
import { type Product } from "@interfaces/Products.interface";

const initialState: Product[] = [];

export const cardSlice = createSlice({
  name: "card",
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<Product>) => {
      state.push(action.payload);
    },
    deleteProduct: (state, action: PayloadAction<number>) => {
      const foundProduct = state.find(
        (product) => product.id === action.payload
      );
      if (foundProduct) state.splice(state.indexOf(foundProduct), 1);
    },
    deleteAll: (state) => {
      state.length = 0;
    },
  },
});

export const { addProduct, deleteProduct, deleteAll } = cardSlice.actions;
export default cardSlice.reducer;
