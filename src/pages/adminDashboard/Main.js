import { Layout, Menu } from "antd";
import React from "react";
import "../dashboard/main.css";
import Logo from "../../assets/images/logo-white.svg";
import ManageVideos from "./ManageVideos";
import DashboardNavbar from "../../components/navbar/DashboardNavbar";
import ManageUsers from "./ManageUsers";
import { useNavigate } from "react-router-dom";
import { logout } from "../../services/auth";

const { Header, Content, Footer, Sider } = Layout;

const Main = () => {
  const [current, setCurrent] = React.useState(0);
  const navigate = useNavigate();

  React.useEffect(() => {
    if (
      !localStorage.getItem("token") ||
      localStorage.getItem("role") !== "admin"
    ) {
      navigate("/", { replace: true });
    }
  }, []);
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
        style={{ textAlign: "center", padding: "10px" }}
      >
        <img src={Logo} alt="logo" style={{ margin: "20px 0" }} />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={current}
          items={[
            {
              icon: "",
              label: `Manage Users`,
              style: {
                backgroundColor: current === 0 && "#0760D8",
                borderRadius: "10px",
                color: "#fff",
              },
              onClick: () => setCurrent(0),
            },
            {
              icon: "",
              label: `Manage Videos`,
              style: {
                backgroundColor: current === 1 && "#0760D8",
                borderRadius: "10px",
                color: "#fff",
              },
              onClick: () => setCurrent(1),
            },
          ]}
        />
      </Sider>
      <Layout>
        <DashboardNavbar
          fromAdmin={true}
          heading={current === 0 ? "Manage Users" : "Manage Videos"}
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
            {current === 0 && <ManageUsers />}
            {current === 1 && <ManageVideos />}
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
