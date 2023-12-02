// import React from "react";
// import { Button } from "../Button/Button";
// import "./Number.css";
// export const Number = ({
//   number1,
//   number2,
//   opertor,
//   setNumber1,
//   setNumber2,
// }) => {
//   const handleNumberClick = (num) => {
//     if (opertor != undefined) {
//       if (number2) {
//         setNumber2(number2 * 10 + num);
//       } else {
//         setNumber2(num);
//       }
//     } else {
//       if (number1) {
//         setNumber1(number1 * 10 + num);
//       } else {
//         setNumber1(num);
//       }
//     }
//   };

//   return (
//     <div className="container">
//       <div className="row">
//         <Button onClick={() => handleNumberClick(1)}>1</Button>
//         <Button onClick={() => handleNumberClick(2)}>2</Button>
//         <Button onClick={() => handleNumberClick(3)}>3</Button>
//       </div>
//       <div className="row">
//         <Button onClick={() => handleNumberClick(4)}>4</Button>
//         <Button onClick={() => handleNumberClick(5)}>5</Button>
//         <Button onClick={() => handleNumberClick(6)}>6</Button>
//       </div>

//       <div className="row">
//         <Button onClick={() => handleNumberClick(7)}>7</Button>
//         <Button onClick={() => handleNumberClick(8)}>8</Button>
//         <Button onClick={() => handleNumberClick(9)}>9</Button>
//       </div>
//     </div>
//   );
// };
// import React from "react";
// import { useSpring, animated } from "@react-spring/web";
// import { Button } from "../Button/Button";
// import "./Number.css";

// export const Number = ({
//   number1,
//   number2,
//   opertor,
//   setNumber1,
//   setNumber2,
// }) => {
//   const Bounce = useSpring({
//     from: { transform: "scale(1)" },
//     to: async (next) => {
//       await next({ transform: "scale(0.95)" });
//       await next({ transform: "scale(1)" });
//     },
//   });

//   const handleNumberClick = (num) => {
//     if (opertor != undefined) {
//       if (number2) {
//         setNumber2(number2 * 10 + num);
//       } else {
//         setNumber2(num);
//       }
//     } else {
//       if (number1) {
//         setNumber1(number1 * 10 + num);
//       } else {
//         setNumber1(num);
//       }
//     }
//   };

//   return (
//     <div className="container">
//       <div className="row">
//         <animated.div style={Bounce}>
//           <Button onClick={() => handleNumberClick(1)}>1</Button>
//         </animated.div>
//         <animated.div style={Bounce}>
//           <Button onClick={() => handleNumberClick(2)}>2</Button>
//         </animated.div>
//         <animated.div style={Bounce}>
//           <Button onClick={() => handleNumberClick(3)}>3</Button>
//         </animated.div>
//       </div>
//       <div className="row">
//         <animated.div style={Bounce}>
//           <Button onClick={() => handleNumberClick(4)}>4</Button>
//         </animated.div>
//         <animated.div style={Bounce}>
//           <Button onClick={() => handleNumberClick(5)}>5</Button>
//         </animated.div>
//         <animated.div style={Bounce}>
//           <Button onClick={() => handleNumberClick(6)}>6</Button>
//         </animated.div>
//       </div>
//       <div className="row">
//         <animated.div style={Bounce}>
//           <Button onClick={() => handleNumberClick(7)}>7</Button>
//         </animated.div>
//         <animated.div style={Bounce}>
//           <Button onClick={() => handleNumberClick(8)}>8</Button>
//         </animated.div>
//         <animated.div style={Bounce}>
//           <Button onClick={() => handleNumberClick(9)}>9 </Button>
//         </animated.div>
//       </div>
//     </div>
//   );
// };
import React, { useState } from "react";
import { useSpring, animated } from "@react-spring/web";
import { Button } from "../Button/Button";
import "./Number.css";

export const Number = ({
  number1,
  number2,
  opertor,
  setNumber1,
  setNumber2,
}) => {
  const [animationStates, setAnimationStates] = useState({
    one: false,
    two: false,
    three: false,
  });

  const handleNumberClick = (num, button) => {
    if (opertor !== undefined) {
      setNumber2((prev) => (prev ? prev * 10 + num : num));
    } else {
      setNumber1((prev) => (prev ? prev * 10 + num : num));
    }

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

  const numberSprings = {
    one: useSpring({
      transform: animationStates.one ? "scale(1.10)" : "scale(1)",
    }),
    two: useSpring({
      transform: animationStates.two ? "scale(1.10)" : "scale(1)",
    }),
    three: useSpring({
      transform: animationStates.three ? "scale(1.10)" : "scale(1)",
    }),
  };

  return (
    <div className="container">
      <div className="row">
        <animated.div style={numberSprings.one}>
          <Button onClick={() => handleNumberClick(1, "one")}>1</Button>
        </animated.div>
        <animated.div style={numberSprings.two}>
          <Button onClick={() => handleNumberClick(2, "two")}>2</Button>
        </animated.div>
        <animated.div style={numberSprings.three}>
          <Button onClick={() => handleNumberClick(3, "three")}>3</Button>
        </animated.div>
      </div>
      <div className="row">
        <animated.div style={numberSprings.four}>
          <Button onClick={() => handleNumberClick(4, "four")}>4</Button>
        </animated.div>
        <animated.div style={numberSprings.five}>
          <Button onClick={() => handleNumberClick(5, "five")}>5</Button>
        </animated.div>
        <animated.div style={numberSprings.six}>
          <Button onClick={() => handleNumberClick(6, "six")}>6</Button>
        </animated.div>
      </div>
      <div className="row">
        <animated.div style={numberSprings.seven}>
          <Button onClick={() => handleNumberClick(7, "seven")}>7</Button>
        </animated.div>
        <animated.div style={numberSprings.eight}>
          <Button onClick={() => handleNumberClick(8, "eight")}>8</Button>
        </animated.div>
        <animated.div style={numberSprings.nine}>
          <Button onClick={() => handleNumberClick(9, "nine")}>9</Button>
        </animated.div>
      </div>
    </div>
  );
};
