import axios from "axios";
import { useEffect, useState } from "react";

function Question() {

    const [questions, setQuestions] = useState([]);

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
                        <h3>{question}</h3><br />
                    </div>
                )}
            </dl>
        </>
    )
}

export default Question
