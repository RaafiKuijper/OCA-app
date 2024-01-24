import { Form, InputGroup } from "react-bootstrap";

const CustomSizeSelector = (props: {
  checked: boolean;
  updateChecked: () => void;
  value: number;
  questionCount: number;
  updateValue: (value: number) => void;
}) => {
  return (
    <>
      <InputGroup>
        <InputGroup.Radio
          checked={props.checked}
          onChange={props.updateChecked}
        />
        <Form.Control
          type="number"
          value={props.value}
          min={1}
          max={props.questionCount}
          style={{ width: "3em" }}
          onChange={(e) => props.updateValue(+e.target.value)}
        />
        <InputGroup.Text style={{ width: "6em" }}>Questions</InputGroup.Text>
      </InputGroup>
    </>
  );
};

export default CustomSizeSelector;
