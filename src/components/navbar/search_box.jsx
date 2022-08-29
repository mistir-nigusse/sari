import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import DoNotDisturbAltIcon from "@mui/icons-material/DoNotDisturbAlt";
import { Link } from "react-router-dom";
import axios from "axios";
import { url2 } from "../../utils/url";
const SearchBox = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios.get(`${url2}user-view-product`).then((response) => {
      console.log(response);
      setProducts(response.data.products);
    });
  }, []);
  console.log(products);
  const searchIcon = <FontAwesomeIcon icon={faSearch} />;
  const [text, setText] = useState("");
  const history = useNavigate();
  const handleSearch = (rows) => {
    console.log(rows);
    return rows.filter(
      (row) =>
        row.name.toString().toLowerCase().indexOf(text.toLowerCase()) > -1
    );
  };
  const clearText=()=>{
    setText("")
  }
  const handleSubmit = (e) => {
    e && e.preventDefault();

    text && history(`/search/${text}`);
  };

  return (
    <div className="search-box">
      <form
        className="search-bar"
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        {" "}
        <div className="input-outer" style={{ display: "flex" }}>
          <input
            type="text"
            value={text}
            onChange={(e) => {
              setText(e.target.value);
            }}
            className="input"
          />{" "}
          {text && (
            <div
              className="clear"
              onClick={() => {
                setText("");
              }}
            >
              {" "}
              &times;
            </div>
          )}{" "}
        </div>
        <div onClick={handleSubmit} className="icon">
          {searchIcon}
        </div>
      </form>
      <div>
        {text && (
          <div className="search__result__holder">
            {products.length == 0 ? (
              <div className="no__record"><DoNotDisturbAltIcon/></div>
            ) : (
              <div>
                {handleSearch(products).map((product, index) => {
                  return (
                    <div className="search__results">
                      <Link
                      onClick={clearText}
                        className="link"
                        to={`/search/${product.name.toLowerCase()}`}
                        key={index}
                        style={{ textDecoration: "none" }}
                      >
                        <div>{product.name}</div>
                      </Link>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
export default SearchBox;
