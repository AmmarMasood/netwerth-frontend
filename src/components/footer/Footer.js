import React from "react";
import "./footer.css";
import SocialMediaIcon from "../../assets/images/facebook-logo.svg";
import Newsletter from "../home/newsletter/Newsletter";
function Footer() {
  return (
    <div style={{ position: "relative" }}>
      <Newsletter />

      <div className="footer-container">
        <h2 style={{ color: "#fff" }}>Logo here</h2>
        <div className="footer-container-socials">
          <img src={SocialMediaIcon} alt="social" />
          <img src={SocialMediaIcon} alt="social" />
          <img src={SocialMediaIcon} alt="social" />
        </div>
        <p>Privacy Policy - Terms And Condition</p>
      </div>
    </div>
  );
}

export default Footer;
