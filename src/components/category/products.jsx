import axios from "axios";
import { useEffect,useState } from "react";
import { Col, Row } from "react-bootstrap";
import { Product, ProductHorizontal } from "../products/product";
import { productsSlice } from "../../slices/products";
import { useDispatch, useSelector } from "react-redux";
import { url, url2 } from "../../utils/url";
import { categorySlice } from "../../slices/category";
import Loading from "../loading/loading";
import { useParams } from "react-router-dom";
const Products = ({ category }) => {
   let { id } = useParams();
  const activeColumn = useSelector((state) => state.category.activeColumn);
  let span = 12;
  const categoryActions = categorySlice.actions;
  const dispatch = useDispatch();
  const activeCategoryId = useSelector(
    (state) => state.category.activeCategoryId
  );

  switch (activeColumn) {
    case 1:
      span = 12;
      break;
    case 2:
      span = 6;
      break;
    case 3:
      span = 4;
      break;
    case 4:
      span = 3;
      break;
    case 5:
      span = 6;
      break;
    case 6:
      span = 2;
      break;
  }
const[products,setProducts]=useState([])
const[areProductsLoading,setareProductsLoading]=useState(true)
  useEffect(() => {
 
    axios.get(`${url2}user-view-productByCategorie/${category}`).then(
      (response) => {
        console.log(response);
        setProducts(response.data.products);
        setareProductsLoading(false)
      },
      (error) => {
        console.log(error);
      }
    );
  }, [activeCategoryId,category]);


  return (
    <div className="categorical-products">
      {areProductsLoading ? (
        <Loading  style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "8em 0",
        }}/>
      ) : (
        <Row>
         {products.length === 0 ? (
            <div className="no-products py-5">
              <h1 className="pb-5">No products found in this category!</h1>
            </div>
          ) : (
            products.map((product) => {
              return (
                <Col key={product.id} xs={6} sm={4} md={4} xl={3}>
                  <Product
                    image={product.ProductImages}
                    name={product.name}
                    price={product.rice}
                    details={product}
                    products={products}
                  />
                </Col>
              );
            })
          )}
          {/* <Col xs={span}>
            <Product />
          </Col>
          <Col xs={span}>
            <Product />
          </Col>
          <Col xs={span}>
            <Product />
          </Col>
          <Col xs={span}>
            <Product />
          </Col>
          <Col xs={span}>
            <Product />
          </Col>
          <Col xs={span}>
            <Product />
          </Col>
          <Col xs={span}>
            <Product />
          </Col>
          <Col xs={span}>
            <Product />
          </Col>
          <Col xs={span}>
            <Product />
          </Col>
          <Col xs={span}> */}
          {/* <Product />
          </Col> */}
        
        </Row>
      )}
    </div>
  );
};

export default Products;
