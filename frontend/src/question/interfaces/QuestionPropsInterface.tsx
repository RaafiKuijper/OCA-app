export default interface QuestionProps {
  text: string;
  explanation: string;
  optionCount: number;
  optionsText: string[];
  optionsIsCorrect: boolean[];
  fragmentCount: number;
  fragmentText: string[];
  tagCount: number;
  tagIds: number[];
  count: number;
}
