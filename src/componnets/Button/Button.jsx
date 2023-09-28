import "./Button.css";
export const Button = ({ children, onClick, className }) => {
  return (
    <button
      className={`general ${className}`}
      onClick={() => {
        onClick();
      }}
    >
      {children}
    </button>
  );
};
