import axios from "axios";
import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerSlice } from "../../slices/register";
import PageControl from "./page_control";
import ClipLoader from "react-spinners/ClipLoader";

const Page2 = () => {
  const { phoneErr } = useSelector((state) => state.register.inputErrors);
  const { phone } = useSelector((state) => state.register.inputValues);
  const isValidPhone = useSelector((state) => state.register.isValidPhone);
  const checkingPhone = useSelector(state => state.register.checkingPhone)
  const phoneExists = useSelector(state => state.register.phoneExists)
  
  const dispatch = useDispatch();
  const actions = registerSlice.actions;

  

  const phoneRef = useRef(null);

  useEffect(() => {
    if(isValidPhone) {
        checkPhone()
    }
  }, [isValidPhone]);

//   useEffect(() => {
//     dispatch(actions.setPhoneError(''))
//     if(checkingPhone) {
//         dispatch(actions.setPhoneError('Phone number already registered!'))
//     }
//   }, [checkingPhone]);

  const checkPhone = async () => {
    
    
    dispatch(actions.setCheckingPhone(true));
     setTimeout(() => {},3000)
    const phnExists = await axios.post(
      "http://localhost:4000/user/checkphone",
      { phone: phone }
    );
    dispatch(actions.setCheckingPhone(false));
    if(phnExists.data) {
        dispatch(actions.setPhoneExists(true))
        dispatch(actions.setPhoneError('Phone number already registered!'))
    }
    else {
      dispatch(actions.setPhoneExists(false))
    }
     
  };
  //   const isValidPhone = (phone) => {
  //     if (phone.length !== 13 && phone.length !== 10 && phone.length !== 9)
  //       return false;
  //     else return true;
  //   };

  const nextPage = () => {
    // Resetting

 
    

   

    if(checkingPhone ) {
      return;
    }
    let isValid = true;
  
    if (!isValidPhone) {
      dispatch(actions.setPhoneError("Invalid phone number!"));
      phoneRef.current.focus();
      isValid = false;
    }
    
    if (phoneExists) {
     
      phoneRef.current.focus();
      isValid = false;
    }

    if (isValid) dispatch(actions.nextPage());
  };

  return (
    <>
      <div className="form">
        <div className="form-group">
          <label htmlFor="phone">Enter your phone number</label>
          <input
            type="tel"
            id="phone"
            className="form-control"
            value={phone}
            onChange={(e) => {
              dispatch(actions.setPhoneExists(null));
              dispatch(actions.setPhoneError(''))
              dispatch(actions.setPhone(e.target.value));

            }}
            ref={phoneRef}
          />

          {checkingPhone && <div className="loading">
          <ClipLoader  loading={true} css={'width:2em;height:2em;'}></ClipLoader>
          
          </div>}

          
          <div className="form-error" id="phone-err">
            {phoneErr}
          </div>
        </div>
      </div>
      <PageControl nextPageFunc={nextPage} />
    </>
  );
};

export default Page2;
