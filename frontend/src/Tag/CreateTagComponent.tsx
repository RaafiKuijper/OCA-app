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
  const [sent, setSent] = useState(0);
  const [tagName, setTagName] = useState("");
  const [tagChapter, setTagChapter] = useState("");
  const [tagContext, setTagContext] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.post(
        `http://localhost:8080/api/v1/tags/add`,
        {
          name: { tagName },
          chapter: { tagChapter },
          context: { tagContext },
        }
      );
      setTag(response.data);
    };

    fetchData();
  }, [sent]);

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setSent(sent + 1);
        }}
      >
        <input
          type="text"
          placeholder="Tag name"
          onChange={(e) => setTagName(e.target.value)}
        ></input>
        <input
          type="text"
          placeholder="Tag chapter"
          onChange={(e) => setTagChapter(e.target.value)}
        ></input>
        <input
          type="text"
          placeholder="Tag context"
          onChange={(e) => setTagContext(e.target.value)}
        ></input>
        <button type="submit">Submit</button>
      </form>
      Created tag:{" "}
      <p key={tag.id}>
        {tag.name} which is linked to chapter {tag.chapter}
      </p>
    </>
  );
}

export default CreateTagComponent;
