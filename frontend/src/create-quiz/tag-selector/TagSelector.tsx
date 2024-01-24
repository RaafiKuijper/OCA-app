import { Form } from "react-bootstrap";
import TagResponse from "../../tag/models/TagResponse";

const TagSelector = (props: { tags: TagResponse[] }) => {
  return (
    <section style={{ width: "13em", margin: "1em auto" }}>
      <h2 style={{ textAlign: "center", fontSize: "1em" }}>Select Tags</h2>
      <Form.Select>
        {props.tags.map((tag) => (
          <option value={tag.id}>{tag.name}</option>
        ))}
      </Form.Select>
    </section>
  );
};

export default TagSelector;
