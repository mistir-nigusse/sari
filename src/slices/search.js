import { createSlice } from "@reduxjs/toolkit";

export const searchSlice = createSlice({
  name: "search",
  initialState: {
    text: "",
    products: [],
    productImages:[],
    isLoading: false,
  },
  reducers: {
    setText: (state, action) => {
      state.text = action.payload;
    },
    setProducts: (state, action) => {
      state.products = action.payload;
    },
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    addProductImages: (state, action) => {
      state.productImages.push(action.payload);
    },
    
  },
});
