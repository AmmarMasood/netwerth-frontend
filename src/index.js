import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import UserStore from "./context/UserContext";
import { BrowserRouter as Router } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <UserStore>
      <Router>
        <App />
      </Router>
    </UserStore>
  </React.StrictMode>
);
