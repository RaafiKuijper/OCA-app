import { Button } from "react-bootstrap";

const AnswerQuestionButton = (props: { action: () => void; text: string }) => {
  return (
    <>
      <div className="d-grid gap-2">
        <Button
          variant="secondary"
          size="lg"
          style={{ width: "80%", margin: "0 auto", marginTop: "3em" }}
          onClick={props.action}
        >
          {props.text}
        </Button>
      </div>
    </>
  );
};

export default AnswerQuestionButton;
