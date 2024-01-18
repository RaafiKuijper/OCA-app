import axios from "axios";
import { Button } from "react-bootstrap";
import NextAnswer from "./NextAnswer";
import { useNavigate } from "react-router-dom";

const MakeQuizButton = (props: { id: number }) => {
  const navigate = useNavigate();

  const startQuiz = async () => {
    const result = await axios.get(
      `http://localhost:8080/api/v1/quiz/${props.id}/next`
    );
    const data: NextAnswer = result.data;
    navigate(`/make-quiz/${props.id}/${data.id}`);
  };

  return (
    <div
      className="d-grid gap-2"
      style={{ width: "75%", margin: "0 auto", marginTop: "3em" }}
    >
      <Button variant="secondary" size="lg" onClick={startQuiz}>
        Start Quiz
      </Button>
    </div>
  );
};

export default MakeQuizButton;
