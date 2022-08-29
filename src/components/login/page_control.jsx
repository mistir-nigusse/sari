import { useDispatch, useSelector } from "react-redux";
import { registerSlice } from "../../slices/register";

const PageControl = ({ nextPageFunc }) => {
  const dispatch = useDispatch();
  const actions = registerSlice.actions;
  const currentPage = useSelector((state) => state.register.currentPage);
  const registrationSuccessful = useSelector(
    (state) => state.register.registrationSuccessful
  );

  const prevPage = () => {
    dispatch(actions.prevPage());
  };

  return (
    <>
      {currentPage === 1 ? (
        <div className="page-control page-control-1">
          <button className="btn btn-primary" onClick={nextPageFunc}>
            Next
          </button>
        </div>
      ) : currentPage === 4 && !registrationSuccessful ? (
        <div className="page-control">
          <button className="btn btn-primary" onClick={prevPage}>
            Back
          </button>
          <button className="btn btn-success" onClick={nextPageFunc}>
            Register
          </button>
        </div>
      ) : currentPage === 4 && registrationSuccessful ? (
        <div className="page-control page-control-1">
          <button className="btn btn-success" onClick={nextPageFunc}>
            Close
          </button>{" "}
        </div>
      ) : (
        <div className="page-control">
          <button className="btn btn-primary" onClick={prevPage}>
            Back
          </button>
          <button className="btn btn-primary" onClick={nextPageFunc}>
            Next
          </button>
        </div>
      )}
    </>
  );
};

export default PageControl;
