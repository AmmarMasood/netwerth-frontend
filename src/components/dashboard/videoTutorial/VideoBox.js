import React from "react";
import PlayIcon from "../../../assets/images/play-icon.svg";

function VideoBox({ title, videoLink, onClick }) {
  return (
    <div
      onClick={() => onClick(videoLink)}
      style={{
        padding: "10px",
        background: "#fff",
        borderRadius: "10px",
        marginRight: "20px",
        marginTop: "20px",
        width: "294px",
        height: "234px",
        boxShadow: "2px 2px 10px rgba(19, 36, 77, 0.08)",
        cursor: "pointer",
        position: "relative",
      }}
    >
      <p
        style={{
          fontStyle: "normal",
          fontWeight: "700",
          fontSize: "16px",
          lineHeight: "16px",
          letterSpacing: "0.01em",
          color: "#232358",
          padding: "10px",
        }}
      >
        {title}
      </p>
      <img
        src={PlayIcon}
        alt="play"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
        }}
      />
    </div>
  );
}

export default VideoBox;
