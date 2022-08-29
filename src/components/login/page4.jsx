import axios from "axios";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerSlice } from "../../slices/register";
import PageControl from "./page_control";
import ClipLoader from "react-spinners/ClipLoader";

const Page4 = () => {
  const { firstName, lastName, phone, password1 } = useSelector(
    (state) => state.register.inputValues
  );
  const { registrationLoading, registrationSuccessful } = useSelector(
    (state) => state.register
  );

  const dispatch = useDispatch();
  const actions = registerSlice.actions;

  const register = async () => {
    dispatch(actions.setRegistrationLoading(true));

    const response = await axios.post("http://localhost:4000/user/register", {
      firstName: firstName,
      lastName: lastName,
      phone: phone,
      password: password1,
    });
   

    dispatch(actions.setRegistrationLoading(false));

    if (response.data.auth) {
      localStorage.setItem('user',JSON.stringify(response.data.token))
      
      dispatch(actions.setRegistrationSuccessful(true))
      dispatch(actions.resetRegistration())
    } else {
    }
  };

  return registrationSuccessful ? (
    <>
    <div className="success-message p-2"><div className="p-4 alert alert-success">
  <strong>Registration Successful! </strong> <div className="py-3">Please log in to get into the site.</div> 
  <div className="pt-3 login-button-div"><button className=" login btn btn-primary">Log In</button></div>
</div></div>


<PageControl />
    </>
  ) : (
    <>
      <div className="form result">
        <ul className="list-group">
          <li className="list-group-item result-item">
            <div className="result-title">Full Name:</div>
            <div className="result-value">
              {firstName} {lastName}
            </div>
          </li>
          <li className="list-group-item result-item">
            {" "}
            <div className="result-title">Phone: </div>
            <div className="result-value">{phone} </div>
          </li>
        </ul>
        {registrationLoading && (
          <div className="loading">
            <ClipLoader
              loading={true}
              css={"width:2em;height:2em;"}
            ></ClipLoader>
          </div>
        )}
      </div>
      <PageControl nextPageFunc={register} />
    </>
  );
};

export default Page4;
