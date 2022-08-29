import { Breadcrumbs } from "@material-ui/core";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useParams } from "react-router-dom";
import { url, url2 } from "../../utils/url";
import {
  NavigationRounded,
  ArrowForward,
  ArrowForwardIos,
} from "@material-ui/icons";
const Breadcrumb = () => {
  let {pathname} = useLocation();
  const route=useParams();
 
  const [breadcrumbs, setBreadcrumbs] = useState(["dave", "dave"]);
  let productId = pathname.substring(pathname.lastIndexOf("/") + 1);
  useEffect(() => {
    setBreadcrumbs([]);
    console.log(pathname.includes("product"));
    if (pathname.includes("product")) {
      axios.get(`${url2}user-view-productById/${productId}`).then(
        (response) => {
          if (response.data) {
            axios
              .get(
                `${url2}user-view-categorieByName/${response.data.product.categoryName}`
              )
              .then(
                (response) => {
                  if (response.data.category) {
                    let categoryName = response.data.category.name;
                    console.log(categoryName);
                    setBreadcrumbs([
                      {
                        name: categoryName,
                        link: `categories/${categoryName}`,
                      },
                    ]);
                  }
                },
                (error) => {
                  console.log(error);
                }
              );
          }
        },
        (error) => {
          console.log(error);
        }
      );

      return;
    }
    let tempBreadcrumpNames = [];
    let tempBreadcrumpItems = [];
    let routes = pathname.split("/");
    for (let i = 0; i < routes.length; i++) {
      if (routes[i]) {
        tempBreadcrumpNames.push(routes[i]);
        tempBreadcrumpItems.push({
          name: routes[i],
          link: tempBreadcrumpNames.join("/"),
        });
      }
    }
    setBreadcrumbs(tempBreadcrumpItems);
  }, [pathname]);
  
  
  console.log(breadcrumbs)
  return pathname === "/" ? (
    ""
  ) : (
    <div>
          {pathname.includes(" ")&&
    <Breadcrumbs
      className="breadcrumb"
      separator={<ArrowForwardIos fontSize="inherit" color="inherit" />}
    >
  
      <Link className="breadcrumb-link" to={`/`}>
        Home
      </Link>
      
      {breadcrumbs.map((item) => {
        return (
          <div>
            <Link className="breadcrumb-link" to={`/${item.link}`}>
              {item.name}
            </Link>
          </div>
        );
      })}
     
    </Breadcrumbs>
}
    </div>
  );
};
export default Breadcrumb;
