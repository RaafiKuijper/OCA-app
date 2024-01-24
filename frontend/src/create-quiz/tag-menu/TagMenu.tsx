import TagResponse from "../../tag/models/TagResponse";
import { useEffect, useState } from "react";
import axios from "axios";
import SelectedTags from "./SelectedTags";
import TagSelector from "./TagSelector";

const TagMenu = (props: { setSelectedTags: (ids: number[]) => void }) => {
  const [selected, setSelected] = useState<TagResponse[]>([]);
  const [options, setOptions] = useState<TagResponse[]>([]);

  useEffect(() => {
    const getTags = async () => {
      const result = await axios.get("http://localhost:8080/api/v1/tags");
      const data: TagResponse[] = result.data;
      setOptions(data);
    };

    getTags();
  }, []);

  const addSelected = (id: number) => {
    setSelected([...selected, options.find((tag) => tag.id === id)!]);
    props.setSelectedTags(selected.map((tag) => tag.id));
    setOptions(options.filter((tag) => tag.id !== id));
  };

  const removeSelected = (id: number) => {
    setOptions([...options, selected.find((tag) => tag.id === id)!]);
    setSelected(selected.filter((tag) => tag.id !== id));
    props.setSelectedTags(selected.map((tag) => tag.id));
  };

  return (
    <section style={{ width: "13em", margin: "1em auto" }}>
      <h2 style={{ textAlign: "center", fontSize: "1em" }}>Select Tags</h2>
      <SelectedTags selected={selected} />
      {options.length !== 0 && (
        <TagSelector
          isAdder={true}
          options={options}
          updateOptions={addSelected}
        />
      )}
      {selected.length !== 0 && (
        <TagSelector
          isAdder={false}
          options={selected}
          updateOptions={removeSelected}
        />
      )}
    </section>
  );
};

export default TagMenu;
