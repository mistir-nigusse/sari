import { CircularProgress } from "@material-ui/core";
import axios from "axios";
import { useEffect,useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { profileSlice } from "../../slices/profile";
import { url } from "../../utils/url";
import profileIcon from "../../icons/profile.svg";
import { toast } from "react-toastify";

const EditProfileContent = () => {
  const dispatch = useDispatch();
  const isLoading = false;
  const currentUser = useSelector((state) => state.login.loggedUser);
  const profileActions = profileSlice.actions;
  const { firstName, lastName, phone, address } = useSelector(
    (state) => state.profile.inputValues
  );
  const [image , setImage] = useState(null)
  const [previewImage,setPreviewImage ] = useState(null)

  useEffect(() => {
    setDefaultValues();
  }, [currentUser]);
  const validate = (e) => {
    e.preventDefault();
    saveChanges();
  };
  const saveChanges = () => {
    dispatch(profileActions.setProfileUpdated(false));
    let formData = new FormData();
    formData.append('firstName',firstName);
    formData.append('lastName',lastName);
    formData.append('phone',phone);
    formData.append('address',address);
    formData.append('profilePicture',image);

    let config = {
      headers: {
        "Content-type": "multipart/form-data",
        mode: "cors",
      },
    };
    for (var pair of formData.entries()) {
     
    }
    // {
    //   firstName,
    //   lastName,
    //   phone,
    //   address,
    // }
    axios
      .post(`${url}user/editProfile/${currentUser.user_id}`,formData,config )
      .then(
        (response) => {
          ;
          if (response.data.success) {
            dispatch(profileActions.setProfileUpdated(true));
            dispatch(profileActions.setShowEditProfile(false));
            document.body.style.overflow = "visible";

            toast.success("Your profile updated successfully", {
              position: "bottom-right",
              autoClose: 3500,
              hideProgressBar: true,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
          }
        },
        (error) => {
          console.log(error);
        }
      );
  };
  const setDefaultValues = () => {
    dispatch(profileActions.setFirstName(currentUser.firstName));
    dispatch(profileActions.setLastName(currentUser.lastName));
    dispatch(profileActions.setPhone(currentUser.phone));
    dispatch(profileActions.setAddress(currentUser.address));
  };
  return (
    <div className="edit-profile-content">
      <form onSubmit={validate}>
        <div
          className="form-grp"
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
          
        >
          <img src={previewImage || profileIcon} width="100px" height="100px" alt="" />
          <input
            type="file"
            style={{ marginLeft: "1em" }}
            onChange={(e) => {
             setImage(e.target.files[0])
              setPreviewImage(
                 URL.createObjectURL(e.target.files[0])
              )
            }}
          />
        </div>

        <div className="form-grp">
          <label htmlFor="firstName">First Name</label>
          <input
            className="input"
            type="text"
            id="firstName"
            required
            value={firstName}
            onChange={(e) => {
              dispatch(profileActions.setFirstName(e.target.value));
            }}
          />
          <div className="form-error"></div>
        </div>

        <div className="form-grp">
          <label htmlFor="lastName">Last Name</label>
          <input
            className="input"
            type="text"
            id="lastName"
            required
            value={lastName}
            onChange={(e) => {
              dispatch(profileActions.setLastName(e.target.value));
            }}
          />
          <div className="form-error"></div>
        </div>

        <div className="form-grp">
          <label htmlFor="phone">Phone</label>
          <input
            className="input"
            type="tel"
            id="phone"
            required
            value={phone}
            onChange={(e) => {
              dispatch(profileActions.setPhone(e.target.value));
            }}
          />
          <div className="form-error"></div>
        </div>

        <div className="form-grp">
          <label htmlFor="address">Address</label>
          <input
            className="input"
            type="text"
            id="address"
            required
            value={address}
            onChange={(e) => {
              dispatch(profileActions.setAddress(e.target.value));
            }}
          />
          <div className="form-error"></div>
        </div>

        <div className="form-grp">
          {" "}
          <div className="loading">{isLoading && <CircularProgress />}</div>
          <input type="submit" value="Save changes" className="btn btn-block" />
        </div>
      </form>
    </div>
  );
};

export default EditProfileContent;
