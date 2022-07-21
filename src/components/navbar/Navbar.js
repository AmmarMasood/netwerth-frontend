import React, { useContext } from "react";
import { userInfoContext } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";
import Button from "../button/Button";
import "./navbar.css";

function Navbar() {
  const navigate = useNavigate();
  const [userInfo, serUserInfo] = useContext(userInfoContext);

  const onClickDemo = () => {
    console.log("on click demo");
  };
  return (
    <>
      <div className="navbar-container">
        <h4>Logo Here</h4>
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
              <span>Sign up</span>
              <span>Log In</span>
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
