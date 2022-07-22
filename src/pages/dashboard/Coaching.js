import React from "react";
import "./coaching.css";
import { InlineWidget } from "react-calendly";
import PleaseLogin from "../../components/dashboard/PleaseLogin";

function Coaching() {
  return localStorage.getItem("token") ? (
    <div>
      <InlineWidget url="https://calendly.com/netwerth/coaching" />
    </div>
  ) : (
    <PleaseLogin pageName="coaching facility" />
  );
}

export default Coaching;
