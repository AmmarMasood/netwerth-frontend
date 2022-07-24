import axios from "axios";
import { message } from "antd";

const url = process.env.REACT_APP_BACKEND_URL;
export const createAsset = (values) => {
  console.log(values);
  axios
    .post(`${url}/assetRoutes/addAsset`, values)
    .then((res) => {
      message.success("Asset updated!");
      return res;
    })
    .catch((e) => {
      message.error(
        e.response?.data?.header?.message || "Error while creating pfs"
      );
    });
};

// getAssetByUser
export const getAssetByUserId = (id) =>
  axios
    .get(`${url}/assetRoutes/getAssetByUser/${id}`)
    .then((res) => res)
    .catch((e) => {
      //   message.error(
      //     e.response?.data?.header?.message || "Error while creating pfs"
      //   );
    });
