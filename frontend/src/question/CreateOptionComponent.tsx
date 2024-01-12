import { useState } from "react";

function CreateOptionComponent() {
  const [option, setOption] = useState<string>();
  const [isCorrect, setIsCorrect] = useState<boolean>(false);

  return (
    <>
      <div>
        <label>
          option:{" "}
          <input
            type="text"
            placeholder="option"
            onChange={(e) => {
              setOption(e.target.value);
            }}
          />
          <input type="checkbox" checked={isCorrect} onChange={() => setIsCorrect(!isCorrect)}/>
        </label>
      </div>
    </>
  );
}

export default CreateOptionComponent;
