import Question from "../question/questionModels";

type Quiz = {
  id: number;
  questions: Question[];
};

export default Quiz;
