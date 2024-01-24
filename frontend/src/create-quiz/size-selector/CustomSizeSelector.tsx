import { useState } from "react";
import { Form, InputGroup } from "react-bootstrap";

const CustomSizeSelector = (props: {
  checked: boolean;
  updateChecked: () => void;
  questionCount: number;
  updateValue: (value: number) => void;
}) => {
  const [value, setValue] = useState<number>(0);

  return (
    <>
      <InputGroup>
        <InputGroup.Radio
          checked={props.checked}
          onChange={props.updateChecked}
        />
        <Form.Control
          type="number"
          value={value || props.questionCount}
          min={1}
          max={props.questionCount}
          style={{ width: "4em" }}
          onChange={(e) => {
            setValue(+e.target.value);
            props.updateValue(+e.target.value);
          }}
        />
        <InputGroup.Text style={{ width: "6em" }}>Questions</InputGroup.Text>
      </InputGroup>
    </>
  );
};

export default CustomSizeSelector;
