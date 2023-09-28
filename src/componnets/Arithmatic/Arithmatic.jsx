import { Button } from "../Button/Button";
import "./Arithmatic.css";
export const Arithmatic = ({ setOpertor, setEquals, clear, clearHistory }) => {
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
