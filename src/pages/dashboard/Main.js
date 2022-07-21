import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Layout, Menu } from "antd";
import React, { useState } from "react";
import "./main.css";
import Logo from "../../assets/images/logo-white.svg";
import Option1 from "../../assets/images/option-1.svg";
import Option2 from "../../assets/images/option-2.svg";
import Option3 from "../../assets/images/option-3.svg";
import Option4 from "../../assets/images/option-4.svg";
import Option5 from "../../assets/images/option-5.svg";
import NetWorth from "./NetWorth";
import Coaching from "./Coaching";
import PFS from "./PFS";
import VideoTutorial from "./VideoTutorial";
import DashboardNavbar from "../../components/navbar/DashboardNavbar";
const { Header, Content, Footer, Sider } = Layout;

const Main = () => {
  const [current, setCurrent] = useState(0);

  return (
    <Layout>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
        style={{
          textAlign: "center",
          padding: "10px",
          width: "210px",
          minWidth: "210px",
        }}
      >
        <img src={Logo} alt="logo" style={{ margin: "20px 0" }} />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["0"]}
          items={[
            {
              style: {
                backgroundColor: current === 0 && "#0760D8",
                borderRadius: "10px",
                color: "#fff",
              },
              icon: <img src={Option1} alt="" />,
              label: `New Worth`,
              onClick: () => setCurrent(0),
            },
            {
              style: {
                backgroundColor: current === 1 && "#0760D8",
                borderRadius: "10px",
                color: "#fff",
              },
              icon: <img src={Option2} alt="" />,
              label: `PFS`,
              onClick: () => setCurrent(1),
            },
            {
              style: {
                backgroundColor: current === 2 && "#0760D8",
                borderRadius: "10px",
                color: "#fff",
              },
              icon: <img src={Option3} alt="" />,
              label: `Video Tutorial`,
              onClick: () => setCurrent(2),
            },
            {
              style: {
                backgroundColor: current === 3 && "#0760D8",
                borderRadius: "10px",
                color: "#fff",
              },
              icon: <img src={Option4} alt="" />,
              label: `Community`,
              onClick: () => setCurrent(3),
            },
            {
              style: {
                backgroundColor: current === 4 && "#0760D8",
                borderRadius: "10px",
                color: "#fff",
              },
              icon: <img src={Option5} alt="" />,
              label: `Free Coaching`,
              onClick: () => setCurrent(4),
            },
          ]}
        />
      </Sider>
      <Layout>
        <DashboardNavbar
          heading={
            current === 0
              ? "Your Net Worth"
              : current === 1
              ? "Personal Finance System"
              : current === 2
              ? "Video Tutorial"
              : current === 3
              ? "Community"
              : "Coaching"
          }
        />
        <Content
          style={{
            margin: "24px 16px 0",
          }}
        >
          <div
            className="site-layout-background"
            style={{
              padding: 24,
              minHeight: "100vh",
            }}
          >
            {current === 0 && <NetWorth />}
            {current === 1 && <PFS />}
            {current === 2 && <VideoTutorial />}
            {current === 4 && <Coaching />}
          </div>
        </Content>
        <Footer
          style={{
            textAlign: "center",
          }}
        >
          {/* Ant Design ©2018 Created by Ant UED */}
        </Footer>
      </Layout>
    </Layout>
  );
};

export default Main;
