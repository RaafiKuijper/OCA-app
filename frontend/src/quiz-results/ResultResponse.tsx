type ResultResponse = {
  total: number;
  correct: number;
  description: "Failed!" | "Passed!" | "";
};

export default ResultResponse;
