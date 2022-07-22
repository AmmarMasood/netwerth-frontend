import React from "react";
import "./footer.css";
import SocialMediaIcon from "../../assets/images/facebook-icon.svg";
import SocialMediaIcon1 from "../../assets/images/linkedin-icon.svg";
import SocialMediaIcon2 from "../../assets/images/twitter-icon.svg";
import Newsletter from "../home/newsletter/Newsletter";
import ImageLogo from "../../assets/images/logo-white.svg";
function Footer() {
  return (
    <div style={{ position: "relative" }}>
      <Newsletter />

      <div className="footer-container">
        <img src={ImageLogo} alt="logo" style={{ margin: "20px" }} />
        <div className="footer-container-socials">
          <img src={SocialMediaIcon} alt="social" />
          <img src={SocialMediaIcon1} alt="social" />
          <img src={SocialMediaIcon2} alt="social" />
        </div>
        <p>Privacy Policy - Terms And Condition</p>
      </div>
    </div>
  );
}

export default Footer;
