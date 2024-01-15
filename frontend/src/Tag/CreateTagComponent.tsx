import axios from "axios";
import { useEffect, useState } from "react";
import ViewTagComponent from "./ViewTagComponent";

function CreateTagComponent() {
  const [tagName, setTagName] = useState<string>("");
  const [tagChapter, setTagChapter] = useState<string>("");
  const [tagContext, setTagContext] = useState<string>("");
  const [dispText, setDispText] = useState("");
  const [sub, setSub] = useState<number>(0);

  const postData = async () => {
    await axios.post(`http://localhost:8080/api/v1/tags/add`, {
      name: tagName,
      chapter: tagChapter,
      context: tagContext,
    });
  };

  useEffect(() => {
    if (sub !== 0) {
      setDispText(
        `Created tag is named: ${tagName}, which is covered in chapter ${tagChapter} in the OCA guide.`
      );
    }
  }, [sub]);

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          postData();
          setSub(sub + 1);
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
      <p>{dispText}</p>
      <ViewTagComponent count={sub} />
    </>
  );
}

export default CreateTagComponent;
