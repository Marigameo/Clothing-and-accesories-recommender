import React, { Component } from "react";
import Card from "./Card.js";

var x;
const listItems = JSON.parse(localStorage.getItem("customizations") || "[]");
const last3Items = listItems.slice(0, 3);

class LocalForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      textColor: "white",
      limit: 5,
      fontStyle: "Comic Sans MS, cursive, sans-serif",
      bgColor: "black"
    };

    //here greetParent is nothing but simply a mechanism that permits communication between parent and child component

    this.greetParent = this.greetParent.bind(this);

    if (last3Items.length == 3) {
      x = (
        <div>
          {" "}
          <Card item={last3Items[0]} greetHandler={this.greetParent} />
          <Card item={last3Items[1]} greetHandler={this.greetParent} />
          <Card item={last3Items[2]} greetHandler={this.greetParent} />
        </div>
      );
    } else {
      x = "Have fun customizing few more times and you would be surprised!";
    }
  }

  //function to communicate with child

  greetParent(childName) {
    alert("Are you sure to revert back to this customizations");
    this.setState({ bgColor: childName.bgColor });
    localStorage.setItem("bgColor", childName.bgColor);
    window.location.reload();
  }

  componentDidMount() {
    const textColor = localStorage.getItem("textColor");
    const limit = localStorage.getItem("limit");
    const fontStyle = localStorage.getItem("fontStyle");
    const bgColor = localStorage.getItem("bgColor");
    this.setState({ textColor, textColor });
    this.setState({ limit: limit });
    this.setState({ fontStyle: fontStyle });
    this.setState({ bgColor: bgColor });
  }

  //handle input in form
  handleChange = event => {
    const input = event.target;

    this.setState({ [input.name]: input.value });
  };

  //handle form submit operation
  handleFormSubmit = () => {
    const { textColor, limit, fontStyle, bgColor } = this.state;
    localStorage.setItem("textColor", textColor);
    localStorage.setItem("limit", limit);
    localStorage.setItem("fontStyle", fontStyle);
    localStorage.setItem("bgColor", bgColor);
    if (!localStorage.getItem("customizations")) {
      const customizations = [
        {
          textColor: textColor,
          limit: limit,
          fontStyle: fontStyle,
          bgColor: bgColor
        }
      ];

      localStorage.setItem("customizations", JSON.stringify(customizations));
    } else {
      const listItems = JSON.parse(localStorage.getItem("customizations"));
      listItems.unshift({
        textColor: textColor,
        limit: limit,
        fontStyle: fontStyle,
        bgColor: bgColor
      });
      console.log(listItems);
      localStorage.setItem("customizations", JSON.stringify(listItems));
    }
  };

  render() {
    const textColor = localStorage.getItem("textColor");
    const limit = localStorage.getItem("limit");
    const fontStyle = localStorage.getItem("fontStyle");
    return (
      <div>
        <form onSubmit={this.handleFormSubmit} className="form">
          <label
            style={{ color: textColor, fontFamily: fontStyle }}
            className="label"
          >
            TextColor:{" "}
            <select
              name="textColor"
              value={this.state.textColor}
              onChange={this.handleChange}
              className="select"
            >
              <option value="pink">Pink</option>
              <option value="aqua">Aqua</option>
              <option value="white">White</option>
              <option value="greenyellow">Green</option>
            </select>
          </label>
          <br />
          <br />
          <label
            style={{ color: textColor, fontFamily: fontStyle }}
            className="label"
          >
            Display Limit:{" "}
            <input
              name="limit"
              type="number"
              value={this.state.limit}
              onChange={this.handleChange}
              className="input"
            />
          </label>
          <br />
          <br />
          <label
            style={{ color: textColor, fontFamily: fontStyle }}
            className="label"
          >
            Font Family:{" "}
            <select
              name="fontStyle"
              value={this.state.fontStyle}
              onChange={this.handleChange}
              className="select"
            >
              <option value="Comic Sans MS', cursive, sans-serif">
                Comic Sans
              </option>
              <option value="'Arial Black', Gadget, sans-serif">
                Arial Black
              </option>
              <option value="'Lucida Sans Unicode', Lucida Grande, sans-serif">
                Lucida sans
              </option>
              <option value="'Tahoma', Geneva, sans-serif">Tahoma</option>
            </select>
          </label>
          <br />
          <br />
          <label
            style={{ color: textColor, fontFamily: fontStyle }}
            className="label"
          >
            Background Color:{" "}
            <select
              name="bgColor"
              value={this.state.bgColor}
              onChange={this.handleChange}
              className="select"
            >
              <option value="Black">Black</option>
              <option value="SlateBlue">SlateBlue</option>
              <option value="LightGray">LightGray</option>
              <option value="Tomato">Tomato</option>
              <option value="DodgerBlue">DodgerBlue</option>
            </select>
          </label>
          <br />
          <br />

          <button type="submit" className="buttonSubmit btnBorder btnLightBlue">
            Apply
          </button>
        </form>
        <p style={{ paddingTop: "20px" }}>
          Revert back to most recent customization
        </p>
        {x}
      </div>
    );
  }
}

export default LocalForm;
