import React, { useState, useEffect } from "react";
import Option from "./Option";
import "./pfs.css";
import Button from "../../button/Button";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { message } from "antd";

function Question4({ setAnswers, answers, current, steps, next, prev }) {
  const [selectedOption1, setSelectedOption1] = useState(false);
  const [selectedOption2, setSelectedOption2] = useState(false);
  const [selectedOption3, setSelectedOption3] = useState(false);
  const [selectedOption4, setSelectedOption4] = useState(false);
  const [selectedOption5, setSelectedOption5] = useState(false);

  useEffect(() => {
    if (answers[3]) {
      if (answers[3].answerIndex === 0) {
        setSelectedOption1(true);
      } else if (answers[3].answerIndex === 1) {
        setSelectedOption2(true);
      } else if (answers[3].answerIndex === 2) {
        setSelectedOption3(true);
      } else if (answers[3].answerIndex === 3) {
        setSelectedOption4(true);
      } else {
        setSelectedOption5(true);
      }
    }
  }, [answers]);

  const onChangeOption1 = (v) => {
    if (v.target.checked) {
      setSelectedOption1(v.target.checked);
      setSelectedOption2(false);
      setSelectedOption3(false);
      setSelectedOption4(false);
      setSelectedOption5(false);
    } else {
      setSelectedOption1(v.target.checked);
    }
  };

  const onChangeOption2 = (v) => {
    if (v.target.checked) {
      setSelectedOption2(v.target.checked);
      setSelectedOption1(false);
      setSelectedOption3(false);
      setSelectedOption4(false);
      setSelectedOption5(false);
    } else {
      setSelectedOption2(v.target.checked);
    }
  };

  const onChangeOption3 = (v) => {
    if (v.target.checked) {
      setSelectedOption3(v.target.checked);
      setSelectedOption1(false);
      setSelectedOption2(false);
      setSelectedOption4(false);
      setSelectedOption5(false);
    } else {
      setSelectedOption3(v.target.checked);
    }
  };

  const onChangeOption4 = (v) => {
    if (v.target.checked) {
      setSelectedOption4(v.target.checked);
      setSelectedOption1(false);
      setSelectedOption2(false);
      setSelectedOption3(false);
      setSelectedOption5(false);
    } else {
      setSelectedOption4(v.target.checked);
    }
  };

  const onChangeOption5 = (v) => {
    if (v.target.checked) {
      setSelectedOption5(v.target.checked);
      setSelectedOption1(false);
      setSelectedOption2(false);
      setSelectedOption3(false);
      setSelectedOption4(false);
    } else {
      setSelectedOption5(v.target.checked);
    }
  };

  const onNextClick = () => {
    if (
      selectedOption1 ||
      selectedOption2 ||
      selectedOption3 ||
      selectedOption4 ||
      selectedOption5
    ) {
      const a = [...answers];
      a[3] = {
        questionIndex: 3,
        answerIndex: selectedOption1
          ? 0
          : selectedOption2
          ? 1
          : selectedOption3
          ? 2
          : selectedOption4
          ? 3
          : 4,
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
              NEVER a good idea to take on debt (except mortgage).
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
              <b>DO NOT</b> get a payday loan, lease a car, guarantee a loan or
              lend money to friends or relatives.
            </p>
          }
        />
        <Option
          borderColor="#FD9125"
          onChange={onChangeOption3}
          selected={selectedOption3}
          text={
            <p className="question-text">
              Interest rate greater than 4%{" "}
              <span
                style={{
                  color: "#FD9125",
                  marginLeft: "5px",
                  fontWeight: "600",
                }}
              >
                Pay ASAP
              </span>
              <br />
              Interest rate less than 4%{" "}
              <span
                style={{
                  color: "#257FFE",
                  marginLeft: "5px",
                  fontWeight: "600",
                }}
              >
                Pay slowly, invest your savings
              </span>
            </p>
          }
        />
        <Option
          borderColor="#FD9125"
          onChange={onChangeOption4}
          selected={selectedOption4}
          text={
            <p className="question-text">
              Do not use credit cards but if you have to, then set up a direct
              debit to pay in full at the end of every month.
            </p>
          }
        />
        <Option
          borderColor="#FD9125"
          onChange={onChangeOption5}
          selected={selectedOption5}
          text={
            <p className="question-text">
              If you are paying interest on a credit card, use balance transfer
              offers to get the interest to zero and set up direct debit to pay
              off the full outstanding amount before the zero-interest period
              ends
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

export default Question4;
