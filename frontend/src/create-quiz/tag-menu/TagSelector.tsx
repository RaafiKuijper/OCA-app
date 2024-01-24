import { Button, Form } from "react-bootstrap";
import TagResponse from "../../tag/models/TagResponse";
import { useState } from "react";

const TagSelector = (props: {
  options: TagResponse[];
  updateOptions: (id: number) => void;
  isAdder: boolean;
}) => {
  const [value, setValue] = useState<number>(-1);

  return (
    <article style={{ display: "flex" }}>
      <Form.Select onChange={(e) => setValue(+e.target.value)}>
        <option>{props.isAdder ? "Add Tag" : "Remove Tag"}</option>
        {props.options.map((tag) => {
          return (
            <option value={tag.id} key={tag.id}>
              {tag.name}
            </option>
          );
        })}
      </Form.Select>
      <Button
        variant={props.isAdder ? "success" : "danger"}
        onClick={() => {
          if (value === -1) {
            alert("Please select a tag");
            return;
          }
          props.updateOptions(value);
        }}
      >
        {props.isAdder ? "+" : "-"}
      </Button>
    </article>
  );
};

export default TagSelector;
