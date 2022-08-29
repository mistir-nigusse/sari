import SearchOutlined from "@material-ui/icons/SearchOutlined";
import { useDispatch, useSelector } from "react-redux";
import { searchSlice } from "../../slices/search";
import img from "../../images/product3.jpg";
import axios from "axios";
import { url } from "../../utils/url";
import { useEffect } from "react";
import { Product, ProductHorizontal } from "../products/product";
import { Col } from "react-bootstrap";
import { productSlice } from "../../slices/product";
import { rightDrawerSlice } from "../../slices/right_drawer";

const Search = () => {
  const dispatch = useDispatch();
  const searchActions = searchSlice.actions;
  const text = useSelector((state) => state.search.text);
  const products = useSelector((state) => state.search.products);
  const productActions = productSlice.actions;
  const rightDrawerActions = rightDrawerSlice.actions;

  useEffect(() => {
    if (text) {
      dispatch(searchActions.setIsLoading(true));
      dispatch(searchActions.setProducts([]));
      axios.get(`${url}user/searchProducts/${text}`).then(
        (response) => {
          dispatch(searchActions.setIsLoading(false));

          dispatch(searchActions.setProducts(response.data.products));
        },
        (error) => {}
      );
    } else {
      dispatch(searchActions.setProducts([]));
    }
  }, [text]);

  useEffect(() => {
    products.forEach((product) => {
      axios.get(`${url}user/getProductImages/${product.id}`).then(
        (response) => {
          // dispatch(productsActions.setIsLoading(false));
          // dispatch(productsActions.setProducts(response.data.products));
          ;
          dispatch(
            searchActions.addProductImages({
              productId: product.id,
              productImages: response.data.productImages,
            })
          );
        },
        (error) => {}
      );
    });
  }, [products]);

  const hideDrawer = () => {
    dispatch(rightDrawerActions.hideDrawer());
    document.body.style.overflow = "visible";
  };

  const openProduct = () => {
    hideDrawer();
    dispatch(productActions.togglePageClicked());
  };

  return (
    <div className="search">
      <div className="search-inner">
        <input
          type="text"
          value={text}
          onChange={(e) => {
            dispatch(searchActions.setText(e.target.value));
          }}
        />
        <div className="search-btn">
          {" "}
          <SearchOutlined />
        </div>
      </div>

      <div className="search-results">
        <div className="search-results-header">Search results :</div>
        <div className="search-results-content">
          {products.length === 0
            ? ""
            : products.map((product) => (
                <Product
                  onclick={openProduct}
                  link={`/product/${product.id}`}
                  vertical={false}
                  details={product}
                />
              ))}
        </div>
      </div>
    </div>
  );
};
export default Search;
