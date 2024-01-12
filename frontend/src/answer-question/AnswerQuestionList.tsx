import { InputGroup } from "react-bootstrap";
import { Option } from "../question/questionModels";
import classes from "../styles/answer-question.module.css";

// This does not work for long lines of text yet.
const AnswerQuestionList = (props: { options: Option[] }) => {
  return (
    <section className={classes.answerQuestionList}>
      {props.options.map((option) => (
        <InputGroup key={option.id} className={classes.answerQuestionListItem}>
          <InputGroup.Checkbox className={classes.answerQuestionListCheckbox} />
          <InputGroup.Text className={classes.answerQuestionListText}>
            {option.text}
          </InputGroup.Text>
        </InputGroup>
      ))}
    </section>
  );
};

export default AnswerQuestionList;
