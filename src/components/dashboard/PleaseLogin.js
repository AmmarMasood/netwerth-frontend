import { Button } from "antd";
import React from "react";
import { Link } from "react-router-dom";

function PleaseLogin({ pageName }) {
  return (
    <div>
      <h2>Please login or create an account to access {pageName}</h2>
      <Link to="/login">
        <Button type="primary">Login</Button>
      </Link>
    </div>
  );
}

export default PleaseLogin;
