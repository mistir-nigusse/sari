import { useDispatch } from "react-redux";
import { leftDrawerSlice } from "../../slices/left_drawer";

const Dimmer = () => {
    const dispatch = useDispatch();

  const leftDrawerActions = leftDrawerSlice.actions;

    return  <div
    className="dimmer"
    onClick={() => {
      dispatch(leftDrawerActions.hideDrawer());
      document.body.style.overflow = 'visible';
    }}
  ></div>
}
export default Dimmer;