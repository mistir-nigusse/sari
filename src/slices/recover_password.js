import { createSlice } from "@reduxjs/toolkit";

export const recoverPasswordSlice = createSlice({
  name: "recoverPassword",
  initialState: {
    isOpen: false,
    passwordRecovered:false,
    page: 1,
  },
  reducers: {
    setIsOpen: (state, action) => {
      state.isOpen = action.payload;
    },
    setPage: (state, action) => {
      state.page = action.payload;
    },
    setPasswordRecovered: (state, action) => {
      state.passwordRecovered = action.payload;
    },

  },
});
