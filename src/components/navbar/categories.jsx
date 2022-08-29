import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import OutsideClickHandler from "react-outside-click-handler";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { url2 } from "../../utils/url";
import axios from "axios";
import { categorySlice } from "../../slices/category";
import { Link } from "react-router-dom";
import { leftDrawerSlice } from "../../slices/left_drawer";
const Categories = () => {
  const downIcon = <FontAwesomeIcon icon={faCaretDown} />;
  const [showCategories, setShowCategories] = useState(false);

  const dispatch = useDispatch();
  const categoryActions = categorySlice.actions;
  const leftDrawerActions = leftDrawerSlice.actions;
 
const[categories,setCategories]=useState([])
  useEffect(() => {
    // dispatch(productsActions.setIsLoading(true));
    axios.get(`${url2}user-view-categorie`).then(
      (response) => {
        console.log(response);
        console.log("hello");
        // dispatch(productsActions.setIsLoading(false));
        // dispatch(productsActions.setProducts(response.data.product));
setCategories(response.data.categorys);
        dispatch(categoryActions.setCategories(response.data.categorys));
      },
      (error) => {
        console.log(error);
      }
    );
  }, []);
console.log(categories);
  return (
    <div className="navbar-categories">
      <OutsideClickHandler
        onOutsideClick={() => {
          setShowCategories(false);
        }}
      >
        <div
          className="categories-link"
          onClick={(e) => {
            e.stopPropagation();
            setShowCategories(!showCategories);
          }}
        >
          <div className="name">Categories</div>
          <div className="icon">{downIcon}</div>
        </div>
        {showCategories && (
          <div className="categories-list">
            {" "}
            {categories.map((category) => {
              return (
                <Link
                  style={{ color: "black", textDecoration: "none" }}
                  to={`/categories/${category.name.toLowerCase()}`}
                  onClick={()=>{setShowCategories(false)}}
                >
                  <div className="category-item">{category.name}</div>
                </Link>
              );
            })}
          </div>
        )}
      </OutsideClickHandler>
    </div>
  );
};
export default Categories;
