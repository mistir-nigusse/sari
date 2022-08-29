import { createSlice } from "@reduxjs/toolkit";

export const leftDrawerSlice = createSlice({
    name:'leftDrawer',
    initialState: {
        isOpen:false,
    },
    reducers: {
       showDrawer:(state) => {
           state.isOpen = true;
       },
       hideDrawer:(state) => {
           state.isOpen = false;
       },
       
    }
});