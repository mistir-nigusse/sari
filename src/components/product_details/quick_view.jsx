import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { productSlice } from "../../slices/product";
import Details from "./details";
import ImageGallery from "./image_gallery";
import { useMediaQuery } from "react-responsive";
import axios from "axios";
import { url } from "../../utils/url";
import Loading from "../loading/loading";
const QuickView = (props) => {
  const productActions = productSlice.actions;
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product.product);
  const [colorArr, setColorArr] = useState([]);
  const [sizeArr, setSizeArr] = useState([]);
  const [detailsLoading, setDetailsLoading] = useState(false);
  const [imagesLoading, setImagesLoading] = useState(false);
  const productImages = useSelector((state) => state.product.images);

  useEffect(() => {
    // alert(location)
    setDetailsLoading(true);
    setImagesLoading(true);

    // dispatch(productActions.reset());
    window.scrollTo(0, 0);
    axios.get(`${url}product/getProduct/${product.id}`).then(
      (response) => {
        if (response.data) {
          setDetailsLoading(false);
          let product = response.data;
          let colors = response.data.color.split(",");
          setColorArr(colors);
          let sizes = response.data.size.split(",");
          setSizeArr(sizes);
          dispatch(productActions.setProduct(product));
        }
      },
      (error) => {
        console.log(error);
      }
    );

    dispatch(productActions.setActiveImageUrl(""));
    dispatch(productActions.setImages([]));

    axios.get(`${url}user/getProductImages/${product.id}`).then(
      (response) => {
        setImagesLoading(false);
        if (response.data.productImages.length > 0) {
          dispatch(
            productActions.setActiveImageUrl(
              `${url}images/${response.data.productImages[0].product_image}`
            )
          );
          dispatch(productActions.setImages(response.data.productImages));
        }
      },
      (error) => {}
    );
    if (productImages.length > 0) {
      dispatch(
        productActions.setActiveImageUrl(
          `${url}images/${productImages[0].product_image}`
        )
      );
    }
  }, []);

  return (
    <div className="product-page">
      {detailsLoading || imagesLoading ? (
        <Loading style={{ padding: "10em" }} />
      ) : (
        <>
          <Row>
            <Col md={6} style={{ justifyContent: "center" }}>
              <div className="images">
                <ImageGallery productId={product.id} />
              </div>
            </Col>
            <Col
              md={6}
              style={{
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div
                className="details"
                style={{
                  width: "100%",
                  margin: "auto",
                }}
              >
                <Details colorArr={colorArr} sizeArr={sizeArr} />
              </div>
            </Col>
          </Row>
        </>
      )}
    </div>
  );
};

export default QuickView;
