import axios from "axios";
import { message } from "antd";

const url = process.env.REACT_APP_BACKEND_URL;

export const getAllUsers = () =>
  axios
    .get(`${url}/UserRoutes/allUsers`)
    .then((res) => res)
    .catch((e) => {
      message.error(
        e.response?.data?.header?.message || "Error while getting all users"
      );
    });

export const deleteUser = (id) =>
  axios
    .delete(`${url}/UserRoutes/deleteUser/${id}`)
    .then((res) => {
      message.success("User Deleted!");
      return res;
    })
    .catch((e) => {
      message.error(
        e.response?.data?.header?.message || "Error while deleting user"
      );
    });

export const updateUser = (id, values) =>
  axios
    .put(`${url}/UserRoutes/updateUser/${id}`, values)
    .then((res) => {
      message.success("User Updated!");
      return res;
    })
    .catch((e) => {
      message.error(
        e.response?.data?.header?.message || "Error while updating user"
      );
    });
