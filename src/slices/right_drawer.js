import { createSlice } from "@reduxjs/toolkit";

export const rightDrawerSlice = createSlice({
    name:'rightDrawer',
    initialState: {
        isOpen:false,
        type:''
    },

    reducers: {
       showDrawer:(state) => {
           state.isOpen = true;
       },
       hideDrawer:(state) => {
           state.isOpen = false;
       },
       setType:(state,action) => {
           state.type = action.payload;
       }
    }
});