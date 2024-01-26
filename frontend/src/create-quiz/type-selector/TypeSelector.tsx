import { useState } from "react";
import { Form } from "react-bootstrap";

const TypeSelector = (props: {
  setFailedOnly: (newStatus: boolean) => void;
}) => {
  const [selected, setSelected] = useState(false);

  return (
    <Form.Group style={{ width: "13em", margin: "1em auto" }}>
      <h2 style={{ textAlign: "center", fontSize: "1em" }}>Select Type</h2>
      <Form.Check
        type="switch"
        onClick={() => {
          setSelected(!selected);
          props.setFailedOnly(!selected);
        }}
        label={selected ? "Only Failed Questions" : "All Questions"}
      />
    </Form.Group>
  );
};

export default TypeSelector;
