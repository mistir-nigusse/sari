import { rightDrawerSlice } from "../../slices/right_drawer";
import { useDispatch, useSelector } from "react-redux";
import { loginSlice } from "../../slices/login";
import axios from "axios";
import { CircularProgress } from "@material-ui/core";
import { url } from "../../utils/url";
import { FacebookLoginButton } from "react-social-login-buttons";
import { GoogleLoginButton } from "react-social-login-buttons";
import { LinkedInLoginButton } from "react-social-login-buttons";
import { recoverPasswordSlice } from "../../slices/recover_password";

const Login = () => {
  const rightDrawerActions = rightDrawerSlice.actions;
  const loginActions = loginSlice.actions;
  const recoverPasswowrdActions = recoverPasswordSlice.actions;
  const dispatch = useDispatch();
  const { email, password } = useSelector((state) => state.login.inputValues);
  const { emailErr, passwordErr } = useSelector(
    (state) => state.login.inputErrors
  );
  const isLoading = useSelector((state) => state.login.isLoading);

  const showRightDrawer = (type) => {
    dispatch(rightDrawerActions.setType(type));
    dispatch(rightDrawerActions.showDrawer());
    document.body.style.overflow = "hidden";
  };

  const showRecoverPassword = () => {
    dispatch(rightDrawerActions.hideDrawer());
    dispatch(recoverPasswowrdActions.setIsOpen(true));
    document.body.style.overflow = "hidden";
  };

  const validate = (e) => {
    e.preventDefault();
    // Resetting input errors to default
    dispatch(loginActions.setPasswordErr(""));
    dispatch(loginActions.setEmailErr(""));

    let isValid = true;
    if (password.length < 6) {
      dispatch(
        loginActions.setPasswordErr("Password should be atleast 6 characters!")
      );
      isValid = false;
    }

    if (isValid) {
      requestLogin();
    }
  };
  const requestLogin = () => {
    dispatch(loginActions.setIsLoading(true));
    axios
      .post(`${url}login/`, {
        email: email,
        password: password,
      })
      .then(
        (response) => {
          if (response.data.emailFailure) {
            dispatch(loginActions.setEmailErr("Email address does not exist!"));
          } else if (response.data.passwordFailure) {
            dispatch(loginActions.setPasswordErr("Incorrect password!"));
          } else if (response.data.Notverified) {
            dispatch(loginActions.setEmailErr("Email address not verified !"));
          }
          if (response.data.data) {
            dispatch(rightDrawerActions.setType("profile"));
            localStorage.setItem("token", response.data.token);
            localStorage.setItem("user_id", response.data.data.user_id);
            dispatch(loginActions.setIsUserLogged(true));
            dispatch(loginActions.setLoggedUser(response.data.data));
          }
          dispatch(loginActions.setIsLoading(false));
        },
        (error) => {
          console.log(error);
          dispatch(loginActions.setIsLoading(false));
        }
      );
  };
  const googleAuth = () => {
    // window.location.href = ;

    window.open(`${url}auth/google`, "_blank").focus();
  };
  const facebookAuth = () => {
    window.open(`${url}auth/facebook`, "_blank").focus();
    // window.location.href = `${url}auth/facebook`;
  };
  const linkedinAuth = () => {
    window.open(`${url}auth/linkedin`, "_blank").focus();
    // window.location.href = `${url}auth/linkedin`;
  };
  return (
    <div className="login">
      <form onSubmit={validate}>
        <div className="form-grp">
          <label htmlFor="email">Email</label>
          <input
            className="input"
            type="email"
            id="email"
            required
            value={email}
            onChange={(e) => {
              dispatch(loginActions.setEmail(e.target.value));
            }}
          />
          <div className="form-error">{emailErr}</div>
        </div>
        <div className="form-grp">
          <label htmlFor="password">Password</label>
          <input
            className="input"
            type="password"
            id="password"
            required
            value={password}
            onChange={(e) => {
              dispatch(loginActions.setPassword(e.target.value));
            }}
          />
          <div className="form-error">{passwordErr}</div>
        </div>
        <div className="form-grp">
          {" "}
          <div className="loading">{isLoading && <CircularProgress />}</div>
          <input type="submit" value="sign in" className="btn btn-block" />
        </div>
      </form>
      <div className="login-bottom">
        <div className="login-bottom-item">
          <div className="text">New customer?</div>
          <div
            className="link"
            onClick={() => {
              showRightDrawer("register");
            }}
          >
            Create your account
          </div>
        </div>
        <div className="login-bottom-item">
          <div className="text">Lost password?</div>
          <div className="link" onClick={showRecoverPassword}>
            {" "}
            Recover password
          </div>
        </div>
      </div>
      <div className="login-with">
        <GoogleLoginButton
          style={{ margin: ".71em 0 ", width: "100%" }}
          size="40px"
          onClick={() => googleAuth()}
        />
        {/* <FacebookLoginButton
          style={{ margin: ".71em 0 ", width: "100%" }}
          size="40px"
          onClick={() => facebookAuth()}
        /> */}
        <LinkedInLoginButton
          style={{ margin: ".71em 0 ", width: "100%" }}
          size="40px"
          onClick={() => linkedinAuth()}
        />
      </div>
    </div>
  );
};
export default Login;
