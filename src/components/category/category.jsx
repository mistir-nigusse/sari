import Control from "../control/control";
import Title from "./title";
import Products from "./products";
import { useEffect } from "react";
import CategoriesList from "./categories_list";
import { useParams } from "react-router-dom";
const Category = () => {

  const {name}=useParams()
  useEffect(() => {
    
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="category">
      <Title title={name} />

          <Products category={name} />
        
      
    </div>
  );
};
export default Category;
