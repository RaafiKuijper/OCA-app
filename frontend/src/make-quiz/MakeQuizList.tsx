import { Button, ListGroup } from "react-bootstrap";
import QuizQuestion from "../create-quiz/QuizQuestion";
import { useNavigate } from "react-router-dom";

const MakeQuizList = (props: { questions: QuizQuestion[] }) => {
  const navigate = useNavigate();

  return (
    <section
      style={{ display: "flex", justifyContent: "center", width: "100%" }}
    >
      <ListGroup style={{ width: "90%", marginTop: "5em" }}>
        {props.questions.map((question) => (
          <ListGroup.Item
            key={question.id}
            style={{ display: "flex", alignItems: "center", marginLeft: "0" }}
          >
            <div>
              <Button
                variant="secondary"
                style={{ marginRight: "1em" }}
                onClick={() => navigate(`../../answer-question/${question.id}`)}
              >
                Answer
              </Button>
            </div>
            <div>{question.text}</div>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </section>
  );
};

export default MakeQuizList;
