import axios from "axios";
import { useState, useEffect } from "react";
import TagResponse from "./models/TagResponse";
import classes from "../styles/Create-Tag.module.css";
import Header from "../headers/header/Header";
import CreateTagComponent from "./CreateTagComponent";
import DeleteTagComponent from "./DeleteTagComponent";
import TagBody from "./models/TagBody";

function ViewTagComponent() {
  const [tags, setTags] = useState<TagResponse[]>([]);
  const [fetchCount, setFetchCount] = useState<number>(0);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`http://localhost:8080/api/v1/tags`);
      setTags(response.data);
    };

    fetchData();
  }, [fetchCount]);

  const addTag = async (newTag : TagBody) => {
    await axios.post(`http://localhost:8080/api/v1/tags/add`, newTag);
    setFetchCount(fetchCount + 1);
  };

  const deleteTag = async (tagName : string) => {
    console.log(`Deleting ${tagName}`);
    await axios.delete(`http://localhost:8080/api/v1/tags/deleteTag/${tagName}`);
    setFetchCount(fetchCount - 1);
  };

  return (
    <>
      <Header text="Tags" />

      <CreateTagComponent addTag={addTag}/>

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

      <DeleteTagComponent deleteTag={deleteTag}/>
    </>
  );
}

export default ViewTagComponent;
