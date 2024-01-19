import { useState } from "react";
import { Form, InputGroup } from "react-bootstrap";

const flex = { display: "flex" };
const center = { ...flex, justifyContent: "center" };

const QuizSizeSelector = (props: { setQuizSize: (size: number) => void }) => {
  const options: number[] = [5, 10, 20];
  const [checked, setChecked] = useState<boolean[]>([
    false,
    true,
    false,
    false,
  ]);
  const [custom, setCustom] = useState<number>(10);

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
      <div
        style={{
          ...center,
          width: "50%",
          flexWrap: "wrap",
        }}
      >
        {options.map((option, index) => (
          <span style={flex} key={index}>
            <InputGroup.Radio
              checked={checked[index]}
              onChange={() => updateSelectedOptions(index)}
            />
            <InputGroup.Text>{option} Options</InputGroup.Text>
          </span>
        ))}
        <span style={{ ...flex }}>
          <InputGroup.Radio
            checked={checked[checked.length - 1]}
            onChange={() => updateSelectedOptions(checked.length - 1)}
          />
          <Form.Control
            type="number"
            value={custom}
            onChange={(e) => {
              setCustom(+e.target.value);
            }}
          />
          <InputGroup.Text>Options</InputGroup.Text>
        </span>
      </div>
    </InputGroup>
  );
};

export default QuizSizeSelector;
