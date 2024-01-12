import axios from "axios";
import { useEffect, useState } from "react";
import QuestionProps from "./interfaces/QuestionPropsInterface";
import OptionBody from "./interfaces/OptionBody";

function CreateQuestionsComponent(props: QuestionProps) {
  const [result, setResult] = useState<string>();

  useEffect(() => {
    const fetchData = async () => {
      let currentOptionsIsCorrect = props.optionsIsCorrect.map((isCorrect) =>
        isCorrect === undefined ? false : isCorrect
      );

      let options: OptionBody[] = [];

      for (let i = 0; i < props.optionCount; i++) {
        options[i] = {
          text: props.optionsText[i],
          isCorrect: props.optionsIsCorrect[i],
        };
      }

      const createQuestion = await axios.post(
        "http://localhost:8080/api/v1/questions/create",
        {
          text: props.text,
          options: options,
          explanation: props.explanation,
        }
      );

      if (createQuestion.status == 201) setResult("ok");
      else setResult("failed");
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
