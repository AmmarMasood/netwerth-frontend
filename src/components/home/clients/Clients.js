import React, { useContext } from "react";
import "./clients.css";
import SmallCircle from "../../../assets/images/small-circle.svg";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@ant-design/icons";

const testimonials = [
  {
    img: SmallCircle,
    text: "Lorem ipsum dolor sit amet, ei case duis vix, et mediocrem conclu sionemq ue quo, amet tractatos no ius. Dicit hab emus suscipiantur et has. Vero aeterno consectetuer id eam, at vix mandamus praesent mediocritatem, no eam mol estie urbanitas lorem.",
    name: "Paul Toomer",
  },
  {
    img: SmallCircle,
    text: "Lorem ipsum dolor sit amet, ei case duis vix, et mediocrem conclu sionemq ue quo, amet tractatos no ius. Dicit hab emus suscipiantur et has. Vero aeterno consectetuer id eam, at vix mandamus praesent mediocritatem, no eam mol estie urbanitas lorem.",
    name: "Paul Toomer",
  },
  {
    img: SmallCircle,
    text: "Lorem ipsum dolor sit amet, ei case duis vix, et mediocrem conclu sionemq ue quo, amet tractatos no ius. Dicit hab emus suscipiantur et has. Vero aeterno consectetuer id eam, at vix mandamus praesent mediocritatem, no eam mol estie urbanitas lorem.",
    name: "Paul Toomer",
  },
  {
    img: SmallCircle,
    text: "Lorem ipsum dolor sit amet, ei case duis vix, et mediocrem conclu sionemq ue quo, amet tractatos no ius. Dicit hab emus suscipiantur et has. Vero aeterno consectetuer id eam, at vix mandamus praesent mediocritatem, no eam mol estie urbanitas lorem.",
    name: "Paul Toomer",
  },
  {
    img: SmallCircle,
    text: "Lorem ipsum dolor sit amet, ei case duis vix, et mediocrem conclu sionemq ue quo, amet tractatos no ius. Dicit hab emus suscipiantur et has. Vero aeterno consectetuer id eam, at vix mandamus praesent mediocritatem, no eam mol estie urbanitas lorem.",
    name: "Paul Toomer",
  },
];

function Testimonial({ img, text, name }) {
  return (
    <div className="client-testmonial">
      <img src={img} alt="client" />
      <p>{text}</p>
      <h4>{name}</h4>
    </div>
  );
}

function Clients() {
  function LeftArrow() {
    const { isFirstItemVisible, scrollPrev } = useContext(VisibilityContext);

    return (
      <span
        disabled={isFirstItemVisible}
        onClick={() => scrollPrev()}
        style={{
          border: "2px solid #000",
          padding: "15px",
          height: "50px",
          width: "50px",
          borderRadius: "50px",
          cursor: "pointer",
          position: "absolute",
          top: "-100px",
          right: "100px",
        }}
      >
        <ArrowLeftOutlined style={{ fontSize: "20px" }} />
      </span>
    );
  }

  function RightArrow() {
    const { isLastItemVisible, scrollNext } = useContext(VisibilityContext);

    return (
      <span
        disabled={isLastItemVisible}
        onClick={() => scrollNext()}
        style={{
          border: "2px solid #000",
          padding: "15px",
          height: "50px",
          width: "50px",
          borderRadius: "50px",
          cursor: "pointer",
          position: "absolute",
          top: "-100px",
          right: "30px",
        }}
      >
        <ArrowRightOutlined style={{ fontSize: "20px" }} />
      </span>
    );
  }

  return (
    <div className="hclients-container">
      <h2>What our Clients are saying about us?</h2>

      <div className="hclients-container-testimonial">
        <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
          {testimonials.map((t, i) => (
            <Testimonial text={t.text} name={t.name} img={t.img} key={i} />
          ))}
        </ScrollMenu>
      </div>
    </div>
  );
}

export default Clients;
