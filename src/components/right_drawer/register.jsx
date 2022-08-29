import { rightDrawerSlice } from "../../slices/right_drawer";
import { useDispatch, useSelector } from "react-redux";
import { registerSlice } from "../../slices/register";
import { CircularProgress } from "@material-ui/core";
import axios from "axios";
import { url } from "../../utils/url";
import { Row, Col } from "react-bootstrap";
import { registerUser } from "../../services/register_user";
import { TuneRounded } from "@material-ui/icons";
import { TermsAndsConditionsSlice } from "../../slices/terms_condition";
import { useState } from "react";

const Register = () => {
  const rightDrawerActions = rightDrawerSlice.actions;
  const registerActions = registerSlice.actions;
  const TermsAndsConditionsAction = TermsAndsConditionsSlice.actions;
  const { firstName, lastName, email, phone, address, password1, password2 } =
    useSelector((state) => state.register.inputValues);
  const [checked, setChecked] = useState(false);
  const {
    firstNameErr,
    lastNameErr,
    emailErr,
    phoneErr,
    addressErr,
    password1Err,
    password2Err,
  } = useSelector((state) => state.register.inputErrors);
  const isLoading = useSelector((state) => state.register.isLoading);
  const dispatch = useDispatch();

  const showRightDrawer = (type) => {
    dispatch(rightDrawerActions.showDrawer());
    dispatch(rightDrawerActions.setType(type));
    document.body.style.overflow = "hidden";
  };
  const hideRightDrawer = () => {
    dispatch(rightDrawerActions.hideDrawer());
  };
  const validate = (e) => {
    e.preventDefault();
    // Resetting input errors to default
    dispatch(registerActions.setFirstNameErr(""));
    dispatch(registerActions.setLastNameErr(""));
    dispatch(registerActions.setEmailErr(""));
    dispatch(registerActions.setPassword1Err(""));
    dispatch(registerActions.setPassword2Err(""));
    dispatch(registerActions.setPhoneErr(""));
    let isValid = true;

    if (firstName.length < 2) {
      dispatch(
        registerActions.setFirstNameErr(
          "First name must be atleast 2 characters!"
        )
      );
      isValid = false;
    }
    if (lastName.length < 2) {
      dispatch(
        registerActions.setLastNameErr(
          "Last name must be atleast 2 characters!"
        )
      );
      isValid = false;
    }
    if (phone.replaceAll(" ", "").length !== 12) {
      dispatch(registerActions.setPhoneErr("Invalid phone number"));
      isValid = false;
    }

    if (password1 !== password2) {
      dispatch(registerActions.setPassword2Err("Passwords must match!"));
      isValid = false;
    } else if (password1.length < 6) {
      dispatch(
        registerActions.setPassword1Err(
          "Password must be atleast 6 characters!"
        )
      );
      isValid = false;
    } else if (password2.length < 6) {
      dispatch(
        registerActions.setPassword2Err(
          "Password must be atleast 6 characters!"
        )
      );
      isValid = false;
    }
    if (isValid) {
      sendRequest();
    }
  };

  const handleClick = () => {
    console.log(checked);
    setChecked(!checked);
    console.log(checked);
  };

  const sendRequest = () => {
    let config = {
      headers: {
        "Content-type": "application/json",
        mode: "cors",
      },
    };

    dispatch(registerActions.setIsLoading(true));
    dispatch(registerActions.setRegistrationSuccessful(false));

    axios
      .post(
        `${url}user/registerUsers/`,
        {
          firstName: firstName,
          lastName: lastName,
          phone: phone.replaceAll(" ", ""),
          email: email,
          password: password1,
          address: address,
          agreeStatus: checked,
        },
        config
      )
      .then(
        (response) => {
          dispatch(registerActions.setIsLoading(false));

          if (response.data.success) {
            dispatch(rightDrawerActions.hideDrawer());
            dispatch(registerActions.setRegistrationSuccessful(true));
            document.body.style.overflow = "visible";
          } else if (response.data.errs) {
            if (response.data.errs === "email duplicated credentials!.") {
              dispatch(registerActions.setEmailErr("Email already exists"));
            }
          }
        },
        (error) => {
          console.log(error);
          dispatch(registerActions.setIsLoading(false));
        }
      );
  };

  return (
    <div className="register">
      <form onSubmit={validate}>
        <div className="form-grp">
          <label htmlFor="firstName">First Name</label>
          <input
            className="input"
            type="text"
            id="firstName"
            required
            value={firstName}
            onChange={(e) => {
              dispatch(registerActions.setFirstName(e.target.value));
            }}
          />
          <div className="form-error">{firstNameErr}</div>
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
              dispatch(registerActions.setLastName(e.target.value));
            }}
          />
          <div className="form-error">{lastNameErr}</div>
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
              dispatch(registerActions.setPhone(e.target.value));
            }}
          />
          <div className="form-error">{phoneErr}</div>
        </div>

        <div className="form-grp">
          <label htmlFor="email">Email</label>
          <input
            className="input"
            type="email"
            id="email"
            required
            value={email}
            onChange={(e) => {
              dispatch(registerActions.setEmail(e.target.value));
            }}
          />
          <div className="form-error">{emailErr}</div>
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
              dispatch(registerActions.setAddress(e.target.value));
            }}
          />
          <div className="form-error">{addressErr}</div>
        </div>
        <div className="form-grp">
          <label htmlFor="password1">Password</label>
          <input
            className="input"
            type="password"
            id="password1"
            value={password1}
            required
            onChange={(e) => {
              dispatch(registerActions.setPassword1(e.target.value));
            }}
          />
          <div className="form-error">{password1Err}</div>
        </div>
        <div className="form-grp">
          <label htmlFor="password2">Confirm Password</label>
          <input
            className="input"
            type="password"
            id="password2"
            required
            value={password2}
            onChange={(e) => {
              dispatch(registerActions.setPassword2(e.target.value));
            }}
          />
          <div className="form-error">{password2Err}</div>
        </div>
        <div className="login-bottom">
          <div className="login-bottom-item">
            <Row>
              <Col sm={1} lg={1} md={1}>
                <input
                  defaultChecked={false}
                  type="checkbox"
                  onClick={() => {
                    setChecked(!checked);
                    console.log(checked);
                  }}
                />
              </Col>
              <Col sm={10} lg={10} md={10}>
                <div
                  className="link"
                  onClick={() => {
                    dispatch(TermsAndsConditionsAction.showTermsAndCondition());
                    hideRightDrawer();
                  }}
                >
                  I agree with Terms and Conditions of Miso body works
                </div>
              </Col>
            </Row>
          </div>
        </div>

        <div className="form-grp">
          {" "}
          <div className="loading">{isLoading && <CircularProgress />}</div>
          <input
            type="submit"
            value="sign up"
            className="btn btn-block"
            disabled={!checked}
          />
        </div>
      </form>
      <div className="login-bottom">
        <div className="login-bottom-item">
          <div className="text">Already registered?</div>
          <div
            className="link"
            onClick={() => {
              showRightDrawer("login");
            }}
          >
            Login
          </div>
        </div>
      </div>
    </div>
  );
};
export default Register;
