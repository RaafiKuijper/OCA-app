import { InputGroup } from "react-bootstrap";
import { Option } from "../question/questionModels";
import classes from "../styles/answer-question.module.css";

// This does not work for long lines of text yet.
const AnswerQuestionList = (props: { options: Option[] }) => {
  return (
    <section className={classes.answerQuestionList}>
      {props.options.map((option) => (
        <InputGroup key={option.id} className={classes.answerQuestionListItem}>
          <InputGroup.Checkbox
            onChange={(e) => console.log(e)}
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
