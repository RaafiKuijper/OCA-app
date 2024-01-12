import { useState, useEffect } from "react";
import CreateOptionComponent from "./CreateOptionComponent";
import CreateQuestionsComponent from "./CreateQuestionComponent";

function CreateQuestionsFormComponent() {
  const [displayResult, setDisplayResult] = useState(false);
  const [text, setText] = useState<string>("");
  const [explanation, setExplanation] = useState<string>("");

  // optionCount, optionsText, optionsIsCorrect allemaal afhankelijk
  // Wat willen we? Een enkele option array

  const [optionCount, setOptionCount] = useState(1);
  const [optionsText, setOptionsText] = useState<string[]>([]);
  const [optionsIsCorrect, setOptionsIsCorrect] = useState<boolean[]>([false]);

  useEffect(() => {
    optionsIsCorrect.forEach((element) => {
      console.log("test: " + element);
    });

    let currectOptionsIsCorrect = optionsIsCorrect.map((isCorrect) =>
      isCorrect === undefined ? false : isCorrect
    );
  });

  const handleFormSubmit = () => {
    setDisplayResult(true);
    console.log("optionsText: " + optionsText);
  };

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleFormSubmit();
        }}
      >
        {/* question input */}
        <label>
          question:{" "}
          <input
            type="text"
            placeholder="question"
            onChange={(e) => setText(e.target.value)}
          />
        </label>
        {/* option input */}
        <label>
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
          <button type="button" onClick={() => setOptionCount(optionCount + 1)}>
            +
          </button>
          {optionCount !== 1 && (
            <button
              type="button"
              onClick={() => setOptionCount(optionCount - 1)}
            >
              -
            </button>
          )}
        </label>
        <br />
        {/* input explanation */}
        <label>
          explanation:{" "}
          <input
            type="text"
            placeholder="explanation"
            onChange={(e) => setExplanation(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
      {displayResult && (
        <CreateQuestionsComponent
          text={text}
          explanation={explanation}
          optionCount={optionCount}
          optionsText={optionsText}
          optionsIsCorrect={optionsIsCorrect}
        />
      )}
    </>
  );
}

export default CreateQuestionsFormComponent;
