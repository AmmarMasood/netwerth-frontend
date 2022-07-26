import { Input, message } from "antd";
import React, { useState, useEffect } from "react";
import Option from "./Option";
import "./pfs.css";
import Button from "../../button/Button";
import { ArrowLeftOutlined } from "@ant-design/icons";

function Question3({ setAnswers, answers, current, steps, next, prev }) {
  const [selectedOption1, setSelectedOption1] = useState(false);
  const [option1Answer, setOption1Answer] = useState("");
  const [selectedOption2, setSelectedOption2] = useState(false);
  const [selectedOption3, setSelectedOption3] = useState(false);

  useEffect(() => {
    if (answers[2]) {
      setSelectedOption1(true);
      setOption1Answer(answers[2].answer);

      setSelectedOption2(true);

      setSelectedOption3(true);
    }
  }, [answers]);

  const onChangeOption1 = (v) => {
    if (v.target.checked) {
      setSelectedOption1(v.target.checked);
    } else {
      setSelectedOption1(v.target.checked);
    }
  };

  const onChangeOption2 = (v) => {
    if (v.target.checked) {
      setSelectedOption2(v.target.checked);
    } else {
      setSelectedOption2(v.target.checked);
    }
  };

  const onChangeOption3 = (v) => {
    if (v.target.checked) {
      setSelectedOption3(v.target.checked);
    } else {
      setSelectedOption3(v.target.checked);
    }
  };

  const onNextClick = () => {
    if (selectedOption1 && selectedOption2 && selectedOption3) {
      const a = [...answers];
      if (!option1Answer) {
        message.error("Please enter % salary");
      } else {
        a[2] = {
          questionIndex: 2,

          answer: option1Answer,
          expenses: [],
        };
        setAnswers(a);
        next();
      }
    } else {
      message.error("Please select all options, before moving forward");
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
              Find out the maximum your employer will contribute to your pension
              every month as a % of your salary.
            </p>
          }
          childern={
            <Input
              style={{ width: "100px", margin: "15px" }}
              value={option1Answer}
              prefix="%"
              type="number"
              onChange={(e) => setOption1Answer(e.target.value)}
            />
          }
          borderColor="#FD9125"
        />
        <Option
          borderColor="#FD9125"
          onChange={onChangeOption2}
          selected={selectedOption2}
          text={
            <p className="question-text">
              Ensure that you are contributing the above amount your pension to
              take advantage of maximum employer matching
            </p>
          }
        />
        <Option
          borderColor="#FD9125"
          onChange={onChangeOption3}
          selected={selectedOption3}
          text={
            <p className="question-text">
              If you are self-employed, get a private pension and start
              contributing to it at least 10% of your monthly earnings
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

export default Question3;
