import { Button } from "../Button/Button";
import "./Arithmatic.css";
export const Arithmatic = ({ setOpertor, setEquals, clear, clearHistory }) => {
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
        <Button
          onClick={() => {
            setOpertor("+");
          }}
        >
          +
        </Button>
        <Button
          onClick={() => {
            setOpertor("-");
          }}
        >
          -
        </Button>
        <Button
          onClick={() => {
            setOpertor("*");
          }}
        >
          *
        </Button>
        <Button
          onClick={() => {
            setOpertor("/");
          }}
        >
          /
        </Button>
      </div>
      <div className="row">
        <Button
          onClick={() => {
            setEquals(true);
          }}
        >
          =
        </Button>
        <Button
          onClick={() => {
            clear();
          }}
        >
          Ce
        </Button>

        <Button onClick={clearHistory} className="clean-history">
          clean history
        </Button>
      </div>
    </div>
  );
};
