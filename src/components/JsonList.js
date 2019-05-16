import React, { Component } from "react";

import "./ProductStyle.css";
import AllProducts from "./AllProducts.js";
import LocalForm from "./LocalForm.js";
var c, l;
const textColor = localStorage.getItem("textColor");
const fontStyle = localStorage.getItem("fontStyle");
const bgColor = localStorage.getItem("bgColor");
const limit = localStorage.getItem("limit");

class JsonList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      occasion: "all"
    };
  }

  setOccasion(occasion) {
    console.log(occasion);

    this.setState({
      occasion: occasion
    });
  }
  render() {
    if (limit == null) {
      l = 5;
    } else {
      l = limit;
    }
    if (this.state.occasion == "all") {
      c = <AllProducts occasion="all" limit={l} />;
    } else if (this.state.occasion == "holiday") {
      c = <AllProducts occasion="holiday" limit={l} />;
    } else if (this.state.occasion == "gym") {
      c = <AllProducts occasion="gym" limit={l} />;
    } else if (this.state.occasion == "festival") {
      c = <AllProducts occasion="festival" limit={l} />;
    } else if (this.state.occasion == "office") {
      c = <AllProducts occasion="office" limit={l} />;
    }
    return (
      <div style={{ backgroundColor: bgColor }}>
        <h1 style={{ color: textColor, fontFamily: fontStyle }} className="top">
          Clothing and Accessories Recommender
        </h1>
        <h3
          className="articleTitle"
          style={{ color: textColor, fontFamily: fontStyle }}
        >
          Find Your Fit
        </h3>
        <div className="buttonList">
          <button
            className="button btnBorder btnPurple"
            onClick={() => this.setOccasion("all")}
          >
            All
          </button>

          <button
            className="button btnBorder btnBlueGreen"
            onClick={() => this.setOccasion("holiday")}
          >
            Holiday
          </button>
          <button
            className="button btnBorder btnLightBlue"
            onClick={() => this.setOccasion("gym")}
          >
            Gym/Sport
          </button>
          <button
            className="button btnBorder btnOrange"
            onClick={() => this.setOccasion("festival")}
          >
            Festival
          </button>
          <button
            className="button btnBorder btnPurple"
            onClick={() => this.setOccasion("office")}
          >
            Office
          </button>
        </div>
        <br />
        <br />
        <br />
        <div className="container">
          <div className="section">
            <p>Play with your view customization here...</p>

            <small style={{ paddingTop: "20px" }}>
              [ Initially the customizations are not applied ]
            </small>
            <p>Try applying one!</p>
            <LocalForm />
          </div>
          <div className="section">{c}</div>
          <div className="section" />
        </div>
      </div>
    );
  }
}

export default JsonList;
