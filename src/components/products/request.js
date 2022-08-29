


import { url2 } from "../../utils/url";
import fetch from "isomorphic-fetch";
const AdminApiRequests = () => {

 const viewProduct= () => {
        return fetch(`${url2}}user-view-product`, {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        })
          .then((response) => {
            return response.json();
          })
          .catch((err) => err);
        }
        const viewAllProduct = () => {
          return fetch(`${url2}user-view-product`, {
            method: "GET",
            headers: {
              Accept: "application/json",

              "Content-Type": "application/json",
            },
          })
            .then((response) => {
              return response.json();
            })
            .catch((err) => err);
        };
  return {
    viewProduct,
    viewAllProduct,
  };
};

export default AdminApiRequests;
