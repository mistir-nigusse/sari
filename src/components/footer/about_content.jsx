import { Col } from "react-bootstrap";

const AboutContent = ({ items }) => {
  return (
    <div className="about-content row justify-content-center">
      {items.map((item) => (
        <Col md={4} className='py-4'>
          <div className="about-content-item">
            {" "}
            <div className="content-header">{item.header}</div>
            <div className="text" style ={{whiteSpace:'pre-line'}}>{item.text}</div>
          </div>
        </Col>
      ))}
    </div>
  );
};
export default AboutContent;
