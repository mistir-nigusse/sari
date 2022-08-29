import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import profileIcon from "../../icons/profile.svg";
import { productSlice } from "../../slices/product";
import { url } from "../../utils/url";

const ReviewItem = ({ review }) => {
  const isUserLogged = useSelector((state) => state.login.isUserLogged);
  const loggedUser = useSelector((state) => state.login.loggedUser);
  const [showEditDiv, setShowEditDiv] = useState(false);
  const [reviewText, setReviewText] = useState([]);
  const productActions = productSlice.actions;
  const dispatch = useDispatch();

  useEffect(() => {
    setReviewText(review.text);
  }, []);
  let showEditButton = false;
  if (isUserLogged) {
    if (loggedUser.user_id === review.user_id) {
      showEditButton = true;
    }
  }

  const editReview = () => {
    // axios.post
    axios.post(`${url}product/editProductReview/${review.id}`,{text:reviewText}).then(
      (response) => {
        if(response.data.success) {
          dispatch(productActions.togglePageClicked())
          setShowEditDiv(false)
        }
      },
      (error) => {}
    );
  };
  const deleteReview = () => {
    // axios.post
    axios.get(`${url}product/deleteProductReview/${review.id}`).then(
      (response) => {
        console.log(response)
        if(response.data.success) {
          dispatch(productActions.togglePageClicked())
        }
      },
      (error) => {}
    );
  };

  return (
    <div className="review-item">
      <div className="user-row">
        {" "}
        <img
          src={
            review.profilePicture
              ? `${url}images/${review.profilePicture}`
              : profileIcon
          }
          alt=""
        />{" "}
        {review.firstName} {review.lastName}{" "}
      </div>

      <div className="review-row">
        {review.text}{" "}
        {showEditButton && (
          <div>
          <button
            className="btn edit-btn"
            onClick={() => {
              setShowEditDiv(!showEditDiv);
            }}
          >
            
            Edit
          </button>
          <button
            className="btn edit-btn"
            onClick={() => {
              deleteReview();
            }}
          >
            
            Delete
          </button>
          </div>
          
        )}{" "}
      </div>
      {showEditDiv && (
        <div className="edit-review">
          {" "}
          <textarea
            className="form-control"
            name=""
            id=""
            cols="30"
            rows="2"
            value={reviewText}
            onChange={(e) => {
              setReviewText(e.target.value);
            }}
          ></textarea>{" "}
          <button className="btn adimera-btn mx-2" onClick={editReview}>Save</button>{" "}
        </div>
      )}
    </div>
  );
};
export default ReviewItem;
