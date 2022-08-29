import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { rightDrawerSlice } from "../../slices/right_drawer";

const ShowRightDrawer = ({ type }) => {
  const rightDrawerActions = rightDrawerSlice.actions;
  const dispatch = useDispatch();
  const isUserLogged = useSelector((state) => state.login.isUserLogged);

  useEffect(() => {
    showRightDrawer(type);
  }, [isUserLogged]);

  const showRightDrawer = (type) => {
    if (isUserLogged) {
      
      dispatch(rightDrawerActions.showDrawer());
      dispatch(rightDrawerActions.setType('profile'));
      document.body.style.overflow = "hidden";

    } else {
        
      dispatch(rightDrawerActions.showDrawer());
      dispatch(rightDrawerActions.setType(type));
      document.body.style.overflow = "hidden";
    }
  };

  return "";
};
export default ShowRightDrawer;
