import { Option } from "../question/questionModels";

const AnswerQuestionList = (props: { options: Option[] }) => {
  return (
    <>
      <ol>
        {props.options.map((option) => (
          <li key={option.id}>{option.text}</li>
        ))}
      </ol>
    </>
  );
};

export default AnswerQuestionList;
