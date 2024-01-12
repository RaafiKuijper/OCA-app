import OptionPropsInterface from "./interfaces/OptionPropsInterface";

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
        <label>
          option:{" "}
          <input type="text" placeholder="option" onChange={updateText} />
          <input type="checkbox" onChange={updateIsCorrect} />
        </label>
      </div>
    </>
  );
}

export default CreateOptionComponent;

/*
export default interface OptionPropsInterface {
  index: number;
  text: string[];
  setText: (text: string[]) => void;
  isCorrect: boolean[];
  setIsCorrect: (isCorrect: boolean[]) => void;
}
*/
