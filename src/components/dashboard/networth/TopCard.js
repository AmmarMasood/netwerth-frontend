import { Card } from "antd";
import React from "react";
import "./topcard.css";

function TopCard({ heading, value, icon, imageIcon }) {
  return (
    <div className="topcard-container">
      {imageIcon && (
        <img
          src={imageIcon}
          alt="ex"
          style={{ position: "absolute", left: "-40px", top: "10px" }}
        />
      )}
      <div>
        <span>{heading}</span>
        <h4>{value}</h4>
      </div>
      <img src={icon} alt="icon" />
    </div>
  );
}

export default TopCard;
