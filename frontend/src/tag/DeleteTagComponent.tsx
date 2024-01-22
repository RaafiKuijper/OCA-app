import axios from "axios";
import { useState } from "react";
import classes from "../styles/Create-Tag.module.css";

function DeleteTagComponent() {
  const [tag, setTag] = useState<string>("");
  const [dispText, setDispText] = useState<string>("");

  const deleteData = async () => {
    const checker = await axios.get(
      `http://localhost:8080/api/v1/tags/findByName/${tag}`
    );
    if (checker.data[0] == null) {
      setDispText(`${tag} doesn't match any names in the database.`);
    } else {
      await axios.delete(`http://localhost:8080/api/v1/tags/deleteTag/${tag}`);
      setDispText(``);
    }
  };

  return (
    <>
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
          type="text"
          placeholder="Tag name"
          onChange={(e) => setTag(e.target.value)}
        ></input>
        <br />
        <button className={classes.tagSubmitButton} type="submit">
          Submit
        </button>
        <p>{dispText}</p>
      </form>
    </>
  );
}

export default DeleteTagComponent;
