import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Quiz from "../create-quiz/models/Quiz";
import Header from "../headers/header/Header";
import MakeQuizList from "./MakeQuizList";
import MakeQuizButton from "./MakeQuizButton";

const MakeQuizView = () => {
  const emptyQuiz: Quiz = { id: 0, questions: [] };
  const [quiz, setQuiz] = useState<Quiz>(emptyQuiz);

  const { id } = useParams();
  useEffect(() => {
    const fetchQuiz = async () => {
      const result = await axios.get(`http://localhost:8080/api/v1/quiz/${id}`);
      const data: Quiz = result.data;
      setQuiz(data);
    };
    fetchQuiz();
  }, [id]);

  return (
    <article style={{ margin: 0 }}>
      <Header text={`Quiz ${id}`} />
      <h2 style={{ textAlign: "center" }}>{quiz.questions.length} Questions</h2>
      <MakeQuizList questions={quiz.questions} />
      <MakeQuizButton id={quiz.id} />
    </article>
  );
};

export default MakeQuizView;
