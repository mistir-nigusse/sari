import { createSlice } from "@reduxjs/toolkit";

export const profileSlice = createSlice({
  name: "profile",
  initialState: {
    showEditProfile: false,
    showChangePassword:false,
    refreshOrders:false,
    inputValues: {
      firstName: "",
      lastName: "",
      phone: "",
      address: "",
      image:null,
    },
    inputErrs: {
      firstNameErr: "",
      lastNameErr: "",
      phoneErr: "",
      addressErr: "",
    },
    profileUpdated:false
  },

  reducers: {
    setShowEditProfile: (state, action) => {
      state.showEditProfile = action.payload;
    },
    setShowChangePassword: (state, action) => {
      state.showChangePassword = action.payload;
    },
    setFirstName: (state, action) => {
      state.inputValues.firstName = action.payload;
    },
    setLastName: (state, action) => {
      state.inputValues.lastName = action.payload;
    },
    setPhone: (state, action) => {
      state.inputValues.phone = action.payload;
    },
    setAddress: (state, action) => {
      state.inputValues.address = action.payload;
    },

    setFirstNameErr: (state, action) => {
      state.inputValues.firstNameErr = action.payload;
    },
    setLastNameErr: (state, action) => {
      state.inputValues.lastNameErr = action.payload;
    },
    setPhoneErr: (state, action) => {
      state.inputValues.phoneErr = action.payload;
    },
    setAddressErr: (state, action) => {
      state.inputValues.addressErr = action.payload;
    },
    setProfileUpdated: (state, action) => {
      state.profileUpdated = action.payload;
    },
    setImage: (state, action) => {
      state.inputValues.image = null;
      state.inputValues.image = action.payload;
    },
    updateOrders: (state, action) => {
     state.refreshOrders = !state.refreshOrders;
    },
  },
});
