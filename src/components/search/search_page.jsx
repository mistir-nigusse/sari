import { useEffect } from "react";
import Products from "./products";
import { useParams } from "react-router-dom";
const SearchPage = (props) => {

const{name}=useParams();
  useEffect(() => {
    window.scrollTo(0, 0);

  }, []);




  return (
    <div className="search-page">
      <div className="search-title">Search results for "{name}" </div>
      <div className="content">
       <Products query={name}/>
      </div>
    </div>
  );
};
export default SearchPage;
