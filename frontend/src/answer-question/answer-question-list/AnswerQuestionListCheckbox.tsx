import { InputGroup } from "react-bootstrap";

const AnswerQuestionListCheckbox = (props: {
  onChange: () => void;
  className: string;
  style: object;
  checked: boolean;
}) => {
  return (
    <InputGroup.Checkbox
      onChange={props.onChange}
      className={props.className}
      style={props.style}
      checked={props.checked}
    />
  );
};

export default AnswerQuestionListCheckbox;
