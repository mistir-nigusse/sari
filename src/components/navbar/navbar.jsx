import Logo from "./logo";
import Nav from "./nav";
import Icons from "./icons";
import { useMediaQuery } from "react-responsive";
import ToggleButton from "./toggle_button";
import { useEffect } from "react";
import { navbarSlice } from "../../slices/navbar";
import { useDispatch, useSelector } from "react-redux";
import './possition.scss'
const Navbar = () => {
  const showButtomNav = useMediaQuery({ query: "(max-width: 576px)" });
    const showButtom = useMediaQuery({ query: "(max-width: 576px)" });
  const showNav = useMediaQuery({ query: "(min-width: 593px)" });
  const navbarActions = navbarSlice.actions;
  const dispatch = useDispatch();
  const stickNavbar = useSelector((state) => state.navbar.stickNavbar);
  const handleScroll = () => {
    if (window.pageYOffset == 0) {
      dispatch(navbarActions.setStickNavbar(false));
    } else {
      dispatch(navbarActions.setStickNavbar(true));
    }
  };
  window.addEventListener("scroll", handleScroll);
console.log(stickNavbar)
   if (showButtom) {
     document.body.style.marginTop = "22px";
     console.log(document.body.style.marginTop);
   } else {
     document.body.style.marginTop = "0";
   }

  return (
    <div
      className={
        showButtomNav
          ? "navbar"
          : stickNavbar
          ? "navbar navbar-stick"
          : "navbar"
      }
    >
      {showNav ? (
        <>
          <Logo />
          <Nav />
        </>
      ) : !showButtomNav ? (
        <>
          <ToggleButton /> <Logo />
        </>
      ) : showButtomNav ? (
        <>
          <ToggleButton /> <Logo /> <div></div>
        </>
      ) : (
        ""
      )}
    </div>
  );
};

export default Navbar;
