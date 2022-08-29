import AboutContent from "./about_content";
import InfoPage from "./info_page";
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

const ContactUs = () => {
  const facebookIcon = <FontAwesomeIcon icon={faFacebook} size={"lg"} />;
  const twitterIcon = <FontAwesomeIcon icon={faTwitter} size={"lg"} />;
  const linkedinIcon = <FontAwesomeIcon icon={faLinkedin} size={"lg"} />;
  const instagtamIcon = <FontAwesomeIcon icon={faInstagram} size={"lg"} />;

  const items = [
    {
      header: "Contact Information",
      text: `contact@misobodyworks.com
            +1-913-815-0596
            P.O. box 920062
            Peachtree Corners 30010,GA USA
            `,
    },
    {
      header: "Security",
      text: "The personal and financial details of each user is attentively guarded; without any compromisation",
    },
    {
      header: "Accessibility",
      text: "Our website is easy to navigate. It avoids unnecessary sophistications using a minimal interface",
    },
  ];

  return (
    <InfoPage title="Contact Us">
      <div
        style={{ width: "90%", margin: "auto" }}
        className=" contact-us-page row justify-content-around"
      >
        <div
          style={{ margin: "1em 0", whiteSpace: "pre-line" }}
          className="contact-us-item col-md-4"
        >
          <div className="contact-info"> contact@misobodyworks.com </div>
          <div className="contact-info"> +1-913-815-0596 </div>
          {/* <div className="contact-info"> +251 943 141 717 </div> */}
          <div className="contact-info"> P.O. box 920062 </div>
          <div className="contact-info"> Peachtree Corners 30010,GA USA </div>
        </div>

        <div style={{ margin: "1em 0" }} className="contact-us-item col-md-4">
          <div className="social-icons">
            <div className="icon-item">
              <div className="icon">{facebookIcon}</div>
              <div className="text">Facebook</div>
            </div>
            <div className="icon-item">
              <div className="icon">{twitterIcon}</div>
              <div className="text">Twitter</div>
            </div>
            <div className="icon-item">
              <div className="icon">{instagtamIcon}</div>
              <div className="text">Instagram</div>
            </div>
            <div className="icon-item">
              <div className="icon">{linkedinIcon}</div>
              <div className="text">LinkedIn</div>
            </div>
          </div>
        </div>
      </div>
    </InfoPage>
  );
};
export default ContactUs;
