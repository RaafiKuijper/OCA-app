import { useState } from "react";
import CreateOptionComponent from "./CreateOptionComponent";
import CreateQuestionsComponent from "./CreateQuestionComponent";
import { Button, Form } from "react-bootstrap";
import CreateFragmentComponent from "./CreateFragmentComponent";
import classes from "../styles/create-question.module.css";
import Header from "../headers/header/Header";
import AddTagComponent from "./AddTagComponent";

function CreateQuestionsFormComponent() {
  const [text, setText] = useState<string>("");
  const [explanation, setExplanation] = useState<string>("");
  const [optionCount, setOptionCount] = useState(2);
  const [optionsText, setOptionsText] = useState<string[]>([]);
  const [optionsIsCorrect, setOptionsIsCorrect] = useState<boolean[]>([]);
  const [fragmentCount, setFragmentCount] = useState(0);
  const [fragmentText, setFragmentText] = useState<string[]>([]);
  const [tagCount, setTagCount] = useState(1);
  const [tagIds, setTagIds] = useState<number[]>([]);
  const [count, setCount] = useState(1);

  const handleFormSubmit = () => {
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
        </Form.Group>

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

        {/* tag selection */}
        <Form.Group
          style={{
            marginTop: "1%",
          }}
        >
          <div>Add Tags:</div>
          <Form.Label>
            {[...Array(tagCount)].map((_, index) => (
              <AddTagComponent
                key={index}
                index={index}
                ids={tagIds}
                setIds={setTagIds}
              />
            ))}

            {/* add/remove tags */}
            <Button
              className={classes.createQuestionFormAddButton}
              type="button"
              onClick={() => setTagCount(tagCount + 1)}
            >
              +
            </Button>
            {tagCount !== 1 && (
              <Button
                className={classes.createQuestionFormAddButton}
                type="button"
                onClick={() => setTagCount(tagCount - 1)}
              >
                -
              </Button>
            )}
          </Form.Label>
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
          className={classes.createQuestionFormSubmitButton}
          variant="secondary"
          size="lg"
          type="submit"
        >
          Submit
        </Button>
      </Form>
      <CreateQuestionsComponent
        count={count}
        text={text}
        explanation={explanation}
        optionCount={optionCount}
        optionsText={optionsText}
        optionsIsCorrect={optionsIsCorrect}
        fragmentCount={fragmentCount}
        fragmentText={fragmentText}
        tagCount={tagCount}
        tagIds={tagIds}
      />
    </>
  );
}

export default CreateQuestionsFormComponent;
