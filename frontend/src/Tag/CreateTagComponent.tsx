import axios from "axios";
import { useState } from "react";

function CreateTagComponent() {
  const [tagName, setTagName] = useState<string>("");
  const [tagChapter, setTagChapter] = useState<string>("");
  const [tagContext, setTagContext] = useState<string>("");
  let tagCreated = false;

  const postData = async () => {
    const response = await axios.post(`http://localhost:8080/api/v1/tags/add`, {
      name: tagName,
      chapter: tagChapter,
      context: tagContext,
    });
  };

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          postData();
          tagCreated = true;
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
    </>
  );
}

export default CreateTagComponent;
