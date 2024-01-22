import { useState } from "react";
import { Form, InputGroup } from "react-bootstrap";

const flex = { display: "flex" };
const center = { ...flex, justifyContent: "center" };

const QuizSizeSelector = (props: {
  setQuizSize: (size: number) => void;
  questionCount: number;
}) => {
  const options: number[] = [5, 10, 20];
  const [checked, setChecked] = useState<boolean[]>([
    false,
    true,
    false,
    false,
  ]);
  const [custom, setCustom] = useState<number>(0);

  const updateSelectedOptions = (index: number) => {
    if (index < checked.length - 1) {
      props.setQuizSize(options[index]);
    } else {
      props.setQuizSize(custom);
    }
    updateChecked(index);
  };

  const updateChecked = (id: number) => {
    const newChecked = checked.map(() => false);
    newChecked[id] = !checked[id];
    setChecked(newChecked);
  };

  return (
    <InputGroup
      style={{
        ...center,
        marginTop: "1em",
      }}
    >
      {options
        .filter((option) => option <= props.questionCount)
        .map((option, index) => (
          <div>
            <InputGroup.Radio
              checked={checked[index]}
              style={{ margin: "0 auto" }}
              onChange={() => updateSelectedOptions(index)}
            />
            <InputGroup.Text>{option} Options</InputGroup.Text>
          </div>
        ))}
      <div style={{ ...flex }}>
        <InputGroup.Radio
          checked={checked[checked.length - 1]}
          onChange={() => updateSelectedOptions(checked.length - 1)}
        />
        <Form.Control
          type="number"
          value={custom || ""}
          min={1}
          max={props.questionCount}
          style={{ textAlign: "center", fontSize: "1.2em", padding: "0.5em" }}
          onChange={(e) => {
            if (!(+e.target.value > props.questionCount)) {
              setCustom(+e.target.value);
              if (checked[checked.length - 1]) {
                props.setQuizSize(+e.target.value || 1);
              }
              if (!checked[checked.length - 1]) {
                updateChecked(checked.length - 1);
              }
            }
          }}
        />
        <InputGroup.Text>Options</InputGroup.Text>
      </div>
    </InputGroup>
  );
};

export default QuizSizeSelector;
