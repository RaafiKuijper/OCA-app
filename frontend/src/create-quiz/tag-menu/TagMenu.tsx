import { Button, Form } from "react-bootstrap";
import TagResponse from "../../tag/models/TagResponse";

const TagMenu = (props: {
  tags: TagResponse[];
  setSelectedTags: (ids: number[]) => void;
}) => {
  return (
    <section style={{ width: "13em", margin: "1em auto" }}>
      <h2 style={{ textAlign: "center", fontSize: "1em" }}>Select Tags</h2>
      <article style={{ display: "flex" }}>
        <Form.Select>
          {props.tags.map((tag) => (
            <option value={tag.id} key={tag.id}>
              {tag.name}
            </option>
          ))}
        </Form.Select>
        <Button variant="success">+</Button>
      </article>
    </section>
  );
};

export default TagMenu;
