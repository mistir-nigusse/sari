import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { rightDrawerSlice } from "../../slices/right_drawer";

const YehagereNavContent = () => {
  const actions = rightDrawerSlice.actions;
  const dispatch = useDispatch();
  const closeDrawer = () => {
    dispatch(actions.hideDrawer());
  };

  return (
    <div className="yehagere-nav-content">
     <Link to="/"  onClick={closeDrawer}>
        <div className="nav-item">Home</div>
      </Link>
      <Link to="/products" style={{ color: "white" }} onClick={closeDrawer}>
        <div className="nav-item">Shopp</div>
      </Link>

      <div className="nav-item">Story</div>
    </div>
  );
};
export default YehagereNavContent;
