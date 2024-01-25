import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../headers/header/Header";
import ResultResponse from "./ResultResponse";

const QuizResults = () => {
  const { id } = useParams();
  const [results, setResults] = useState<ResultResponse>({
    correct: 0,
    total: 0,
    description: "",
  });

  useEffect(() => {
    const fetchResults = async () => {
      const result = await axios.get(
        `http://localhost:8080/api/v1/quiz/${id}/result`
      );
      const data: ResultResponse = result.data;
      setResults(data);
    };

    fetchResults();
  }, [id]);

  return (
    <>
      <Header text="Quiz Results" />
      <p style={{ textAlign: "center", fontSize: "2em" }}>
        {results.correct} / {results.total}
      </p>
      <p style={{ textAlign: "center", fontSize: "2em" }}>
        {results.description}
      </p>
    </>
  );
};

export default QuizResults;
