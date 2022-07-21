import React from "react";
import Button from "../../button/Button";
import "./newsletter.css";
import { Input } from "antd";
import NewsletterBack1 from "../../../assets/images/home-svg-1.svg";
import NewsletterBack2 from "../../../assets/images/home-svg-2.svg";

function Newsletter() {
  const onSubscribe = () => {
    console.log("ammar");
  };
  return (
    <div className="h-newsletter">
      <img src={NewsletterBack1} alt="" className="h-newsletter-back1" />
      <img src={NewsletterBack2} alt="" className="h-newsletter-back2" />
      <div className="h-newsletter-text">
        <p>Subscribe for</p>
        <h2>Newsletter to get the product updates</h2>
      </div>
      <div className="h-newsletter-form">
        <Input placeholder="Your Name" />
        <Input placeholder="Your Email" />
        <Button
          text="SUBSCRIBE"
          onClick={onSubscribe}
          style={{ backgroundColor: "#FD9125", color: "#fff", width: "100%" }}
        />
      </div>
    </div>
  );
}

export default Newsletter;
