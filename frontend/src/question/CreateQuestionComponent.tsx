import axios from "axios";
import { useState, useEffect } from "react";
import CreateOptionComponent from "./CreateOptionComponent";

function CreateQuestionsComponent() {
  const [depend, setDepend] = useState(0);
  const [text, setText] = useState<string>();
  const [explanation, setExplanation] = useState<string>();
  const [optionCount, setOptionCount] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      const createQuestion = await axios.post(
        "http://localhost:8080/api/v1/questions/create",
        {
          text: text,
          explanation: explanation,
        }
      );
    };
    fetchData();
  }, [depend]);

  const handleFormSubmit = () => {
    setDepend(depend + 1);
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
          <button type="button" onClick={() => setOptionCount(optionCount - 1)}>
            -
          </button>
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
    </>
  );
}

export default CreateQuestionsComponent;
