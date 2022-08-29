import { useSelector } from "react-redux";

const PageIndicator = () => {
  const pageNumberClasses = ["page-number", "page-number", "page-number"];
  const pageBarClasses = ["page-bar", "page-bar", "page-bar"];
  const currentPage = useSelector((state) => state.register.currentPage);
  const registrationSuccessful = useSelector(
    (state) => state.register.registrationSuccessful
  );

  if (currentPage === 1) {
    pageNumberClasses[0] = "page-number active";
  } else if (currentPage === 2) {
    pageNumberClasses[0] = "page-number active";
    pageNumberClasses[1] = "page-number active";
    pageBarClasses[0] = "page-bar active";
  }
  if (currentPage === 3) {
    pageNumberClasses[0] = "page-number active";
    pageNumberClasses[1] = "page-number active";
    pageNumberClasses[2] = "page-number active";
    pageBarClasses[0] = "page-bar active";
    pageBarClasses[1] = "page-bar active";
  }
  if (currentPage === 4) {
    pageNumberClasses[0] = "page-number active";
    pageNumberClasses[1] = "page-number active";
    pageNumberClasses[2] = "page-number active";
    pageBarClasses[0] = "page-bar active";
    pageBarClasses[1] = "page-bar active";
    pageBarClasses[2] = "page-bar active";
  }

  if (registrationSuccessful) return "";
  else
    return (
      <div className="page-indicator">
        
        <div className="pages">
          <div className="page">
            <div className={pageNumberClasses[0]}>1</div>
            <div className={pageBarClasses[0]}></div>
          </div>
          <div className="page">
            {" "}
            <div className={pageNumberClasses[1]}>2</div>
            <div className={pageBarClasses[1]}></div>
          </div>
          <div className="page">
            {" "}
            <div className={pageNumberClasses[2]}>3</div>
            <div className={pageBarClasses[2]}></div>
          </div>
          <div className="finish">
            {" "}
            <div className="">Finish</div>
          </div>
        </div>
      </div>
    );
};

export default PageIndicator;
