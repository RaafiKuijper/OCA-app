import { useState } from "react";

function CreateOptionComponent() {
  const [option, setOption] = useState<string>();
  const [isCorrect, setIsCorrect] = useState();

  return (
    <>
      <div>
        <label>
          option:{" "}
          <input
            type="text"
            placeholder="option"
            value={option}
            onChange={(e) => {
              setOption(e.target.value);
            }}
          />
          <input type="checkbox" checked={isCorrect} />
        </label>
      </div>
    </>
  );
}

export default CreateOptionComponent;
