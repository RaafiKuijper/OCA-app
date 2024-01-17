import { Form } from "react-bootstrap";
import FragmentProps from "./interfaces/FragmentProps";

function CreateOptionComponent(props: FragmentProps) {
  const updateText = (e: React.ChangeEvent<HTMLInputElement>) => {
    const currentText = props.text;
    currentText[props.index] = e.target.value;
    props.setText(currentText);
  };

  return (
    <>
      <div>
        <Form.Label>
          fragment {props.index + 1}:
          <Form.Control 
            as="textarea"
            placeholder="fragment"
            onChange={updateText}
          />
        </Form.Label>
      </div>
    </>
  );
}

export default CreateOptionComponent;
