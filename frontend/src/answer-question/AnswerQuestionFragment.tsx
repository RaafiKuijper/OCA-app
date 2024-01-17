import classes from "../styles/answer-question.module.css";
import { Col, Container, Row } from "react-bootstrap";

const AnswerQuestionFragment = (props: { text: string[] }) => {
  return (
    <section
      style={{
        margin: "1em",
        fontSize: "1.2em",
      }}
    >
      <Container>
        {props.text.map((fragment) =>
          fragment.split("\\n").map((line: string) => (
            <Row>
              <Col className={classes.answerQuestionFragment}>
                <pre key={line}>{line}</pre>
              </Col>
            </Row>
          ))
        )}
      </Container>
    </section>
  );
};

export default AnswerQuestionFragment;
