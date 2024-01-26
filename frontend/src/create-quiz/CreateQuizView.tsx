import { useEffect, useState } from "react";
import Header from "../headers/header/Header";
import QuestionInfo from "./question-info/QuestionInfo";
import axios from "axios";
import QuestionCount from "./models/QuestionCount";
import CreateButton from "./create-button/CreateButton";
import SizeSelector from "./size-selector/SizeSelector";
import TagMenu from "./tag-menu/TagMenu";
import TypeSelector from "./type-selector/TypeSelector";

const CreateQuizView = () => {
  const [questionCount, setQuestionCount] = useState(0);
  const [quizSize, setQuizSize] = useState(-1);
  const [selectedTags, setSelectedTags] = useState<number[]>([]);
  const [failedOnly, setFailedOnly] = useState(false);

  useEffect(() => {
    const getQuestionCount = async () => {
      const headers = {
        ids: selectedTags.join(","),
      };
      let result;

      if (failedOnly) {
        result = await axios.get(
          "http://localhost:8080/api/v1/questions/count/failedOnly",
          { headers }
        );
      } else {
        result = await axios.get(
          "http://localhost:8080/api/v1/questions/count",
          { headers }
        );
      }

      const data: QuestionCount = result.data;
      setQuestionCount(data.count);
    };

    getQuestionCount();
  });

  return (
    <>
      <Header text="Quizzes" />;
      <QuestionInfo questionCount={questionCount} />
      {questionCount !== 0 && (
        <SizeSelector setQuizSize={setQuizSize} questionCount={questionCount} />
      )}
      <TypeSelector setFailedOnly={setFailedOnly} />
      <TagMenu setSelectedTags={setSelectedTags} />
      {questionCount !== 0 && (
        <CreateButton
          quizSize={quizSize !== -1 ? quizSize : questionCount}
          selectedTags={selectedTags}
          failedOnly={failedOnly}
        />
      )}
    </>
  );
};

export default CreateQuizView;
