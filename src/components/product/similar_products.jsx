import axios from "axios";
import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { url, url2 } from "../../utils/url";
import { Product } from "../products/product";
import { useDispatch, useSelector } from "react-redux";
const SimilarProducts = ({ categorieName ,id}) => {
  const [similarProducts, setSimilarProducts] = useState([]);
  let a = [];
console.log(categorieName);
  useEffect(() => {
    axios.get(`${url2}user-view-product`).then(
      (response) => {
        console.log(response);
        setSimilarProducts(response.data.products);
      },
      (error) => {
        console.log(error);
      }
    );
  }, [categorieName]);
const remaningProduct = similarProducts.filter(
  (item) => item.id != id
);
  return (
    <div className="similar-products">
      <div className="header">products</div>
      <div className="content">
        <Row>
          {remaningProduct.map((item) => {
            return (
              <Col xs={6} sm={4} md={4} xl={3}>
                <Product details={item} image={item.ProductImages} />
              </Col>
            );
          })}
          {/* <Col xs={6} sm={4} md={3} xl={2}>
            <Product details={product} />
          </Col>
          <Col xs={6} sm={4} md={3} xl={2}>
            <Product details={product} />
          </Col>
          <Col xs={6} sm={4} md={3} xl={2}>
            <Product details={product} />
          </Col>
          <Col xs={6} sm={4} md={3} xl={2}>
            <Product details={product} />
          </Col>
          <Col xs={6} sm={4} md={3} xl={2}>
            <Product details={product} />
          </Col>
          <Col xs={6} sm={4} md={3} xl={2}>
            <Product details={product} />
          </Col>
          <Col xs={6} sm={4} md={3} xl={2}>
            <Product details={product} />
          </Col> */}
        </Row>
      </div>
    </div>
  );
};
export default SimilarProducts;
