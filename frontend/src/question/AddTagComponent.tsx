import { Form } from "react-bootstrap";
import { useState, useEffect } from "react";
import axios from "axios";
import TagProps from "./interfaces/TagProps";
import TagResponse from "../tag/models/TagResponse";

function AddTagComponent(props: TagProps) {
  const [tags, setTags] = useState<TagResponse[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get("http://localhost:8080/api/v1/tags");
      setTags(result.data);
    };

    fetchData();
  }, []);

  const updateTagIds = (e: { target: { value: string | number } }) => {
    if (e.target.value === "create") {
      window.open("./create-tag");
    } else {
      const currentIds = props.ids;
      currentIds[props.index] = +e.target.value;
      props.setIds(currentIds);
    }
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
        <option value="create">Create a new tag</option>
      </Form.Select>
    </>
  );
}

export default AddTagComponent;
