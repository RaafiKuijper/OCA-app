import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../headers/header/Header";
import ResultResponse from "./ResultResponse";
import { Card } from "react-bootstrap";

const QuizResults = () => {
  const happyGif =
    "https://i.pinimg.com/originals/6a/01/89/6a01896c58e0585369d0d4fd0e41fb6a.gif";
  const sadGif = "https://media1.giphy.com/media/7SF5scGB2AFrgsXP63/giphy.gif";

  const { id } = useParams();
  const [color, setColor] = useState("");
  const [gif, setGif] = useState("");
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
      setColor(data.description === "Failed!" ? "red" : "green");
      setGif(data.description === "Failed!" ? sadGif : happyGif);
    };

    fetchResults();
  }, [id]);

  return (
    <>
      <Header text="Quiz Results" />
      <Card
        style={{
          width: "50%",
          margin: "0 auto",
          textAlign: "center",
          fontSize: "2em",
          marginBottom: "5em",
        }}
      >
        <Card.Img src={gif} />
        <Card.Body>
          <Card.Text>
            <div
              style={{ textAlign: "center", color: color, fontWeight: "bold" }}
            >
              <p>
                {results.correct} / {results.total}
              </p>
              <p>{results.description}</p>
            </div>
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default QuizResults;
