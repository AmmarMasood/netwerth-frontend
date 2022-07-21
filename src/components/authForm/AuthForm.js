import { Checkbox, Form, Input } from "antd";
import React from "react";
import "./authform.css";
import { LoadingOutlined } from "@ant-design/icons";
import Button from "../button/Button";
import { Link } from "react-router-dom";

const fieldStyle = {
  padding: "12px",
  borderRadius: "10px",
};
function AuthForm({ heading, onFinish, loading, buttonText, login, childern }) {
  return (
    <div className="authform-container">
      <h1>{heading}</h1>
      <Form layout="vertical" name="basic" onFinish={onFinish}>
        {!login && (
          <Form.Item
            label="First Name"
            name="name"
            rules={[
              { required: true, message: "Please input your first name!" },
            ]}
          >
            <Input style={fieldStyle} />
          </Form.Item>
        )}

        <Form.Item
          label="Email"
          name="email"
          rules={[
            { required: true, message: "Please input your email!" },
            { type: "email", message: "Please input correct email." },
          ]}
        >
          <Input style={fieldStyle} />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password style={fieldStyle} />
        </Form.Item>

        <p style={{ display: "flex", justifyContent: "space-between" }}>
          <Checkbox onChange={() => console.log("ammar")}>Remember Me</Checkbox>{" "}
          <span>
            <Link style={{ color: "#002349" }} to="/forgot-password">
              Forgot Password?
            </Link>
          </span>
        </p>

        <div style={{ textAlign: "center", margin: "10px 0" }}>
          {loading ? (
            <LoadingOutlined style={{ color: "#ff7700", fontSize: "30px" }} />
          ) : (
            <Button
              style={{
                backgroundColor: "#FF7643",
                color: "#fff",
                width: "100%",
              }}
              text={buttonText}
              htmlType="submit"
            />
          )}
        </div>
      </Form>
      {login ? (
        <p>
          Dont have an account? <Link to="/signup">Sign Up</Link>
        </p>
      ) : (
        <p>
          Already have an account? <Link to="/login">Log In</Link>
        </p>
      )}
      {childern}
    </div>
  );
}

export default AuthForm;
