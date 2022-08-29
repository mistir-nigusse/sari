import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { productSlice } from "../../slices/product";
import { Product } from "../products/product";
import Categories from "./categories";
import Description from "./description";
import Details from "./details";
import ImageGallery from "./image_gallery";
import Review from "./review";
import SimilarProducts from "./similar_products";
import { useMediaQuery } from "react-responsive";
import axios from "axios";
import { url, url2 } from "../../utils/url";
import Loading from "../loading/loading";
import { useLocation } from "react-router-dom";
import { useParams } from "react-router-dom";
const ProductPage = (props) => {
  const{id}=useParams();
  const tabletView = useMediaQuery({ query: "(min-width: 970px)" });
  const productActions = productSlice.actions;
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product.product);
const location = useLocation();
const route = location.state;
console.log(route)
  const pageClicked = useSelector((state) => state.product.pageClicked);
  const [colorArr, setColorArr] = useState([]);
  const [sizeArr, setSizeArr] = useState([]);
  const [detailsLoading, setDetailsLoading] = useState(false);
  const[productDetail,setProductDetail]=useState('')
  const[productImage,setProductImage]=useState([])
  const [imagesLoading, setImagesLoading] = useState(false);
  const productImages = useSelector((state) => state.product.images);

  useEffect(() => {
    // alert(location)
    setDetailsLoading(true);
    setImagesLoading(true);
    dispatch(productActions.reset());
    window.scrollTo(0, 0);
    axios.get(`${url2}user-view-productById/${id}`).then(
      (response) => {
        console.log(response);
        setProductDetail(response.data.product)
        setProductImage(response.data.product.ProductImages);
           setImagesLoading(false);
              setDetailsLoading(false);
      },
      (error) => {
        console.log(error);
      }
    );

 
  }, []);
console.log(productDetail.categoryName);
  return (
    <div className="product-page">
      {detailsLoading || imagesLoading ? (
        <Loading style={{ padding: "8em" }} />
      ) : (
        <Row>
          {tabletView && (
            <Col md={2} style={{ justifyContent: "center" }}></Col>
          )}

          <Col md={6} style={{ justifyContent: "center" }}>
            <div className="images">
              <ImageGallery productImage={productImage} />
            </div>
          </Col>
          <Col
            md={!tabletView ? 6 : 4}
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
              <Details Product={productDetail} />
            </div>
          </Col>
        </Row>
      )}

      <SimilarProducts categorieName={productDetail.categoryName} id={id} />
    </div>
  );
};

export default ProductPage;
