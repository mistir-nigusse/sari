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
const ImageGallery = ({ productId }) => {
  const upIcon = <FontAwesomeIcon icon={faCaretUp} size={"lg"} />;
  const downIcon = <FontAwesomeIcon icon={faCaretDown} size={"lg"} />;
  const leftIcon = <FontAwesomeIcon icon={faCaretLeft} size={"lg"} />;
  const rightIcon = <FontAwesomeIcon icon={faCaretRight} size={"lg"} />;
  const imageGalleryRef = useRef()
  // const mobileView = useMediaQuery({ query: "(max-width: 576px)" });
  const mobileView = true;
  const productActions = productSlice.actions;
  const activeImageUrl = useSelector((state) => state.product.activeImageUrl);
  const dispatch = useDispatch();
  const productImages = useSelector((state) => state.product.images);
  const pageClicked = useSelector((state) => state.product.pageClicked);


  const scrollImagesTop = () => {
    document.querySelector(".all-images-inner").scrollTop -= 70;
  };
  const scrollImagesDown = () => {
    document.querySelector(".all-images-inner").scrollTop += 70;
  };
  const scrollImagesLeft = () => {
    document.querySelector(".all-images-inner").scrollLeft -= 70;
  };
  const scrollImagesRight = () => {
    document.querySelector(".all-images-inner").scrollLeft += 70;
  };

  return (
    <div
      className={mobileView ? "image-gallery-mobile" : "image-gallery-mobile"}
    >
      <div className={mobileView ? "all-images-mobile" : "all-images-mobile"}>
        {productImages.length > 4 && (
          <div
            className="scroll-btn"
            onClick={mobileView ? scrollImagesLeft : scrollImagesTop}
          >
            {" "}
            {mobileView ? leftIcon : upIcon}
          </div>
        )}

        <div  className="all-images-inner">
          {productImages.length === 0
            ? ""
            : productImages.map((item) => (
                <div
                  className="image-item "
                  onClick={() => {
                    dispatch(
                      productActions.setActiveImageUrl(
                        `${url}images/${item.product_image}`
                      )
                    );
                  }}
                >
                 
                  <img
                    src={`${url}images/${item.product_image}`}
                    alt=""
                    className={mobileView ? "" : "img-fluid"}
                  />
                </div>
              ))}
        </div>
        {productImages.length > 4 && (
          <div
            className="scroll-btn"
            onClick={mobileView ? scrollImagesRight : scrollImagesDown}
          >
            {" "}
            {mobileView ? rightIcon : downIcon}
          </div>
        )}
      </div>
      <div className="active-image">
        {" "}
        {activeImageUrl ? (
          <SideBySideMagnifier
            imageSrc={activeImageUrl}
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
    </div>
  );
};

export default ImageGallery;
