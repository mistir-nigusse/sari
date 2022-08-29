import { createSlice } from "@reduxjs/toolkit";

export const navbarSlice = createSlice({
    name:'navbar',
    initialState: {
        stickNavbar:false
    },
    reducers: {
       setStickNavbar:(state,action) => {
           state.stickNavbar = action.payload;
       },
       
       
    }
});