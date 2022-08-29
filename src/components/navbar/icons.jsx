import {
  faSearch,
  faUser,
  faShoppingCart,
  faHeart,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

import { rightDrawerSlice } from "../../slices/right_drawer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";
import { loginSlice } from "../../slices/login";
import { useMediaQuery } from "react-responsive";

const Icons = ({ number = 4 }) => {
  const lg = useMediaQuery({ query: "(min-width: 970px)" });
  const searchIcon = <FontAwesomeIcon icon={faSearch} size="lg" />;
  const cartIcon = <FontAwesomeIcon icon={faShoppingCart} size="lg" />;
  const wishlistIcon = <FontAwesomeIcon icon={faHeart} size="lg" />;
  const profileIcon = <FontAwesomeIcon icon={faUser} size="lg" />;
  const messageIcon = <FontAwesomeIcon icon={faEnvelope} size="lg" />;

  const rightDrawerActions = rightDrawerSlice.actions;
  const loginActions = loginSlice.actions;
  const isUserLogged = useSelector((state) => state.login.isUserLogged);
  const numberOfProductsInCart = useSelector(
    (state) => state.cart.cartItems.length
  );
  const numberOfProductsInWishlist = useSelector(
    (state) => state.wishlist.products.length
  );

  const dispatch = useDispatch();

  const showRightDrawer = (type) => {
    dispatch(rightDrawerActions.showDrawer());
    dispatch(rightDrawerActions.setType(type));
    document.body.style.overflow = "hidden";
  };

  return (
    <div className="icons">
      {number === 4 && (
        <>
          {!lg && (
            <div
              className="icon"
              onClick={() => {
                showRightDrawer("search");
              }}
            >
              {searchIcon}
            </div>
          )}
          <div
            className="icon"
            onClick={() => {
              if (isUserLogged) {
                showRightDrawer("profile");
              } else {
                showRightDrawer("login");
              }
            }}
          >
            {profileIcon}
          </div>{" "}
        </>
      )}
      <div
        className="icon"
        onClick={() => {
          showRightDrawer("message");
        }}
      >
        {messageIcon}
        {/* <div className="badge">{numberOfProductsInWishlist}</div> */}
      </div>
      <div
        className="icon"
        onClick={() => {
          showRightDrawer("wishlist");
        }}
      >
        {wishlistIcon}
        <div className="badge">{numberOfProductsInWishlist}</div>
      </div>
      <div
        className="icon"
        onClick={() => {
          showRightDrawer("cart");
        }}
      >
        {" "}
        {cartIcon}
        <div className="badge">{numberOfProductsInCart}</div>
      </div>
    </div>
  );
};

export default Icons;
