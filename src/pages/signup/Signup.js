import React, { useEffect } from "react";
import Logo from "../../assets/images/logo.svg";
import AuthForm from "../../components/authForm/AuthForm";
import { useNavigate } from "react-router-dom";
import "./signup.css";
import TwitterIcon from "../../assets/images/twitter-icon.svg";
import FacebookIcon from "../../assets/images/facebook-icon.svg";
import GoogleIcon from "../../assets/images/google-icon.svg";
import LinkedInIcon from "../../assets/images/linkedin-icon.svg";
import { signup } from "../../services/auth";

function Signup() {
  const navigate = useNavigate();

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
    const result = await signup(value);
    if (result && result.data) {
      navigate("/login", { replace: true });
    }
  };
  return (
    <div className="auth-page-container">
      <img src={Logo} alt="logo" />
      <AuthForm
        onFinish={onComplete}
        login={false}
        heading="Sign Up"
        buttonText="Sign Up"
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

export default Signup;
