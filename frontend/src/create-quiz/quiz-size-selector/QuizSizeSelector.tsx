import { useState } from "react";
import { InputGroup } from "react-bootstrap";
import DefaultSizeSelector from "./DefaultSizeSelector";
import CustomSizeSelector from "./CustomSizeSelector";

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

  const updateCustomValue = (value: number) => {
    if (!(value > props.questionCount)) {
      setCustom(value);
      if (checked[checked.length - 1]) {
        props.setQuizSize(value || 1);
      }
      if (!checked[checked.length - 1]) {
        updateChecked(checked.length - 1);
      }
    }
  };

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
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        flexWrap: "wrap",
      }}
    >
      {options
        .filter((option) => option <= props.questionCount)
        .map((option, index) => (
          <div style={{ display: "flex", marginTop: "1em" }}>
            <DefaultSizeSelector
              checked={checked[index]}
              option={option}
              update={() => updateSelectedOptions(index)}
            />
          </div>
        ))}
      <div style={{ display: "flex", marginTop: "1em" }}>
        <CustomSizeSelector
          checked={checked[checked.length - 1]}
          updateChecked={() => updateChecked(checked.length - 1)}
          value={custom}
          questionCount={props.questionCount}
          updateValue={updateCustomValue}
        />
      </div>
    </InputGroup>
  );
};

export default QuizSizeSelector;
