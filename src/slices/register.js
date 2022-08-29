import { createSlice } from "@reduxjs/toolkit";

export const registerSlice = createSlice({
  name: "register",
  initialState: {
    inputValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "+1",
      address: "",
      password1: "",
      password2: "",
    },
    inputErrors: {
      firstNameErr: "",
      lastNameErr: "",
      emailErr: "",
      phoneErr: "",
      addressErr: "",
      password1Err: "",
      password2Err: "",
    },
    isLoading: false,
    registrationSuccessful:false,
  },
  reducers: {
    setFirstName: (state, action) => {
      state.inputValues.firstName = action.payload;
    },
    setLastName: (state, action) => {
      state.inputValues.lastName = action.payload;
    },
    setEmail: (state, action) => {
      state.inputValues.email = action.payload;
    },
    setPhone: (state, action) => {
      state.inputValues.phone = action.payload;
    },
    setAddress: (state, action) => {
      state.inputValues.address = action.payload;
    },
    setPassword1: (state, action) => {
      state.inputValues.password1 = action.payload;
    },
    setPassword2: (state, action) => {
      state.inputValues.password2 = action.payload;
    },

    setFirstNameErr: (state, action) => {
      state.inputErrors.firstNameErr = action.payload;
    },
    setLastNameErr: (state, action) => {
      state.inputErrors.lastNameErr = action.payload;
    },
    setEmailErr: (state, action) => {
      state.inputErrors.emailErr = action.payload;
    },
    setPhoneErr: (state, action) => {
      state.inputErrors.phoneErr = action.payload;
    },
    setAddressErr: (state, action) => {
      state.inputErrors.addressErr = action.payload;
    },
    setPassword1Err: (state, action) => {
      state.inputErrors.password1Err = action.payload;
    },
    setPassword2Err: (state, action) => {
      state.inputErrors.password2Err = action.payload;
    },
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setRegistrationSuccessful: (state, action) => {
        state.registrationSuccessful = action.payload;
      },
  },
});
