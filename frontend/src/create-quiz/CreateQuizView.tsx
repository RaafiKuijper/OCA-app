import { useEffect, useState } from "react";
import Header from "../headers/header/Header";
import QuestionInfo from "./question-info/QuestionInfo";
import axios from "axios";
import QuestionCount from "./models/QuestionCount";
import CreateButton from "./create-button/CreateButton";
import SizeSelector from "./size-selector/SizeSelector";
import TagMenu from "./tag-menu/TagMenu";

const CreateQuizView = () => {
  const [questionCount, setQuestionCount] = useState(0);
  const [quizSize, setQuizSize] = useState(1);
  const [selectedTags, setSelectedTags] = useState<number[]>([]);

  useEffect(() => {
    const getQuestionCount = async () => {
      const result = await axios.get(
        "http://localhost:8080/api/v1/questions/count"
      );
      const data: QuestionCount = result.data;
      setQuestionCount(data.count);
      setQuizSize(data.count);
    };

    getQuestionCount();
  }, []);

  return (
    <>
      <Header text="Quizzes" />;
      <QuestionInfo questionCount={questionCount} />
      <SizeSelector setQuizSize={setQuizSize} questionCount={questionCount} />
      <TagMenu setSelectedTags={setSelectedTags} />
      <CreateButton quizSize={quizSize} />
    </>
  );
};

export default CreateQuizView;
