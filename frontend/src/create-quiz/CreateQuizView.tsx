import { useEffect, useState } from "react";
import Header from "../headers/header/Header";
import CreateQuizQuestionCount from "./CreateQuizQuestionCount";
import axios from "axios";
import QuestionCount from "./QuestionCount";
import CreateQuizButton from "./CreateQuizButton";

const CreateQuizView = () => {
  const [questionCount, setQuestionCount] = useState(0);

  useEffect(() => {
    const getQuestionCount = async () => {
      const result = await axios.get(
        "http://localhost:8080/api/v1/questions/count"
      );
      const data: QuestionCount = result.data;
      setQuestionCount(data.count);
    };
    getQuestionCount();
  });

  return (
    <>
      <Header text="Quizzes" />;
      <CreateQuizQuestionCount questionCount={questionCount} />
      <CreateQuizButton />
    </>
  );
};

export default CreateQuizView;
