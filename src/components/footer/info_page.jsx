import { useEffect } from "react";

const InfoPage = ({ title, children }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="info-page">
      <div className="header">{title}</div>
      <div className="content">{children}</div>
    </div>
  );
};
export default InfoPage;
