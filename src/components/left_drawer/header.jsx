import Close from "@material-ui/icons/Close";
import { useDispatch, useSelector } from "react-redux";
import disableScroll from "disable-scroll";
import { leftDrawerSlice } from "../../slices/left_drawer";

import {
  faSearch,
  faUser,
  faShoppingCart,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";

import { rightDrawerSlice } from "../../slices/right_drawer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { loginSlice } from "../../slices/login";

const Header = () => {
  const searchIcon = <FontAwesomeIcon icon={faSearch} size="lg" />;

  const profileIcon = <FontAwesomeIcon icon={faUser} size="lg" />;
  const rightDrawerActions = rightDrawerSlice.actions;
  const isUserLogged = useSelector((state) => state.login.isUserLogged);
  const actions = leftDrawerSlice.actions;
  const dispatch = useDispatch();
  const closeLeftDrawer = () => {
    dispatch(actions.hideDrawer());
    document.body.style.overflow = "visible";
  };

  const showRightDrawer = (type) => {
    closeLeftDrawer();
    dispatch(rightDrawerActions.showDrawer());
    dispatch(rightDrawerActions.setType(type));
    document.body.style.overflow = "hidden";
  };

  return (
    <div className="header">
      <div className="text">  Sari sanitary </div>
      <div className="close-drawer" onClick={closeLeftDrawer}>
        {" "}
        <Close />{" "}
      </div>

      {/* <div className="icons">
        <>
          {" "}
          <div
            className="icon"
            onClick={() => {
              showRightDrawer("search");
            }}
          >
            {searchIcon}
          </div>
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
      </div> */}
    </div>
  );
};
export default Header;
