import { useDispatch } from "react-redux";
import { productSlice } from "../../slices/product";

const Dimmer = () => {
  const dispatch = useDispatch();
const productActions = productSlice.actions;

  return (
    <div
      className="dimmer"
      onClick={() => {
        dispatch(productActions.hideModal());
        document.body.style.overflow = 'visible';
      }}
    ></div>
  );
};
export default Dimmer;