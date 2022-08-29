import { createSlice } from "@reduxjs/toolkit";

export const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: {
    activeColumn: 0,
    products: [],
    productImages:[]
  },
  reducers: {
    setActiveColumn: (state, action) => {
      state.activeColumn = action.payload;
    },
    addProduct: (state, action) => {

      let itemExist = false;

      state.products.forEach((product) => {
        if (product.id === action.payload.id) itemExist = true;
      });
      if (!itemExist)
      state.products.push(action.payload);
    },
    removeProduct: (state, action) => {
      const newProducts = state.products.filter(
        (product) => product.id !== action.payload
      );
      state.products = newProducts;
    },

    clearWishlist: (state) => {
      state.products =[]
    },
    addProductImage: (state, action) => {
      state.productImages.push(action.payload)  ;
    },
  },
});
