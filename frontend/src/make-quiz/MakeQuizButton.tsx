import { Button } from "react-bootstrap";

const MakeQuizButton = () => {
  return (
    <div
      className="d-grid gap-2"
      style={{ width: "75%", margin: "0 auto", marginTop: "3em" }}
    >
      <Button variant="secondary" size="lg">
        Start Quiz
      </Button>
    </div>
  );
};

export default MakeQuizButton;
