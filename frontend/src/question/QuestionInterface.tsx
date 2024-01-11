export default interface Question {
  id: number;
  text: string;
  options: Option[];
  explanation: string;
}

interface Option {
  id: number;
  text: string;
  isCorrect: boolean;
}
