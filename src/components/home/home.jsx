import Footer from "../footer/footer";
import Navbar from "../navbar/navbar";
import  {Products}  from "../products/products";
import HomeCarousel from "./home_carousel";
import { useMediaQuery } from "react-responsive";
import { useEffect, useState } from "react";
import axios from "axios";
import { url } from "../../utils/url";

const Home = () => {
  const md = useMediaQuery({ query: "(max-width: 576px)" });
  const showAd = useMediaQuery({ query: "(min-width: 992px)" }) ;
  const [leftAds, setLeftAds] = useState([]);
  const [rightAds, setRightAds] = useState([]);

  useEffect(() => {
    
    axios.get(`${url}user/getAllAdvertise`).then(
      (response) => {
        if (response.data) {
          console.log(response.data)
          ;
          for (let i = 1; i <= response.data.length; i++) {
            if (i % 2 !== 0) {
              let newLeftAds = leftAds;
              newLeftAds.push(response.data[i - 1]);
              setLeftAds(newLeftAds);
            } else {
              let newRightAds = rightAds;
              newRightAds.push(response.data[i - 1]);
              setLeftAds(newRightAds);
            }
          }
        }
      },
      (error) => {}
    );
  }, []);

  return (
    <>
     {!md && <HomeCarousel />} 

      <main>
<Products/>
      </main>
    </>
  );
};
export default Home;
