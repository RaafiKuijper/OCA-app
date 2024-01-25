import TagResponse from "../../tag/models/TagResponse";

const SelectedTags = (props: { selected: TagResponse[] }) => {
  return (
    <span
      style={{
        display: "block",
        textAlign: "center",
        marginBottom: "1em",
        color: "green",
        fontWeight: "bold",
      }}
    >
      Selected: {props.selected.map((tag) => tag.name).join(", ")}
    </span>
  );
};

export default SelectedTags;
