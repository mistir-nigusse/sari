import { Col, Row } from "react-bootstrap"
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img from '../../images/product2.jpg'
import Details from "./details";
import ImageGallery from "./image_gallery";

// a component that displays a product detail
const ProductDetails = () => {
    
    return <div className="product-details">
       <Row>
           <Col md = {6}>
               <div className="images">

             <ImageGallery/>
               </div>
           </Col>
           <Col md = {6}>
               <div className="details">
                   <Details/>
               </div>
           </Col>
       </Row>
    </div>

}
export default ProductDetails;