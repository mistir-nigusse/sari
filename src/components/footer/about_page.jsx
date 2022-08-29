import InfoPage from "./info_page";
import quotationIcon from "../../images/quotation.png";
import AboutContent from "./about_content";
import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { library } from "@fortawesome/fontawesome-svg-core";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft, fas } from "@fortawesome/free-solid-svg-icons";
library.add(faQuoteLeft, fas);

const AboutPage = () => {
  const [selectedTab, setSelectedTab] = useState(1);
  const toggleTabs = useMediaQuery({ query: "(max-width: 700px)" });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const items1 = [
    {
      header: "Responsiveness",
      text: "Users’ gratification is our core value",
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
  const items2 = [
    {
      header: "",
      text: "Diminishing the marketing gap between seller and buyer",
    },
    {
      header: "",
      text: "Boosting local businesses and companies by avoiding extravagance",
    },
    {
      header: "",
      text: "Creating a nation wide business network that bridges Addis, regional capitals, and Asmara",
    },
  ];
  const items3 = [
    {
      header: "Wide population coverage",
      text: "Including all the 10 regions and the 2 regional cities; in addition to Asmara.",
    },
    {
      header: "Direct buyer to seller contact",
      text: "Get to know who is interested in your products",
    },
    {
      header: "16hrs active delivery",
      text: "7 days a week 16 hrs active shipping service to your door steps",
    },
    {
      header: "Unlimited stock item",
      text: " Upload as many products as you can produce; with a fair price",
    },
  ];
  const items4 = [
    {
      header: "Retailer",
      text: "Sell your products to end users. And directly contact interested customers",
    },
    {
      header: "Whole seller",
      text: "Sell your products to nation wide retailers",
    },
    {
      header: "Partner",
      text: "Work with Miso body works",
    },
  ];

  const getCurrentItem = () => {
    if (selectedTab === 1) return items1;
    if (selectedTab === 2) return items2;
    if (selectedTab === 3) return items3;
    if (selectedTab === 4) return items4;
  };

  return (
    <InfoPage title="About miso body works">
      <div className="about-page">
        <div className="about-top">
          Miso body works is an online platform that enable users to execute
          business deals from purchase to delivery with gratifying options.
        </div>
        <div
          className={toggleTabs ? "about-tabs about-tabs-mobile" : "about-tabs"}
        >
          <div
            className={selectedTab === 1 ? "item item-selected" : "item"}
            onClick={() => {
              setSelectedTab(1);
            }}
          >
            our values
          </div>
          <div
            className={selectedTab === 2 ? "item item-selected" : "item"}
            onClick={() => {
              setSelectedTab(2);
            }}
          >
            our mission
          </div>
          <div
            className={selectedTab === 3 ? "item item-selected" : "item"}
            onClick={() => {
              setSelectedTab(3);
            }}
          >
            services
          </div>
          <div
            className={selectedTab === 4 ? "item item-selected" : "item"}
            onClick={() => {
              setSelectedTab(4);
            }}
          >
            work with us
          </div>
        </div>

        <AboutContent items={getCurrentItem()} />
        <div className="about-bottom">
          <div className="icon">
            {" "}
            <FontAwesomeIcon
              icon={["fas", "quote-left"]}
              className="font-size-xxl "
            />
            {/* <img className="img-fluid" src={quotationIcon} alt="" />{" "} */}
          </div>{" "}
          <div className="text">
            Focus on your walk of life,{" "}
            <span className="we-got-you">we got you</span> covered on selling
            and buying products from the comfort of your place.
          </div>
        </div>
      </div>
    </InfoPage>
  );
};
export default AboutPage;
