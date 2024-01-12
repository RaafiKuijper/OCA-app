import Option from "./OptionInterface";

export default interface Question {
  id: number;
  text: string;
  options: Option[];
  answer: string;
  explanation: string;
}

