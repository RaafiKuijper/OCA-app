import axios from "axios";
import { useEffect, useState } from "react";
import classes from "../styles/Create-Tag.module.css";
import TagBody from "./models/TagBody";
import TagValidationResponse from "./models/TagValidationResponse";

function CreateTagComponent(props : {addTag : (tag: TagBody) => (void)}) {
  const [tagName, setTagName] = useState<string>("");
  const [tagChapter, setTagChapter] = useState<string>("");
  const [tagSummary, setTagSummary] = useState<string>("");
  const [dispText, setDispText] = useState("");
  const [count, setCount] = useState<number>(0); // count is used to only show dispText on submit

  const validateTag = async (tag: TagBody) => {
    const response = await axios.post(
      `http://localhost:8080/api/v1/tags/isValid`,
      tag
    );
    const data: TagValidationResponse = response.data;
    return data;
  };

  const postData = async () => {
    const newTag: TagBody = {
      name: tagName,
      chapter: tagChapter,
      summary: tagSummary,
    };

    console.log(newTag);

    const validation = await validateTag(newTag);

    if (!validation.isValid) {
      setDispText(validation.explanation);
      return;
    }

    await props.addTag(newTag);
    setCount(count + 1);
    setDispText(``);
  };

  useEffect(() => {
    if (count !== 0) {
      setDispText(
        `Created tag is named: ${tagName}, which is covered in chapter ${tagChapter} in the OCA guide.`
      );
    }
  }, [count]);

  return (
    <>
      <br />
      <form
        className={classes.createTagView}
        onSubmit={(e) => {
          e.preventDefault();
          postData();
        }}
      >
        Enter a name for the tag:
        <br />
        <input
          className={classes.createTagInput}
          type="text"
          placeholder="Tag name"
          onChange={(e) => setTagName(e.target.value)}
        ></input>
        <br />
        Enter the chapter, or paragraph of the OCA guide in which it can be
        found:
        <br />
        <input
          className={classes.createTagInput}
          type="text"
          placeholder="Tag chapter"
          onChange={(e) => setTagChapter(e.target.value)}
        ></input>
        <br />
        Summarize the basic principles of the tag:
        <br />
        <textarea
          className={classes.createTagInput}
          placeholder="Tag summary"
          onChange={(e) => setTagSummary(e.target.value)}
        ></textarea>
        <br />
        <button className={classes.tagSubmitButton} type="submit">
          Submit
        </button>
        <p>{dispText}</p>
      </form>
    </>
  );
}

export default CreateTagComponent;
