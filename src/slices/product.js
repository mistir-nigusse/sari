import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
    name:'product',
    initialState: {
        isOpen:false,
        product:{},
        activeImageUrl:'',
        images:[],
        pageClicked:false,
    },
    reducers: {
       showModal:(state) => {
           state.isOpen = true;
       },
       hideModal:(state) => {
           state.isOpen = false;
       },
       setProduct:(state,action) => {
        state.product = action.payload;
      },
      setActiveImageUrl:(state,action) => {
        state.activeImageUrl = action.payload;
      },
      setImages:(state,action) => {
        state.images = action.payload;
      },
      togglePageClicked:(state) => {
        state.pageClicked = !state.pageClicked;
      },
      reset:(state) => {
        state.isOpen = false;
        state.product = {};
        state.activeImageUrl = '';
        state.images = [];
        state.pageClicked = false;
      },
      
       
    }
});