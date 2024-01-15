import axios from "axios";
import { Button } from "react-bootstrap";
import Quiz from "./Quiz";
import { useNavigate } from "react-router-dom";

const CreateQuizButton = () => {
  const navigate = useNavigate();

  const createQuiz = async () => {
    const result = await axios.post("http://localhost:8080/api/v1/quiz/create");
    const data: Quiz = result.data;
    const quizId = data.id;
    navigate(`../make-quiz/${quizId}`);
  };

  return (
    <div className="d-grid gap-2">
      <Button
        variant="secondary"
        size="lg"
        style={{ width: "30%", margin: "1em auto", fontStyle: "900" }}
        onClick={() => createQuiz()}
      >
        Create Quiz
      </Button>
      ;
    </div>
  );
};

export default CreateQuizButton;
