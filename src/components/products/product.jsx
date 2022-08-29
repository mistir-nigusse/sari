import React from "react";

import { faShoppingCart, faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";
import { productSlice } from "../../slices/product";
import { cartSlice } from "../../slices/cart";
import { wishlistSlice } from "../../slices/wishlist";
import { url } from "../../utils/url";
import { Link } from "react-router-dom";
import productAltImage from "../../icons/product.svg";
import { useEffect, useState } from "react";
import axios from "axios";
import { useMediaQuery } from "react-responsive";
import Skeleton from "react-loading-skeleton";
import { ToastContainer, toast } from "react-toastify";
import Rating from "@material-ui/lab/Rating";
const searchIcon = <FontAwesomeIcon icon={faHeart} />;
const shoppingCartIcon = <FontAwesomeIcon icon={faShoppingCart} />;

// component that displays a single product
export const Product = ({
  wishlistBtn = true,
  vertical = true,
  onclick = {},
  link = {},
  details,
  image,
}) => {
  const handleClick=()=>{
    window.reload()
  }
  console.log("image for product is ",image)
  const dispatch = useDispatch();
  const md = useMediaQuery({ query: "(max-width: 992px)" });
  const mobileView = useMediaQuery({ query: "(max-width: 576px)" });
  return vertical ? (
    <div className="product">
      <div className="product-image">
        {image.map((item) => (
          <Link
            onClick={handleClick}
            key={item.id}
            to={`/product/${details.id}`}
          >
            {item ? (
              <img className="img-fluid" src={item.imageURI} alt="" />
            ) : (
              <Skeleton
                style={{
                  position: "relative",
                  width: "100%",
                  height: "0",
                  paddingBottom: "100%",
                }}
              />
            )}
          </Link>
        ))}
      </div>

      <div className="product-text">
        <div className="product-title">{details.name}</div>
        <div className="product-title">{details.price}</div>
      </div>
    </div>
  ) : (
    <div className="product-horizontal">
      <div className="product-image">
        {image.map((item) => (
          <Link to={`/product/${details.id}`}>
            {item ? (
              <img className="img-fluid" src={item.imageURI} alt="" />
            ) : (
              <Skeleton
                style={{
                  position: "relative",
                  width: "100%",
                  height: "0",
                  paddingBottom: "100%",
                }}
              />
            )}
          </Link>
        ))}
      </div>
      <div className="product-text">
        <Link onClick={onclick} to={link}>
          <div className="product-title">{details.name}</div>
        </Link>
        <div className="product-price">{details.price} Birr</div>
      </div>
    </div>
  );
};

export const ProductHorizontal = (details) => {
  return (
    <div className="product-horizontal">
      <div className="product-image">
        <img className="img-fluid" src={""} alt="" />
      </div>
      <div className="product-text">
        <div className="product-title">details.Name</div>
        <div className="product-price">details.Price Birr</div>
      </div>
    </div>
  );
};
