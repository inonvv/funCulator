import "./Calculations.css";
import React, { useState } from "react";
import { Number } from "../Number/Number";
import { Arithmatic } from "../Arithmatic/Arithmatic";

export const Calculations = ({
  setNumber1,
  setNumber2,
  number1,
  number2,
  opertor,
  setOpertor,
  setEquals,
  clear,
  clearHistory,
}) => {
  return (
    <div className="Calculations">
      <Arithmatic
        clear={clear}
        setOpertor={setOpertor}
        setEquals={setEquals}
        clearHistory={clearHistory}
      ></Arithmatic>
      <Number
        setNumber1={setNumber1}
        setNumber2={setNumber2}
        number1={number1}
        number2={number2}
        opertor={opertor}
      />
    </div>
  );
};
