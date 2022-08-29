import Rating from "@material-ui/lab/Rating";
import { useState } from "react";
import { toast } from "react-toastify";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { url } from "../../utils/url";
import { productSlice } from "../../slices/product";

const AddReview = ({ productId }) => {
  const isUserLogged = useSelector((state) => state.login.isUserLogged);
  const loggedUser = useSelector((state) => state.login.loggedUser);
  const [review, setReview] = useState([]);
  const [rating, setRating] = useState(0);
  const productActions = productSlice.actions;
  const dispatch = useDispatch();

  const sendReview = () => {
    if (!isUserLogged) {
      toast.info("Log in or register to give a review ! ", {
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

    axios
      .post(`${url}product/createProductReview`, {
        user_id: loggedUser.user_id,
        product_id: productId,
        text: review,
      })
      .then(
        (response) => {
          if (response.data.success) {
            dispatch(productActions.togglePageClicked());
          }
        },
        (error) => {}
      );
  };

  const rateProduct = (ratingValue) => {
    if (!isUserLogged) {
      toast.info("Log in or register to rate a product ! ", {
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

    axios
      .post(`${url}product/createProductRating`, {
        user_id: loggedUser.user_id,
        product_id: productId,
        ratingValues: ratingValue,
      })
      .then(
        (response) => {},
        (error) => {}
      );
  };
  return (
    <div className="add-review">
      <div className="rating">
        <div className="label">Rate this product</div>{" "}
        <Rating
          name="simple-controlled"
          value={rating}
          onChange={(event, newValue) => {
            setRating(newValue);
            rateProduct(newValue);
          }}
          color="red"
        />
      </div>
      <div className="first">
        {" "}
        <textarea
          className="form-control"
          name=""
          id=""
          cols="30"
          rows="4"
          onChange={(e) => {
            setReview(e.target.value);
          }}
        ></textarea>
      </div>
      <div className="second">
        {" "}
        <button className="btn adimera-btn" onClick={sendReview}>
          Add Review
        </button>
      </div>
    </div>
  );
};
export default AddReview;
