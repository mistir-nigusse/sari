
import { Carousel } from 'react-bootstrap';
import carouselImg1 from "../../images/sa2.jpg";
import carouselImg2 from "../../images/sa3.jpg";
import carouselImg3 from '../../images/carousel3.jpg'
import carouselImg4 from '../../images/carousel4.jpg'
const HomeCarousel = () => {
  return (
    <div className="home-carousel">
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={carouselImg1}
            style={{ height: "460px" }}
            alt="First slide"
          />
          {/* <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={carouselImg2}
            style={{ height: "460px" }}
            alt="Second slide"
          />
          {/* <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption> */}
        </Carousel.Item>
   
      </Carousel>
    </div>
  );
};
export default HomeCarousel;
