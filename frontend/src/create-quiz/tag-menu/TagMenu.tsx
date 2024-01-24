import { Button, Form } from "react-bootstrap";
import TagResponse from "../../tag/models/TagResponse";
import { useEffect, useState } from "react";
import axios from "axios";

const TagMenu = (props: { setSelectedTags: (ids: number[]) => void }) => {
  const [selected, setSelected] = useState<TagResponse[]>([]);
  const [options, setOptions] = useState<TagResponse[]>([]);
  const [value, setValue] = useState<number>(-1);

  useEffect(() => {
    const getTags = async () => {
      const result = await axios.get("http://localhost:8080/api/v1/tags");
      const data: TagResponse[] = result.data;
      setOptions(data);
    };

    getTags();
  }, []);

  const updateSelected = (id: number) => {
    setSelected([...selected, options.find((tag) => tag.id === id)!]);
    props.setSelectedTags(selected.map((tag) => tag.id));
    setOptions(options.filter((tag) => tag.id !== id));
  };

  return (
    <section style={{ width: "13em", margin: "1em auto" }}>
      <h2 style={{ textAlign: "center", fontSize: "1em" }}>Select Tags</h2>
      <span
        style={{
          display: "block",
          textAlign: "center",
          marginBottom: "1em",
          color: "green",
          fontWeight: "bold",
        }}
      >
        Selected: {selected.map((tag) => tag.name).join(", ")}
      </span>
      {options.length !== 0 && (
        <article style={{ display: "flex" }}>
          <Form.Select onChange={(e) => setValue(+e.target.value)}>
            <option>Select Tag</option>
            {options.map((tag) => {
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
              updateSelected(value);
            }}
          >
            +
          </Button>
        </article>
      )}
    </section>
  );
};

export default TagMenu;
