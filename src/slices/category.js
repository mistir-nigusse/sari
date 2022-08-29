import { createSlice } from "@reduxjs/toolkit";

export const categorySlice = createSlice({
    name:'category',
    initialState: {
        activeColumn:0,
        categories:[],
        products:[],
        areProductsLoading:false,
        activeCategoryId:null,
    },

    reducers: {
        setActiveColumn:(state,action) => {
            state.activeColumn = action.payload;
        },
        setCategories:(state,action) => {
            state.categories = action.payload;
        },
        setProducts:(state,action) => {
            state.products = action.payload;
        },
        setAreProductsLoading:(state,action) => {
            state.areProductsLoading = action.payload;
        },
        setActiveCategoryId:(state,action) => {
            state.activeCategoryId = action.payload;
        },
        
        
        
       
    }
});