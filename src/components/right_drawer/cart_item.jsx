import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

import { useDispatch, useSelector } from "react-redux";
// import { ToastContainer, toast } from 'react-toastify';
import { faTrashAlt, faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { url } from "../../utils/url";
import { Link } from "react-router-dom";
import { rightDrawerSlice } from "../../slices/right_drawer";
import { cartSlice } from "../../slices/cart";
import { useEffect, useState } from "react";
import axios from "axios";
import FetchCartImages from "../utils/fetch_cart_images";
import { productSlice } from "../../slices/product";
import { toast } from "react-toastify";
import Skeleton from "react-loading-skeleton";
import { CirclePicker } from "react-color";

const CartItem = ({ cartItem, productImage }) => {
  const productImages = useSelector((state) => state.cart.productImages);
  const cartIcon = <FontAwesomeIcon icon={faShoppingCart} size="5x" />;
  const cartItems = useSelector((state) => state.cart.cartItems);
  const removeIcon = <FontAwesomeIcon icon={faTrashAlt} />;
  const plusIcon = <FontAwesomeIcon icon={faPlus} />;
  const minusIcon = <FontAwesomeIcon icon={faMinus} />;
  const rightDrawerActions = rightDrawerSlice.actions;
  const productActions = productSlice.actions;
  const cartActions = cartSlice.actions;
  const isUserLogged = useSelector((state) => state.login.isUserLogged);
  const dispatch = useDispatch();
  const [showEnterAmount, setShowEnterAmount] = useState(false);

  const hideDrawer = () => {
    dispatch(rightDrawerActions.hideDrawer());
    document.body.style.overflow = "visible";
  };
  const removeCartItem = (id) => {
    dispatch(cartActions.removeCartItem(id));
  };
  const increaseQuantity = (id) => {
    dispatch(cartActions.increaseQuantity(id));
  };
  const decreaseQuantity = (id) => {
    dispatch(cartActions.decreaseQuantity(id));
  };
  const openProduct = () => {
    hideDrawer();
    dispatch(productActions.togglePageClicked());
  };
  return (
    <div className="cart-item">
      <div className="left">
        <Link onClick={openProduct} to={`/product/${cartItem.product.id}`}>
          {productImage ? (
            <img className="img-fluid" src={productImage} alt="" />
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
      </div>
      <div className="right">
        <Link onClick={openProduct} to={`/product/${cartItem.product.id}`}>
          <div className="product-title">{cartItem.product.Name}</div>
        </Link>

        <div className="price">{ " $"+cartItem.product.Price }</div>
        <div className="quantity">
          <div
            className="minus icon"
            onClick={() => {
              decreaseQuantity(cartItem.product.id);
            }}
          >
            {minusIcon}
          </div>
          <div className="amount">
            {!showEnterAmount ? (
              <div
                className="amount-div"
                onClick={() => {
                  setShowEnterAmount(true);
                }}
              >
                {cartItem.quantity}
              </div>
            ) : (
              <input
                type="text"
                className="amount-input"
                autoFocus
                defaultValue={cartItem.quantity}
                onBlur={(e) => {
                  
                  if (e.target.value) {
                      
                    dispatch(
                      cartActions.changeQuantity({
                        id: cartItem.product.id,
                        amount: e.target.value,
                      })
                    );
                  }
                  setShowEnterAmount(false);
                }}
                onKeyDown={(e) => {
               
                  if (e.key === "Enter") {
                    if (e.target.value) {
                        dispatch(
                          cartActions.changeQuantity({
                            id: cartItem.product.id,
                            amount: e.target.value,
                          })
                        );
                      }
                    setShowEnterAmount(false);
                  }
                }}
                // value={cartItem.quantity}
                // onChange={(e) => {
                //   if (e.target.value) {
                //     dispatch(
                //       cartActions.changeQuantity({
                //         id: cartItem.product.id,
                //         amount: e.target.value,
                //       })
                //     );
                //   }
                // }}
              />
            )}
          </div>
          <div
            className="plus icon"
            onClick={() => {
              increaseQuantity(cartItem.product.id);
            }}
          >
            {plusIcon}
          </div>
        </div>
        <div className="color">
          {cartItem.product.color ? (
            <CirclePicker
              width="max-content"
              color={cartItem.selectedColor}
              onChange={(color, event) => {
                console.log(color.hex);
                dispatch(
                  cartActions.setColor({
                    id: cartItem.product.id,
                    color: color.hex,
                  })
                );
              }}
              colors={cartItem.product.color.split(",")}
            />
          ) : (
            ""
          )}
        </div>
        <div className="size">
          {cartItem.product.size ? (
            <div className="size-content">
              {" "}
              {cartItem.product.size.split(",").map((item) => {
                return (
                  <div
                    className={
                      item === cartItem.selectedSize
                        ? "size-item selected"
                        : "size-item"
                    }
                    onClick={() => {
                      dispatch(
                        cartActions.setSize({
                          id: cartItem.product.id,
                          size: item,
                        })
                      );
                    }}
                  >
                    {item}
                  </div>
                );
              })}
            </div>
          ) : (
            ""
          )}
        </div>
        <div
          className="remove icon"
          onClick={() => {
            removeCartItem(cartItem.product.id);
          }}
        >
          {removeIcon}
        </div>
      </div>
    </div>
  );
};
export default CartItem;
