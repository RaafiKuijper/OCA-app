import axios from "axios"
import React from "react";
import { useState, useEffect } from "react";

function ViewTagComponent() {
    const [result, setResult] = useState('')

    useEffect(() => {
      const fetchData = async () => {
        const res = await axios.get("http://localhost:8080/api/v1/findall");
        setResult(res.data[0]["tagName"]);
      }
  
      fetchData();
    })

    return (
        <>
            Tags in database: {result}
        </>
    )
}

export default ViewTagComponent