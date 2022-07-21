import React from "react";
import "./button.css";

function Button({ text, onClick, style, htmlType }) {
  return (
    <button
      style={style}
      onClick={onClick}
      className="common-btn"
      htmlType={htmlType}
    >
      {text}
    </button>
  );
}

export default Button;
