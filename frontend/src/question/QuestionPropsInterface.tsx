import Option from "./OptionInterface";

export default interface QuestionProps {
  text: string;
  explanation: string;
  options: Option[];
}
