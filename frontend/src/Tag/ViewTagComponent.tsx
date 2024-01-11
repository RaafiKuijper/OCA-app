import axios from "axios";
import { useState, useEffect } from "react";
import Tag from "./TagInterface";

function ViewTagComponent() {
  const [tags, setTags] = useState<Tag[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`http://localhost:8080/api/v1/tags`);
      setTags(response.data);
    };

    fetchData();
  }, []);

  return (
    <>
      Tags in database:{" "}
      {tags.map((tag) => (
        <p key={tag.id}>{tag.name}</p>
      ))}
    </>
  );
}

export default ViewTagComponent;
