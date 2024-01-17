import Question from "../question/interfaces/QuestionInterface";

type Quiz = {
  id: number;
  questions: Question[];
};

export default Quiz;
