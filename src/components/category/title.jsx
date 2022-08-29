import titleBackground from "../../images/adimera-footer.png";
const Title = ({title}) => {
  return (
    <div
      className="title"
      // style={{
      //   background: `linear-gradient( rgba(0, 0, 0, 0), rgba(0, 0, 0, 0) ), url(${titleBackground})`,
      // }}
    >
      {/* <img src={titleBackground} alt=""/> */}
      <div className="main-title">{title}</div>
      <div className="sub-title">
        {/* Free Shipping for standard order over $100 */}
      </div>
    </div>
  );
};

export default Title;
