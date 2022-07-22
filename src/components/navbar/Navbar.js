import React, { useContext } from "react";
import { userInfoContext } from "../../context/UserContext";
import { Link, useNavigate } from "react-router-dom";
import Button from "../button/Button";
import LogoImage from "../../assets/images/logo.svg";
import "./navbar.css";

function Navbar() {
  const navigate = useNavigate();
  const [userInfo, serUserInfo] = useContext(userInfoContext);

  const onClickDemo = () => {
    console.log("on click demo");
    navigate("/dashboard", { replace: true });
  };
  return (
    <>
      <div className="navbar-container">
        <img src={LogoImage} alt="" />
        <div className="navbar-container-options">
          <span>Features</span>
          <span>About</span>
          <span>Contact</span>
          {userInfo._id ? (
            <Button
              text="DASHBOARD"
              onClick={() => navigate("/dashboard", { replace: true })}
              style={{ backgroundColor: "#1373FB", color: "#fff" }}
            />
          ) : (
            <>
              <span>
                <Link to={"/login"} style={{ color: "inherit" }}>
                  Sign up
                </Link>
              </span>
              <span>
                <Link to={"/signup"} style={{ color: "inherit" }}>
                  Log In
                </Link>
              </span>
              <Button
                text="FREE DEMO"
                onClick={onClickDemo}
                style={{ backgroundColor: "#1373FB", color: "#fff" }}
              />
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default Navbar;
