import { useEffect } from "react";
import classes from "../styles/answer-question.module.css";

// Should work with destructuring
const AnswerQuestionHeader = (props: { text: string }) => {
  useEffect(() => {
    console.log(classes);
  });

  return (
    <>
      <h1 className={classes.answerQuestionHeader}>{props.text}</h1>
    </>
  );
};

export default AnswerQuestionHeader;
