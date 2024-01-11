import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Question, { emptyQuestion } from "../question/questionModels";
import AnswerQuestionHeader from "./AnswerQuestionHeader";
import AnswerQuestionList from "./AnswerQuestionList";

// Can I use explanation marks?
const AnswerQuestionView = () => {
  const { id } = useParams();

  const [question, setQuestion] = useState<Question>(emptyQuestion);

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
      <AnswerQuestionHeader text={question.text} />
      <AnswerQuestionList options={question.options} />
      {/* <button>Submit</button> */}
    </>
  );
};

export default AnswerQuestionView;
