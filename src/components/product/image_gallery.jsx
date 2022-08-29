import axios from "axios";
import { useEffect, useRef } from "react";
import Skeleton from "react-loading-skeleton";
import { useDispatch, useSelector } from "react-redux";
import productImg from "../../icons/product.svg";
import { productSlice } from "../../slices/product";
import { url } from "../../utils/url";
import {
  faCaretUp,
  faCaretDown,
  faCaretLeft,
  faCaretRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useMediaQuery } from "react-responsive";
import {
  Magnifier,
  GlassMagnifier,
  SideBySideMagnifier,
  PictureInPictureMagnifier,
  MOUSE_ACTIVATION,
  TOUCH_ACTIVATION,
} from "react-image-magnifiers";
const ImageGallery = ({ productImage }) => {
console.log(productImage)
  // const mobileView = useMediaQuery({ query: "(max-width: 576px)" });
  const mobileView = true;


  return (
    <div
      className={mobileView ? "image-gallery-mobile" : "image-gallery-mobile"}
    >
    {
      productImage.map((item)=>(

      
      <div className="active-image">
        {" "}
        {item ? (
          <SideBySideMagnifier
            imageSrc={item.imageURI}
            imageAlt="Example"
            alwaysInPlace={true}
            //  largeImageSrc={activeImageUrl} // Optional
          />
        ) : (
          // <img className="img-fluid" src={activeImageUrl} alt="" />
          <Skeleton
            style={{
              position: "relative",
              width: "100%",
              height: "0",
              paddingBottom: "100%",
            }}
          />
        )}
      </div>
      ))
}
    </div>
  );
};

export default ImageGallery;
