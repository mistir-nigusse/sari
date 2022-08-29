import Footer from "../footer/footer";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const PageNotFound = () => {
  const isUserLogged = useSelector((state) => state.login.isUserLogged);

  return (
    <>
      <div className="page-not-found">
        {/* <div className="code">404</div> */}
        <div className="text">SORRY! PAGE YOU ARE LOOKING CAN’T BE FOUND.</div>
        <div className="links">
          <div className="content">
            {!isUserLogged && (
              <>
                {" "}
                <Link to="/login">
                  {" "}
                  <div className="link-item">Login</div>
                </Link>
                <Link to="/register">
                  {" "}
                  <div className="link-item">Register</div>
                </Link>
              </>
            )}

            <Link to="/">
              {" "}
              <div className="link-item">Products</div>
            </Link>
            {/* <div className="link-item">Contact us</div> */}
            <Link to="/about">
              {" "}
              <div className="link-item">About us</div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
export default PageNotFound;
