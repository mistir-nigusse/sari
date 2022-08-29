import axios from "axios";
import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { url, url2 } from "../../utils/url";
import Loading from "../loading/loading";
import { Product } from "../products/product";

const Products = ({ query }) => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setLoading(true);

    axios.get(`${url2}user-view-productByName/${query}`).then(
      (response) => {
        setLoading(false);
        if (response.data.products) {
          setProducts(response.data.products);
        }
        console.log(response);
      },
      (error) => {}
    );
  }, [query]);

  return (
    <div className="search-products">
      {loading ? (
        <Loading style={{ padding: "8em" }} />
      ) : products.length === 0 ? (
        <div
          className=""
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "8em 0",
          }}
        >
          No products found!
        </div>
      ) : (
        <Row>
          {products.map((item) => {
            return (
              <Col xs={6} sm={4} md={4} xl={3}>
                <Product image={item.ProductImages} details={item} />
              </Col>
            );
          })}
        </Row>
      )}
    </div>
  );
};
export default Products;
