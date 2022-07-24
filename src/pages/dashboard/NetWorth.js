import React, { useContext, useRef } from "react";
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
import MyModal from "../../components/modal/Modal";
import { getCurrentUser } from "../../services/auth";
import { userInfoContext } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";
import { updateUser } from "../../services/users";

function NetWorth() {
  const [userInfo, setUserInfo] = useContext(userInfoContext);
  const navigate = useNavigate();
  const [totalAsset, setTotalAsset] = React.useState("");
  const [totalLiability, setTotalLiability] = React.useState("");
  const [networth, setNetWorth] = React.useState("");

  const [showModal, setShowModal] = React.useState("");
  const [newNetworth, setNewNetworth] = React.useState("");
  const [goalNetWorth, setGoalWorth] = React.useState("");

  const modalFields = [
    {
      fieldName: "goalWorth",
      label: "Challenge Net Worth",
      ref: useRef(null),
      type: "number",
    },
  ];

  React.useEffect(() => {
    setNetWorth(totalAsset - totalLiability);
  }, [totalAsset, totalLiability]);

  const getPersonNetwort = async () => {
    await getCurrentUser(navigate, setUserInfo);
  };
  const handleCompleted = async (values) => {
    console.log("ammar", values);
    if (localStorage.getItem("id")) {
      await updateUser(localStorage.getItem("id"), {
        goalNetWorth: values[0].ref.current.input.value,
      });
      console.log(values);
      setShowModal(false);
      getPersonNetwort();
    }
  };

  return (
    <div>
      <MyModal
        modalFields={modalFields}
        simple
        visible={showModal}
        setVisible={setShowModal}
        handleCompleted={handleCompleted}
        title="My Goal"
      />

      <div className="dashboard-networth-container">
        <TopCard heading="Assets" value={totalAsset} icon={AssetIcon} />
        <TopCard
          heading="Liabilities"
          value={totalLiability}
          icon={LiabilityIcon}
          imageIcon={SubtractIcon}
        />
        <TopCard
          heading="Net Worth"
          value={networth}
          icon={WorthIcon}
          imageIcon={EqualIcon}
        />
        <div className="topcard-container">
          <div>
            <span style={{ fontSize: "14px" }}>My Challenge Net Worth</span>
            <h4
              style={{ fontSize: "16px", color: "#312B2B", fontWeight: "700" }}
            >
              {userInfo.goalNetWorth}
            </h4>
            <span style={{ fontSize: "12px", color: "#FD9125" }}>
              Share with friends
            </span>
            <span
              style={{
                fontSize: "12px",
                color: "#FD9125",
                marginLeft: "10px",
                cursor: "pointer",
              }}
              onClick={() => setShowModal(true)}
            >
              Update
            </span>
          </div>
          <img src={MyChallenge} alt="icon" />
        </div>
      </div>

      <Graph />
      <div className="networth-bottom-card">
        <AssetCard setTotalAsset={setTotalAsset} />
        <LiabilityCard setTotalLiability={setTotalLiability} />
      </div>
    </div>
  );
}

export default NetWorth;
