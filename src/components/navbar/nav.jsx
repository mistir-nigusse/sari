import { faEllipsisH } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { categorySlice } from "../../slices/category";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { url } from "../../utils/url";
import axios from "axios";
import SearchBox from "./search_box";
import Categories from "./categories";
const Nav = () => {
  const moreIcon = <FontAwesomeIcon icon={faEllipsisH} />;
  const linkStyle = {
    color: "#666",
    textDecoration: "none",
  };
  return (
    <nav>
      {/* {navCategories.length === 0
        ? ""
        : navCategories.map((category) => {
            return (
              <Link
              key={category.id}
                to={`/categories/${category.catagory_Name.toLowerCase()}`}
                onClick={() => {
                  dispatch(categoryActions.setActiveCategoryId(category.id));
                }}
              >
                {" "}
                <div  className="nav-item">
                  {category.catagory_Name}{" "}
                </div>
              </Link>
            );
          })}

      <div className="dropdown">
        <div className="dropbtn">{moreIcon}</div>
        <div className="dropdown-content">
          {dropdownCategories.length === 0
            ? ""
            : dropdownCategories.map((category) => {
                return (
                  <div key={category.id} className="nav-item">
                    <Link
                      to={`/categories/${category.catagory_Name.toLowerCase()}`}
                      onClick={() => {
                        dispatch(
                          categoryActions.setActiveCategoryId(category.id)
                        );
                      }}
                    >
                      {category.catagory_Name}{" "}
                    </Link>
                  </div>
                );
              })}
        </div>
      </div>
  */}
      <Categories />

      <SearchBox />
    </nav>
  );
};

export default Nav;





