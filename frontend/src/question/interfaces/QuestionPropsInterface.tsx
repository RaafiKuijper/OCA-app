export default interface QuestionProps {
  text: string;
  explanation: string;
  optionCount: number
  optionsText: string[];
  optionsIsCorrect: boolean[];
}
