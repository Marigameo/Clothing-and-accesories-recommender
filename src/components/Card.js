import React from "react";
import "./ProductStyle.css";
function Card(props) {
  console.log(props);
  if (typeof props.item == "undefined") {
    return <p>Your recent 3 customizations will be displayed here</p>;
  } else {
    console.log(props);
    return (
      <div>
        <div className="card">
          <p>Text Color : {props.item.textColor}</p>

          <p>Limit : {props.item.limit}</p>

          <p>Background : {props.item.bgColor}</p>
          <br />
          <button
            onClick={() =>
              props.greetHandler({
                textColor: props.item.textColor,
                limit: props.item.limit,
                bgColor: props.item.bgColor
              })
            }
            className="buttonSubmit btnBorder btnOrange"
          >
            Apply
          </button>
        </div>
      </div>
    );
  }
}

export default Card;
