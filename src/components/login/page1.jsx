import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginSlice } from "../../slices/login";
import ClipLoader from "react-spinners/ClipLoader";

import { CircularProgress } from "@material-ui/core";

import axios from "axios";
import { authSlice } from "../../slices/auth";
import { useAuth } from "../../auth/auth";
const Page1 = () => {
  const { phoneErr, passwordErr } = useSelector(
    (state) => state.login.inputErrors
  );
  const { phone, password } = useSelector((state) => state.login.inputValues);
  const loginLoading = useSelector((state) => state.login.loginLoading);
  const dispatch = useDispatch();
  const actions = loginSlice.actions;
 

  const phoneRef = useRef(null);
  const passwordRef = useRef(null);

  const isValidPhone = (phone) => {
    if (phone.length !== 13 && phone.length !== 10 && phone.length !== 9)
      return false;
    else return true;
  };
  const requestLogin = async () => {
    dispatch(actions.setLoginLoading(true));

    const response = await axios.post("http://localhost:4000/user/login", {
      phone: phone,
      password: password,
    });

   

    if (response.data.isLogged) {
      localStorage.setItem("user", JSON.stringify(response.data.token));
     
      dispatch(actions.hideModal());
    } else {
      if (response.data.error === "Incorrect password !") {
        dispatch(actions.setPasswordError("Incorrect password !"));
      } else if (response.data.error === "Phone number does not exist !")
        dispatch(actions.setPhoneError("Phone number does not exist !"));
    }
    dispatch(actions.setLoginLoading(false));
  };
 
  useAuth()
  const validateLogin = () => {
    // Resetting

    dispatch(actions.setPhoneError(""));
    dispatch(actions.setPasswordError(""));

    let isValid = true;

    if (password.length < 6) {
      dispatch(
        actions.setPasswordError("Password should be at least 6 characters!")
      );
      passwordRef.current.focus();
      isValid = false;
    }
    if (!isValidPhone(phone)) {
      dispatch(actions.setPhoneError("Invalid phone number!"));
      phoneRef.current.focus();
      isValid = false;
    }

    if (isValid) {
      requestLogin();
    }
  };

  return (
    <>
      <div className="form login-form">
        <div className="form-group">
          <label htmlFor="phone">Phone Number</label>

          <input
            type="text"
            id="phone"
            className="form-control"
            value={phone}
            onChange={(e) => {
              dispatch(actions.setPhone(e.target.value));
              if (phone.length > 1) dispatch(actions.setPhoneError(""));
            }}
            ref={phoneRef}
          />
          <div className="form-error" id="phone-err">
            {phoneErr}
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="text"
            id="lastname"
            className="form-control"
            value={password}
            onChange={(e) => {
              dispatch(actions.setPassword(e.target.value));
              if (password.length > 1) dispatch(actions.setPasswordError(""));
            }}
            ref={passwordRef}
          />
          <div className="form-error" id="password-err">
            {passwordErr}
          </div>
        </div>
        {loginLoading && (
          <div className="loading">
            <CircularProgress size="2rem"></CircularProgress>
          </div>
        )}

        <div className="form-group">
          <button className="btn btn-success btn-block" onClick={validateLogin}>
            Log In
          </button>
        </div>
      </div>
    </>
  );
};

export default Page1;
