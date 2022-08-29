import { useEffect } from "react";
import { url } from "../../utils/url";

import axios from "axios";
import { cartSlice } from "../../slices/cart";
import { useDispatch, useSelector } from "react-redux";
import { wishlistSlice } from "../../slices/wishlist";
import { parse } from "@fortawesome/fontawesome-svg-core";
import { loginSlice } from "../../slices/login";
import FetchProducts from "./fetch_products";
// import FetchCartImages from "./fetch_cart_images";

const FetchData = () => {
  const cartActions = cartSlice.actions;
  const wishlistActions = wishlistSlice.actions;
  const isUserLogged = useSelector((state) => state.login.isUserLogged);
  const dispatch = useDispatch();


  useEffect(() => {
    fetchCart();
    fetchWishlist();
  }, [isUserLogged]);

  const fetchCart = () => {
    dispatch(cartActions.clearCart());
    if (!localStorage.getItem("user_id") || !localStorage.getItem("token"))
      return;
    const userId = localStorage.getItem("user_id");

    axios.get(`${url}user/getCarts/${userId}`).then(
      (response) => {
      
        console.log(response)
        if (response.data.User) {
          let cartFromDb = response.data.User;
          let cartItemsForState = [];
        
          if (cartFromDb.length > 0) {
           
            cartFromDb.forEach((item) => {
              // console.log(item.product_id)
             
              axios
                .get(`${url}product/getProduct/${item.product_id}`, cartFromDb)
                .then(
                  (response) => {
                    
                    console.log(response)
                    // 
                    // // toast.success("Wow so easy!");
                    // // dispatch(cartActions.setSavingCart(false));
                    // // ;

                    if (response.data) {
                      console.log('addingggggg')
                      let product = response.data;
                      const cartItem = {
                        product: product,
                        quantity: parseInt(item.quantity),
                        selectedColor:item.selectedColor,
                        selectedSize:item.selectedSize,
                      };
                      //  console.log(product)
                      dispatch(cartActions.addCartItem(cartItem));
                    }
                  },
                  (error) => {
                    console.log(error);
                  }
                );
            });
          }
        }
      },
      (error) => {
        console.log(error);
      }
    );
  };

  const fetchWishlist = () => {
    dispatch(wishlistActions.clearWishlist());
    if (!localStorage.getItem("user_id") || !localStorage.getItem("token"))
      return;
    const userId = localStorage.getItem("user_id");

    axios.get(`${url}user/getWishlist/${userId}`).then(
      (response) => {
       
        if (response.data.Wishlist) {
         
          let wishlistFromDb = response.data.Wishlist;
          let cartItemsForState = [];

          if (wishlistFromDb.length > 0) {
            wishlistFromDb.forEach((item) => {
              axios
                .get(
                  `${url}product/getProduct/${item.product_id}`,
                  wishlistFromDb
                )
                .then(
                  (response) => {
                    // alert(JSON.stringify(response.data))

                    if (response.data) {
                      let product = response.data;

                      dispatch(wishlistActions.addProduct(product));
                    }
                  },
                  (error) => {
                    console.log(error);
                  }
                );
            });
          }
        }
      },
      (error) => {
        console.log(error);
      }
    );
  };

 
  return <>
  <FetchProducts/>
  </>;
};

export default FetchData;
