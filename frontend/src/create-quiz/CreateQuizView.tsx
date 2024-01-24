import { useEffect, useState } from "react";
import Header from "../headers/header/Header";
import QuizQuestionCount from "./quiz-question-count/QuizQuestionCount";
import axios from "axios";
import QuestionCount from "./models/QuestionCount";
import CreateQuizButton from "./create-quiz-button/CreateQuizButton";
import QuizSizeSelector from "./quiz-size-selector/QuizSizeSelector";

const CreateQuizView = () => {
  const [questionCount, setQuestionCount] = useState(0);
  const [quizSize, setQuizSize] = useState(1);

  useEffect(() => {
    const getQuestionCount = async () => {
      const result = await axios.get(
        "http://localhost:8080/api/v1/questions/count"
      );
      const data: QuestionCount = result.data;
      setQuestionCount(data.count);
      setQuizSize(data.count);
    };
    getQuestionCount();
  }, []);

  return (
    <>
      <Header text="Quizzes" />;
      <QuizQuestionCount questionCount={questionCount} />
      <QuizSizeSelector
        setQuizSize={setQuizSize}
        questionCount={questionCount}
      />
      <CreateQuizButton quizSize={quizSize} />
    </>
  );
};

export default CreateQuizView;
