import axios from "axios";
import { useEffect, useState } from "react";
import Question from "./interfaces/QuestionInterface";

function ViewQuestionsComponent() {
  const [questions, setQuestions] = useState<Question[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(`http://localhost:8080/api/v1/questions`);
      console.log(result.data);

      setQuestions(result.data);
    };

    fetchData();
  }, []);

  return (
    <>
      <div>
        {questions.map((question) => (
          <div key={question.id}>
            <h3>{question.text}</h3>
            <ol>
              {question.options.map((option) => (
                <li key={option.id}>{option.text}</li>
              ))}
            </ol>
            <p>{question.answer}</p>
            <p>{question.explanation}</p>
            <br />
          </div>
        ))}
      </div>
    </>
  );
}

export default ViewQuestionsComponent;
