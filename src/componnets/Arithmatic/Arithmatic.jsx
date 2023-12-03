import React, { useState } from "react";
import { Button } from "../Button/Button";
import { useSpring, animated } from "@react-spring/web";

import "./Arithmatic.css";
export const Arithmatic = ({ setOpertor, setEquals, clear, clearHistory }) => {
  const [animationStates, setAnimationStates] = useState({
    plus: false,
    minus: false,
    multiply: false,
    division: false,
    equlas: false,
    clear: false,
  });

  const operatorBtnName = (button) => {
    setAnimationStates((prev) => ({
      ...prev,
      [button]: true,
    }));

    setTimeout(() => {
      setAnimationStates((prev) => ({
        ...prev,
        [button]: false,
      }));
    }, 200);
  };

  const operatorSprings = {
    plus: useSpring({
      transform: animationStates.plus ? "scale(1.10)" : "scale(1)",
    }),
    minus: useSpring({
      transform: animationStates.minus ? "scale(1.10)" : "scale(1)",
    }),
    multiply: useSpring({
      transform: animationStates.multiply ? "scale(1.10)" : "scale(1)",
    }),
    division: useSpring({
      transform: animationStates.division ? "scale(1.10)" : "scale(1)",
    }),
    equlas: useSpring({
      transform: animationStates.equlas ? "scale(1.10)" : "scale(1)",
    }),
    clear: useSpring({
      transform: animationStates.clear ? "scale(1.10)" : "scale(1)",
    }),
  };

  return (
    <div className="container">
      <div className="row">
        <animated.div style={operatorSprings.plus}>
          <Button
            onClick={() => {
              setOpertor("+");
              operatorBtnName("plus");
            }}
          >
            +
          </Button>
        </animated.div>
        <animated.div>
          <Button
            style={operatorSprings.minus}
            onClick={() => {
              setOpertor("-");
              operatorBtnName("minus");
            }}
          >
            -
          </Button>
        </animated.div>
        <animated.div style={operatorSprings.multiply}>
          <Button
            onClick={() => {
              setOpertor("*");
              operatorBtnName("multiply");
            }}
          >
            *
          </Button>
        </animated.div>
        <animated.div style={operatorSprings.division}>
          <Button
            onClick={() => {
              setOpertor("/");
              operatorBtnName("division");
            }}
          >
            /
          </Button>
        </animated.div>
      </div>
      <div className="row">
        <animated.div style={operatorSprings.equlas}>
          <Button
            onClick={() => {
              setEquals(true);
              operatorBtnName("equlas");
            }}
          >
            =
          </Button>
        </animated.div>
        <animated.div>
          <Button
            style={operatorSprings.clear}
            onClick={() => {
              clear();
              operatorBtnName("clear");
            }}
          >
            Ce
          </Button>
        </animated.div>

        <animated.div style={operatorSprings.clear}>
          {/* <Button onClick={clearHistory} */}
          <Button
            onClick={() => {
              clearHistory();
              operatorBtnName("clear");
            }}
            className="clean-history"
          >
            clean history
          </Button>
        </animated.div>
      </div>
    </div>
  );
};
