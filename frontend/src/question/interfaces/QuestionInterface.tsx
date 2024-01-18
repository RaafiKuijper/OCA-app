import Option from "./OptionInterface";
import Fragment from "./FragmentInterface";

export default interface Question {
  id: number;
  text: string;
  fragments: Fragment[];
  options: Option[];
  explanation: string;
  correct: number;
}

export const emptyQuestion: Question = {
  id: 0,
  text: "",
  fragments: [],
  options: [],
  explanation: "",
  correct: 0,
};
