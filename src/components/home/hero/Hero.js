import React from "react";
import Button from "../../button/Button";
import BigWhiteCircle from "../../../assets/images/big-white-circle.svg";
import "./hero.css";

function Hero() {
  const onClick = () => {
    console.log("ammar");
  };
  return (
    <div className="hh-container">
      <div className="hh-container-text">
        <h2>Lorem ipsum dolor sit amet, pro dissentiunt disputationi et.</h2>
        <p>
          Lorem ipsum dolor sit amet pro dissentiunt disputationi et sea nostrum
          eleifend partiendo ut prompta elaboraret eam
        </p>
        <Button
          text="GET A FREE DEMO"
          onClick={onClick}
          style={{ backgroundColor: "#fff", color: "#1373FB" }}
        />
      </div>
      <div className="hh-img-container">
        <img src={BigWhiteCircle} alt="home-hero" />
      </div>
    </div>
  );
}

export default Hero;
