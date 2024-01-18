import { Button } from "react-bootstrap";

const AnswerQuestionSubmit = (props: { submitAnswer: () => void }) => {
  return (
    <>
      <div className="d-grid gap-2">
        <Button
          variant="secondary"
          size="lg"
          style={{ width: "80%", margin: "0 auto", marginTop: "3em" }}
          onClick={props.submitAnswer}
        >
          Submit
        </Button>
      </div>
    </>
  );
};

export default AnswerQuestionSubmit;
