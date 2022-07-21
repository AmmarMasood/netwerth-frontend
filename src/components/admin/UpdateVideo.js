import { Button, Form, Input, Modal } from "antd";
import React, { useContext } from "react";
import { userInfoContext } from "../../context/UserContext";
import { updateVideo } from "../../services/videos";

function UpdateVideo({ details, visible, setVisible, getAllVideos }) {
  const [form] = Form.useForm();
  const [userInfo, setUserInfo] = useContext(userInfoContext);

  React.useEffect(() => {
    form.setFieldsValue(details);
  }, [details]);

  const onFinish = async (value) => {
    await updateVideo(details._id, {
      user: userInfo._id,
      ...value,
    });
    getAllVideos();
  };

  return (
    <Modal visible={visible} onCancel={() => setVisible(false)} footer={false}>
      <h2 className="font-heading-white">Update Video</h2>
      <div
        className="admin-newuser-container"
        style={{ padding: "20px 0px 0px 0px" }}
      >
        <Form layout="vertical" name="basic" form={form} onFinish={onFinish}>
          <Form.Item
            label="Title"
            name="title"
            rules={[{ required: true, message: "Please title name!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Link"
            name="link"
            rules={[{ required: true, message: "Please input link!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Update
            </Button>
          </Form.Item>
        </Form>
      </div>
    </Modal>
  );
}

export default UpdateVideo;
