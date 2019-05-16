import React from "react";

function Footer() {
  return (
    <div>
      <div className="footer">
        <p style={{ fontSize: "16px", paddingTop: "30px" }}>
          I have just introduced myself to the world of React.js and React
          Native
        </p>
        <p className="footerText">
          Guide me with suggestions and provide me more opportunities to
          experiment
        </p>
        <div style={{ paddingTop: "20px" }}>
          <a href="https://marigameo.herokuapp.com" target="_blank">
            Portfolio
          </a>
          <span>
            {" "}
            - I would be happy if you wish reviewing my other works also ..
          </span>
        </div>

        {/* contact info  */}

        <div>
          <p style={{ paddingTop: "30px" }}>Write@ mariappangameo@gmail.com</p>
          <p style={{ padding: "10px" }}>Or reach me at +91 8072343371</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
