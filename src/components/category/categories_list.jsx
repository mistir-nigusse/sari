import axios from "axios";
import { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { categorySlice } from "../../slices/category";
import { url } from "../../utils/url";

const CategoriesList = () => {

  const categoryActions = categorySlice.actions;
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.category.categories);

  useEffect(() => {
    axios.get(`${url}user/getAllCatagory`).then(
      (response) => {
        console.log(response)
        // // dispatch(productsActions.setIsLoading(false));
        // // dispatch(productsActions.setProducts(response.data.product));

        dispatch(categoryActions.setCategories(response.data.catagory));
        console.log(categories);
      },
      (error) => {
        console.log(error);
      }
    );
  }, []);
  return (
    <div className="adimera-categories">
      <Row style ={{justifyContent:'center'}}>
        {categories.map((item) => {
          return (
            <Col sm={12} md={4}>
              <div className="category">
                  <div className="second-border"></div>
                <div className="image">
                  <img src={`${url}images/${item.categoryImage}`} alt="" />
                </div>
              
                <div className="empty"></div>
                <div className="name">{item.catagory_Name}</div>
  
              </div>
            </Col>
          );
        })}

        {/* <Col sm={12} md={4}>
          <div className="category">
            <div className="image">
              <img src={catImg} alt="" />
            </div>
            <div className="second-border"></div>
            <div className="empty"></div>
            <div className="name">Handwoven Scarves</div>
            <button className="yehagere-btn btn">Shop Now</button>
          </div>
        </Col>
        <Col sm={12} md={4}>
          <div className="category">
            <div className="image">
              <img src={catImg} alt="" />
            </div>
            <div className="second-border"></div>
            <div className="empty"></div>
            <div className="name">Handwoven Scarves</div>
            <button className="yehagere-btn btn">Shop Now</button>
          </div>
        </Col> */}
      </Row>
    </div>
  );
};
export default CategoriesList;
