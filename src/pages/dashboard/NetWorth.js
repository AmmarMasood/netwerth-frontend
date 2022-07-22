import React from "react";
import "./networth.css";

import TopCard from "../../components/dashboard/networth/TopCard";

import AssetIcon from "../../assets/images/asset-icon.svg";
import LiabilityIcon from "../../assets/images/liability-icon.svg";
import WorthIcon from "../../assets/images/worth-icon.svg";
import SubtractIcon from "../../assets/images/subtract-icon.svg";
import EqualIcon from "../../assets/images/equal-icon.svg";
import MyChallenge from "../../assets/images/my-challenge-icon.svg";
import Graph from "../../components/dashboard/networth/Graph";
import AssetCard from "../../components/dashboard/networth/AssetCard";
import LiabilityCard from "../../components/dashboard/networth/LiabilityCard";

function NetWorth() {
  return (
    <div>
      <div className="dashboard-networth-container">
        <TopCard heading="Assets" value={""} icon={AssetIcon} />
        <TopCard
          heading="Liabilities"
          value={""}
          icon={LiabilityIcon}
          imageIcon={SubtractIcon}
        />
        <TopCard
          heading="Net Worth"
          value={""}
          icon={WorthIcon}
          imageIcon={EqualIcon}
        />
        <div className="topcard-container">
          <div>
            <span style={{ fontSize: "14px" }}>My Challenge Net Worth</span>
            <h4
              style={{ fontSize: "16px", color: "#312B2B", fontWeight: "700" }}
            >
              ""
            </h4>
            <span style={{ fontSize: "12px", color: "#FD9125" }}>
              Share with friends
            </span>
          </div>
          <img src={MyChallenge} alt="icon" />
        </div>
      </div>

      <Graph />
      <div className="networth-bottom-card">
        <AssetCard />
        <LiabilityCard />
      </div>
    </div>
  );
}

export default NetWorth;
