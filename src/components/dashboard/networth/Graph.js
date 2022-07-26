import React, { useContext, useEffect } from "react";
import { userInfoContext } from "../../../context/UserContext";

import {
  XYPlot,
  XAxis,
  YAxis,
  ChartLabel,
  HorizontalGridLines,
  VerticalGridLines,
  LineSeries,
} from "react-vis";
import "./graph.css";
import "react-vis/dist/style.css";
import { getCurrentUser } from "../../../services/auth";

function GraphLegends() {
  return (
    <div className="graph-container-legends">
      <div>
        <span style={{ backgroundColor: "#247EFD" }}></span>
        <span>Net Worth</span>
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
  const [userInfo, setUserInfo] = useContext(userInfoContext);
  const getUserInfo = () => {
    getCurrentUser(() => {}, setUserInfo);
  };
  useEffect(() => {
    getUserInfo();
  }, []);
  const horizontalLabel = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];

  return (
    <div className="graph-container">
      <GraphLegends />
      <XYPlot width={1100} height={350}>
        <XAxis />
        <YAxis
          style={{
            title: { fontSize: "1rem" },
            line: { stroke: "#b5b5b5" },
            text: { fontSize: "7px" },
          }}
        />
        <LineSeries
          curve={null}
          color={"#5BB033"}
          data={horizontalLabel.map((label, i) => ({
            x: i,
            y: userInfo.assets[i],
            yOffset: -6,
            xOffset: 6,
          }))}
        />
        <LineSeries
          curve={null}
          color={"#247EFD"}
          data={horizontalLabel.map((label, i) => ({
            x: i,
            y: userInfo.assets[i] - userInfo.liabilities[i],
          }))}
        />
        <LineSeries
          color="#E3494A"
          data={horizontalLabel.map((label, i) => ({
            x: i,
            y: userInfo.liabilities[i],
          }))}
        />
      </XYPlot>
    </div>
  );
}

export default Graph;
