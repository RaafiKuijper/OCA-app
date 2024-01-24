import { useState } from "react";
import DefaultSizeSelector from "./DefaultSizeSelector";
import CustomSizeSelector from "./CustomSizeSelector";

const QuizSizeSelector = (props: {
  setQuizSize: (size: number) => void;
  questionCount: number;
}) => {
  const options: number[] = [5, 10, 20];
  const [checked, setChecked] = useState<boolean[]>([
    false,
    false,
    false,
    true,
  ]);

  const updateCustomValue = (value: number) => {
    if (!(value > props.questionCount)) {
      if (!checked[checked.length - 1]) {
        updateChecked(checked.length - 1);
      }
      props.setQuizSize(value || 1);
    }
  };

  const updateSelectedOptions = (index: number) => {
    props.setQuizSize(options[index]);
    updateChecked(index);
  };

  const updateChecked = (id: number) => {
    const newChecked = checked.map(() => false);
    newChecked[id] = !checked[id];
    setChecked(newChecked);
  };

  return (
    <section
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        flexWrap: "wrap",
        marginTop: "1em",
      }}
    >
      {options
        .filter((option) => option <= props.questionCount)
        .map((option, index) => (
          <div style={{ display: "flex" }} key={index}>
            <DefaultSizeSelector
              checked={checked[index]}
              option={option}
              update={() => updateSelectedOptions(index)}
            />
          </div>
        ))}
      <div style={{ display: "flex" }}>
        <CustomSizeSelector
          checked={checked[checked.length - 1]}
          updateChecked={() => updateChecked(checked.length - 1)}
          questionCount={props.questionCount}
          updateValue={updateCustomValue}
          key={checked.length - 1}
        />
      </div>
    </section>
  );
};

export default QuizSizeSelector;
