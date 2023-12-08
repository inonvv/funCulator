import { useEffect, useState } from "react";
import "./DisplayScore.css";

export const DisplayScore = ({ number1, number2, result, opertor }) => {
  const [prompt, setPrompt] = useState("");
  const [active, setActive] = useState(false);
  const [opacity, setOpacity] = useState(false);

  useEffect(() => {
    setPrompt(number1);
  }, [number1]);

  useEffect(() => {
    if (number1 && opertor) {
      setPrompt(`${number1} ${opertor}`);
    }
  }, [opertor]);

  useEffect(() => {
    if (number1 && opertor && number2) {
      setPrompt(`${number1} ${opertor} ${number2}`);
    }
  }, [number2]);

  useEffect(() => {
    if (number1 && opertor && number2 && result) {
      setPrompt(`${number1} ${opertor} ${number2} = ${result.toFixed(1)}`);
    }
  }, [result]);

  useEffect(() => {
    setActive(!!prompt);
  }, [prompt]);

  useEffect(() => {
    setOpacity(!!prompt);
  }, [prompt]);

  // איכשהו לעשות תנאי אם אופסיטי
  return (
    <div className={`${active ? " visible" : "  notVisible"}`}>
      <div
        className={`DisplayScore`}
        // style={{ opacity: opacity ? 0 : 1 }}
      >
        {prompt}
      </div>
    </div>
  );
};
