import { Form } from "react-bootstrap";
import OptionPropsInterface from "./interfaces/OptionPropsInterface";
import classes from "../styles/create-question.module.css";

function CreateOptionComponent(props: OptionPropsInterface) {
  const updateText = (e: React.ChangeEvent<HTMLInputElement>) => {
    const currentText = props.text;
    currentText[props.index] = e.target.value;
    props.setText(currentText);
    if (props.index >= props.isCorrect.length) {
      props.isCorrect[props.index] = false;
    }
  };

  const updateIsCorrect = () => {
    const currentIsCorrect = props.isCorrect;
    currentIsCorrect[props.index] = !currentIsCorrect[props.index];
    props.setIsCorrect(currentIsCorrect);
  };

  return (
    <>
      <div>
        <Form.Label className={classes.createQuestionFormOption}>
          <div>option {props.index + 1}:</div>
          <div>is correct?</div>
        </Form.Label>
        <div className={classes.createQuestionFormIsCorrectButton}>
          <Form.Control
            type="text"
            placeholder="option"
            onChange={updateText}
          />
          <Form.Check type="checkbox" onChange={updateIsCorrect} />
        </div>
      </div>
    </>
  );
}

export default CreateOptionComponent;
