import { InputGroup } from "react-bootstrap";

const AnswerQuestionListRadio = (props: {
  onChange: () => void;
  className: string;
  style: object;
  checked: boolean;
}) => {
  return (
    <InputGroup.Radio
      onChange={props.onChange}
      className={props.className}
      style={props.style}
      checked={props.checked}
    />
  );
};

export default AnswerQuestionListRadio;
