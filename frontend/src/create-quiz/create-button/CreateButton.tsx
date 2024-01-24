import axios from "axios";
import { Button } from "react-bootstrap";
import Quiz from "../models/Quiz";
import { useNavigate } from "react-router-dom";

const CreateButton = (props: { quizSize: number }) => {
  const navigate = useNavigate();

  const createQuiz = async () => {
    const result = await axios.post(
      `http://localhost:8080/api/v1/quiz/create/${props.quizSize}`
    );
    const data: Quiz = result.data;
    const quizId = data.id;
    navigate(`../make-quiz/${quizId}`);
  };

  return (
    <div className="d-grid gap-2">
      <Button
        variant="secondary"
        size="lg"
        style={{
          width: "50%",
          margin: "1em auto",
          fontStyle: "900",
        }}
        onClick={() => createQuiz()}
      >
        Create Quiz
      </Button>
      ;
    </div>
  );
};

export default CreateButton;
