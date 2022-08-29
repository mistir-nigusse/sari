import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    cartItems: [],
    savingCart: false,
    test: 1,
    productImages: [],
  },
  reducers: {
    addProduct: (state, action) => {
      state.products.push(action.payload);
    },
    setSavingCart: (state, action) => {
      state.savingCart = action.payload;
    },
    setTest: (state, action) => {
      state.savingCart = action.payload;
    },
    addProductImage: (state, action) => {
      state.productImages.push(action.payload);
    },
    clearCart: (state) => {
      state.cartItems = [];
    },

    addCartItem: (state, action) => {
      let itemExist = false;

      state.cartItems.forEach((cartItem) => {
        if (cartItem.product.id === action.payload.product.id) itemExist = true;
      });
      if (!itemExist) state.cartItems.push(action.payload);
    },
    removeCartItem: (state, action) => {
      const newCartItems = state.cartItems.filter(
        (cartItem) => cartItem.product.id !== action.payload
      );
      state.cartItems = newCartItems;
    },
    increaseQuantity: (state, action) => {
      state.cartItems.forEach((cartItem) => {
        if (cartItem.product.id === action.payload) {
          if (
            parseInt(cartItem.quantity) >= parseInt(cartItem.product.quantity)
          ) {
            toast.info(`Only ${cartItem.product.quantity} items available !`, {
              position: "top-left",
              autoClose: 2000,
              hideProgressBar: true,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
          } else {
            cartItem.quantity += 1;
          }
        }
      });
    },
    changeQuantity: (state, action) => {
      state.cartItems.forEach((cartItem) => {
        if (cartItem.product.id === action.payload.id) {
          if (
            parseInt(action.payload.amount) >=
            parseInt(cartItem.product.quantity)
          ) {
            toast.info(`Only ${cartItem.product.quantity} items available !`, {
              position: "top-left",
              autoClose: 2000,
              hideProgressBar: true,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
          } else {
            cartItem.quantity = action.payload.amount;
          }
        }
      });
    },
    setColor: (state, action) => {
      state.cartItems.forEach((cartItem) => {
        if (cartItem.product.id === action.payload.id) {
          cartItem.selectedColor = action.payload.color;
        }
      });
    },
    setSize: (state, action) => {
      state.cartItems.forEach((cartItem) => {
        if (cartItem.product.id === action.payload.id) {
          cartItem.selectedSize = action.payload.size;
        }
      });
    },
    decreaseQuantity: (state, action) => {
      state.cartItems.forEach((cartItem) => {
        if (cartItem.product.id === action.payload) {
          if (cartItem.quantity > 1) {
            cartItem.quantity -= 1;
          }
        }
      });
    },
  },
});
