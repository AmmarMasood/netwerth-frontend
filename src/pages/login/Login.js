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
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
import GoogleLogin from "react-google-login";
import { useLinkedIn } from "react-linkedin-login-oauth2";
import TwitterLogin from "react-twitter-login";

function Login() {
  const navigate = useNavigate();
  const { linkedInLogin } = useLinkedIn({
    clientId: "86vhj2q7ukf83q",
    redirectUri: `${window.location.origin}/linkedin`, // for Next.js, you can use `${typeof window === 'object' && window.location.origin}/linkedin`
    onSuccess: (code) => {
      console.log(code);
    },
    onError: (error) => {
      console.log(error);
    },
  });
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

  // facebook logician
  const responseFacebook = (response) => {
    console.log(response);
  };
  const responseGoogle = (response) => {
    console.log(response);
  };
  const resposeTwitter = (err, data) => {
    console.log(err, data);
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
            <FacebookLogin
              appId="1088597931155576"
              autoLoad={false}
              fields="name,email,picture"
              render={(renderProps) => (
                <img
                  onClick={() => renderProps.onClick()}
                  src={FacebookIcon}
                  alt=""
                  style={{ marginRight: "10px", cursor: "pointer" }}
                />
              )}
              callback={responseFacebook}
            />
            <GoogleLogin
              clientId="23840145614-brgdeoloiil9teouiih2na04r8u2iouc.apps.googleusercontent.com"
              render={(renderProps) => (
                <img
                  onClick={renderProps.onClick}
                  src={GoogleIcon}
                  alt=""
                  style={{ marginRight: "10px", cursor: "pointer" }}
                />
              )}
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
              cookiePolicy={"single_host_origin"}
            />
            <img
              src={LinkedInIcon}
              alt=""
              style={{ marginRight: "10px", cursor: "pointer" }}
              onClick={linkedInLogin}
            />{" "}
            <TwitterLogin
              authCallback={resposeTwitter}
              consumerKey={"Dt5othFDrC8wDAhdCXxbEOdEk"}
              consumerSecret={
                "LC8oIqoLH2ZzyHYaCnXkB7QYUvSa7re2dN92hx20pm1V2ZjK8Q"
              }
            >
              {" "}
              <img src={TwitterIcon} alt="" />
            </TwitterLogin>
          </div>
        }
      />
    </div>
  );
}

export default Login;
