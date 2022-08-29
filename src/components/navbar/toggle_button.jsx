import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch } from "react-redux";
import { leftDrawerSlice } from "../../slices/left_drawer";

const ToggleButton = () => {
  const dispatch = useDispatch();
  const actions = leftDrawerSlice.actions;
  const toggleButton = <FontAwesomeIcon icon={faBars} size="lg" />;
  const showLeftDrawer = () => {
    dispatch(actions.showDrawer());
    document.body.style.overflow = "hidden";
  };

  return (
    <div className="toggle-button" onClick={showLeftDrawer}>
      {toggleButton}
    </div>
  );
};
export default ToggleButton;
