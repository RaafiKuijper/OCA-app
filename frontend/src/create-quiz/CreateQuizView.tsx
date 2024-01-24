import { useEffect, useState } from "react";
import Header from "../headers/header/Header";
import QuestionInfo from "./question-info/QuestionInfo";
import axios from "axios";
import QuestionCount from "./models/QuestionCount";
import CreateButton from "./create-button/CreateButton";
import SizeSelector from "./size-selector/SizeSelector";
import TagResponse from "../tag/models/TagResponse";
import TagSelector from "./tag-selector/TagSelector";

const CreateQuizView = () => {
  const [questionCount, setQuestionCount] = useState(0);
  const [quizSize, setQuizSize] = useState(1);
  const [tags, setTags] = useState<TagResponse[]>([]);

  useEffect(() => {
    const getTags = async () => {
      const result = await axios.get("http://localhost:8080/api/v1/tags");
      const data: TagResponse[] = result.data;
      setTags(data);
    };

    const getQuestionCount = async () => {
      const result = await axios.get(
        "http://localhost:8080/api/v1/questions/count"
      );
      const data: QuestionCount = result.data;
      setQuestionCount(data.count);
      setQuizSize(data.count);
    };
    getQuestionCount();
    getTags();
  }, []);

  return (
    <>
      <Header text="Quizzes" />;
      <QuestionInfo questionCount={questionCount} />
      <SizeSelector setQuizSize={setQuizSize} questionCount={questionCount} />
      <TagSelector tags={tags} />
      <CreateButton quizSize={quizSize} />
    </>
  );
};

export default CreateQuizView;
