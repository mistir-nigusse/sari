import Close from "@material-ui/icons/Close";
import { useDispatch, useSelector } from "react-redux";
import disableScroll from "disable-scroll";
import { rightDrawerSlice } from "../../slices/right_drawer";
import Icons from "../navbar/icons";
const Header = () => {
  const actions = rightDrawerSlice.actions;
  const dispatch = useDispatch();
  const closeRightModal = () => {
    dispatch(actions.hideDrawer());
    document.body.style.overflow = "visible";
  };
  const type = useSelector((state) => state.rightDrawer.type);
  let headerText = "";
  switch (type) {
    case "search":
      headerText = "Search our site";
      break;
    case "login":
      headerText = "Login";
      break;
    case "wishlist":
      headerText = "Your wishlist";
      break;
    case "profile":
      headerText = "Profile";
      break;
    case "message":
      headerText = "messages";
      break;
    case "cart":
      headerText = "Shopping cart";
      break;
    case "register":
      headerText = "Register";
      break;
    case "reviews":
      headerText = " Reviews";
      break;
  }
  return (
    <div className="header">
      <div className="close-drawer" onClick={closeRightModal}>
        {" "}
        <Close />{" "}
      </div>
      <div className="text">{headerText}</div>
      <div className=""></div>
    </div>
  );
};
export default Header;
