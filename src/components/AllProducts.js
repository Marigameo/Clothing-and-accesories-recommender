import React from "react";
import ClothingsData from "../data/data.json";
import "./ProductStyle.css";
const textColor = localStorage.getItem("textColor");
var limit;
if (localStorage.getItem("limit") == null) {
  limit = 5;
} else {
  limit = localStorage.getItem("limit");
}

function AllProducts(props) {
  var n = 0;
  console.log(props.occasion);

  // if chosen to view all the items,it would be by default set to all

  if (props.occasion == "all") {
    return (
      <div>
        {ClothingsData.map((clothing, index) => {
          return (
            <div key={clothing.product_id}>
              <h3 style={{ color: textColor, padding: "10px" }}>
                {clothing.title}
              </h3>
              <figure className="snip1584">
                <img src={clothing.image_link} alt="{clothing.product_id}" />
                <figcaption>
                  <h1>{clothing.price}</h1>
                  <h4 style={{ padding: "10px" }}>{clothing.category}</h4>
                  <a href={clothing.link} target="_blank" className="buyNow">
                    Buy Now
                  </a>
                </figcaption>
              </figure>
            </div>
          );
        })}
      </div>
    );
  }
  //if other options are choosen
  else {
    return (
      <div>
        {ClothingsData.map((clothing, index) => {
          console.log(limit);
          if (clothing.occasion.indexOf(props.occasion) > -1 && n < limit) {
            n = n + 1;
            console.log(n);
            return (
              <div key={clothing.product_id}>
                <h1 style={{ color: textColor }}>{clothing.title}</h1>
                <figure className="snip1584">
                  <img src={clothing.image_link} alt="{clothing.product_id}" />
                  <figcaption>
                    <h1>{clothing.price}</h1>
                    <h4 style={{ padding: "10px" }}>{clothing.category}</h4>

                    <a href={clothing.link} target="_blank" className="buyNow">
                      Buy Now
                    </a>
                  </figcaption>
                </figure>
              </div>
            );
          }
        })}
      </div>
    );
  }
}

export default AllProducts;
