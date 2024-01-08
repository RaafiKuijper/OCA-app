import axios from "axios";
import { useEffect, useState } from "react";

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
            <dl>
                {questions.map(question =>
                    <div>
                        <h3>{question.name}</h3>
                        <p>{question.correctAnswer}</p>
                        <p>{question.explanation}</p><br />
                    </div>
                )}
            </dl>
        </>
    )
}

export default ViewQuestionsComponent;
