<<<<<<< Updated upstream:frontend/src/question/questionModels.tsx
=======
import Option from "./OptionInterface";
import Fragment from "./FragmentInterface";

>>>>>>> Stashed changes:frontend/src/question/interfaces/QuestionInterface.tsx
export default interface Question {
  id: number;
  text: string;
  fragments: Fragment[];
  options: Option[];
  explanation: string;
}

export interface Option {
  id: number;
  text: string;
  isCorrect: boolean;
}

export const emptyQuestion: Question = {
  id: 0,
  text: "",
  fragments: [],
  options: [],
  explanation: "",
};
