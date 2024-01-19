import { useState } from "react";
import CreateOptionComponent from "./CreateOptionComponent";
import CreateQuestionsComponent from "./CreateQuestionComponent";
import { Button, Form } from "react-bootstrap";
import CreateFragmentComponent from "./CreateFragmentComponent";
import classes from "../styles/create-question.module.css";
import Header from "../headers/header/Header";

function CreateQuestionsFormComponent() {
  const [displayResult, setDisplayResult] = useState(false);
  const [text, setText] = useState<string>("");
  const [explanation, setExplanation] = useState<string>("");
  const [optionCount, setOptionCount] = useState(2);
  const [optionsText, setOptionsText] = useState<string[]>([]);
  const [optionsIsCorrect, setOptionsIsCorrect] = useState<boolean[]>([]);
  const [fragmentCount, setFragmentCount] = useState(0);
  const [fragmentText, setFragmentText] = useState<string[]>([]);
  const [count, setCount] = useState(1);

  const handleFormSubmit = () => {
    setDisplayResult(true);
    setCount(count + 1);
  };

  return (
    <>
      <Header text="Questions" />
      <Form
        className={classes.createQuestionForm}
        onSubmit={(e) => {
          e.preventDefault();
          handleFormSubmit();
        }}
      >
        {/* question input */}
        <Form.Group>
          <Form.Label>Question:</Form.Label>
          <Form.Control
            as="textarea"
            placeholder="This is an interesting question."
            onChange={(e) => setText(e.target.value)}
          />

          {/* fragment input */}
          <Form.Group
            style={{
              marginTop: "1%",
            }}
          >
            <div>Add Fragment:</div>
            <Form.Label>
              {[...Array(fragmentCount)].map((_, index) => (
                <CreateFragmentComponent
                  key={index}
                  index={index}
                  text={fragmentText}
                  setText={setFragmentText}
                />
              ))}

              {/* add/remove fragments */}
              <Button
                className={classes.createQuestionFormAddButton}
                type="button"
                onClick={() => setFragmentCount(fragmentCount + 1)}
              >
                +
              </Button>
              {fragmentCount !== 0 && (
                <Button
                  className={classes.createQuestionFormAddButton}
                  type="button"
                  onClick={() => setFragmentCount(fragmentCount - 1)}
                >
                  -
                </Button>
              )}
            </Form.Label>
          </Form.Group>
        </Form.Group>

        {/* option input */}
        <Form.Group>
          <Form.Label>
            {[...Array(optionCount)].map((_, index) => (
              <CreateOptionComponent
                key={index}
                index={index}
                text={optionsText}
                setText={setOptionsText}
                isCorrect={optionsIsCorrect}
                setIsCorrect={setOptionsIsCorrect}
              />
            ))}
            {/* add/remove options */}
            <Button
              className={classes.createQuestionFormAddButton}
              type="button"
              onClick={() => setOptionCount(optionCount + 1)}
            >
              +
            </Button>
            {optionCount !== 2 && (
              <Button
                className={classes.createQuestionFormAddButton}
                type="button"
                onClick={() => setOptionCount(optionCount - 1)}
              >
                -
              </Button>
            )}
          </Form.Label>
        </Form.Group>

        {/* input explanation */}
        <Form.Group>
          <Form.Label>
            Explanation:
            <Form.Control
              as="textarea"
              placeholder="explanation"
              onChange={(e) => setExplanation(e.target.value)}
            />
          </Form.Label>
        </Form.Group>
        <Button
          className={classes.createQuestionFormAddButton}
          variant="secondary"
          size="lg"
          type="submit"
        >
          Submit
        </Button>
      </Form>
      {displayResult && (
        <CreateQuestionsComponent
          count={count}
          text={text}
          explanation={explanation}
          optionCount={optionCount}
          optionsText={optionsText}
          optionsIsCorrect={optionsIsCorrect}
          fragmentCount={fragmentCount}
          fragmentText={fragmentText}
        />
      )}
    </>
  );
}

export default CreateQuestionsFormComponent;
