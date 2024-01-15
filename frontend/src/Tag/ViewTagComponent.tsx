import axios from "axios";
import { useState, useEffect } from "react";
import Tag from "./TagInterface";

function ViewTagComponent(props: { count: number }) {
  const [tags, setTags] = useState<Tag[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`http://localhost:8080/api/v1/tags/`);
      setTags(response.data);
    };

    fetchData();
  }, [props.count]);

  return (
    <>
      Tags in database:{" "}
      {tags.map((tag) => (
        <p key={tag.id}>
          {tag.name} OCA certifaction guide chapter: {tag.chapter}.
          <br />
          {tag.context}
        </p>
      ))}
    </>
  );
}

export default ViewTagComponent;
