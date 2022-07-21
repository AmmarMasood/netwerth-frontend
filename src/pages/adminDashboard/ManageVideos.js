import { Button, Table } from "antd";
import React from "react";
import CreateVideo from "../../components/admin/CreateVideo";
import UpdateUser from "../../components/admin/UpdateUser";
import UpdateVideo from "../../components/admin/UpdateVideo";
import { deleteUser, getAllUsers } from "../../services/users";
import { deleteVideo, getAllVideos } from "../../services/videos";

function ManageVideos() {
  const [videos, setVideos] = React.useState([]);
  const [selectedVideo, setSelectedVideo] = React.useState({});
  const [showUpdateVisible, setShowUpdateVisible] = React.useState(false);
  const [showNewVisible, setShowNewVisible] = React.useState(false);

  React.useEffect(() => {
    getAllVideosFromBackend();
  }, []);

  const deleteVideoFromBacked = async (v) => {
    // console.log(v);
    await deleteVideo(v._id);
    getAllVideosFromBackend();
  };
  const columns = [
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Link",
      dataIndex: "link",
      key: "link",
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <>
          <Button
            type="primary"
            style={{ marginRight: "10px" }}
            onClick={() => {
              setSelectedVideo(record);
              setShowUpdateVisible(true);
            }}
          >
            Update
          </Button>
          <Button type="default" onClick={() => deleteVideoFromBacked(record)}>
            Delete
          </Button>
        </>
      ),
    },
  ];

  const getAllVideosFromBackend = async () => {
    const res = await getAllVideos();
    console.log(res.data);
    if (res && res.data && res.data.data) {
      setVideos(res.data.data);
    }
  };

  return (
    <>
      <CreateVideo
        visible={showNewVisible}
        setVisible={setShowNewVisible}
        getAllVideos={getAllVideosFromBackend}
      />
      <UpdateVideo
        visible={showUpdateVisible}
        setVisible={setShowUpdateVisible}
        details={selectedVideo}
        getAllVideos={getAllVideosFromBackend}
      />
      <Button
        onClick={() => setShowNewVisible(true)}
        type="primary"
        style={{ float: "right", marginBottom: "10px" }}
      >
        Create A New Video
      </Button>
      <Table dataSource={videos} columns={columns} />
    </>
  );
}

export default ManageVideos;
