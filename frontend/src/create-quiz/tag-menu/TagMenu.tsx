import { Button, Form } from "react-bootstrap";
import TagResponse from "../../tag/models/TagResponse";
import { useState } from "react";

const TagMenu = (props: {
  tags: TagResponse[];
  updateSelected: (id: number) => void;
}) => {
  const [value, setValue] = useState<number>(-1);

  return (
    <section style={{ width: "13em", margin: "1em auto" }}>
      <h2 style={{ textAlign: "center", fontSize: "1em" }}>Select Tags</h2>
      <article style={{ display: "flex" }}>
        <Form.Select onChange={(e) => setValue(+e.target.value)}>
          <option>Select Tag</option>
          {props.tags.map((tag) => {
            return (
              <option value={tag.id} key={tag.id}>
                {tag.name}
              </option>
            );
          })}
        </Form.Select>
        <Button
          variant="success"
          onClick={() => {
            if (value === -1) {
              alert("Please select a tag");
              return;
            }
            props.updateSelected(value);
          }}
        >
          +
        </Button>
      </article>
    </section>
  );
};

export default TagMenu;
