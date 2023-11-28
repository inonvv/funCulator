import React from "react";
import { Button } from "../Button/Button";
import "./Number.css";
export const Number = ({
  number1,
  number2,
  opertor,
  setNumber1,
  setNumber2,
}) => {
  const handleNumberClick = (num) => {
    if (opertor != undefined) {
      if (number2) {
        setNumber2(number2 * 10 + num);
      } else {
        setNumber2(num);
      }
    } else {
      if (number1) {
        setNumber1(number1 * 10 + num);
      } else {
        setNumber1(num);
      }
    }
  };

  return (
    <div className="container">
      <div className="row">
        <Button onClick={() => handleNumberClick(1)}>1</Button>
        <Button onClick={() => handleNumberClick(2)}>2</Button>
        <Button onClick={() => handleNumberClick(3)}>3</Button>
      </div>
      <div className="row">
        <Button onClick={() => handleNumberClick(4)}>4</Button>
        <Button onClick={() => handleNumberClick(5)}>5</Button>
        <Button onClick={() => handleNumberClick(6)}>6</Button>
      </div>

      <div className="row">
        <Button onClick={() => handleNumberClick(7)}>7</Button>
        <Button onClick={() => handleNumberClick(8)}>8</Button>
        <Button onClick={() => handleNumberClick(9)}>9</Button>
      </div>
    </div>
  );
};
