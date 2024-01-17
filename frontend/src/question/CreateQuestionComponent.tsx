import axios from "axios";
import { useEffect, useState } from "react";
import QuestionProps from "./interfaces/QuestionPropsInterface";
import OptionBody from "./interfaces/OptionBody";
import FragmentBody from "./interfaces/FragmentBody";

function CreateQuestionsComponent(props: QuestionProps) {
  const [result, setResult] = useState<string>();

  useEffect(() => {
    const fetchData = async () => {
      if (
        props.optionsIsCorrect.filter((isCorrect) => isCorrect === false)
          .length === props.optionsIsCorrect.length ||
        props.optionsIsCorrect.filter((isCorrect) => isCorrect === true)
          .length === props.optionsIsCorrect.length
      ) {
        setResult("invalid amount of correct answers");
      } else if (props.optionCount <= 1) {
        setResult("invalid amount of options");
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

        if (createQuestion.status == 201) setResult("ok");
        else setResult("failed");
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <p>{result}</p>
    </>
  );
}

export default CreateQuestionsComponent;
