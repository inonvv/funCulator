import "./Calculator.css";
import { DisplayScore } from "../DisplayScore/DisplayScore";
import { Calculations } from "../Calculations/Calculations";
import { History } from "../History/History";
import { useEffect, useState } from "react";
export const Calculator = () => {
  const [number1, setNumber1] = useState(undefined);
  const [number2, setNumber2] = useState(undefined);
  const [result, setResult] = useState(undefined);
  const [opertor, setOperator] = useState(undefined);
  const [equals, setEquals] = useState(false);
  const [resultsHistory, setResultsHistory] = useState([]);

  const calculateResult = (number1, number2, opertor) => {
    switch (opertor) {
      case "+":
        return number1 + number2;

      case "-":
        return number1 - number2;

      case "*":
        return number1 * number2;

      case "/":
        return number1 / number2;
    }
  };

  const clear = () => {
    setNumber1(undefined);
    setNumber2(undefined);
    setResult(undefined);
    setOperator(undefined);
    setEquals(false);
  };
  const clearHistory = () => {
    setResultsHistory([]);
  };
  useEffect(() => {
    if (
      equals == true &&
      number1 != undefined &&
      number2 != undefined &&
      opertor != undefined
    ) {
      const res = calculateResult(number1, number2, opertor);

      setResult(res);

      setResultsHistory([
        ...resultsHistory,
        `${number1} ${opertor} ${number2} = ${res.toFixed(2)}`,
      ]);
      setEquals(false);
    } else if (equals == true) {
      alert("Error try again!");
      setEquals(false);
    }
  }, [equals]);

  return (
    <div className="Calculator">
      <div className="left">
        <DisplayScore
          number1={number1}
          number2={number2}
          result={result}
          opertor={opertor}
        />
        <Calculations
          setNumber1={setNumber1}
          setNumber2={setNumber2}
          setResult={setResult}
          clear={clear}
          number1={number1}
          number2={number2}
          opertor={opertor}
          setOpertor={setOperator}
          setEquals={setEquals}
          clearHistory={clearHistory}
        ></Calculations>
      </div>
      <History resultsHistory={resultsHistory}></History>
    </div>
  );
};
