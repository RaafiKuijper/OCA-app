import axios from "axios";
import { useEffect, useState } from "react";
import QuestionProps from "./interfaces/QuestionPropsInterface";
import OptionBody from "./interfaces/OptionBody";

function CreateQuestionsComponent(props: QuestionProps) {
  const [result, setResult] = useState<string>();

  useEffect(() => {
    const fetchData = async () => {

      props.optionsIsCorrect.forEach(element => {
        console.log("test" + element);
        
      });

      let currectOptionsIsCorrect = props.optionsIsCorrect.map((isCorrect) =>
        isCorrect === undefined ? false : isCorrect
      );
      
      console.log(props.optionsText);
      console.log(currectOptionsIsCorrect);
      console.log(props.optionCount);
      
      
      /* for (let i = 0; i < props.optionCount; i++) {
        const createOption = await axios.post(
          "http://localhost:8080/api/v1/options/create",
          {
            text: props.optionsText[props.optionCount-1],
            isCorrect: props.optionsIsCorrect[props.optionCount-1],
          }
        );
      } */

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
