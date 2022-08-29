import React from "react";
import ReactDOM from "react-dom"
import App from "./App";
import "./index.scss";
import './index.css'
import "bootstrap/dist/css/bootstrap.min.css";
// import 'react-toastify/dist/ReactToastify.css';
import reportWebVitals from "./reportWebVitals";
import { configureStore } from "@reduxjs/toolkit";
import { rightDrawerSlice } from "./slices/right_drawer";
import { Provider } from "react-redux";
import { leftDrawerSlice } from "./slices/left_drawer";
import { categorySlice } from "./slices/category";
import { wishlistSlice } from "./slices/wishlist";
import { productSlice } from "./slices/product";
import { productsSlice } from "./slices/products";
import { registerSlice } from "./slices/register";
import { loginSlice } from "./slices/login";
import { cartSlice } from "./slices/cart";
import { navbarSlice } from "./slices/navbar";
import { searchSlice } from "./slices/search";
import { profileSlice } from "./slices/profile";
import { recoverPasswordSlice } from "./slices/recover_password";
import { verifySlice } from "./slices/verfiy";
import { slipSlice } from "./slices/slip";
import { orderSlice } from "./slices/order";
import { TermsAndsConditionsSlice } from "./slices/terms_condition";

import { BrowserRouter, BrowserRouter as Router } from "react-router-dom";
// a function to configure a redux store
const store = configureStore({
  reducer: {
    rightDrawer: rightDrawerSlice.reducer,
    leftDrawer: leftDrawerSlice.reducer,
    category: categorySlice.reducer,
    product: productSlice.reducer,
    products: productsSlice.reducer,
    wishlist: wishlistSlice.reducer,
    register: registerSlice.reducer,
    login: loginSlice.reducer,
    cart: cartSlice.reducer,
    navbar: navbarSlice.reducer,
    search: searchSlice.reducer,
    profile: profileSlice.reducer,
    recoverPassword: recoverPasswordSlice.reducer,
    verify: verifySlice.reducer,
    slip: slipSlice.reducer,
    order: orderSlice.reducer,
    termsAndCondition: TermsAndsConditionsSlice.reducer,
  },
});

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store={store}>
      {" "}
      <App />
    </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
