import { InputGroup } from "react-bootstrap";

const DefaultSizeSelector = (props: {
  checked: boolean;
  option: number;
  update: () => void;
}) => {
  return (
    <InputGroup>
      <InputGroup.Radio checked={props.checked} onChange={props.update} />
      <InputGroup.Text style={{ width: "10em" }}>
        {props.option} Questions
      </InputGroup.Text>
    </InputGroup>
  );
};

export default DefaultSizeSelector;
