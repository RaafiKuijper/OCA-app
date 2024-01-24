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
      <InputGroup.Radio
        checked={props.checked}
        onChange={props.updateChecked}
      />
      <Form.Control
        type="number"
        min={1}
        max={props.questionCount}
        onChange={(e) => props.updateValue(+e.target.value)}
      />
    </>
  );
};

export default CustomSizeSelector;
