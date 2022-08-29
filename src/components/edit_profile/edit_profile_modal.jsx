import Close from "@material-ui/icons/Close";
// import { productSlice } from "../../slices/product";
import { useDispatch, useSelector } from "react-redux";
import Dimmer from "../utils/dimmer";
import { profileSlice } from "../../slices/profile";
import EditProfileContent from "./edit_profile_content";
import { useMediaQuery } from "react-responsive";
const EditProfileModal = () => {
  const xs = useMediaQuery({ query: "(max-width: 576px" });
  const sm = useMediaQuery({ query: "(min-width: 576px)" });
  const md = useMediaQuery({ query: "(min-width: 768px)" });
  const lg = useMediaQuery({ query: "(min-width: 992px)" });
  const xl = useMediaQuery({ query: "(min-width: 1200px)" });
  let width = "inherit";

  if (xl) width = "40%";
  else if (lg) width = "50%";
  else if (md) width = "60%";
  else if (sm) width = "70%";
  else if (xs) width = "90%";

  const style = {
    width: width,
    maxHeight: "90%",
  };

  const profileActions = profileSlice.actions;
  const dispatch = useDispatch();
  const closeModal = () => {
    dispatch(profileActions.setShowEditProfile(false));
    document.body.style.overflow = "visible";
  };

  return (
    <>
      <Dimmer />
      <div className="edit-profile-modal" style={style}>
        <div className="header">
          <div className="close-modal" onClick={closeModal}>
            <Close />
          </div>
        </div>
        {/* <ProductDetails/> */}
        <EditProfileContent />
      </div>
    </>
  );
};

export default EditProfileModal;
