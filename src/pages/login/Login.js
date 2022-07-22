import React, { useContext, useEffect } from "react";
import Logo from "../../assets/images/logo.svg";
import AuthForm from "../../components/authForm/AuthForm";
import "./login.css";
import TwitterIcon from "../../assets/images/twitter-icon.svg";
import FacebookIcon from "../../assets/images/facebook-icon.svg";
import GoogleIcon from "../../assets/images/google-icon.svg";
import LinkedInIcon from "../../assets/images/linkedin-icon.svg";
import { login } from "../../services/auth";
import { userInfoContext } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useContext(userInfoContext);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      if (localStorage.getItem("role") === "user") {
        navigate("/dashboard", { replace: true });
      } else {
        navigate("/admin/dashboard", { replace: true });
      }
    }
  }, []);

  const onComplete = async (value) => {
    const result = await login(value);
    if (result && result.data.data) {
      setUserInfo(result.data.data);

      if (result.data.data.role === "admin") {
        navigate("/admin/dashboard", { replace: true });
      } else {
        navigate("/dashboard", { replace: true });
      }
      localStorage.setItem("role", result.data.data.role);
      localStorage.setItem("token", result.data.data.token);
      localStorage.setItem("id", result.data.data._id);
    }
  };
  return (
    <div className="auth-page-container">
      <img src={Logo} alt="logo" />
      <AuthForm
        login={true}
        heading="Login"
        buttonText="Log In"
        onFinish={onComplete}
        childern={
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginTop: "10px",
            }}
          >
            <img src={FacebookIcon} alt="" style={{ marginRight: "10px" }} />
            <img src={GoogleIcon} alt="" style={{ marginRight: "10px" }} />
            <img src={LinkedInIcon} alt="" style={{ marginRight: "10px" }} />
            <img src={TwitterIcon} alt="" />
          </div>
        }
      />
    </div>
  );
}

export default Login;
