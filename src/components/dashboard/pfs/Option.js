import { Checkbox } from "antd";
import React from "react";

function Option({ onChange, selected, text, childern, borderColor }) {
  return (
    <div className="pfs-option-container">
      <Checkbox onChange={onChange} checked={selected} />
      <div
        className="pfs-option"
        style={{ borderLeft: `5px solid ${borderColor}`, borderRadius: "5px" }}
      >
        <>{text}</>
        {childern && <>{childern}</>}
      </div>
    </div>
  );
}

export default Option;
