import { useDispatch, useSelector } from "react-redux";
import Dimmer from "./dimmer";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useMediaQuery } from "react-responsive";

import Header from "./header";
import DrawerContent from "./drawer_content";

const RightDrawer = () => {
  const { test } = useSelector((state) => state.rightDrawer);
  const closeIcon = <FontAwesomeIcon icon={faTimes} />;
  const mobileView = useMediaQuery({ query: "(max-width: 576px)" });
  const type = useSelector((state) => state.rightDrawer.type);
  let rightDrawerClasses = "right-drawer ";
  if (mobileView) rightDrawerClasses += " right-drawer-mobile ";
  if (type === "reviews") rightDrawerClasses += " right-drawer-reviews ";
  return (
    <>
      <Dimmer />
      <div className={rightDrawerClasses}>
        <Header />
        <DrawerContent />
      </div>
    </>
  );
};
export default RightDrawer;
