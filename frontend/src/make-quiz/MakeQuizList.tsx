import { ListGroup } from "react-bootstrap";
import QuizQuestion from "../create-quiz/models/QuizQuestion";
const MakeQuizList = (props: { questions: QuizQuestion[] }) => {
  return (
    <section
      style={{ display: "flex", justifyContent: "center", width: "100%" }}
    >
      <ListGroup style={{ width: "90%", marginTop: "1em" }}>
        {props.questions.map((question) => (
          <ListGroup.Item
            key={question.id}
            style={{ display: "flex", alignItems: "center", marginLeft: "0" }}
          >
            <span style={{ fontWeight: "bold", marginRight: "0.5em" }}>
              Q{question.id}:{" "}
            </span>
            <span>{question.text}</span>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </section>
  );
};

export default MakeQuizList;
