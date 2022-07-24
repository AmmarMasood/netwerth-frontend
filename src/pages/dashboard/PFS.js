import { Steps } from "antd";
import React, { useContext, useEffect, useState } from "react";
import Question1 from "../../components/dashboard/pfs/Question1";

import "./pfs.css";
import Question6 from "../../components/dashboard/pfs/Question6";
import Question5 from "../../components/dashboard/pfs/Question5";
import Question4 from "../../components/dashboard/pfs/Question4";
import Question3 from "../../components/dashboard/pfs/Question3";
import Question2 from "../../components/dashboard/pfs/Question2";
import { createPfs, getPfsByUserId } from "../../services/pfs";
import { userInfoContext } from "../../context/UserContext";

const { Step } = Steps;

const PFS = () => {
  const [userInfo, setUserInfo] = useContext(userInfoContext);
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState([]);

  useEffect(() => {
    if (localStorage.getItem("id")) {
      getPfsByUserIdFromBackend();
    }
  }, []);

  const getPfsByUserIdFromBackend = async () => {
    const res = await getPfsByUserId(userInfo._id);
    console.log(res.data.data.pfs);
    if (
      res &&
      res.data &&
      res.data.data &&
      res.data.data.pfs[0] &&
      res.data.data.pfs[0].questions
    ) {
      setAnswers(res.data.data.pfs[0].questions);
    }
  };
  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  const createANewPfs = async (a) => {
    // console.log(answers);
    const res = await createPfs({ user: userInfo._id, questions: a });
    if (res) {
      setCurrent(0);
    }
    console.log(res);
  };
  const steps = [
    {
      title: "Calculate & Track Your Net Worth",
      content: (
        <Question1
          setAnswers={setAnswers}
          answers={answers}
          current={current}
          steps={6}
          next={next}
          prev={prev}
        />
      ),
    },
    {
      title: "Set up an Emergency Fund",
      content: (
        <Question2
          setAnswers={setAnswers}
          answers={answers}
          current={current}
          steps={6}
          next={next}
          prev={prev}
        />
      ),
    },
    {
      title: "Ensure that you have a pension",
      content: (
        <Question3
          setAnswers={setAnswers}
          answers={answers}
          current={current}
          steps={6}
          next={next}
          prev={prev}
        />
      ),
    },
    {
      title: "Tackle your debt",
      content: (
        <Question4
          setAnswers={setAnswers}
          answers={answers}
          current={current}
          steps={6}
          next={next}
          prev={prev}
        />
      ),
    },
    {
      title: "Automate Your Savings",
      content: (
        <Question5
          setAnswers={setAnswers}
          answers={answers}
          current={current}
          steps={6}
          next={next}
          prev={prev}
        />
      ),
    },
    {
      title: "Automate Your Investments",
      content: (
        <Question6
          setAnswers={setAnswers}
          answers={answers}
          current={current}
          steps={6}
          next={next}
          prev={prev}
          createANewPfs={createANewPfs}
        />
      ),
    },
  ];

  return (
    <>
      <h3
        style={{
          fontStyle: "normal",
          fontWeight: "700",
          fontSize: "24px",
          lineHeight: "24px",
          display: "flex",
          alignItems: "center",
          letterSpacing: "0.01em",
          color: "#232358",
          marginTop: "-50px",
          marginLeft: "-20px",
          marginBottom: "50px",
        }}
      >
        {current === 0
          ? "Net Worth"
          : current === 1
          ? "Emergency Fund"
          : current === 2
          ? "Pension"
          : current === 3
          ? "Debt"
          : current === 4
          ? "Savings"
          : current === 5
          ? "Investments"
          : ""}
      </h3>
      <Steps current={current} labelPlacement="vertical">
        {steps.map((item) => (
          <Step key={item.title} title={item.title} />
        ))}
      </Steps>
      <div className="steps-content">{steps[current].content}</div>

      {/* <div className="steps-action">
        {current < steps.length - 1 && (
          <Button type="primary" onClick={() => next()}>
            Next
          </Button>
        )}
        {current === steps.length - 1 && (
          <Button
            type="primary"
            onClick={() => message.success("Processing complete!")}
          >
            Done
          </Button>
        )}

        {current > 0 && (
          <Button
            style={{
              margin: "0 8px",
            }}
            onClick={() => prev()}
          >
            Previous
          </Button>
        )}
      </div> */}
    </>
  );
};

export default PFS;
