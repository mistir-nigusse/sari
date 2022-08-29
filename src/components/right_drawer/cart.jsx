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
import CartItem from "./cart_item";

const Cart = () => {
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
  useEffect(() => {
    // cartItems.forEach((item) => {
    //   let productImage = "";
    //   axios.get(`${url}user/getProductImages/${item.product.id}`).then(
    //     (response) => {
    //       if (response.data.productImages.length > 0) {
    //         productImage = `${url}images/${response.data.productImages[0].product_image}`;
    //         dispatch(
    //           cartActions.addProductImage({
    //             product_id: item.product.id,
    //             product_image: productImage,
    //           })
    //         );
    //       }
    //     },
    //     (error) => {
    //       dispatch(
    //         cartActions.addProductImage({
    //           product_id: item.product.id,
    //           product_image: productImage,
    //         })
    //       );
    //     }
    //   );
    // });
  }, []);

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
  const getTotalPrice = () => {
    let total = 0;
    cartItems.forEach((cartItem) => {
      total += cartItem.product.Price * cartItem.quantity;
    });

    return total;
  };
  const getTotalTax = () => {
    let total = 0;
    cartItems.forEach((cartItem) => {
      total += cartItem.product.Price * 0.15 * cartItem.quantity;
    });

    return total;
  };
  const saveCart = () => {
    if (!isUserLogged) {
      toast.info("Log in or register to save your cart! ", {
        position: "top-left",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    }

    const userId = localStorage.getItem("user_id");

    const cartItemsForDb = [];

    cartItems.forEach((cartItem) => {
      cartItemsForDb.push({
        user_id: parseInt(userId),
        product_id: cartItem.product.id,
        quantity: cartItem.quantity,
        selectedColor: cartItem.selectedColor,
        selectedSize: cartItem.selectedSize,
      });
    });

    dispatch(cartActions.setSavingCart(true));

    axios.post(`${url}user/createCart`, cartItemsForDb).then(
      (response) => {
        console.log(response);
        if (response.data.success) {
          toast.success("Cart saved successfully ", {
            position: "top-left",
            autoClose: 2000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        }
        dispatch(cartActions.setSavingCart(false));
      },
      (error) => {
        console.log(error);
      }
    );
  };

  const getProductImage = (productId) => {
    // let productImage = "";
    // axios.get(`${url}user/getProductImages/${productId}`).then(
    //   (response) => {
    //     if (response.data.productImages.length > 0) {
    //       console.log('shitttttt')
    //       productImage = `${url}images/${response.data.productImages[0].product_image}`;
    //       return productImage;
    //       console.log(productImage)
    //     }
    //   },
    //   (error) => {}
    // );
    // return productImage;
  };
  const openProduct = () => {
    hideDrawer();
    dispatch(productActions.togglePageClicked());
  };
  return (
    <>
      <FetchCartImages />
      <div className="mini-cart">
        {cartItems.length === 0 ? (
          <>
            {" "}
            <div className="icon">{cartIcon}</div>
            <div className="text">Your cart is empty</div>
          </>
        ) : (
          <div className="cart-list">
            {" "}
            {cartItems.map((cartItem) => {
              let productImage = "";
              productImages.forEach((item) => {
                if (item.product_id === cartItem.product.id)
                  productImage = item.product_image;
              });
              return (
                <CartItem productImage={productImage} cartItem={cartItem}/>
                // <div className="cart-item">
                //   <div className="left">
                //     <Link
                //       onClick={openProduct}
                //       to={`/product/${cartItem.product.id}`}
                //     >
                //       {productImage ? (
                //         <img className="img-fluid" src={productImage} alt="" />
                //       ) : (
                //         <Skeleton
                //           style={{
                //             position: "relative",
                //             width: "100%",
                //             height: "0",
                //             paddingBottom: "100%",
                //           }}
                //         />
                //       )}
                //     </Link>
                //   </div>
                //   <div className="right">
                //     <Link
                //       onClick={openProduct}
                //       to={`/product/${cartItem.product.id}`}
                //     >
                //       <div className="product-title">
                //         {cartItem.product.Name}
                //       </div>
                //     </Link>

                //     <div className="price">
                //       {cartItem.product.Price + " birr"}
                //     </div>
                //     <div className="quantity">
                //       <div
                //         className="minus icon"
                //         onClick={() => {
                //           decreaseQuantity(cartItem.product.id);
                //         }}
                //       >
                //         {minusIcon}
                //       </div>
                //       <div className="amount">
                //         {!showEnterAmount ? (
                //           <div
                //             className="amount-div"
                //             onClick={() => {
                //               setShowEnterAmount(true);
                //             }}
                //           >
                //             {cartItem.quantity}
                //           </div>
                //         ) : (
                //           <input
                //             type="text"
                //             className="amount-input"
                //             onBlur={() => {
                             
                //               setShowEnterAmount(false);
                //             }}
                //             onKeyDown={(e) => {
                //               if (e.key === 'Enter') {
                //                 setShowEnterAmount(false);
                //               }
                //             }}
                //             // value={cartItem.quantity}
                //             // onChange={(e) => {
                //             //   if (e.target.value) {
                //             //     dispatch(
                //             //       cartActions.changeQuantity({
                //             //         id: cartItem.product.id,
                //             //         amount: e.target.value,
                //             //       })
                //             //     );
                //             //   }
                //             // }}
                //           />
                //         )}
                //       </div>
                //       <div
                //         className="plus icon"
                //         onClick={() => {
                //           increaseQuantity(cartItem.product.id);
                //         }}
                //       >
                //         {plusIcon}
                //       </div>
                //     </div>
                //     <div className="color">
                //       {cartItem.product.color ? (
                //         <CirclePicker
                //           width="max-content"
                //           color={cartItem.selectedColor}
                //           onChange={(color, event) => {
                //             console.log(color.hex);
                //             dispatch(
                //               cartActions.setColor({
                //                 id: cartItem.product.id,
                //                 color: color.hex,
                //               })
                //             );
                //           }}
                //           colors={cartItem.product.color.split(",")}
                //         />
                //       ) : (
                //         ""
                //       )}
                //     </div>
                //     <div className="size">
                //       {cartItem.product.size ? (
                //         <div className="size-content">
                //           {" "}
                //           {cartItem.product.size.split(",").map((item) => {
                //             return (
                //               <div
                //                 className={
                //                   item === cartItem.selectedSize
                //                     ? "size-item selected"
                //                     : "size-item"
                //                 }
                //                 onClick={() => {
                //                   dispatch(
                //                     cartActions.setSize({
                //                       id: cartItem.product.id,
                //                       size: item,
                //                     })
                //                   );
                //                 }}
                //               >
                //                 {item}
                //               </div>
                //             );
                //           })}
                //         </div>
                //       ) : (
                //         ""
                //       )}
                //     </div>
                //     <div
                //       className="remove icon"
                //       onClick={() => {
                //         removeCartItem(cartItem.product.id);
                //       }}
                //     >
                //       {removeIcon}
                //     </div>
                //   </div>
                // </div>
               
              );
            })}
            <div className="pricing">
              <div className="item">
                <div className="text">sub total:</div>
                <div className="price">${getTotalPrice()} </div>
              </div>
              <div className="item">
                <div className="text">vat:</div>
                <div className="price">${getTotalTax()}</div>
              </div>
              <div className="item">
                <div className="text">Grand Total:</div>
                <div className="price">
                  ${getTotalTax() + getTotalPrice()}
                </div>
              </div>
            </div>
            <Link to={"/cart"}>
              {" "}
              <div className="btn view-cart btn-block" onClick={hideDrawer}>
                View Cart
              </div>{" "}
            </Link>
            <div className="btn view-cart btn-block" onClick={saveCart}>
              Save Cart
            </div>{" "}
          </div>
        )}
      </div>
    </>
  );
};

export default Cart;
