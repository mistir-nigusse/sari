import profileIcon from "../../icons/profile.svg";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { rightDrawerSlice } from "../../slices/right_drawer";
import { useEffect } from "react";
import axios from "axios";
import { url } from "../../utils/url";
import { loginSlice } from "../../slices/login";
import { config } from "../../utils/header";

const Profile = () => {
  const dispatch = useDispatch();
  const actions = rightDrawerSlice.actions;
  const loginActions = loginSlice.actions;
  const rightDrawerActions = rightDrawerSlice.actions;
  const user = useSelector((state) => state.login.loggedUser);

  useEffect(() => {
   
    if (!localStorage.getItem("user_id") || !localStorage.getItem("token")) {
      
      
    }
       else {
      // let userId = localStorage.getItem("user_id");

      // axios.get(`${url}profile/getAllProfile/${userId}`, config).then(
      //   (response) => {
      //     ;
      //     if (response.data.User) {
      //       dispatch(loginActions.setLoggedUser(response.data.User[0]));
      //     }
      //   },
      //   (error) => {
      //     console.log(error);
      //     // dispatch(loginActions.setIsLoading(false));
      //   }
      // );
    }
  }, []);

  const logout = () => {

    dispatch(rightDrawerActions.setType('login'));
    localStorage.clear()
    dispatch(loginActions.setIsUserLogged(false));
    dispatch(loginActions.setLoggedUser([]));
  }

  const closeDrawer = () => {
    dispatch(actions.hideDrawer());
    document.body.style.overflow = "visible";
  };
  return (
    <div className="mini-profile">
      <div className="image">
        {" "}
        <img src={ user.profilePicture ? `${url}images/${user.profilePicture}` : profileIcon }  alt="" />{" "}
      </div>
      <div className="name">{user.firstName} {user.lastName}</div>
      <div className="buttons">
        <Link
          to="/profile"
          onClick={() => {
            closeDrawer();
          }}
        >
          {" "}
          <div className="btn btn-block view-cart">go to your profile</div>
        </Link>
        <Link
          to="/orders"
          onClick={() => {
            closeDrawer();
          }}
        >
          {" "}
          <div className="btn btn-block view-cart">My Orders</div>
        </Link>
        <div className="btn btn-block view-cart"  onClick={logout}>log out</div>
      </div>
    </div>
  );
};

export default Profile;
