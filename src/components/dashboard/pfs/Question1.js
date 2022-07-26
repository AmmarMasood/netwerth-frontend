import { DatePicker, message } from "antd";
import React, { useState, useEffect } from "react";
import Option from "./Option";
import "./pfs.css";
import Button from "../../button/Button";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { formatTimeStr } from "antd/lib/statistic/utils";
import { format } from "date-fns";

function Question1({ setAnswers, answers, current, steps, next, prev }) {
  const [selectedOption1, setSelectedOption1] = useState(false);
  const [option1Answer, setOption1Answer] = useState("");
  const [selectedOption2, setSelectedOption2] = useState(false);

  useEffect(() => {
    if (answers[0]) {
      setSelectedOption1(true);
      setSelectedOption2(true);

      setOption1Answer(answers[0].answer);
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

  const onNextClick = () => {
    if (selectedOption1 && selectedOption2) {
      if (!option1Answer) {
        message.error("Please enter date.");
      } else {
        const a = [...answers];
        a[0] = {
          questionIndex: 0,
          answer: option1Answer,
          expenses: [],
        };
        setAnswers(a);
        next();
      }
    } else {
      message.error("Please select both option, before moving forward");
    }
  };

  return (
    <>
      <div>
        <Option
          onChange={onChangeOption1}
          selected={selectedOption1}
          text={<p className="question-text">Calculate your net worth.</p>}
          borderColor="#FD9125"
        />
        <Option
          borderColor="#5BB033"
          onChange={onChangeOption2}
          selected={selectedOption2}
          text={
            <p className="question-text">
              Set aside one hour every month to look at your finances & track
              your net worth. Choose a date now & put it in your calendar.
            </p>
          }
          childern={
            <div style={{ padding: "10px" }}>
              {option1Answer ? (
                <div style={{ marginBottom: "10px" }}>
                  Selected Date: {format(new Date(option1Answer), "dd/MM/yyyy")}
                </div>
              ) : (
                ""
              )}
              <DatePicker onChange={(e) => setOption1Answer(e)} />
            </div>
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

export default Question1;
