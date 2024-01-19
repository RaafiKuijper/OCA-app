import { Card } from "react-bootstrap";

const CreateQuizQuestionCount = (props: { questionCount: number }) => {
  return (
    <Card
      style={{
        width: "50%",
        maxWidth: "30em",
        margin: "0 auto",
        textAlign: "center",
      }}
    >
      <Card.Img
        style={{ width: "70%", margin: "0 auto" }}
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Question_mark_%28black%29.svg/768px-Question_mark_%28black%29.svg.png"
      />
      <Card.Body>
        <Card.Title>Questions in Database</Card.Title>
        <Card.Text>{props.questionCount} questions</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default CreateQuizQuestionCount;
