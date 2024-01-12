export default interface OptionPropsInterface {
  index: number;
  text: string[];
  setText: (text: string[]) => void;
  isCorrect: boolean[];
  setIsCorrect: (isCorrect: boolean[]) => void;
}