import axios from "axios";
import classes from "../styles/view-question.module.css";
import { useEffect, useState } from "react";
import Question from "./interfaces/QuestionInterface";
import TagResponse from "../tag/models/TagResponse";

function ViewLatestQuestion(props: { question: Question }) {
  const [tags, setTags] = useState<TagResponse[]>([]);

  useEffect(() => {
    const fetchTags = async () => {
      const result = await axios.get("http://localhost:8080/api/v1/tags");
      const data: TagResponse[] = result.data;
      setTags(data.filter((tag) => props.question.tagIds?.includes(tag.id)));
    };

    fetchTags();
  });

  return (
    <>
      <div className={classes.viewQuestion} key={props.question.id}>
        <h3 className={classes.viewQuestionHeading}>
          Question {props.question.id}:
        </h3>
        <h4>{props.question.text}</h4>
        {props.question.fragments.length !== 0 && (
          <div className={classes.viewQuestionFragment}>
            {props.question.fragments.map((fragment) =>
              fragment.text
                .split("\\n")
                .map((line: string) => <pre key={line}>{line}</pre>)
            )}
          </div>
        )}
        <ol>
          {props.question.options.map((option) => (
            <li key={option.id}>{option.text}</li>
          ))}
        </ol>
        <p>{props.question.explanation}</p>
        <div>
          {tags.map((tag) => (
            <dl key={tag.id}>
              <dt>{tag.name}</dt>
              <dd>{tag.chapter}</dd>
              <dd>{tag.summary}</dd>
            </dl>
          ))}
        </div>
      </div>
    </>
  );
}

export default ViewLatestQuestion;
