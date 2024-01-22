import axios from "axios";
import { useEffect, useState } from "react";
import ViewTagComponent from "./ViewTagComponent";
import Header from "../headers/header/Header";
import classes from "../styles/Create-Tag.module.css";

function CreateTagComponent() {
  const [tag, setTag] = useState<string>("");
  const [tagName, setTagName] = useState<string>("");
  const [tagChapter, setTagChapter] = useState<string>("");
  const [tagSummary, setTagSummary] = useState<string>("");
  const [dispText, setDispText] = useState("");
  const [count, setCount] = useState<number>(0); // count is used to only show dispText on submit

  const postData = async () => {
    if (!tagName || !tagChapter || !tagSummary) {
      console.error("Can't submit empty Tag.");
      setDispText(
        `Please enter a tag name, the chapter or paragraph it can be read about and a basic summary.`
      );
    } else {
      const checker = await axios.get(
        `http://localhost:8080/api/v1/tags/findByName/${tagName}`
      );
      if (checker.data[0] == null) {
        await axios.post(`http://localhost:8080/api/v1/tags/add`, {
          name: tagName,
          chapter: tagChapter,
          summary: tagSummary,
        });
        setCount(count + 1);
        setDispText(``);
      } else {
        console.error("Can't submit pre-existing Tag.");
        setDispText(`That tag already exists`);
      }
    }
  };

  const deleteData = async () => {
    const checker = await axios.get(
      `http://localhost:8080/api/v1/tags/findByName/${tag}`
    );
    if (checker.data[0] == null) {
      setDispText(`${tag} doesn't match any names in the database.`);
    } else {
      await axios.delete(`http://localhost:8080/api/v1/tags/deleteTag/${tag}`);
      setDispText(``);
      setCount(count + 1);
    }
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
      <Header text="Tags" />
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

      <ViewTagComponent count={count} />

      <form
        className={classes.createTagView}
        onSubmit={(e) => {
          e.preventDefault();
          deleteData();
        }}
      >
        Delete a tag by submitting it's name:
        <br />
        <input
          className={classes.deleteTagInput}
          type="text"
          placeholder="Tag name"
          onChange={(e) => setTag(e.target.value)}
        ></input>
        <br />
        <button className={classes.tagSubmitButton} type="submit">
          Submit
        </button>
      </form>
    </>
  );
}

export default CreateTagComponent;
