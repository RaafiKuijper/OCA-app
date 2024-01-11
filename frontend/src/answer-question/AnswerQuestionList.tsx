import { InputGroup } from "react-bootstrap";
import { Option } from "../question/questionModels";
import classes from "../styles/answer-question.module.css";

const AnswerQuestionList = (props: { options: Option[] }) => {
  return (
    <section className={classes.answerQuestionList}>
      {props.options.map((option) => (
        <InputGroup key={option.id} className={classes.answerQuestionListGroup}>
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
