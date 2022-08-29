import { useDispatch } from "react-redux";
import { rightDrawerSlice } from "../../slices/right_drawer";

const Dimmer = () => {
  const dispatch = useDispatch();
  const rightDrawerActions = rightDrawerSlice.actions;

  return (
    <div
      className="dimmer"
      onClick={() => {
        dispatch(rightDrawerActions.hideDrawer());
        document.body.style.overflow = 'visible';
      }}
    ></div>
  );
};
export default Dimmer;
