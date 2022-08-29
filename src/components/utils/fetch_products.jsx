import axios from "axios";
import { useEffect } from "react";
import { productsSlice } from "../../slices/products";
import { useDispatch, useSelector } from "react-redux";
import { url } from "../../utils/url";


const FetchProducts = () => {
    const productsActions = productsSlice.actions;
    const productImages = useSelector((state) => state.products.productImages);
    const isLoading = useSelector((state) => state.products.isLoading);
    const dispatch = useDispatch();

    
  useEffect(() => {
    dispatch(productsActions.setIsLoading(true));
    axios.get(`${url}user/getAllProducts/0`).then(
      (response) => {
        //
console.log(response)
        dispatch(productsActions.setIsLoading(false));
        if (response.data.products)
          dispatch(productsActions.setProducts(response.data.products));
      },
      (error) => {}
    );
  }, []);

  const products = useSelector((state) => state.products.products);
  useEffect(() => {
    products.forEach((product) => {
      axios.get(`${url}user/getProductImages/${product.id}`).then(
        (response) => {
          // dispatch(productsActions.setIsLoading(false));
          // dispatch( productsActions.setProducts(response.data.products));

          dispatch(
            productsActions.addProductImages({
              productId: product.id,
              productImages: response.data.productImages,
            })
          );
        },
        (error) => {}
      );
    });
  }, [products]);

    return ''

}
export default FetchProducts;