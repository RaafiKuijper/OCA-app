import { useState } from "react";
import CreateOptionComponent from "./CreateOptionComponent";
import CreateQuestionsComponent from "./CreateQuestionComponent";
import Option from "./OptionInterface";


function CreateQuestionsFormComponent() {
  const [displayForm, setDisplayForm] = useState(false);
  const [text, setText] = useState<string>("");
  const [explanation, setExplanation] = useState<string>("");
  const [options, setOptions] = useState<Option[]>([]);
  const [optionCount, setOptionCount] = useState(1);

  const handleFormSubmit = () => {
    setDisplayForm(true);
    console.log("options: " + optionCount);
  };

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleFormSubmit();
        }}
      >
        <label>
          question:{" "}
          <input
            type="text"
            placeholder="question"
            onChange={(e) => setText(e.target.value)}
          />
        </label>
        <label>
          {[...Array(optionCount)].map((_, index) => (
            <CreateOptionComponent key={index} />
          ))}
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
      {displayForm && (
        <CreateQuestionsComponent
          text={text}
          explanation={explanation}
          options={options}
        />
      )}
    </>
  );
}

export default CreateQuestionsFormComponent;
