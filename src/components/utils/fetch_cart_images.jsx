import { useEffect} from "react";
import { url } from "../../utils/url";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { cartSlice } from "../../slices/cart";


const FetchCartImages = () => {
    const cartActions = cartSlice.actions;
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cart.cartItems);
    useEffect(() => {
    fetchCartImages();
  },[]);

  const fetchCartImages = () => {
    cartItems.forEach((item) => {
        let productImage = "";
        axios.get(`${url}user/getProductImages/${item.product.id}`).then(
          (response) => {
            if (response.data.productImages.length > 0) {
              productImage = `${url}images/${response.data.productImages[0].product_image}`;
              dispatch(
                cartActions.addProductImage({
                  product_id: item.product.id,
                  product_image: productImage,
                })
              );
            }
          },
          (error) => {
            dispatch(
              cartActions.addProductImage({
                product_id: item.product.id,
                product_image: productImage,
              })
            );
          }
        );
      });
  };

  return <></>;
};

export default FetchCartImages;
