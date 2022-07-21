import { Modal } from "antd";
import React from "react";
import Vimeo from "@u-wave/react-vimeo";

function ModalVideo({ visible, setVisible, videoUrl, videoTitle }) {
  return (
    <Modal
      visible={visible}
      closable={false}
      footer={false}
      onCancel={() => setVisible(false)}
      style={{ background: "transparent" }}
      bodyStyle={{
        width: "620px",
        height: "100%",
        background: "#f2f2f2",
        padding: 0,
      }}
    >
      {/* <h4
        style={{
          color: "#232358",
          fontWeight: "700",
          fontSize: "24px",
        }}
      >
        {videoTitle}
      </h4> */}
      <Vimeo video={videoUrl} autoplay width="600px" responsive={true} />
    </Modal>
  );
}

export default ModalVideo;
