import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { url } from "../../utils/url";
import { Link } from "react-router-dom";
import { rightDrawerSlice } from "../../slices/right_drawer";
import { useDispatch, useSelector } from "react-redux";
import { wishlistSlice } from "../../slices/wishlist";
import axios from "axios";
import { toast } from "react-toastify";
import FetchWishlistImages from "../utils/fetch_wishlist_images";
import Skeleton from "react-loading-skeleton";

const Wishlist = () => {
  const productImages = useSelector((state) => state.wishlist.productImages);
  const wishlistIcon = <FontAwesomeIcon icon={faHeart} size="5x" />;
  const products = useSelector((state) => state.wishlist.products);
  const removeIcon = <FontAwesomeIcon icon={faTrashAlt} />;
  const rightDrawerActions = rightDrawerSlice.actions;
  const wishlistActions = wishlistSlice.actions;
  const isUserLogged = useSelector(state => state.login.isUserLogged)
  const dispatch = useDispatch();

  const hideDrawer = () => {
    dispatch(rightDrawerActions.hideDrawer());
    document.body.style.overflow = "visible";
  };

  const removeProduct = (id) => {
    dispatch(wishlistActions.removeProduct(id))
  }

  const saveWishlist = () => {

    
    if(!isUserLogged) {
      toast.info("Log in or register to save your wishlists! ", {
        position: "top-left",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    }
  
    const userId = localStorage.getItem("user_id");
    const wishlistItemsForDb = [];
    

    products.forEach((item) => {
      wishlistItemsForDb.push({
        user_id: parseInt(userId),
        product_id: item.id,
      });
    });

    // dispatch(cartActions.setSavingCart(true));

    axios.post(`${url}user/createWishlist`, wishlistItemsForDb).then(
      (response) => {
        if (response.data.success) {
          toast.success("Wishlist saved successfully ", {
            position: "top-left",
            autoClose: 2000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        }
        // dispatch(cartActions.setSavingCart(false));
        ;
      },
      (error) => {
        console.log(error);
      }
    );
  };

  

  return (
    <>
    <FetchWishlistImages/>
    <div className="mini-wishlist">
      {products.length === 0 ? (
        <>
          {" "}
          <div className="icon">{wishlistIcon}</div>
          <div className="text">Your wishlist is empty</div>
        </>
      ) : (
        <div className="wishlist-list">
          {products.map((product) => {
             let productImage = "";
             productImages.forEach((item) => {
               if (item.product_id === product.id)
                 productImage = item.product_image;
             });
             
            return (
              <div className="wishlist-item">
                <div className="left">
                {productImage ? (
                        <img className="img-fluid" src={productImage} alt="" />
                      ) : (
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
                <div className="right">
                  <div className="product-title">{product.Name}</div>
                  <div className="price">{product.Price + " birr"}</div>

                  <div
                    className="remove icon"
                    onClick={() => {
                      removeProduct(product.id);
                    }}
                  >
                    {removeIcon}
                  </div>
                </div>
              </div>
            );
          })}

          <Link to={"/wishlist"}>
            {" "}
            <div className="btn view-wishlist btn-block" onClick={hideDrawer}>
              View Wishlist
            </div>{" "}
          </Link>
          <div className="btn view-cart btn-block" onClick={saveWishlist}>
              Save Wishlist
            </div>{" "}
        </div>
      )}
    </div>
    </>
  );
};

export default Wishlist;
