import { createSlice } from "@reduxjs/toolkit";

export const orderSlice = createSlice({
  name: "order",
  initialState: {
    showMessages: false,
    id: null,
  },
  reducers: {
    setShowMessages: (state, action) => {
      state.showMessages = action.payload;
    },
    setId: (state, action) => {
      state.id = action.payload;
    },
  },
});
