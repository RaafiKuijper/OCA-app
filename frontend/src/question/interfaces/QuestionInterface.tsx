import Option from "./OptionInterface";

export default interface Question {
  id: number;
  text: string;
  options: Option[];
  explanation: string;
}

export const emptyQuestion: Question = {
  id: 0,
  text: "",
  options: [],
  explanation: "",
};

