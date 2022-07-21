import axios from "axios";
import { message } from "antd";

const url = process.env.REACT_APP_BACKEND_URL;

export const getAllVideos = () =>
  axios
    .get(`${url}/mediaRoutes/allVideos`)
    .then((res) => res)
    .catch((e) => {
      message.error(
        e.response?.data?.header?.message || "Error while getting all videos"
      );
    });

export const deleteVideo = (id) =>
  axios
    .delete(`${url}/mediaRoutes/deleteVideo/${id}`)
    .then((res) => {
      message.success("Video Deleted!");
      return res;
    })
    .catch((e) => {
      message.error(
        e.response?.data?.header?.message || "Error while deleting video"
      );
    });

export const updateVideo = (id, values) =>
  axios
    .put(`${url}/mediaRoutes/updateVideo/${id}`, values)
    .then((res) => {
      message.success("Video Updated!");
      return res;
    })
    .catch((e) => {
      message.error(
        e.response?.data?.header?.message || "Error while updating video"
      );
    });

export const createVideo = (values) =>
  axios
    .post(`${url}/mediaRoutes/addVideo`, values)
    .then((res) => {
      message.success("Video Added!");
      return res;
    })
    .catch((e) => {
      message.error(
        e.response?.data?.header?.message || "Error while adding video"
      );
    });
