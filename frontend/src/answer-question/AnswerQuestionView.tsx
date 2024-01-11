import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Question from "../question/QuestionInterface";
import AnswerQuestionHeader from "./AnswerQuestionHeader";

// Can I use explanation marks?
const AnswerQuestionView = () => {
  const { id } = useParams();
  const [question, setQuestion] = useState<Question>();

  useEffect(() => {
    const fetchQuestion = async (id: string) => {
      const response = await axios.get(
        `http://localhost:8080/api/v1/questions/${id}`
      );
      const questionData: Question = response.data;
      setQuestion(questionData);
    };
    fetchQuestion(id!);
  }, [id]);

  return (
    <>
      {question && <AnswerQuestionHeader text={question?.text} />}
      <ol>
        {question?.options.map((option) => (
          <li key={option.id}>{option.text}</li>
        ))}
      </ol>
      {/* <button>Submit</button> */}
    </>
  );
};

export default AnswerQuestionView;
