import React from "react";
import "./feature.css";
import BlueCircle from "../../../assets/images/blue-circle.svg";

function ProductFeature({ img, heading, text }) {
  return (
    <div>
      <img src={img} alt="" />
      <h4>{heading}</h4>
      <p>{text}</p>
    </div>
  );
}

const features = [
  {
    img: BlueCircle,
    heading: "Product Features here",
    text: "Lorem ipsum dolor sit amet pro dissentiunt disputationi et sea nostrum eleifend partiendo ut lorem ipsum prompta elaboraret eam.",
  },
  {
    img: BlueCircle,
    heading: "Product Features here",
    text: "Lorem ipsum dolor sit amet pro dissentiunt disputationi et sea nostrum eleifend partiendo ut lorem ipsum prompta elaboraret eam.",
  },
  {
    img: BlueCircle,
    heading: "Product Features here",
    text: "Lorem ipsum dolor sit amet pro dissentiunt disputationi et sea nostrum eleifend partiendo ut lorem ipsum prompta elaboraret eam.",
  },
  {
    img: BlueCircle,
    heading: "Product Features here",
    text: "Lorem ipsum dolor sit amet pro dissentiunt disputationi et sea nostrum eleifend partiendo ut lorem ipsum prompta elaboraret eam.",
  },
  {
    img: BlueCircle,
    heading: "Product Features here",
    text: "Lorem ipsum dolor sit amet pro dissentiunt disputationi et sea nostrum eleifend partiendo ut lorem ipsum prompta elaboraret eam.",
  },
  {
    img: BlueCircle,
    heading: "Product Features here",
    text: "Lorem ipsum dolor sit amet pro dissentiunt disputationi et sea nostrum eleifend partiendo ut lorem ipsum prompta elaboraret eam.",
  },
];
function Feature() {
  return (
    <div className="hf-container">
      <h2>Product Features</h2>
      <div className="hf-products-container">
        {features.map((f, i) => (
          <ProductFeature
            key={i}
            text={f.text}
            img={f.img}
            heading={f.heading}
          />
        ))}
      </div>
    </div>
  );
}

export default Feature;
