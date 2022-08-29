import { createSlice } from "@reduxjs/toolkit";

export const verifySlice = createSlice({
  name: "verify",
  initialState: {
    isLoading: false,
    text: "Verfiying your account",
  },
  reducers: {
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setText: (state, action) => {
      state.text = action.payload;
    },
  },
});
