import React from "react";
import { faShoppingCart, faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { productSlice } from "../../slices/product";
import { cartSlice } from "../../slices/cart";
import { wishlistSlice } from "../../slices/wishlist";
import { useEffect, useState } from "react";
import axios from "axios";
import { url } from "../../utils/url";

import "react-tabs/style/react-tabs.css";
import AddReview from "./add_review";
import ReviewItem from "./review_item";
import { useLocation } from "react-router";
const searchIcon = <FontAwesomeIcon icon={faHeart} />;
const shoppingCartIcon = <FontAwesomeIcon icon={faShoppingCart} />;

// component that shows a detailed description of a product
const Review = () => {
  const product = useSelector((state) => state.product.product);
  const dispatch = useDispatch();
  const productActions = productSlice.actions;
  const cartActions = cartSlice.actions;
  const wishlistActions = wishlistSlice.actions;
  const pageClicked = useSelector((state) => state.product.pageClicked);
  const [reviews, setReviews] = useState([]);
  const location = useLocation();
  let componentMounted = true;
  const route = location.pathname.substring(location.pathname.lastIndexOf("/") + 1);
  useEffect(() => {
//  alert(route)

    axios.get(`${url}product/getAllProductReview/${route}`).then(
      (response) => {
        if (response.data.result) {
          console.log(response)
          if (componentMounted){ // (5) is component still mounted?
            setReviews(response.data.result);
        }
         
        }
      },
      (error) => {
        console.log(error);
      }
    );
   
    return () => { // This code runs when component is unmounted
      componentMounted = false; // (4) set it to false if we leave the page
  }

  }, [pageClicked,route]);

  return (
    <div className="review">
      
      <div className="review-content">
        {reviews.length === 0 &&'No reviews found ' }
        {reviews.map((review) => {
          return <ReviewItem review={review} />;
        })}
        {/* <ReviewItem /> */}
      </div>
      <AddReview productId={route} />
    </div>
  );
};

export default Review;
