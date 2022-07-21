import axios from "axios";
import { message } from "antd";

const url = process.env.REACT_APP_BACKEND_URL;
export const createPfs = (values) =>
  axios
    .post(`${url}/pfsRoutes/addPfs`, values)
    .then((res) => {
      message.success("PFS Completed!");
      return res;
    })
    .catch((e) => {
      message.error(
        e.response?.data?.header?.message || "Error while creating pfs"
      );
    });

export const getPfsByUserId = (id) =>
  axios
    .get(`${url}/pfsRoutes/getPfsByUser/${id}`)
    .then((res) => res)
    .catch((e) => {
      message.error(
        e.response?.data?.header?.message || "Error while getting pfs"
      );
    });
