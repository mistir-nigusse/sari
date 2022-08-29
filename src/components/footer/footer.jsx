import { Col, Row } from "react-bootstrap";
import {
  faFacebook,
  faTwitter,
  faLinkedin,
  faInstagram,
  faCcMastercard,
  faCcVisa,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";
const Footer = () => {
  const facebookIcon = <FontAwesomeIcon icon={faFacebook} size={"lg"} />;
  const twitterIcon = <FontAwesomeIcon icon={faTwitter} size={"lg"} />;
  const linkedinIcon = <FontAwesomeIcon icon={faLinkedin} size={"lg"} />;
  const instagtamIcon = <FontAwesomeIcon icon={faInstagram} size={"lg"} />;
  const xs = useMediaQuery({ query: "(max-width: 576px" });
  
  const mastercardIcon = <FontAwesomeIcon icon={faCcMastercard} size={"3x"} />;
  const visaIcon = <FontAwesomeIcon icon={faCcVisa} size={"3x"} />;

  const colStyle = {
    display: "flex",
    alignItems: "center",
  };

  return (
    <div className="footer">
      <Row>
        <Col lg={3} sm={6} xs={6}>
          <div className="col-inner">
            <div className="header">sari sanitary</div>
            <div className="content">
              {" "}
              <div className="contact-info">sari_gtp@yahoo.com</div>
              <div className="contact-info"> +251911205382 </div>
              {/* <div className="contact-info"> +251 943 141 717 </div> */}
              <div className="contact-info"> P.O. box 920062 </div>
              <div className="contact-info"> Ethiopia,Addies Abeba,Urael </div>
              <div className="contact-info">Mulugeta Commercial Center</div>
            </div>
          </div>
        </Col>
        {!xs && (
          <>
            {" "}
            <Col lg={3} sm={6} xs={6}>
              <div className="col-inner">
                <div className="header">Connect with us</div>
                <div className="content">
                  <div className="social-icons">
                    <div className="icon-item">
                      <a
                        href="https://www.facebook.com/profile.php?id=100081894712457"
                        target="_blank"
                        style={{ display: "flex" }}
                      >
                        <div className="icon">{facebookIcon}</div>
                        <div className="text">Facebook</div>
                      </a>
                    </div>
                    <div className="icon-item">
                      <div className="icon">{twitterIcon}</div>
                      <div className="text">Twitter</div>
                    </div>
                    <div className="icon-item">
                      <a
                        href="https://instagram.com/sari_sanitary?igshid=YmMyMTA2M2Y="
                        target="_blank"
                        style={{ display: "flex" }}
                      >
                        <div className="icon">{instagtamIcon}</div>
                        <div className="text">Instagram</div>
                      </a>
                    </div>
                    <div className="icon-item">
                      <a
                        href="https://www.linkedin.com/in/sari-sanitary-161852241/"
                        target="_blank"
                        style={{ display: "flex" }}
                      >
                        <div className="icon">{linkedinIcon}</div>
                        <div className="text">LinkedIn</div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </>
        )}
      </Row>
      {xs &&
      <Row>
        <>
          {" "}
          <Col lg={3} sm={6} xs={6}>
            <div className="col-inner">
              <div className="header">Connect with us</div>
              <div className="content">
                <div className="social-icons">
                  <div className="icon-item">
                    <a
                      href="https://www.facebook.com/profile.php?id=100081894712457"
                      target="_blank"
                      style={{ display: "flex" }}
                    >
                      <div className="icon">{facebookIcon}</div>
                      <div className="text">Facebook</div>
                    </a>
                  </div>
                  <div className="icon-item">
                    <div className="icon">{twitterIcon}</div>
                    <div className="text">Twitter</div>
                  </div>
                  <div className="icon-item">
                    <a
                      href="https://instagram.com/sari_sanitary?igshid=YmMyMTA2M2Y="
                      target="_blank"
                      style={{ display: "flex" }}
                    >
                      <div className="icon">{instagtamIcon}</div>
                      <div className="text">Instagram</div>
                    </a>
                  </div>
                  <div className="icon-item">
                    <a
                      href="https://www.linkedin.com/in/sari-sanitary-161852241/"
                      target="_blank"
                      style={{ display: "flex" }}
                    >
                      <div className="icon">{linkedinIcon}</div>
                      <div className="text">LinkedIn</div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </>
      </Row>
}
    </div>
  );
};
export default Footer;
