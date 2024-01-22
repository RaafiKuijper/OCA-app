import axios from "axios";
import { useState, useEffect } from "react";
import TagResponse from "./models/TagResponse";
import classes from "../styles/Create-Tag.module.css";

function ViewTagComponent(props: { count: number }) {
  const [tags, setTags] = useState<TagResponse[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`http://localhost:8080/api/v1/tags/`);
      setTags(response.data);
    };

    fetchData();
  }, [props.count]);

  return (
    <div className={classes.createTagView}>
      Tags in database:{" "}
      {tags.map((tag) => (
        <p key={tag.id}>
          {tag.name} OCA certifaction guide chapter: {tag.chapter}.
          <br />
          {tag.summary}
        </p>
      ))}
    </div>
  );
}

export default ViewTagComponent;
