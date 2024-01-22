import axios from "axios";
import { useEffect, useState } from "react";
import QuestionProps from "./interfaces/QuestionPropsInterface";
import OptionBody from "./interfaces/OptionBody";
import FragmentBody from "./interfaces/FragmentBody";
import Question from "./interfaces/QuestionInterface";

function CreateQuestionsComponent(props: QuestionProps) {
  const [result, setResult] = useState<string>();

  const fetchData = async () => {
    let check = await axios.get("http://localhost:8080/api/v1/questions");

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
      check.data.map((question: Question) => question.text).includes(props.text)
    ) {
      setResult("Question already exists");
    } else if (
      props.tagIds.filter((id) => id === undefined).length === props.tagIds.length
    ) {
      setResult("Tags invalid");
    }{
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

      const currentQuestionId =
        check.data.map((question: Question) => question.id).pop() + 1;

      for (let i = 0; i < props.tagCount; i++) {
        await axios.get(
          `http://localhost:8080/api/v1/questions/link_tag/${currentQuestionId}/${props.tagIds[i]}`
        );
      }

      if (createQuestion.status == 201) setResult("Question succesfully added");
      else setResult("Could not add question");
    }
  };

  useEffect(() => {
    fetchData();
  }, [props.count]);

  return (
    <>
      <p style={{ textAlign: "center" }}>{result}</p>
    </>
  );
}

export default CreateQuestionsComponent;
