import Search from "./search";

import { useSelector } from "react-redux";
import Login from "./login";
import Wishlist from "./wishlist";
import Cart from "./cart";
import Register from "./register";
import Profile from "./profile";
import { useEffect } from "react";
import YehagereNavContent from "./yehagere_nav_content";
import Review from "../product_reviews/review";
import Messages from "./messages";

const DrawerContent = () => {
  const type = useSelector((state) => state.rightDrawer.type);

  useEffect(() => {}, [type]);

  return (
    <div className="right-drawer-content">
      {type === "search" ? (
        <Search />
      ) : type === "login" ? (
        <Login />
      ) : type === "messages" ? (
        <Messages />
      ) : type === "profile" ? (
        <Profile />
      ) : type === "reviews" ? (
        <Review />
      ) : type === "wishlist" ? (
        <Wishlist />
      ) : type === "cart" ? (
        <Cart />
      ) : type === "yehagereNav" ? (
        <YehagereNavContent />
      ) : type === "register" ? (
        <Register />
      ) : (
        ""
      )}
    </div>
  );
};

export default DrawerContent;
