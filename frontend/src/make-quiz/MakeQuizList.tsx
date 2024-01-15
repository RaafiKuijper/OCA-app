import { Button, ListGroup } from "react-bootstrap";
import Question from "../question/questionModels";

const MakeQuizList = (props: { questions: Question[] }) => {
  return (
    <ListGroup style={{ width: "90%", margin: "5em auto" }}>
      {props.questions.map((question) => (
        <ListGroup.Item
          key={question.id}
          style={{ display: "flex", alignItems: "center" }}
        >
          <div>
            <Button variant="secondary" style={{ marginRight: "1em" }}>
              Answer
            </Button>
          </div>
          <div>{question.text}</div>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default MakeQuizList;
