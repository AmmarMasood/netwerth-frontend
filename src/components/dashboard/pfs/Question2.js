import React, { useState, useEffect } from "react";
import Option from "./Option";
import "./pfs.css";
import Button from "../../button/Button";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { message } from "antd";

function Question2({ setAnswers, answers, current, steps, next, prev }) {
  const [selectedOption1, setSelectedOption1] = useState(false);
  const [selectedOption2, setSelectedOption2] = useState(false);
  const [selectedOption3, setSelectedOption3] = useState(false);

  useEffect(() => {
    if (answers[1]) {
      if (answers[1].answerIndex === 0) {
        setSelectedOption1(true);
      } else if (answers[1].answerIndex === 1) {
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
      setSelectedOption1(false);
      setSelectedOption2(false);
    } else {
      setSelectedOption3(v.target.checked);
    }
  };

  const onNextClick = () => {
    if (selectedOption1 || selectedOption2 || selectedOption3) {
      const a = [...answers];
      a[1] = {
        questionIndex: 1,
        answerIndex: selectedOption1 ? 0 : selectedOption2 ? 1 : 2,
        answer: "",
        expenses: [],
      };
      setAnswers(a);
      next();
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
              Build an emergency fund of <b>£5,000</b> in a cash ISA.
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
              Replenish ASAP if the fund gets used.
            </p>
          }
        />
        <Option
          borderColor="#5BB033"
          onChange={onChangeOption3}
          selected={selectedOption3}
          text={
            <p className="question-text">
              Increase this fund to 6 months of your living expenses after
              paying off any high-interest debt.
              <br />
              <span
                style={{
                  color: "#8596A5",
                  fontWeight: "600",
                  paddingTop: "10px",
                  display: "inline-block",
                }}
              >
                Optional
              </span>
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
        {current < steps - 1 && (
          <Button
            text="Next"
            style={{
              backgroundColor: "#FD9125",
              color: "#fff",
              width: "100px",
              boxShadow: "2px 2px 15px rgba(255, 127, 92, 0.5)",
              borderRadius: "50px",
              justifySelf: "flex-end",
            }}
            onClick={() => onNextClick()}
          />
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
            onClick={() => message.success("Processing complete!")}
          />
        )}
      </div>
    </>
  );
}

export default Question2;
