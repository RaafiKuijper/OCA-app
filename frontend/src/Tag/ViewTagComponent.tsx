import axios from "axios";
import { useState, useEffect } from "react";

function ViewTagComponent() {
  const [results, setResults] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(`http://localhost:8080/api/v1/tags`);
      setResults(res.data);
    };

    fetchData();
  });

  return <>Tags in database: {results.map(tag => <p>{tag.name}</p>)}</>;
}

export default ViewTagComponent;
