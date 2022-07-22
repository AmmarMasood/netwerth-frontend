import axios from "axios";
import { message } from "antd";

const url = process.env.REACT_APP_BACKEND_URL;
export const signup = (values) =>
  axios
    .post(`${url}/UserRoutes/addUser`, values)
    .then((res) => res)
    .catch((e) => {
      message.error(
        e.response?.data?.header?.message || "Error while signing up"
      );
    });

export const login = (values) =>
  axios
    .post(`${url}/UserRoutes/login`, values)
    .then((res) => res)
    .catch((e) => {
      message.error(
        e.response?.data?.header?.message || "Error while logging in"
      );
    });

export const logout = (navigate) => {
  localStorage.removeItem("token");
  localStorage.removeItem("id");
  localStorage.removeItem("role");
  // navigate("/login", { replace: true });
};
export const getCurrentUser = (navigate, setUserInfo) => {
  if (localStorage.getItem("token") && localStorage.getItem("id")) {
    axios.defaults.headers.common = {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    };
    axios
      .get(`${url}/UserRoutes/user/${localStorage.getItem("id")}`)
      .then((res) => {
        console.log(res);
        setUserInfo(res.data.data);
      })
      .catch((e) => {
        message.error(
          e.response?.data?.header?.message || "Error while logging in"
        );
      });
  } else {
    logout(navigate);
  }
};
