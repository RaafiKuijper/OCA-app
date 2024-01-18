import { Form, InputGroup } from "react-bootstrap";
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
    <InputGroup className={classes.createQuestionFormOptions}>
      <div>
        <InputGroup.Text className={classes.createQuestionFormOption}>
          <div>Option {props.index + 1}:</div>
        </InputGroup.Text>
        <Form.Control
          style={{
            paddingBottom: "5%",
          }}
          type="text"
          placeholder="option"
          onChange={updateText}
        />
      </div>
      <div>
        <div className={classes.createQuestionFormIsCorrectButton}>
          <InputGroup.Text>is correct?</InputGroup.Text>
          <InputGroup.Checkbox
            style={{
              marginLeft: "30%",
              width: "1.5em",
              height: "1.5em",
            }}
            onChange={updateIsCorrect}
          />
        </div>
      </div>
    </InputGroup>
  );
}

export default CreateOptionComponent;
