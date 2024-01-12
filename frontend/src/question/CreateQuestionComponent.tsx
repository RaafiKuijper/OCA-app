import axios from "axios";
import { useEffect, useState } from "react";
import QuestionProps from "./QuestionPropsInterface";


function CreateQuestionsComponent(props: QuestionProps) {

  const [result, setResult] = useState<string>();

  useEffect(() => {
    const fetchData = async () => {
      const createQuestion = await axios.post("http://localhost:8080/api/v1/questions/create", {
        text: props.text,
        explanation: props.explanation,
        options: props.options,
      });

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
