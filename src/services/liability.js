// admin
// 0YGCFI4wsUHnUA4u
import axios from "axios";
import { message } from "antd";

const url = process.env.REACT_APP_BACKEND_URL;
export const createLiability = (values) => {
  console.log(values);
  axios
    .post(`${url}/liabilityRoutes/addLiability`, values)
    .then((res) => {
      message.success("Liability updated!");
      return res;
    })
    .catch((e) => {
      message.error(
        e.response?.data?.header?.message || "Error while creating Liability"
      );
    });
};

// getAssetByUser
export const getLiabilityByUserId = (id) =>
  axios
    .get(`${url}/liabilityRoutes/getLiabilityByUser/${id}`)
    .then((res) => res)
    .catch((e) => {
      message.error(
        e.response?.data?.header?.message || "Error while creating Liability"
      );
    });
