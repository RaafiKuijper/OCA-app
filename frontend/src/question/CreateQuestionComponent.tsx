import axios from "axios";
import { useEffect, useState } from "react";
import QuestionProps from "./interfaces/QuestionPropsInterface";
import OptionBody from "./interfaces/OptionBody";
import FragmentBody from "./interfaces/FragmentBody";
import Question from "./interfaces/QuestionInterface";

function CreateQuestionsComponent(props: QuestionProps) {
  const [result, setResult] = useState<string>();

  useEffect(() => {
    const fetchData = async () => {
      const check = await axios.get("http://localhost:8080/api/v1/questions");

      if (!props.text || !props.explanation || props.optionsText.includes("")) {
        setResult("Please enter a question, options or an explanation.");
      } else if (
        props.optionsIsCorrect.filter((isCorrect) => isCorrect === false)
          .length === props.optionsIsCorrect.length ||
        props.optionsIsCorrect.filter((isCorrect) => isCorrect === true)
          .length === props.optionsIsCorrect.length
      ) {
        setResult("Invalid amount of correct answers");
      } else if (
        check.data
          .map((question: Question) => question.text)
          .includes(props.text)
      ) {
        setResult("Question already exists");
      } else {
        props.optionsIsCorrect.map((isCorrect) =>
          isCorrect === undefined ? false : isCorrect
        );

        let options: OptionBody[] = [];

        for (let i = 0; i < props.optionCount; i++) {
          options[i] = {
            text: props.optionsText[i],
            isCorrect: props.optionsIsCorrect[i],
          };
        }

        let fragments: FragmentBody[] = [];

        for (let i = 0; i < props.fragmentCount; i++) {
          fragments[i] = {
            text: props.fragmentText[i],
          };
        }

        const createQuestion = await axios.post(
          "http://localhost:8080/api/v1/questions/create",
          {
            text: props.text,
            options: options,
            fragments: fragments,
            explanation: props.explanation,
          }
        );

        if (createQuestion.status == 201)
          setResult("Question succesfully added");
        else setResult("Could not add question");
      }
    };
    fetchData();
  }, [props.count]);

  return (
    <>
      <p style={{ textAlign: "center" }}>{result}</p>
    </>
  );
}

export default CreateQuestionsComponent;
