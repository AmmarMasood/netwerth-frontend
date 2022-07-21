import { Button, Form, Input, Modal } from "antd";
import React, { useContext } from "react";
import { userInfoContext } from "../../context/UserContext";
import { updateUser } from "../../services/users";
import { createVideo } from "../../services/videos";

function CreateVideo({ visible, setVisible, getAllVideos }) {
  const [userInfo, setUserInfo] = useContext(userInfoContext);
  const [form] = Form.useForm();

  const onFinish = async (value) => {
    await createVideo({
      user: userInfo._id,
      ...value,
    });
    getAllVideos();
  };

  return (
    <Modal visible={visible} onCancel={() => setVisible(false)} footer={false}>
      <h2 className="font-heading-white">Create Video</h2>
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
              Create
            </Button>
          </Form.Item>
        </Form>
      </div>
    </Modal>
  );
}

export default CreateVideo;
