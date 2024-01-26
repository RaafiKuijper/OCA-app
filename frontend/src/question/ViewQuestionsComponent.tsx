import axios from "axios";
import { useEffect, useState } from "react";
import Question from "./interfaces/QuestionInterface";
import classes from "../styles/view-question.module.css";

function ViewQuestionsComponent() {
  const [questions, setQuestions] = useState<Question[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(`http://localhost:8080/api/v1/questions`);

      setQuestions(result.data);
    };

    fetchData();
  }, []);

  return (
    <>
      <div className={classes.viewQuestionBox}>
        <p className={classes.viewQuestionHeader}>Questions in the database:</p>
        {questions.map((question) => (
          <div className={classes.viewQuestion} key={question.id}>
            <h3 className={classes.viewQuestionHeading}>
              Question {question.id}:
            </h3>
            <h4>{question.text}</h4>
            {question.fragments.length !== 0 && (
              <div className={classes.viewQuestionFragment}>
                {question.fragments.map((fragment) =>
                  fragment.text
                    .split("\\n")
                    .map((line: string) => <pre key={line}>{line}</pre>)
                )}
              </div>
            )}
            <ol>
              {question.options.map((option) => (
                <li key={option.id}>{option.text}</li>
              ))}
            </ol>
            <p>{question.explanation}</p>
            <div>
              {question.tags.map((tag) => (
                <dl key={tag.id}>
                  <dt>{tag.name}</dt>
                  <dd>{tag.chapter}</dd>
                  <dd>{tag.summary}</dd>
                </dl>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default ViewQuestionsComponent;
