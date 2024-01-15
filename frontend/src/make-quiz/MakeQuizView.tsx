import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Quiz from "../create-quiz/Quiz";
import Header from "../styled-components/header/Header";

const MakeQuizView = () => {
  const emptyQuiz: Quiz = { id: 0, questions: [] };
  const [quiz, setQuiz] = useState<Quiz>(emptyQuiz);

  const { id } = useParams();
  useEffect(() => {
    const fetchQuiz = async () => {
      const result = await axios.get(`http://localhost:8080/api/v1/quiz/${id}`);
      const data: Quiz = result.data;
      console.log(data);
      setQuiz(data);
    };
    fetchQuiz();
  }, [id]);

  return (
    <>
      <Header text={`Quiz ${id}`} />
      <ol>
        {quiz.questions.map((question) => (
          <li key={question.id}>{question.text}</li>
        ))}
      </ol>
    </>
  );
};

export default MakeQuizView;
