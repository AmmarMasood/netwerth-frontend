import { Input, message } from "antd";
import React, { useRef, useState, useEffect } from "react";
import MyModal from "../../modal/Modal";
import Option from "./Option";
import "./pfs.css";
import Add from "../../../assets/images/add-with-text.svg";
import Button from "../../button/Button";
import { ArrowLeftOutlined } from "@ant-design/icons";

function Question5({ setAnswers, answers, current, steps, next, prev }) {
  const [showModal, setShowModal] = useState(false);
  const [selectedOption1, setSelectedOption1] = useState(false);
  const [option1Answers, setOption1Answers] = useState([]);
  const [selectedOption2, setSelectedOption2] = useState(false);
  const [selectedOption3, setSelectedOption3] = useState(false);
  const [selectedOption4, setSelectedOption4] = useState(false);

  useEffect(() => {
    if (answers[4]) {
      if (answers[4].answerIndex === 0) {
        setSelectedOption1(true);
        setOption1Answers(answers[4].expenses);
      } else if (answers[4].answerIndex === 1) {
        setSelectedOption2(true);
      } else if (answers[4].answerIndex === 2) {
        setSelectedOption3(true);
      } else {
        setSelectedOption4(true);
      }
    }
  }, [answers]);

  const modalFields = [
    {
      fieldName: "expenseName",
      label: "Expense Name",
      ref: useRef(null),
      type: "text",
    },
    {
      fieldName: "expenseValue",
      label: "Expense Value",
      ref: useRef(null),
      type: "number",
    },
  ];

  const onChangeOption1 = (v) => {
    if (v.target.checked) {
      setSelectedOption1(v.target.checked);
      setSelectedOption2(false);
      setSelectedOption3(false);
      setSelectedOption4(false);
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
    } else {
      setSelectedOption2(v.target.checked);
    }
  };

  const onChangeOption3 = (v) => {
    if (v.target.checked) {
      setSelectedOption3(v.target.checked);
      setSelectedOption2(false);
      setSelectedOption4(false);
      setSelectedOption1(false);
    } else {
      setSelectedOption3(v.target.checked);
    }
  };

  const onChangeOption4 = (v) => {
    if (v.target.checked) {
      setSelectedOption4(v.target.checked);
      setSelectedOption2(false);
      setSelectedOption1(false);
      setSelectedOption3(false);
    } else {
      setSelectedOption4(v.target.checked);
    }
  };

  const handleCompleted = (values) => {
    setOption1Answers((prevValue) => [
      ...prevValue,
      {
        _id: new Date().getUTCMilliseconds() + Math.random(),
        name: values[0].ref.current.input.value,
        value: values[1].ref.current.input.value,
      },
    ]);
    setShowModal(false);
  };

  const handleChange = (field, value) => {
    const f = option1Answers.map((f) => {
      if (f._id === field._id) {
        f.value = value;
        return f;
      }
      return f;
    });
    setOption1Answers(f);
  };

  const onNextClick = () => {
    if (
      selectedOption1 ||
      selectedOption2 ||
      selectedOption3 ||
      selectedOption4
    ) {
      if (selectedOption1 && option1Answers.length <= 0) {
        message.error("Please add items to major expense list");
      } else {
        const a = [...answers];
        a[4] = {
          questionIndex: 4,
          answerIndex: selectedOption1
            ? 0
            : selectedOption2
            ? 1
            : selectedOption3
            ? 2
            : 3,
          answer: "",
          expenses: selectedOption1 ? option1Answers : [],
        };
        setAnswers(a);
        next();
      }
    } else {
      message.error("Please select an option, before moving forward");
    }
  };
  return (
    <>
      <div>
        <MyModal
          modalFields={modalFields}
          simple
          visible={showModal}
          setVisible={setShowModal}
          handleCompleted={handleCompleted}
          title="Create Expense"
        />
        <Option
          onChange={onChangeOption1}
          selected={selectedOption1}
          text={
            <p className="question-text">
              List down all your major, one-off expenses for the next five
              years. These are your saving goals.
            </p>
          }
          borderColor="#FD9125"
          childern={
            <div style={{ display: "flex", alignItems: "center" }}>
              <div
                style={{
                  width: "500px",
                  display: "flex",
                  flexWrap: "wrap",
                  padding: "15px",
                }}
              >
                {option1Answers.map((a) => (
                  <div
                    style={{
                      width: "150px",
                      marginRight: "10px",
                      marginTop: "10px",
                    }}
                  >
                    <span style={{ color: "#232358" }}>{a.name}</span>
                    <Input
                      value={a.value}
                      prefix="£"
                      style={{ marginTop: "5px" }}
                      onChange={(e) => handleChange(a, e.target.value)}
                    />
                  </div>
                ))}
              </div>
              <img
                src={Add}
                alt="alt"
                style={{ float: "right", cursor: "pointer" }}
                onClick={() => setShowModal(true)}
              />
            </div>
          }
        />
        <Option
          borderColor="#FD9125"
          onChange={onChangeOption2}
          selected={selectedOption2}
          text={
            <p className="question-text">
              Open a savings account with a bank that allows you to have
              multiple saving buckets you can contribute to.
            </p>
          }
        />
        <Option
          borderColor="#FD9125"
          onChange={onChangeOption3}
          selected={selectedOption3}
          text={
            <p className="question-text">
              As soon as your salary hits your account, automatically transfer{" "}
              <b>10%</b> of your earnings to your savings account
            </p>
          }
        />
        <Option
          borderColor="#FD9125"
          onChange={onChangeOption4}
          selected={selectedOption4}
          text={
            <p className="question-text">
              Use a Lifetime ISA to save for a home deposit to take advantage of{" "}
              <b>25%</b> top up from the government.
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

export default Question5;
