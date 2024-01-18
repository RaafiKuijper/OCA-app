import axios from "axios";
import { useEffect, useState } from "react";
import ViewTagComponent from "./ViewTagComponent";
import Header from "../headers/header/Header";
import classes from "../styles/Create-Tag.module.css";

function CreateTagComponent() {
  const [tagName, setTagName] = useState<string>("");
  const [tagChapter, setTagChapter] = useState<string>("");
  const [tagSummary, setTagSummary] = useState<string>("");
  const [dispText, setDispText] = useState("");
  const [count, setCount] = useState<number>(0); // count is used to only show this message upon creation of a tag

  const postData = async () => {
    await axios.post(`http://localhost:8080/api/v1/tags/add`, {
      name: tagName,
      chapter: tagChapter,
      summary: tagSummary,
    });
    setCount(count + 1);
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
      <Header text="OCA-app tags" />
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
          placeholder="Tag context"
          onChange={(e) => setTagSummary(e.target.value)}
        ></textarea>
        <br />
        <button className={classes.tagSubmitButton} type="submit">
          Submit
        </button>
        <p>{dispText}</p>
      </form>

      <ViewTagComponent count={count} />
    </>
  );
}

export default CreateTagComponent;
