import { createSlice } from "@reduxjs/toolkit";

export const slipSlice = createSlice({
    name:'slip',
    initialState: {
        isOpen:false
    },
    reducers: {
       setIsOpen:(state,action) => {
           state.isOpen = action.payload;
       },
       
       
    }
});