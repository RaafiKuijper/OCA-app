import { Form } from "react-bootstrap";
import { useState, useEffect } from "react";
import axios from "axios";
import Tag from "../tag/TagInterface";
import TagProps from "./interfaces/TagProps";

function AddTagComponent(props: TagProps) {
  const [tags, setTags] = useState<Tag[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get("http://localhost:8080/api/v1/tags");
      setTags(result.data);
    };

    fetchData();
  }, []);

  const updateTagIds = (e: { target: { value: string | number } }) => {
    const currentIds = props.ids;
    currentIds[props.index] = +e.target.value;
    props.setIds(currentIds);
  };

  return (
    <>
      <Form.Select onChange={updateTagIds}>
        <option>Choose a tag</option>
        {tags.map((tag) => (
          <option key={tag.id} value={tag.id}>
            {tag.name}
          </option>
        ))}
      </Form.Select>
    </>
  );
}

export default AddTagComponent;
