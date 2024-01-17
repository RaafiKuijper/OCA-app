import { useState } from "react";
import CreateOptionComponent from "./CreateOptionComponent";
import CreateQuestionsComponent from "./CreateQuestionComponent";
import { Button, Form } from "react-bootstrap";
import Header from "../styled-components/header/Header";
import CreateFragmentComponent from "./CreateFragmentComponent";

function CreateQuestionsFormComponent() {
  const [displayResult, setDisplayResult] = useState(false);
  const [text, setText] = useState<string>("");
  const [explanation, setExplanation] = useState<string>("");
  const [optionCount, setOptionCount] = useState(1);
  const [optionsText, setOptionsText] = useState<string[]>([]);
  const [optionsIsCorrect, setOptionsIsCorrect] = useState<boolean[]>([]);
  const [fragmentCount, setFragmentCount] = useState(0);
  const [fragmentText, setFragmentText] = useState<string[]>([]);

  const handleFormSubmit = () => {
    setDisplayResult(true);
  };

  return (
    <>
      <Header text="Create Question" />
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          handleFormSubmit();
        }}
      >
        {/* question input */}
        <Form.Group>
          <Form.Label>question:</Form.Label>
          <Form.Control
            type="text"
            placeholder="question"
            onChange={(e) => setText(e.target.value)}
          />
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
              type="button"
              onClick={() => setOptionCount(optionCount + 1)}
            >
              +
            </Button>
            {optionCount !== 1 && (
              <Button
                type="button"
                onClick={() => setOptionCount(optionCount - 1)}
              >
                -
              </Button>
            )}
          </Form.Label>
        </Form.Group>

        {/* fragment input */}
        <Form.Group>
          <p>add fragment: </p>
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
              type="button"
              onClick={() => setFragmentCount(fragmentCount + 1)}
            >
              +
            </Button>
            <Button
              type="button"
              onClick={() => setFragmentCount(fragmentCount - 1)}
            >
              -
            </Button>
          </Form.Label>
        </Form.Group>

        {/* input explanation */}
        <Form.Group>
          <Form.Label>
            explanation:
            <Form.Control
              type="text"
              placeholder="explanation"
              onChange={(e) => setExplanation(e.target.value)}
            />
          </Form.Label>
        </Form.Group>
        <Button type="submit">Submit</Button>
      </Form>
      {displayResult && (
        <CreateQuestionsComponent
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
