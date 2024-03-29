import { InputGroup } from "react-bootstrap";
import Option from "../../question/interfaces/OptionInterface";
import classes from "../../styles/answer-question.module.css";
import { useState } from "react";
import AnswerQuestionListCheckbox from "./AnswerQuestionListCheckbox";
import AnswerQuestionListRadio from "./AnswerQuestionListRadio";

// This does not work for long lines of text yet.
const AnswerQuestionList = (props: {
  options: Option[];
  selectedOptions: number[];
  setSelectedOptions: (options: number[]) => void;
  correct: number;
}) => {
  const [checked, setChecked] = useState<boolean[]>([]);

  const updateSelectedOptions = (selectedId: number) => {
    let updatedOptions = [];

    if (props.correct === 1) {
      updatedOptions = [selectedId];
    } else {
      if (props.selectedOptions.includes(selectedId)) {
        updatedOptions = props.selectedOptions.filter(
          (id) => id !== selectedId
        );
      } else {
        updatedOptions = [...props.selectedOptions, selectedId];
      }
    }
    props.setSelectedOptions(updatedOptions);
    updateChecked(selectedId);
  };

  const updateChecked = (id: number) => {
    if (props.correct === 1) {
      const newChecked = checked.map(() => false);
      newChecked[id] = !checked[id];
      setChecked(newChecked);
    } else {
      const newChecked = checked;
      newChecked[id] = !checked[id];
      setChecked(newChecked);
    }
  };

  return (
    <section className={classes.answerQuestionList}>
      {props.options.map((option) => {
        const inputProps = {
          onChange: () => {
            updateSelectedOptions(option.id);
          },
          className: classes.answerQuestionListCheckbox,
          style: {
            margin: "0",
            height: "1.5em",
            width: "1.5em",
          },
          checked:
            checked[option.id] === undefined ? false : checked[option.id],
        };
        return (
          <InputGroup
            key={option.id}
            className={classes.answerQuestionListItem}
          >
            {props.correct === 1
              ? AnswerQuestionListRadio(inputProps)
              : AnswerQuestionListCheckbox(inputProps)}
            <InputGroup.Text
              className={classes.answerQuestionListText}
              onClick={() => {
                updateSelectedOptions(option.id);
              }}
              style={{
                padding: "0.8em",
                fontSize: "1.2em",
              }}
            >
              {option.text}
            </InputGroup.Text>
          </InputGroup>
        );
      })}
    </section>
  );
};

export default AnswerQuestionList;
