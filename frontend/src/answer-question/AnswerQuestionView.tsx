import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios, { AxiosResponse } from "axios";
import Question, {
  emptyQuestion,
} from "../question/interfaces/QuestionInterface";
import AnswerQuestionHeader from "./AnswerQuestionHeader";
import AnswerQuestionSubmit from "./answer-question-submit/AnswerQuestionSubmit";
import classes from "../styles/answer-question.module.css";
import AnswerQuestionFeedback from "./answer-question-feedback/AnswerQuestionFeedback";
import AnswerResponse from "./answer-question-models/AnswerResponse";
import AnswerQuestionList from "./answer-question-list/AnswerQuestionList";
import AnswerQuestionFragment from "./answer-question-fragment/AnswerQuestionFragment";

const AnswerQuestionView = () => {
  const { id } = useParams();
  const [selectedOptions, setSelectedOptions] = useState<number[]>([]);
  const [question, setQuestion] = useState<Question>(emptyQuestion);
  const [score, setScore] = useState("");
  const [explanation, setExplanation] = useState("");

  const submitAnswer = async () => {
    const body = {
      selectedIds: selectedOptions,
      questionId: id,
    };
    const uri = "http://localhost:8080/api/v1/answer/submit";
    console.log(body);
    const result: AxiosResponse<AnswerResponse> = await axios.post(uri, body);
    setScore(result.data.passed ? "Passed" : "Failed");
    setExplanation(result.data.explanation);
  };

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
    <section className={classes.AnswerQuestionView}>
      <AnswerQuestionHeader text={question.text} />
      <AnswerQuestionFragment
        text={question.fragments.map((fragment) => fragment.text)}
      />
      <AnswerQuestionList
        options={question.options}
        selectedOptions={selectedOptions}
        setSelectedOptions={setSelectedOptions}
        correct={question.correct}
      />
      <AnswerQuestionSubmit submitAnswer={submitAnswer} />
      <AnswerQuestionFeedback score={score} explanation={explanation} />
    </section>
  );
};

export default AnswerQuestionView;
