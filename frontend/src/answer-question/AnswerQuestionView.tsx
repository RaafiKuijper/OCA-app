import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios, { AxiosResponse } from "axios";
import Question, {
  emptyQuestion,
} from "../question/interfaces/QuestionInterface";
import AnswerQuestionButton from "./answer-question-submit/AnswerQuestionButton";
import classes from "../styles/answer-question.module.css";
import AnswerQuestionFeedback from "./answer-question-feedback/AnswerQuestionFeedback";
import AnswerResponse from "./answer-question-models/AnswerResponse";
import AnswerQuestionList from "./answer-question-list/AnswerQuestionList";
import AnswerQuestionFragment from "./answer-question-fragment/AnswerQuestionFragment";
import Header from "../headers/header/Header";
import AnswerQuestionHint from "./answer-question-hint/AnswerQuestionHint";
import Subheader from "../headers/subheader/Subheader";
import NextAnswer from "../make-quiz/NextAnswer";

const AnswerQuestionView = () => {
  const { quizId, id } = useParams();
  const [selectedOptions, setSelectedOptions] = useState<number[]>([]);
  const [question, setQuestion] = useState<Question>(emptyQuestion);
  const [score, setScore] = useState("");
  const [explanation, setExplanation] = useState("");
  const [hint, setHint] = useState("");
  const navigate = useNavigate();

  const reset = () => {
    setScore("");
    setExplanation("");
    setHint("");
    setQuestion(emptyQuestion);
    setSelectedOptions([]);
  };

  const nextQuestion = async () => {
    if (quizId) {
      const result = await axios.get(
        `http://localhost:8080/api/v1/quiz/${quizId}/next`
      );
      const data: NextAnswer = result.data;

      if (data.id === -1) {
        navigate(`/quiz-results/${quizId}`);
      } else {
        navigate(`/make-quiz/${quizId}/${data.id}`);
      }
    } else {
      navigate("/");
    }
    reset();
  };

  const submitAnswer = async () => {
    if (question.correct > 1 && selectedOptions.length !== question.correct) {
      setScore("");
      setExplanation("");
      setHint(`Should select ${question.correct} options`);
      return;
    }

    setHint("");

    const body = {
      selectedIds: selectedOptions,
      questionId: id,
    };

    let uri;
    if (quizId) {
      uri = `http://localhost:8080/api/v1/quiz/${quizId}/answer`;
    } else {
      uri = "http://localhost:8080/api/v1/answer/submit";
    }

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
  }, [id, quizId]);

  return (
    <section className={classes.AnswerQuestionView}>
      <Header text={question.text} />
      {question.correct > 1 && (
        <Subheader text={`Select ${question.correct} options`} />
      )}
      <AnswerQuestionFragment
        text={question.fragments.map((fragment) => fragment.text)}
      />
      <AnswerQuestionList
        options={question.options}
        selectedOptions={selectedOptions}
        setSelectedOptions={setSelectedOptions}
        correct={question.correct}
      />
      {score ? (
        <AnswerQuestionButton action={nextQuestion} text="Next Question" />
      ) : (
        <AnswerQuestionButton action={submitAnswer} text="Submit Answer" />
      )}
      {hint && <AnswerQuestionHint hint={hint} />}
      <AnswerQuestionFeedback score={score} explanation={explanation} />
    </section>
  );
};

export default AnswerQuestionView;
