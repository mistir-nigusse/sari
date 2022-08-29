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
import { toast } from "react-toastify";
import { CirclePicker } from "react-color";
import Rating from "@material-ui/lab/Rating";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import AddReview from "./add_review";
import ReviewItem from "./review_item";
const searchIcon = <FontAwesomeIcon icon={faHeart} />;
const shoppingCartIcon = <FontAwesomeIcon icon={faShoppingCart} />;

// component that shows a detailed description of a product
const Review = ({ productId }) => {
  const product = useSelector((state) => state.product.product);
  const dispatch = useDispatch();
  const productActions = productSlice.actions;
  const cartActions = cartSlice.actions;
  const wishlistActions = wishlistSlice.actions;
  const pageClicked = useSelector((state) => state.product.pageClicked);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    axios.get(`${url}product/getProduct/${productId}`).then(
      (response) => {
        console.log(response);
        if (response.data.result) {
          let product = response.data.result;
          dispatch(productActions.setProduct(product));
        }
      },
      (error) => {
        console.log(error);
      }
    );

    axios.get(`${url}product/getAllProductReview/${productId}`).then(
      (response) => {
        console.log("response");
        if (response.data.result) {
          setReviews(response.data.result);
        }
      },
      (error) => {
        console.log(error);
      }
    );
  }, [pageClicked]);

  return (
    <div className="review">
      <div className="review-title">Reviews</div>

      <div className="review-content">
        {reviews.map((review) => {
          return <ReviewItem review={review} />;
        })}
        {/* <ReviewItem /> */}
      </div>
      <AddReview productId={productId} />
    </div>
  );
};

export default Review;
