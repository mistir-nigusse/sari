import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerSlice } from "../../slices/register";
import PageControl from "./page_control";


const Page3 = () => {
  const { password1Err, password2Err } = useSelector(
    (state) => state.register.inputErrors
  );
  const { password1, password2 } = useSelector(
    (state) => state.register.inputValues
  );
  const dispatch = useDispatch();
  const actions = registerSlice.actions;
  
  const password1Ref = useRef(null);
  const password2Ref = useRef(null);

  const nextPage = () => {

    // Resetting

    dispatch(
      actions.setPassword1Error("")
    );
    dispatch(
      actions.setPassword2Error("")
    );
   

    let isValid = true;

    if (password1.length < 6) {
      dispatch(
        actions.setPassword1Error("Password should be at least 6 characters!")
      );
      password1Ref.current.focus();
      isValid = false;
    }
    else if (password2.length < 6) {
        dispatch(
          actions.setPassword2Error("Password should be at least 6 characters!")
        );
        password2Ref.current.focus();
        isValid = false;
      }
    else if (password1 !== password2) {
        dispatch(
            actions.setPassword2Error("Passwords do not match")
          );
          password2Ref.current.focus();
          isValid = false;
    }

  
    if (isValid) dispatch(actions.nextPage());
  };

  return (
    <>
      <div className="form">
        <div className="form-group">
          <label htmlFor="password1">Password</label>
          <input
            type="password"
            id="password1"
            className="form-control"
            value= {
              password1
            } 
            onChange={(e) => {
              dispatch(actions.setPassword1(e.target.value))
            
              dispatch(
                
                actions.setPassword1Error("")
              );
            }}
            ref={password1Ref}
          />
          <div className="form-error" id="password1-err">
            {password1Err}
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="password2">Confirm Password</label>
          <input
            type="password"
            id="password2"
            className="form-control"
            value= {
              password2
            } 
            onChange={(e) => {
              dispatch(actions.setPassword2(e.target.value))
             
              dispatch(
                
                actions.setPassword2Error("")
              );
            }}
            ref={password2Ref}
          />
          <div className="form-error" id="password2-err">
            {password2Err}
          </div>
        </div>
      </div>
      <PageControl nextPageFunc={nextPage} />
    </>
  );
};

export default Page3;
