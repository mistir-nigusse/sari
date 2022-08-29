import Dimmer from "./dimmer"
import ProductDetails from "./quick_view"
import Close from "@material-ui/icons/Close";
import { productSlice } from "../../slices/product";
import { useDispatch, useSelector } from "react-redux";
import ProductPage from "./quick_view";
import QuickView from "./quick_view";

// modal that shows the details of a certain product
const ProductModal = () => {
  const actions = productSlice.actions;
  const dispatch = useDispatch();

  const closeProductModal = () => {
    
    dispatch(actions.hideModal())
    document.body.style.overflow = "visible";

  }
    return (
        <>
        
        <Dimmer />
          <div className="product-modal">
            <div className="header">
              <div className="close-modal" onClick={closeProductModal}><Close /></div>
            
            </div>
           <QuickView/>
    
          </div>
    
          
        </>
    );
}

export default ProductModal;