import { InputGroup } from "react-bootstrap";

const DefaultSizeSelector = (props: {
  checked: boolean;
  option: number;
  update: () => void;
}) => {
  return (
    <>
      <InputGroup.Radio checked={props.checked} onChange={props.update} />
      <InputGroup.Text>{props.option} Questions</InputGroup.Text>
    </>
  );
};

export default DefaultSizeSelector;
