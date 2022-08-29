import { createSlice } from "@reduxjs/toolkit";

export const loginSlice = createSlice({
  name: "login",
  initialState: {
    inputValues: {
      email: "",
      password: "",
    },
    inputErrors: {
      emailErr: "",
      passwordErr: "",
    },
    isLoading:false,
    isUserLogged:false,
    loggedUser:[]
  },
  reducers: {
   
    setEmail: (state, action) => {
      state.inputValues.email = action.payload;
    },
    setPassword: (state, action) => {
      state.inputValues.password = action.payload;
    },
    setIsUserLogged: (state, action) => {
      state.isUserLogged = action.payload;
    },
    setLoggedUser: (state, action) => {
      state.loggedUser = action.payload;
    },
    setEmailErr: (state, action) => {
      state.inputErrors.emailErr = action.payload;
    },
    setPasswordErr: (state, action) => {
      state.inputErrors.passwordErr = action.payload;
    },
    setIsLoading:(state,action) => {
      state.isLoading = action.payload;
    }
  },
});
