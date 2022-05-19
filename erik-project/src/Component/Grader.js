import React, { useState, useEffect, useRef } from "react";

export default function Grader() {
  const [grade, setGrade] = useState(0);
  let timesRendered = useRef(0);
  let inputElement = useRef();
  let previousGrade = useRef(0);

  const renderConvertedGrade = (grade) => {
    if (grade > 0 && grade <= 70) {
      return "You Failed The Test!";
    } else if (grade > 70 && grade <= 80) {
      return "You Passed!";
    } else if (grade > 80 && grade <= 100) {
      return "You did Excellent!";
    }
  };

  useEffect(() => {
    timesRendered.current += 1;
    previousGrade.current = grade;
  });

  const focusOnInput = (inputElement) => {
    inputElement.current.focus();
  };

  return (
    <>
      <input
        ref={inputElement}
        type={"number"}
        onChange={(e) => setGrade(parseInt(e.target.value))}
      />
      <p>The Converted Grade is : {renderConvertedGrade(grade)}</p>
      <p>
        Your Previous Grade is : {renderConvertedGrade(previousGrade.current)}
      </p>
      <p>This component has been rendered : {timesRendered.current} times</p>
      <button
        onClick={() => {
          focusOnInput(inputElement);
        }}
      >
        Focus On The Input
      </button>
    </>
  );
}