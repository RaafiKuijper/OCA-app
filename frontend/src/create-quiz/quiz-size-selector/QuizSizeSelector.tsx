import { Form, InputGroup } from "react-bootstrap";

const flex = { display: "flex" };
const center = { ...flex, justifyContent: "center" };

const QuizSizeSelector = () => {
  return (
    <InputGroup
      style={{
        ...center,
        marginTop: "1em",
      }}
    >
      <div
        style={{
          ...center,
          width: "50%",
          flexWrap: "wrap",
        }}
      >
        <span style={flex}>
          <InputGroup.Radio />
          <InputGroup.Text>5 Options</InputGroup.Text>
        </span>
        <span style={flex}>
          <InputGroup.Radio />
          <InputGroup.Text>10 Options</InputGroup.Text>
        </span>
        <span style={flex}>
          <InputGroup.Radio />
          <InputGroup.Text>20 Options</InputGroup.Text>
        </span>
        <span style={{ ...flex }}>
          <InputGroup.Radio />
          <Form.Control type="number" />
          <InputGroup.Text>Options</InputGroup.Text>
        </span>
      </div>
    </InputGroup>
  );
};

export default QuizSizeSelector;
