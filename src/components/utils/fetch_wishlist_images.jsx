import { useEffect} from "react";
import { url } from "../../utils/url";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { cartSlice } from "../../slices/cart";
import { wishlistSlice } from "../../slices/wishlist";


const FetchWishlistImages = () => {
    const wishlistActions = wishlistSlice.actions;
    const dispatch = useDispatch();
    const products = useSelector((state) => state.wishlist.products);
    useEffect(() => {
    fetchWishlistImages();
  },[]);

  const fetchWishlistImages = () => {
    products.forEach((item) => {
        let productImage = "";
        axios.get(`${url}user/getProductImages/${item.id}`).then(
          (response) => {
            if (response.data.productImages.length > 0) {
              productImage = `${url}images/${response.data.productImages[0].product_image}`;
              dispatch(
                wishlistActions.addProductImage({
                  product_id: item.id,
                  product_image: productImage,
                })
              );
            }
          },
          (error) => {
            dispatch(
              wishlistActions.addProductImage({
                product_id: item.id,
                product_image: productImage,
              })
            );
          }
        );
      });
  };

  return <></>;
};

export default FetchWishlistImages;
