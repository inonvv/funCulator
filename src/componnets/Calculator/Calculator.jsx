import "./Calculator.css";
import { DisplayScore } from "../DisplayScore/DisplayScore";
import { Calculations } from "../Calculations/Calculations";
import { History } from "../History/History";
import { useEffect, useState } from "react";
import { useSpring, animated } from "@react-spring/web";

export const Calculator = () => {
  const [number1, setNumber1] = useState(undefined);
  const [number2, setNumber2] = useState(undefined);
  const [result, setResult] = useState(undefined);
  const [opertor, setOperator] = useState(undefined);
  const [equals, setEquals] = useState(false);
  const [resultsHistory, setResultsHistory] = useState([]);

  const { color } = useSpring({
    color: equals ? "green" : "red", // Change colors based on condition (for example, equals being true or false)
  });

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

  const checkOpFirst = () => {
    if (opertor && number1 === undefined && number2 === undefined) {
      setOperator(undefined);
      alert("Error! Please input valid numbers before selecting an operator.");
    }
  };
  checkOpFirst();

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
      alert("equals error");
      setEquals(false);
    }
  }, [equals]);

  //JX~4VAzg7sB_A~k
  return (
    <div className="Calculator">
      <div className="left">
        {/* Apply animation to this component */}
        <animated.div style={{ color }}>
          <DisplayScore
            number1={number1}
            number2={number2}
            result={result}
            opertor={opertor}
          />
        </animated.div>

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
