import React, { useState, useEffect } from "react";
import Option from "./Option";
import "./pfs.css";
import Button from "../../button/Button";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { message } from "antd";

function Question6({
  setAnswers,
  answers,
  current,
  steps,
  next,
  prev,
  createANewPfs,
}) {
  const [selectedOption1, setSelectedOption1] = useState(false);
  const [selectedOption2, setSelectedOption2] = useState(false);
  const [selectedOption3, setSelectedOption3] = useState(false);

  useEffect(() => {
    if (answers[5]) {
      if (answers[5].answerIndex === 0) {
        setSelectedOption1(true);
      } else if (answers[5].answerIndex === 1) {
        setSelectedOption2(true);
      } else {
        setSelectedOption3(true);
      }
    }
  }, [answers]);

  const onChangeOption1 = (v) => {
    if (v.target.checked) {
      setSelectedOption1(v.target.checked);
      setSelectedOption2(false);
      setSelectedOption3(false);
    } else {
      setSelectedOption1(v.target.checked);
    }
  };

  const onChangeOption2 = (v) => {
    if (v.target.checked) {
      setSelectedOption2(v.target.checked);
      setSelectedOption1(false);
      setSelectedOption3(false);
    } else {
      setSelectedOption2(v.target.checked);
    }
  };

  const onChangeOption3 = (v) => {
    if (v.target.checked) {
      setSelectedOption3(v.target.checked);
      setSelectedOption2(false);
      setSelectedOption1(false);
    } else {
      setSelectedOption3(v.target.checked);
    }
  };

  const onNextClick = () => {
    if (selectedOption1 || selectedOption2 || selectedOption3) {
      const a = [...answers];
      a[5] = {
        questionIndex: 5,
        answerIndex: selectedOption1 ? 0 : selectedOption2 ? 1 : 2,
        answer: "",
        expenses: [],
      };
      setAnswers(a);
      createANewPfs(a);
    } else {
      message.error("Please select an option, before moving forward");
    }
  };

  return (
    <>
      <div>
        <Option
          onChange={onChangeOption1}
          selected={selectedOption1}
          text={
            <p className="question-text">
              Open a stock ISA and select a low-cost index fund like the
              Vanguard S&P <b>500</b> index ETF
            </p>
          }
          borderColor="#FD9125"
        />
        <Option
          borderColor="#FD9125"
          onChange={onChangeOption2}
          selected={selectedOption2}
          text={
            <p className="question-text">
              As soon as your salary hits your account, automatically transfer{" "}
              <b>20%</b> of your earnings to your Stock ISA
            </p>
          }
        />
        <Option
          borderColor="#FD9125"
          onChange={onChangeOption3}
          selected={selectedOption3}
          text={
            <p className="question-text">
              At least <b>80%</b> of your investment should be in a low-cost
              Index ETF. The remaining <b>20%</b> can be in single-stocks,
              commodities or crypto.
            </p>
          }
        />
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: current > 0 ? "space-between" : "flex-end",
          borderTop: "1px solid #D6E0E9",
          paddingTop: "20px",
          position: "absolute",
          marginTop: "50px",
          width: "80vw",
          left: "220px",
        }}
      >
        {current > 0 && (
          <p
            style={{
              margin: "0 8px",
              fontWeight: "600",
              cursor: "pointer",
              fontSize: "16px",
            }}
            onClick={() => prev()}
          >
            <ArrowLeftOutlined /> Back
          </p>
        )}
        {current === steps - 1 && (
          <Button
            text="Complete"
            style={{
              backgroundColor: "#FD9125",
              color: "#fff",
              width: "100px",
              boxShadow: "2px 2px 15px rgba(255, 127, 92, 0.5)",
              borderRadius: "50px",
            }}
            onClick={() => onNextClick()}
          />
        )}
      </div>
    </>
  );
}

export default Question6;
