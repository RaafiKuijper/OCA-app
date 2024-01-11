import axios from "axios";
import Tag from "./TagInterface";
import { useState, useEffect } from "react";

function CreateTagComponent() {
  const emptyTag = (): Tag => ({
    id: 0,
    name: "",
    chapter: "",
    context: "",
  });

  const [tag, setTag] = useState<Tag>(emptyTag());

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.post(
        `http://localhost:8080/api/v1/tags/add`,
        {
          name: "bing",
          chapter: "bong",
          context: "fuck ya life",
        }
      );
      setTag(response.data);
    };

    fetchData();
  }, []);

  return (
    <>
      Created tag: <p key={tag.id}>{tag.name} which is linked to chapter {tag.chapter}</p>
    </>
  );
}

export default CreateTagComponent;
