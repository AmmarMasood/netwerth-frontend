import { Button, Checkbox, Form, Input, Modal } from "antd";
import React from "react";
import { updateUser } from "../../services/users";

function UpdateUser({ details, visible, setVisible, getAllUsers }) {
  const [form] = Form.useForm();
  const [isAdmin, setIsAdmin] = React.useState(false);

  React.useEffect(() => {
    form.setFieldsValue(details);
    if (details.role === "admin") {
      setIsAdmin(true);
    }
  }, [details]);

  const onFinish = async (value) => {
    await updateUser(details._id, {
      ...value,
      role: isAdmin ? "admin" : "user",
    });
    getAllUsers();
  };

  return (
    <Modal visible={visible} onCancel={() => setVisible(false)} footer={false}>
      <h2 className="font-heading-white">Update User</h2>
      <div
        className="admin-newuser-container"
        style={{ padding: "20px 0px 0px 0px" }}
      >
        <Form layout="vertical" name="basic" form={form} onFinish={onFinish}>
          <Form.Item label="Email" name="email">
            <Input disabled />
          </Form.Item>
          <Form.Item
            label="Name"
            name="name"
            rules={[{ required: true, message: "Please input name!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item>
            <Checkbox
              checked={isAdmin}
              onChange={(e) => setIsAdmin(e.target.checked)}
            >
              Is Admin
            </Checkbox>
          </Form.Item>
          {/* footer */}
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

export default UpdateUser;
