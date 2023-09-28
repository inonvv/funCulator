import "./history.css";

export const History = ({ resultsHistory }) => {
  return (
    <div className="history">
      {resultsHistory.map((item) => {
        return <p>{item}</p>;
      })}
    </div>
  );
};
