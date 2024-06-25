import { Spinner as ReactSpinner } from "react-bootstrap";

const Spinner = () => {
  return (
    <ReactSpinner
      animation="border"
      role="status"
      style={{
        width: "100px",
        height: "100px",
        margin: "auto",
        display: "block",
      }}
    ></ReactSpinner>
  );
};

export default Spinner;
