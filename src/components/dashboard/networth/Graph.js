import React from "react";
import "./graph.css";

function GraphLegends() {
  return (
    <div className="graph-container-legends">
      <div>
        <span style={{ backgroundColor: "#247EFD" }}></span>
        <span>Data</span>
      </div>
      <div>
        <span style={{ backgroundColor: "#5BB033" }}></span>
        <span>Assets</span>
      </div>
      <div>
        <span style={{ backgroundColor: "#E3494A" }}></span>
        <span>Liabilities</span>
      </div>
    </div>
  );
}
function Graph() {
  return (
    <div className="graph-container">
      <GraphLegends />
      <h3 style={{ color: "#232358" }}>No data available</h3>
    </div>
  );
}

export default Graph;
