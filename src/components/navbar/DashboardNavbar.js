import React, { useContext, useState } from "react";
import { userInfoContext } from "../../context/UserContext";
import { UserOutlined, DownOutlined } from "@ant-design/icons";
import VideoTutorial from "../../assets/images/vido-tutorial.svg";
import { Avatar } from "antd";
import { Dropdown, Menu, Space } from "antd";
import { logout } from "../../services/auth";
import { useNavigate } from "react-router-dom";

function DashboardNavbar({ heading, subHeading, fromAdmin }) {
  const [userInfo, setUserInfo] = useContext(userInfoContext);
  const navigate = useNavigate();
  const menu = (
    <Menu
      items={[
        {
          key: "1",
          label: userInfo.name,
        },
        {
          key: "2",
          label: <p onClick={() => logout(navigate)}>Log Out</p>,
        },
      ]}
    />
  );

  return (
    <div className="user-dashboard-navbar-container">
      <div>
        <h3>{heading}</h3>
        {subHeading && <h4>{subHeading}</h4>}
      </div>
      <div className="user-dashboard-navbar-container--second">
        <div>{!fromAdmin && <img src={VideoTutorial} alt="tutorial" />}</div>
        <div>
          <Dropdown overlay={menu} trigger={["click"]}>
            <div style={{ cursor: "pointer" }}>
              <Avatar size={46} icon={<UserOutlined />} />
              <DownOutlined style={{ paddingLeft: "5px" }} />
            </div>
          </Dropdown>
        </div>
      </div>
    </div>
  );
}

export default DashboardNavbar;
