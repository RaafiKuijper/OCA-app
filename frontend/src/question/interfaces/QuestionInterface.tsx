import Option from "./OptionInterface";
import Fragment from "./FragmentInterface";
import TagResponse from "../../tag/models/TagResponse";

export default interface Question {
  id: number;
  text: string;
  fragments: Fragment[];
  tags: TagResponse[];
  tagIds?: number[];
  options: Option[];
  explanation: string;
  correct: number;
}

export const emptyQuestion: Question = {
  id: 0,
  text: "",
  fragments: [],
  tags: [],
  options: [],
  explanation: "",
  correct: 0,
};
