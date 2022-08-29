import { createSlice } from "@reduxjs/toolkit";

export const checkoutSlice = createSlice({
  name: "checkout",
  initialState: {
    
    
  },
  reducers: {
    
    setProducts: (state, action) => {
        state.products = action.payload;
      },

  },
});
