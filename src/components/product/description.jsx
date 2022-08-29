import React from "react";
import { faShoppingCart, faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { productSlice } from "../../slices/product";
import { cartSlice } from "../../slices/cart";
import { wishlistSlice } from "../../slices/wishlist";
import { useEffect } from "react";
import axios from "axios";
import { url } from "../../utils/url";
import { toast } from "react-toastify";
import { CirclePicker } from "react-color";
import Rating from "@material-ui/lab/Rating";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
const searchIcon = <FontAwesomeIcon icon={faHeart} />;
const shoppingCartIcon = <FontAwesomeIcon icon={faShoppingCart} />;

// component that shows a detailed description of a product
const Description = ({ productId }) => {
  const product = useSelector((state) => state.product.product);
  const dispatch = useDispatch();
  const productActions = productSlice.actions;
  const cartActions = cartSlice.actions;
  const wishlistActions = wishlistSlice.actions;
  const pageClicked = useSelector((state) => state.product.pageClicked);

  useEffect(() => {
    axios.get(`${url}product/getProduct/${productId}`).then(
      (response) => {
        if (response.data.result) {
          let product = response.data.result;
          dispatch(productActions.setProduct(product));
        }
      },
      (error) => {
        console.log(error);
      }
    );
  }, [pageClicked]);

  return (
    <div className="description">
      <div className="description-title">Description</div>
      <div className="description-content" style={{ whiteSpace: "pre-line" }}>
        {product.Description}
      </div>
    </div>
  );
};

export default Description;
