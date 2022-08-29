import { createSlice } from "@reduxjs/toolkit";

export const TermsAndsConditionsSlice = createSlice({
    name:'termsAndCondition',
    initialState: {
        isOpen:false,
        type:''
    },
    reducers: {
       showTermsAndCondition:(state) => {
           state.isOpen = true;
       },
       hideTermsAndCondition:(state) => {
           state.isOpen = false;
       },
    
    }
});