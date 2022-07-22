import React, { useState } from "react";
import PleaseLogin from "../../components/dashboard/PleaseLogin";
import ModalVideo from "../../components/dashboard/videoTutorial/ModalVideo";
import VideoBox from "../../components/dashboard/videoTutorial/VideoBox";
import { getAllVideos } from "../../services/videos";
import "./videoTutorial.css";

function VideoTutorial() {
  const [isOpen, setOpen] = useState(false);
  const [video, setVideo] = useState("");
  const [videos, setAllVideos] = useState([]);

  const getAllVideosFromBackend = async () => {
    const res = await getAllVideos();
    if (res && res.data && res.data.data) {
      setAllVideos(res.data.data);
    }
  };
  React.useEffect(() => {
    if (localStorage.getItem("token")) {
      getAllVideosFromBackend();
    }
  }, []);

  const onVideoBoxClick = (link) => {
    setVideo(link);
    setOpen(true);
  };
  return localStorage.getItem("token") ? (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          flexFlow: "wrap",
        }}
      >
        {videos.map((v, i) => (
          <VideoBox
            onClick={onVideoBoxClick}
            title={v.title}
            videoLink={v.link}
            key={v._id}
          />
        ))}
      </div>
      <ModalVideo visible={isOpen} setVisible={setOpen} videoUrl={video} />
    </div>
  ) : (
    <PleaseLogin pageName="video tutorials" />
  );
}

export default VideoTutorial;
