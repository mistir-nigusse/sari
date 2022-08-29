import axios from "axios";
import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { Product, ProductHorizontal } from "./product";
import { productsSlice } from "../../slices/products";
import Sidead from '../../images/info-ad.jpg'
import { useDispatch, useSelector } from "react-redux";
import { url } from "../../utils/url";
import Loading from "../loading/loading";
import { useMediaQuery } from "react-responsive";
import carosuelImage from "../../images/carosuel.jpg";
import UserRequest from "./request";
export const Products = () => { 
   const productsActions = productsSlice.actions;
const dispatch=useDispatch();
  const [isLoading, setIsloading] = useState(true);
  const { viewProduct, viewAllProduct } = UserRequest();
  const md = useMediaQuery({ query: "(max-width: 576px)" });
  const [products, setProducts] = useState([]);
  useEffect(() => {
    viewAllProduct().then((data) => {
      if (data.products) {
        setProducts(data.products);
        setIsloading(false);
           dispatch(productsActions.setProducts(data.products));
      }
    });
  }, []);

  return (
    // {isLoading ? :  }
    <div>
      <div className="products">
        <div className="products-title">Latest Products</div>
        {isLoading ? (
          <Loading
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "8em 0",
            }}
          />
        ) : (
          <>
            <div className={md? "products-content-mobile": "products-content"}>
              <Row>
                {products.length === 0
                  ? ""
                  : products.map((product) => {
                      return (
                        <Col key={product.id} xs={6} sm={4} md={4} xl={3}>
                          <Product
                            image={product.ProductImages}
                            details={product}
                          />
                        </Col>
                      );
                    })}
              </Row>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
