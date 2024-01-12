import { InputGroup } from "react-bootstrap";
import { Option } from "../question/questionModels";
import classes from "../styles/answer-question.module.css";

// This does not work for long lines of text yet.
const AnswerQuestionList = (props: {
  options: Option[];
  selectedOptions: number[];
  setSelectedOptions: (options: number[]) => void;
}) => {
  const updateSelectedOptions = (selectedId: number) => {
    let updatedOptions = [];
    if (props.selectedOptions.includes(selectedId)) {
      updatedOptions = props.selectedOptions.filter((id) => id !== selectedId);
    } else {
      updatedOptions = [...props.selectedOptions, selectedId];
    }
    props.setSelectedOptions(updatedOptions);
  };
  return (
    <section className={classes.answerQuestionList}>
      {props.options.map((option) => (
        <InputGroup key={option.id} className={classes.answerQuestionListItem}>
          <InputGroup.Checkbox
            onChange={() => updateSelectedOptions(option.id)}
            className={classes.answerQuestionListCheckbox}
            style={{
              margin: "0",
              height: "1.5em",
              width: "1.5em",
            }}
          />
          <InputGroup.Text
            className={classes.answerQuestionListText}
            style={{
              padding: "0.8em",
              fontSize: "1.2em",
            }}
          >
            {option.text}
          </InputGroup.Text>
        </InputGroup>
      ))}
    </section>
  );
};

export default AnswerQuestionList;
