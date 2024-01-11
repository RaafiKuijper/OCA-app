export default interface Question {
  id: number;
  text: string;
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
  options: [],
  explanation: "",
};
