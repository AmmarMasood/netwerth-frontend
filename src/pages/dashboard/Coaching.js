import React from "react";
import "./coaching.css";
import { InlineWidget } from "react-calendly";
import PleaseLogin from "../../components/dashboard/PleaseLogin";

function Coaching() {
  return (
    <div>
      <InlineWidget url="https://calendly.com/netwerth/coaching" />
    </div>
  );
}

export default Coaching;
