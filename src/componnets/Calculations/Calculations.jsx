import "./Calculations.css";
import React, { useState } from "react";
import { Number } from "../Number/Number";
import { Arithmatic } from "../Arithmatic/Arithmatic";
import { useSpring, animated } from "@react-spring/web";

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
  const Bounce = useSpring({
    from: { transform: "scale(1)" },
    to: async (next) => {
      while (true) {
        await next({ transform: "scale(1.25)" });
        await next({ transform: "scale(0.75)" });
        await next({ transform: "scale(1)" });
      }
    },
  });
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
